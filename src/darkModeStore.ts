import { create } from 'zustand';

interface DarkModeState {
  dark: boolean;
  toggle: () => void;
  setDark: (value: boolean) => void;
}

function getInitialDarkMode(): boolean {
  if (typeof window !== 'undefined') {
    const stored = localStorage.getItem('darkMode');
    if (stored !== null) return stored === 'true';
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  }
  return false;
}

function applyTheme(dark: boolean) {
  if (typeof window !== 'undefined') {
    document.documentElement.setAttribute('data-theme', dark ? 'dark' : 'light');
    localStorage.setItem('darkMode', dark ? 'true' : 'false');
  }
}

export const useDarkModeStore = create<DarkModeState>((set) => ({
  dark: getInitialDarkMode(),
  toggle: () => {
    set((state) => {
      const newDark = !state.dark;
      applyTheme(newDark);
      return { dark: newDark };
    });
  },
  setDark: (value: boolean) => {
    set(() => {
      applyTheme(value);
      return { dark: value };
    });
  },
}));

// Sincronizar con cambios externos (otras pestañas)
if (typeof window !== 'undefined') {
  window.addEventListener('storage', (e) => {
    if (e.key === 'darkMode') {
      const value = e.newValue === 'true';
      useDarkModeStore.getState().setDark(value);
    }
  });
} 