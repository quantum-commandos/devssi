import type { Metadata } from "next";
// import { Inter, Yanone_Kaffeesatz } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";

// const inter = Inter({ subsets: ["latin"] });
// const yanone_kaffeesatz = Yanone_Kaffeesatz({
//   subsets: ["latin"],
//   weight: ["400", "700"],
// });

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
    <html lang="en" data-theme="dark">
      <body>
        <div className="container mx-auto">
          <Header />
          {children}
        </div>
      </body>
    </html>
  );
}
