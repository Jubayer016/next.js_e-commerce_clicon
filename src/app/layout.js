import { Public_Sans } from "next/font/google";
import "./globals.css";

const public_sans = Public_Sans({
  variable: "--font-public-sans",
  subsets: ["latin","latin-ext"],
});


export const metadata = {
  title: "Clicon Ecommerce",
  description: "Clicon Ecommerce app with Next.js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${public_sans.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
