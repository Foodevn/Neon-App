import type {Metadata} from "next";
import {Inter} from "next/font/google";
import "./globals.css";
import {ConvexClientProvider} from "@/providers/convex-client-provides";
import {Toaster} from "@/components/ui/sonner";
import {ModalProvider} from "@/providers/modal-provider";
import {Suspense} from "react";
import {Loading} from "@components/Auth/loading";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Neon app",
    description: "team work energetic",
    icons: {
        icon: '/logo.svg', // hoặc .ico
    },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <Suspense fallback={<Loading/>}>
        <ConvexClientProvider>
          {children}
          <Toaster />
          <ModalProvider />
        </ConvexClientProvider>
      </Suspense>
      </body>
    </html>
  );
}
