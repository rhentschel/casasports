import { NextResponse, type NextRequest } from "next/server";
import { getPayload } from "payload";
import config from "@payload-config";

export const dynamic = "force-dynamic";

function isAuthorized(request: NextRequest): boolean {
  const token = request.headers.get("x-reset-token");
  if (!token) return false;
  const resetToken = process.env.ADMIN_RESET_TOKEN;
  const payloadSecret = process.env.PAYLOAD_SECRET;
  return (
    (!!resetToken && token === resetToken) ||
    (!!payloadSecret && token === payloadSecret)
  );
}

export async function POST(request: NextRequest) {
  if (!isAuthorized(request)) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  let body: { email?: string; password?: string; name?: string };
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  const { email, password, name } = body;
  if (!email || !password) {
    return NextResponse.json(
      { error: "email und password erforderlich" },
      { status: 400 }
    );
  }
  if (password.length < 8) {
    return NextResponse.json(
      { error: "Passwort muss mindestens 8 Zeichen haben" },
      { status: 400 }
    );
  }

  try {
    const payload = await getPayload({ config });

    const existing = await payload.find({
      collection: "users",
      where: { email: { equals: email } },
      limit: 1,
    });

    if (existing.docs.length > 0) {
      const userId = existing.docs[0].id;
      await payload.update({
        collection: "users",
        id: userId,
        data: { password },
      });
      return NextResponse.json({
        ok: true,
        action: "password-reset",
        email,
      });
    }

    await payload.create({
      collection: "users",
      data: {
        email,
        password,
        name: name || email.split("@")[0],
        role: "admin",
      },
    });
    return NextResponse.json({
      ok: true,
      action: "user-created",
      email,
    });
  } catch (error) {
    const message = error instanceof Error ? error.message : "Unknown error";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}

export async function GET(request: NextRequest) {
  if (!isAuthorized(request)) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const payload = await getPayload({ config });
  const users = await payload.find({
    collection: "users",
    limit: 100,
  });
  return NextResponse.json({
    count: users.totalDocs,
    users: users.docs.map((u: any) => ({ email: u.email, name: u.name, role: u.role })),
  });
}
