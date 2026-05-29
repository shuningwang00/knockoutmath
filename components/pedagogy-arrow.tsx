import Image from "next/image";

type PedagogyArrowProps = {
  direction: "down-right" | "down-left";
};

export default function PedagogyArrow({ direction }: PedagogyArrowProps) {
  return (
    <Image
      src="/pedagogy/arrow.png"
      alt=""
      width={123}
      height={90}
      className={`h-14 w-auto shrink-0 sm:h-16 ${
        direction === "down-right" ? "-scale-x-100" : ""
      }`}
    />
  );
}
