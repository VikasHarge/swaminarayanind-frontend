import classNames from "classnames";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import MainLayout from "@/components/RootLayout";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Hone | SwamiNarayanInd | corrugated box manufacturers",
  description: "Box Manufacturing in mumbai",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
      </head>
      <body className={classNames(inter.className, "text-text")}>
        <MainLayout>{children}</MainLayout>
      </body>
    </html>
  );
}
