import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Everton Ceciliano | Front-end Developer",
  description: "Desenvolvedor Front-end especializado em React.js, Next.js e TypeScript. Experiência em e-commerce e desenvolvimento web moderno.",
  icons: {
    icon: [
      {
        url: "/favicon.svg",
        type: "image/svg+xml"
      }
    ]
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body className={`${inter.className} bg-black text-white antialiased`}>
        <Navigation />
        {children}
      </body>
    </html>
  );
}
