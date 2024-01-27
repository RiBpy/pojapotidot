import { Poppins } from "next/font/google";
import Navbar from "@/components/navbar/Navbar"
import "./globals.css";

const poppins = Poppins({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-poppins',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
});



export const metadata = {
  title: "Projapoti",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className= {`${poppins.className}`}><Navbar/><div className="pt-20">{children}</div></body>
    </html>
  );
}
