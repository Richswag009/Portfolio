import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Header from "@/components/Header/Header";
import { ContactIcons, ContactIconsMobile } from "@/components";
import { useEffect, useState } from "react";

export default function App({ Component, pageProps }: AppProps) {
  const [screenSize, setScreenSize] = useState("");

  const handleResize = () => {
    const size = window.screen.width;
    size < 768 ? setScreenSize("small") : setScreenSize("large");
  };

  useEffect(() => {
    window.onload = () => handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [screenSize]);
  return (
    <>
      <Header />
      <Component {...pageProps} />
      {screenSize == "small" ? <ContactIconsMobile /> : <ContactIcons />}
    </>
  );
}
