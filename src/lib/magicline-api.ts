import {
  MAGICLINE_CONFIG,
  type RateBundle,
  type IbanValidation,
} from "@/data/magicline";

const { baseUrl, studioId } = MAGICLINE_CONFIG;

export async function fetchRateBundles(): Promise<RateBundle[]> {
  const res = await fetch(
    `${baseUrl}/connect/v1/rate-bundle?studioId=${studioId}`,
    { headers: { Accept: "application/json" } }
  );
  if (!res.ok) {
    throw new Error(`Rate bundles fetch failed: ${res.status}`);
  }
  return res.json();
}

export async function validateIban(iban: string): Promise<IbanValidation> {
  const cleaned = iban.replace(/\s/g, "");
  const res = await fetch(
    `${baseUrl}/connect/v1/bankaccount?iban=${encodeURIComponent(cleaned)}`,
    { headers: { Accept: "application/json" } }
  );
  if (!res.ok) {
    throw new Error(`IBAN validation failed: ${res.status}`);
  }
  return res.json();
}

export async function fetchSepaAgreement(): Promise<string> {
  const res = await fetch(
    `${baseUrl}/connect/v1/studio/${studioId}/sepa/agreement`,
    { headers: { Accept: "application/json" } }
  );
  if (!res.ok) {
    throw new Error(`SEPA agreement fetch failed: ${res.status}`);
  }
  const text = await res.json();
  return typeof text === "string" ? text : String(text);
}

export async function fetchCommunicationSettings(): Promise<unknown[]> {
  const res = await fetch(
    `${baseUrl}/connect/v1/studio/${studioId}/communication-settings`,
    { headers: { Accept: "application/json" } }
  );
  if (!res.ok) {
    throw new Error(`Communication settings fetch failed: ${res.status}`);
  }
  return res.json();
}

export async function createContractPreview(
  payload: Record<string, unknown>
): Promise<unknown> {
  const res = await fetch(`${baseUrl}/connect/v2/preview`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify(payload),
  });
  if (!res.ok) {
    const body = await res.text();
    throw new Error(`Contract preview failed: ${res.status} - ${body}`);
  }
  return res.json();
}

export async function submitContract(
  payload: Record<string, unknown>
): Promise<unknown> {
  const res = await fetch(`${baseUrl}/connect/v1/rate-bundle`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify(payload),
  });
  if (!res.ok) {
    const body = await res.text();
    throw new Error(`Contract submission failed: ${res.status} - ${body}`);
  }
  return res.json();
}
