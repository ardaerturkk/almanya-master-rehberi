export function readChecked(storageKey: string): string[] {
  if (typeof window === "undefined") return [];
  try {
    const raw = window.localStorage.getItem(`amr-checklist:${storageKey}`);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

export function writeChecked(storageKey: string, ids: string[]): void {
  if (typeof window === "undefined") return;
  try {
    window.localStorage.setItem(`amr-checklist:${storageKey}`, JSON.stringify(ids));
  } catch {
    // localStorage unavailable (private mode, blocked, etc.) — fail silently
  }
}
