import React from "react";
import Header from "./header/Header";
import Footer from "./footer/Footer";

function Layout({ children }) {
  return (
    <div>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
}

export default Layout;
