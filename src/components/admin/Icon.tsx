import Image from "next/image"

export function Icon() {
  return (
    <Image
      src="/images/casa-sports-logo.webp"
      alt="Casa Sports"
      width={120}
      height={34}
      style={{ objectFit: "contain" }}
    />
  )
}
