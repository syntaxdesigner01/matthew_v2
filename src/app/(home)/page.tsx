"use client";
import { useEffect, useState } from "react";
import Loader from "@/components/HomeComponents/Loader";
import Navbar from "@/components/HomeComponents/Navbar";
import Header from "@/components/HomeComponents/Header";
import Services from "@/components/HomeComponents/Services";
import AboutUs from "@/components/HomeComponents/AboutUs";
import Review from "@/components/HomeComponents/Review";
import Team from "@/components/HomeComponents/Team";
import Footer from "@/components/Global/Footer";

export default function Home() {
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

          <main className="px-4 lg:px-10 my-20">
            <Services />

            <AboutUs />
            <Review />

            <Team />

          </main>
          <Footer />
        </>
      )}
    </>
  );
}
