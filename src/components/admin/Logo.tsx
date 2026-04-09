import Image from "next/image"

export function Logo() {
  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "16px" }}>
      <Image
        src="/images/casa-sports-logo.webp"
        alt="Casa Sports"
        width={200}
        height={56}
        style={{ objectFit: "contain" }}
      />
    </div>
  )
}
