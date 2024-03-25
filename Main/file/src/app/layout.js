import "./font.css";
import "./globals.scss";
import BootstrapInit from "@/elements/BootstrapInit";

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <link rel="icon" href="/favicon.ico" sizes="any" />
      <BootstrapInit />
      <body suppressHydrationWarning={true}>{children}</body>
    </html>
  );
}