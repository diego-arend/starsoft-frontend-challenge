import type { Metadata, Viewport } from "next";
import { Poppins, IBM_Plex_Sans } from "next/font/google";
import "./globals.css";
import AppLayout from "./appLayout";

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

// Metadata
export const metadata: Metadata = {
  title: "Starsoft Frontend Challenge",
  description: "A frontend challenge for Starsoft",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1, 
  userScalable: false, 
  viewportFit: "cover", 
  themeColor: "#171717", 
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className={`${poppins.variable} ${ibmPlexSans.variable}`}>
      <body>
        <AppLayout>{children}</AppLayout>
      </body>
    </html>
  );
}
