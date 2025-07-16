import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/context/ThemeContext";
import Header from "../../Components/Header/Header";
import Layout from "../../Components/Layout/Layout";
import Footer from "../../Components/Footer/Footer";
import LanguageWrapper from "@/context/LanguageWrapper";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "React02 Class Assignments",
  description: "Week01 and Week02 class exercises for React02",
};

export default function RootLayout({ children }) {
  return (
    <html>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <ThemeProvider>
          <LanguageWrapper>
            <Header />
            <Layout>{children}</Layout>
          </LanguageWrapper>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
