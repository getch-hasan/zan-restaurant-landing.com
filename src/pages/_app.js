import { LayoutPageWrapper } from "@/components/layout";
import "@/styles/globals.css";
import 'typeface-open-sans';
import 'typeface-bubblegum-sans';
export default function App({ Component, pageProps }) {
  return (<LayoutPageWrapper>
    <Component {...pageProps} />
  </LayoutPageWrapper>)
}
