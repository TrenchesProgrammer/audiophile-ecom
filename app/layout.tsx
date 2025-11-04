import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";
import { ConvexClientProvider } from "./ConvexClientProvider";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";


const manrope = Manrope({
  subsets: ["latin"],
  weight: ["400", "700", "800"],
});

export const metadata: Metadata = {
  title: "Audiophile E-commerce",
  description: "Audiophile E-commerce website built with Next.js and Convex",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${manrope.className} antialiased`}
      >
        <ConvexClientProvider>
          <Navbar />
          {children}
          <Footer/>
        </ConvexClientProvider>
      </body>
    </html>
  );
}
