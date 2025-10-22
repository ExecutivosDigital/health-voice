import { Header } from "@/components/ui/header";
import { Sidebar } from "@/components/ui/sidebar";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header />
      <Sidebar />
      {children}
    </>
  );
}
