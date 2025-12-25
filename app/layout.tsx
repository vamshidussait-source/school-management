import type { Metadata } from "next";
import { Inter, DM_Mono } from "next/font/google";
import { AuthProvider } from "@/hooks/useAuth";
import { Toaster } from "sonner";
import "@/styles/globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-inter",
  display: "swap",
});

const dmMono = DM_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-dm-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "EduManage – School Management System",
  description:
    "A comprehensive school management interface offering tailored dashboards and tools for admins, teachers, students, and parents to streamline academic and administrative tasks.",
  robots: { index: false, follow: false },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${dmMono.variable}`}>
      <body className="h-full" style={{ fontFamily: "var(--font-inter), sans-serif" }}>
        <AuthProvider>
          {children}
          <Toaster richColors position="top-right" />
        </AuthProvider>
      </body>
    </html>
  );
}
