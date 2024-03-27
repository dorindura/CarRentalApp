'use client';
import React from "react";
import Navbar from "@/components/navbar/navbar";
import Container from "@/components/container/container";
import Footer from "@/components/footer/footer";
import DetailsContainer from "@/components/detailsContainer/detailsContainer";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col mx-12">
      <title>Rent The Best Cars</title>
      <div className="sticky top-0 navbar-bg-color">
      <div className="py-4 px-8"><Navbar/></div>
      <hr />
      </div>
      <div><Container/></div>
      {/* <div><DetailsContainer/></div> */}
      <Footer/>
    </main>
  );
}
