import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Sidebar from "@/src/components/Sidebar";
import "./globals.css";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Camelot Wiki",
  description: "O banco de dados do Véu de Bruma e das 10 Grandes Casas",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${inter.className} flex bg-noise`}>
        <Sidebar />

        <main className="flex-1 ml-64 min-h-screen p-10">{children}</main>
      </body>
    </html>
  );
}
