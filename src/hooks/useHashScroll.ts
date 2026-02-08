import { useEffect } from "react";

/**
 * Scrolls to the element matching the URL hash after React has rendered.
 * Browsers attempt hash scrolling before React hydrates, so this ensures
 * the target element exists before scrolling.
 */
export function useHashScroll() {
  useEffect(() => {
    const hash = window.location.hash;
    if (!hash) return;

    // Small delay to ensure all sections are rendered
    const timer = setTimeout(() => {
      const id = hash.replace("#", "");
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }, 300);

    return () => clearTimeout(timer);
  }, []);
}
