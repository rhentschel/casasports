export const MAGICLINE_CONFIG = {
  baseUrl: "https://casasports.api.magicline.com",
  studioId: 2,
} as const;

// --- API Response Types ---

export interface RateBundleFlatFee {
  name: string;
  price: number;
  paymentFrequencyType: "NON_RECURRING" | "RECURRING" | "MONTH_DAY";
  paymentFrequencyId?: number | null;
  isStarterPackage: boolean;
}

export interface RateBundleOptionalModule {
  id: number;
  name: string;
  description: string;
  price: number;
  paymentFrequencyValue: number;
  paymentFrequencyUnit: string;
  paymentFrequencyType: "RECURRING" | "NON_RECURRING";
}

export interface ContractVolumeInfo {
  totalContractVolume: number;
  averagePaymentVolumePerMonth: number;
  averagePaymentVolumePerPaymentFrequencyTerm: number;
}

export interface RateBundleTerm {
  id: number;
  defaultContractStartDate: string;
  termValue: number;
  termUnit: "MONTH" | "YEAR";
  price: number;
  flatFees: RateBundleFlatFee[];
  optionalModules: RateBundleOptionalModule[];
  contractVolumeInformation: ContractVolumeInfo;
  cancellationPeriod: number;
  cancellationPeriodUnit: string;
  extensionFixedTerm: number;
  extensionFixedTermUnit: string;
}

export interface RateBundle {
  id: number;
  name: string;
  description: string;
  terms: RateBundleTerm[];
  allowedPaymentChoices: string[];
  onlinePaymentType: string;
  contractSignaturesRequired: boolean;
  contractTextBlocks: unknown[];
}

export interface IbanValidation {
  validIban: boolean;
  supportsSepaDirectDebit: boolean;
  bic: string;
  bankName: string;
  bankCity: string;
  errorMessage: string | null;
}

export interface SepaAgreement {
  text: string;
}

// --- Wizard Types ---

export type WizardStep =
  | "plan"
  | "personal"
  | "payment"
  | "review"
  | "success";

export const WIZARD_STEPS: { key: WizardStep; label: string }[] = [
  { key: "plan", label: "Tarif" },
  { key: "personal", label: "Daten" },
  { key: "payment", label: "Zahlung" },
  { key: "review", label: "Abschluss" },
  { key: "success", label: "Fertig" },
];

export type Gender = "MALE" | "FEMALE" | "OTHER";

export interface PersonalData {
  gender: Gender | "";
  firstName: string;
  lastName: string;
  dateOfBirth: string;
  email: string;
  phone: string;
  street: string;
  houseNumber: string;
  zipCode: string;
  city: string;
  countryCode: string;
}

export interface PaymentData {
  accountHolder: string;
  iban: string;
  bic: string;
  bankName: string;
}

export const INITIAL_PERSONAL_DATA: PersonalData = {
  gender: "",
  firstName: "",
  lastName: "",
  dateOfBirth: "",
  email: "",
  phone: "",
  street: "",
  houseNumber: "",
  zipCode: "",
  city: "",
  countryCode: "DE",
};

export const INITIAL_PAYMENT_DATA: PaymentData = {
  accountHolder: "",
  iban: "",
  bic: "",
  bankName: "",
};
