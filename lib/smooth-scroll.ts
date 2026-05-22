import type Lenis from "lenis";

let instance: Lenis | null = null;

export function setLenis(lenis: Lenis | null) {
  instance = lenis;
}

export function getLenis(): Lenis | null {
  return instance;
}

export function scrollToId(id: string, offset = 0) {
  const target = typeof document !== "undefined" ? document.getElementById(id) : null;
  if (!target) return;
  if (instance) {
    instance.scrollTo(target, { offset });
    return;
  }
  target.scrollIntoView({ behavior: "smooth", block: "start" });
}
