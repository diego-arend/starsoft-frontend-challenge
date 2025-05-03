import type { Metadata, Viewport } from "next";
import { Poppins, IBM_Plex_Sans } from "next/font/google";
import StyledComponentsRegistry from "../styles/registry";
import ThemeProvider from "../styles/ThemeProvider";
import QueryProvider from "@/providers/QueryProvider";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";

// Metadata
const poppins = Poppins({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--font-poppins',
  display: 'swap',
});

const ibmPlexSans = IBM_Plex_Sans({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--font-ibm-plex-sans',
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Starsoft Frontend Challenge",
  description: "A frontend challenge for Starsoft",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${poppins.variable} ${ibmPlexSans.variable}`}>
      <body>
        <StyledComponentsRegistry>
          <QueryProvider>
            <ThemeProvider>
              <div className="layout-wrapper">
                <Header cartCount={3} />
                <main>{children}</main>
                <Footer />
              </div>
            </ThemeProvider>
          </QueryProvider>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
