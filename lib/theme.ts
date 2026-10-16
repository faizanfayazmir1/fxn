export type Theme = "dark" | "light";

export const THEME_KEY = "fxn-theme";

/** Runs before paint (inlined in <head>) so there's no flash of the wrong theme. */
export const themeInitScript = `(function(){try{var t=localStorage.getItem("${THEME_KEY}");if(!t){t=window.matchMedia("(prefers-color-scheme: light)").matches?"light":"dark"}if(t==="light")document.documentElement.classList.add("light")}catch(e){}})();`;

export function getTheme(): Theme {
  if (typeof document === "undefined") return "dark";
  return document.documentElement.classList.contains("light") ? "light" : "dark";
}

export function setTheme(t: Theme) {
  document.documentElement.classList.toggle("light", t === "light");
  try {
    localStorage.setItem(THEME_KEY, t);
  } catch {
    /* storage unavailable — theme still applies for this visit */
  }
  window.dispatchEvent(new CustomEvent("themechange", { detail: t }));
}

export function toggleTheme() {
  setTheme(getTheme() === "light" ? "dark" : "light");
}
