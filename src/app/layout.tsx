import type { Metadata } from "next";
import { Poppins, Geist, Geist_Mono } from "next/font/google";
import StyledComponentsRegistry from "../styles/registry";
import ThemeProvider from "../styles/ThemeProvider";
import Header from "@/components/Header";

// Configuração da fonte Poppins
const poppins = Poppins({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--font-poppins',
  display: 'swap',
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Starsoft Frontend Challenge",
  description: "A frontend challenge for Starsoft",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} ${geistSans.variable} ${geistMono.variable}`}>
        <StyledComponentsRegistry>
          <ThemeProvider>
            <Header cartItemsCount={0} />
            {children}
          </ThemeProvider>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
