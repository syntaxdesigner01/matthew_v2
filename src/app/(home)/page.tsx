"use client";
import { useEffect, useState } from "react";
import Loader from "@/components/Loader";
import Navbar from "@/components/Navbar";
import Header from "@/components/Header";
import Services from "@/components/Services";
import AboutUs from "@/components/AboutUs";

export default function page() {
  const [loading, setLoader] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setLoader(false);
    }, 3000);
  }, []);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <>
          <header>
            <Navbar />
            <Header />
          </header>

          <main className="px-10 my-20">
            <Services />

           <AboutUs/>

          
          </main>
        </>
      )}
    </>
  );
}
