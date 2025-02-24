import React from "react";
import Header from "./header/Header";
import Footer from "./footer/Footer";
import HotlineButton from "@/ui/HotlineButton";

function Layout({ children }) {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
      <HotlineButton />
    </>
  );
}

export default Layout;
