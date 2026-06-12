import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Christopher's Fine Jewelers",
  description: "Handcrafted fine jewelry for every occasion",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
