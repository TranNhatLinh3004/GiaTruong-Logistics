import React from "react";
import Header from "./header/Header";
import Footer from "./footer/Footer";
import HotlineButton from "@/ui/HotlineButton";
import ScrollButton from "@/ui/ScrollButton";

function Layout({ children }) {
  return (
    <>
      <Header />
      <main>{children}</main>
      <HotlineButton />
      <ScrollButton />
      <Footer />
    </>
  );
}

export default Layout;
