import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Sidebar from "@/components/Sidebar";
import Footer from "@/components/Footer";
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
      <body
        className={`${inter.className} bg-noise min-h-screen text-gray-300`}
      >
        {/* CONTAINER PAI (Flex para Desktop, Column para Mobile) */}
        <div className="flex flex-col lg:flex-row min-h-screen">
          {/* SIDEBAR - z-50 para Desktop, fixed para Mobile */}
          <Sidebar />

          {/* ÁREA DE CONTEÚDO PRINCIPAL */}
          {/* ml-0 no mobile, ml-64 no desktop para casar com a sidebar */}
          <main className="flex-1 flex flex-col min-w-0 ml-0 lg:ml-64 w-full max-w-full">
            {/* O padding vertical foi reduzido para evitar clarões muito grandes no rodapé */}
            <div className="flex-1 px-4 py-8 md:px-10 lg:px-12 w-full max-w-full overflow-x-hidden">
              {children}
            </div>

            {/* Footer agora colado na margem da Sidebar */}
            <Footer />
          </main>
        </div>
      </body>
    </html>
  );
}
