import Image from "next/image";

export type LogoVariant = "full-light" | "full-dark" | "icon-light" | "icon-dark";

type LogoProps = {
  variant?: LogoVariant;
  className?: string;
  priority?: boolean;
};

const logoConfig: Record<
  LogoVariant,
  { src: string; width: number; height: number; alt: string }
> = {
  "full-light": {
    src: "/logo-full-light.jpg",
    width: 220,
    height: 73,
    alt: "Knockout Math",
  },
  "full-dark": {
    src: "/logo-full-dark.png",
    width: 1024,
    height: 339,
    alt: "Knockout Math",
  },
  "icon-light": {
    src: "/logo-icon-light.png",
    width: 44,
    height: 44,
    alt: "Knockout Math",
  },
  "icon-dark": {
    src: "/logo-icon-dark.png",
    width: 44,
    height: 44,
    alt: "Knockout Math",
  },
};

export default function Logo({
  variant = "full-light",
  className = "",
  priority = false,
}: LogoProps) {
  const { src, width, height, alt } = logoConfig[variant];

  return (
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      className={className}
      priority={priority}
    />
  );
}
