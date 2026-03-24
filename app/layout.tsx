import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Sidebar from "@/src/components/Sidebar";
import "./globals.css";
import Footer from "@/src/components/Footer";
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

        {/* Removi o p-10 daqui para o Footer poder respirar */}
        <main className="flex-1 ml-64 min-h-screen flex flex-col">
          {/* O p-10 agora fica apenas no conteúdo (children) */}
          <div className="flex-1 p-10">{children}</div>

          {/* O Footer agora consegue encostar na Sidebar e nas bordas */}
          <Footer />
        </main>
      </body>
    </html>
  );
}
