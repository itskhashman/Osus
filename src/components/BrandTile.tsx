import { assetPath } from "@/lib/assetPath";

export const partnerImageFiles = [
  { id: 1, src: "partner_01.jpeg" },
  { id: 2, src: "partner_02.gif" },
  { id: 3, src: "partner_03.jpeg" },
  { id: 4, src: "partner_04.jpeg" },
  { id: 5, src: "partner_05.png" },
  { id: 6, src: "partner_06.jpeg" },
  { id: 7, src: "partner_07.jpeg" },
  { id: 8, src: "partner_08.jpeg" },
  { id: 9, src: "partner_09.jpeg" },
  { id: 10, src: "partner_10.png" },
  { id: 11, src: "partner_11.jpeg" },
  { id: 12, src: "partner_12.jpeg" },
  { id: 13, src: "partner_13.png" },
  { id: 14, src: "partner_14.png" },
  { id: 15, src: "partner_15.jpeg" },
  { id: 16, src: "partner_16.jpeg" },
  { id: 17, src: "partner_17.png" },
  { id: 18, src: "partner_18.png" },
  { id: 19, src: "partner_19.png" },
  { id: 20, src: "partner_20.jpeg" },
  { id: 21, src: "partner_21.jpeg" },
  { id: 22, src: "partner_22.jpeg" },
  { id: 23, src: "partner_23.png" },
  { id: 24, src: "partner_24.jpeg" },
  { id: 25, src: "partner_25.png" },
  { id: 26, src: "partner_26.jpeg" },
  { id: 27, src: "partner_27.jpeg" },
  { id: 28, src: "partner_28.png" },
  { id: 29, src: "partner_29.png" },
  { id: 30, src: "partner_30.jpeg" },
  { id: 31, src: "partner_31.jpeg" },
  { id: 32, src: "partner_32.png" },
  { id: 33, src: "partner_33.jpeg" },
  { id: 34, src: "partner_34.png" },
  { id: 35, src: "partner_35.jpeg" },
  { id: 36, src: "partner_36.png" },
  { id: 37, src: "partner_37.png" },
  { id: 38, src: "partner_38.png" },
  { id: 39, src: "partner_39.jpeg" },
  { id: 40, src: "partner_40.jpeg" },
  { id: 41, src: "partner_41.png" },
  { id: 42, src: "partner_42.jpeg" },
  { id: 43, src: "partner_43.jpeg" },
  { id: 44, src: "partner_44.png" },
  { id: 45, src: "partner_45.jpeg" },
  { id: 46, src: "partner_46.png" },
  { id: 47, src: "partner_47.png" },
  { id: 48, src: "partner_48.jpeg" },
  { id: 49, src: "partner_49.jpeg" },
  { id: 50, src: "partner_50.jpeg" },
];

export function getPartnerImage(index: number) {
  const partner = partnerImageFiles[index % partnerImageFiles.length];
  return assetPath(`/assets/partners/${partner.src}`);
}

export default function BrandTile({
  name,
  image,
}: {
  name: string;
  image?: string;
}) {
  return (
    <div className="flex h-36 items-center justify-center overflow-hidden rounded-sm border border-slate-200 bg-white px-4 py-3">
      <img
        src={image || assetPath("/assets/osus-logo-clear.png")}
        alt={name}
        className="h-full max-h-30 w-auto max-w-full object-contain"
      />
    </div>
  );
}
