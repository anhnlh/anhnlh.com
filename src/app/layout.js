import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/navigation/navbar";
import Footer from "./components/foooter/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "anhnlh - Anh Nguyen",
  description: "Anh Nguyen's portfolio website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
