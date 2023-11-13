import type { Metadata } from "next";
import { Inter, Yanone_Kaffeesatz } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
const yanone_kaffeesatz = Yanone_Kaffeesatz({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "DevsSi",
  description: "Developer SI",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={yanone_kaffeesatz.className}>{children}</body>
    </html>
  );
}
