import { ClerkProvider } from "@clerk/nextjs";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "EtsyForge AI - AI Operating System for Etsy Sellers",
  description: "Create, design, and optimize digital products for Etsy with AI. Generate planners, eBooks, workbooks, and printables in minutes.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider
      appearance={{
        baseTheme: "dark",
        variables: {
          colorPrimary: "#6366f1",
          colorBackground: "#0f172a",
          colorText: "#f8fafc",
          colorInputBackground: "#1e293b",
          colorInputText: "#f8fafc",
          colorShimmer: "#6366f1",
        },
        elements: {
          formButtonPrimary: "bg-gradient-to-r from-indigo-500 to-purple-600 hover:opacity-90",
          card: "bg-slate-900/50 backdrop-blur-xl border border-white/10",
          headerTitle: "text-2xl font-bold text-gradient",
          socialButtonsBlockButton: "bg-slate-800 hover:bg-slate-700 border border-white/10",
          dividerLine: "bg-white/10",
          dividerText: "text-slate-400",
          formFieldLabel: "text-slate-300",
          formFieldInput: "bg-slate-800 border-white/10 text-white placeholder:text-slate-500",
          footerActionLink: "text-indigo-400 hover:text-indigo-300",
        },
      }}
    >
      <html lang="en" className="dark">
        <body className={`${inter.variable} font-sans antialiased`}>
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}