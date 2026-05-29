"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { ComponentProps, MouseEvent } from "react";

function parseHashHref(href: string) {
  const hashIndex = href.indexOf("#");
  if (hashIndex === -1) {
    return { pathname: href, hash: "" };
  }

  return {
    pathname: href.slice(0, hashIndex) || "/",
    hash: href.slice(hashIndex + 1),
  };
}

export function scrollToSection(id: string) {
  const element = document.getElementById(id);
  if (!element) return false;

  element.scrollIntoView({ behavior: "smooth", block: "start" });
  window.history.pushState(null, "", `#${id}`);
  return true;
}

type HashLinkProps = ComponentProps<typeof Link>;

export default function HashLink({ href, onClick, ...props }: HashLinkProps) {
  const pathname = usePathname();
  const hrefString = typeof href === "string" ? href : (href.pathname ?? "");
  const { pathname: targetPath, hash } = parseHashHref(hrefString);

  function handleClick(event: MouseEvent<HTMLAnchorElement>) {
    onClick?.(event);
    if (event.defaultPrevented || !hash) return;

    const isHashOnly = hrefString.startsWith("#");
    const isSamePage = isHashOnly || pathname === targetPath;

    if (isSamePage) {
      event.preventDefault();
      scrollToSection(hash);
    }
  }

  return <Link href={href} onClick={handleClick} {...props} />;
}
