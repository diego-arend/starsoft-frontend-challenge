import type { Metadata, Viewport } from "next";
import { Poppins, Geist, Geist_Mono, IBM_Plex_Sans } from "next/font/google";
import StyledComponentsRegistry from "../styles/registry";
import ThemeProvider from "../styles/ThemeProvider";
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
    <html lang="en" className={`${poppins.variable} ${geistSans.variable} ${geistMono.variable} ${ibmPlexSans.variable}`}>
      <body>
        <StyledComponentsRegistry>
          <ThemeProvider>
            <div className="layout-wrapper">
              <Header />
              <main>{children}</main>
              <Footer />
            </div>
          </ThemeProvider>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
