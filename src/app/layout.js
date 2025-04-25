import Header from "../components/Header";
import "./globals.css";

import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";


export default function RootLayout({ children }) {
  return (
    <html lang="fa" dir="rtl">
      <body>
        <main className="max-w-screen-2xl  mx-auto px-10 ">
          <Header />
          {children}
          <ToastContainer position="top-right" rtl />
        </main>

      </body>
    </html>
  );
}
