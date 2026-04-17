import type { Metadata } from "next";
import { headers as nextHeaders } from "next/headers";
import { redirect } from "next/navigation";
import { getPayload } from "payload";
import config from "@payload-config";
import { DashboardView } from "@/components/admin/DashboardView";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Mitgliederverwaltung",
  robots: { index: false, follow: false },
};

export default async function DashboardPage() {
  const payload = await getPayload({ config });
  const h = await nextHeaders();
  const { user } = await payload.auth({ headers: h });

  if (!user) {
    redirect("/admin");
  }

  return <DashboardView userName={user.name || user.email} />;
}
