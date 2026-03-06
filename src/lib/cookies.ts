/**
 * Reads a browser cookie by name.
 */
function getCookie(name: string): string {
  const match = document.cookie.match(new RegExp(`(?:^|;\\s*)${name}=([^;]*)`));
  return match ? decodeURIComponent(match[1]) : "";
}

export interface PpcClickIds {
  gclid: string;
  li_fat_id: string;
  gbraid: string;
  fbclkid: string;
  msclid: string;
}

const COOKIE_TO_FIELD: [string, keyof PpcClickIds][] = [
  ["user_gclid", "gclid"],
  ["user_li_fat_id", "li_fat_id"],
  ["user_gbraid", "gbraid"],
  ["user_fbclid", "fbclkid"],
  ["user_msclkid", "msclid"],
];

/**
 * Reads PPC click-ID cookies set by GTM and returns them
 * mapped to the corresponding form field names.
 */
export function getPpcClickIds(): PpcClickIds {
  const result = { gclid: "", li_fat_id: "", gbraid: "", fbclkid: "", msclid: "" };
  for (const [cookie, field] of COOKIE_TO_FIELD) {
    result[field] = getCookie(cookie);
  }
  return result;
}
