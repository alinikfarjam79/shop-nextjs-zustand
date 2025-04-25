import Header from "../components/Header";
import "./globals.css";

import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";


export default function RootLayout({ children }) {
  return (
    <html lang="fa" dir="rtl">
      <body >
        <main className="max-w-screen-2xl mx-auto px-10">
          <Header />
          {children}
          <ToastContainer position="top-right" rtl />
          <div className="w-full flex items-center justify-center my-5">
            <p className="text-xl">developed by <a href="https://github.com/alinikfarjam79/shop-nextjs-zustand" target="_blank" className="text-blue-600">AliNikfarjam</a></p>
          </div>
        </main>
      </body>
    </html>
  );
}
