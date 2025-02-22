import { LayoutPageWrapper } from "@/components/layout";
import "@/styles/globals.css";
import 'typeface-open-sans';
import 'typeface-bubblegum-sans';
import { ToastContainer } from "react-toastify";
export default function App({ Component, pageProps }) {
  return (<LayoutPageWrapper>
    <Component {...pageProps} />
    <ToastContainer/>
  </LayoutPageWrapper>)
}
