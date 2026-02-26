import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "CCLIMgh — Corporate Christian Ladies in Marriage",
  description: "A community for married Christian corporate women building godly homes.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
