import type { Metadata } from "next";
import { Poppins } from "next/font/google";

import "@/globals.css";
import { siteconfig } from "@/config/site";
import { cn } from "@/lib/utils";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: {
    default: siteconfig.name,
    template: `%s | ${siteconfig.name}`,
  },
  description: siteconfig.description,
  icons: [
    {
      url: "/logo.svg",
      href: "/logo.svg",
    },
  ],
  applicationName: siteconfig.name,
  authors: [
    {
      name: "Adharsh",
    },
  ],
  creator: "Adharsh",
  publisher: "Adharsh",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn("h-full w-full", poppins)}>{children}</body>
    </html>
  );
}
