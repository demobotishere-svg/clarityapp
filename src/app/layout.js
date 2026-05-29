import "./globals.css";
import { Toaster } from "sonner";

export const metadata = {
  title: "Emergent | Fullstack App",
  description: "From AI clutter to AI clarity. AI is not your enemy. Boss it. Created by emergent.sh",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="App bg-[#F4F4F0] text-[#111111] min-h-screen">
        {children}
        <Toaster position="bottom-right" richColors />
      </body>
    </html>
  );
}
