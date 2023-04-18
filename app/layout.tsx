// MARK: This is where you put the navbar and footer component. This is where you put shared components across the application
import { ThemeProvider } from "@/components/theme-provider";
import Footer from "./(shared)/Footer";
import Navbar from "./(shared)/Navbar";
import "./globals.css";
import { Open_Sans } from "next/font/google";
import { cn } from "@/lib/utils";

const openSans = Open_Sans({
  subsets: ["latin"],
});

// MARK: This is important for SEO. NextJS13 lets you change metadata for each page which is big
export const metadata = {
  title: "Blog AI App",
  description: "Blog built in Next JS that uses AI",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html className={openSans.className} lang="en" suppressHydrationWarning>
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          openSans
        )}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Navbar />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
