// MARK: This is where you put the navbar and footer component. This is where you put shared components across the application
import Footer from "./(shared)/Footer";
import Navbar from "./(shared)/Navbar";
import "./globals.css";
import { Open_Sans } from "next/font/google";

const openSans = Open_Sans({
  subsets: ["latin"],
});

// MARK: This is important for SEO. NextJS13 lets you change metadata for each page which is big
export const metadata = {
  title: "Blog AI App",
  description: "Blog built in Next JS that uses AI",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html className={openSans.className} lang="en">
      <body className="bg-background text-foreground">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
