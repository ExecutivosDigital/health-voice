import { Header } from "@/components/ui/header";
import { Sidebar } from "@/components/ui/sidebar";
import moment from "moment";
import "moment/locale/pt-br";
import { Poppins } from "next/font/google";
import { Toaster } from "react-hot-toast";
import "swiper/css";
import "./globals.css";
moment.locale("pt-br");

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata = {
  title: {
    default: "Health Voice",
  },
  icons: {
    icon: "/icon.png",
  },
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html className="custom-scrollbar">
      <body className={`${poppins.variable} bg-bg-1 text-light`}>
        <Toaster
          containerStyle={{
            bottom: 40,
            left: 20,
            right: 20,
          }}
          position="top-center"
          gutter={10}
          toastOptions={{
            duration: 2000,
          }}
        />
        <Header />
        <Sidebar />
        {children}
      </body>
    </html>
  );
}
