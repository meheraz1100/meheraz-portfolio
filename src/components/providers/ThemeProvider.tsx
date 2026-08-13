"use client";

import { ClientThemeProvider } from "@wrksz/themes/client";

type ThemeProviderProps = {
  children: React.ReactNode;
};

export function ThemeProvider({ children }: ThemeProviderProps) {
  return (
    <ClientThemeProvider
      attribute="class"
      defaultTheme="dark"
      enableSystem={false}
    >
      {children}
    </ClientThemeProvider>
  );
}