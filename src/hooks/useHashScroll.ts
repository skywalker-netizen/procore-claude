import { useEffect } from "react";

/**
 * Scrolls to the element matching the URL hash after React has rendered.
 * Retries multiple times to handle slow mobile rendering.
 */
export function useHashScroll() {
  useEffect(() => {
    const hash = window.location.hash;
    if (!hash) return;

    const id = hash.replace("#", "");
    let attempts = 0;
    const maxAttempts = 10;

    const tryScroll = () => {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
        return;
      }
      attempts++;
      if (attempts < maxAttempts) {
        requestAnimationFrame(() => setTimeout(tryScroll, 200));
      }
    };

    // Initial delay for first paint, then retry if needed
    const timer = setTimeout(tryScroll, 300);

    return () => clearTimeout(timer);
  }, []);
}
