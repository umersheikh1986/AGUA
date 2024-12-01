import { HeroSection } from "../components/HeroSection";
import { ProfitAbleLoan } from "../components/ProfitAbleLoan";
import { ThreeCard } from "../components/ThreeCard";
import GettingCards from "../components/GettingCards";
import Image from "next/image";
import Navbar from "../components/Navbar";
import  Footer  from "../components/Footer/Footer";
import { Youtube } from "../components/Youtube";
import Participate from "../components/Participate";
import Partners from "../components/Partners";
import Members from "../components/Members";
import Followus from "../components/Followus";
import Stepper from "../components/stepper";
import Timeline from "../components/timeline";
import Link from "next/link";
import Chart from "../components/Chart";
import Distribution from "../components/Distribution";
import RoadmapSection from "../components/Distribution";
import CanvasScene from "../components/Animate";
// import localFont from "next/font/local";

// const geistSans = localFont({
//   src: "./fonts/GeistVF.woff",
//   variable: "--font-geist-sans",
//   weight: "100 900",
// });
// const geistMono = localFont({
//   src: "./fonts/GeistMonoVF.woff",
//   variable: "--font-geist-mono",
//   weight: "100 900",
// });

export default function Home() {
  return (
    <>
      <main
      className="overflow-hidden gradient-animation"
        // style={{
        //   background: "linear-gradient(135deg, #000000 50%, #a68b30 100%)",
        // }}
        //style={{ background: 'linear-gradient(45deg, hsla(195, 2%, 59%, 1) 0%, hsla(0, 0%, 0%, 1) 69%)' }}
        //style={{ background: 'linear-gradient(45deg, hsla(47, 42%, 21%, 1) 26%, hsla(0, 0%, 0%, 1) 69%)' }} 
      >
        <style jsx>{`
  .gradient-animation {
    animation: gradientChange 2s infinite;
  }

  @keyframes gradientChange {
    0% {
      background: linear-gradient(45deg, hsla(47, 42%, 21%, 1) 26%, hsla(0, 0%, 0%, 1) 69%);
    }
    50% {
      background: linear-gradient(45deg, hsla(195, 2%, 59%, 1) 0%, hsla(0, 0%, 0%, 1) 69%);
    }
    100% {
      background: linear-gradient(45deg, hsla(47, 42%, 21%, 1) 26%, hsla(0, 0%, 0%, 1) 69%);
    }
  }
`}</style>
        <Navbar />
        <CanvasScene />
        <HeroSection />
        <CanvasScene />
        <ThreeCard />
        <CanvasScene />
    
      </main>
      <main className="gradient-animation">
      <style jsx>{`
  .gradient-animation {
    animation: gradientChange 2s infinite;
  }

  @keyframes gradientChange {
    0% {
      background: linear-gradient(45deg, hsla(47, 42%, 21%, 1) 26%, hsla(0, 0%, 0%, 1) 69%);
    }
    50% {
      background: linear-gradient(45deg, hsla(195, 2%, 59%, 1) 0%, hsla(0, 0%, 0%, 1) 69%);
    }
    100% {
      background: linear-gradient(45deg, hsla(47, 42%, 21%, 1) 26%, hsla(0, 0%, 0%, 1) 69%);
    }
  }
`}</style>
      <CanvasScene />
      <Youtube />
      <CanvasScene />
      {/* <Distribution /> */}
      {/* <Timeline /> */}
      <Stepper />
      <CanvasScene />
        <Chart />
        <CanvasScene />
        <Members />
        <CanvasScene />
        <Partners />
        <CanvasScene />
        
      </main>
      <main
        // style={{
        //   background:
        //     "radial-gradient(circle at   70% 10%, #000000 49%, #a68b30 100%)",
        //   backgroundAttachment:
        //     "linear-gradient(135deg, #000000 65%, #a68b30 100%)",
        // }}
        className="overflow-x-hidden bg-[url('https://cdn.jevelin.shufflehound.com/crypto/wp-content/uploads/sites/19/2018/04/Rectangle-922-copy.jpg')]"
      >
          <style jsx>{`
  .gradient-animation {
    animation: gradientChange 2s infinite;
  }

  @keyframes gradientChange {
    0% {
      background: linear-gradient(45deg, hsla(47, 42%, 21%, 1) 26%, hsla(0, 0%, 0%, 1) 69%);
    }
    50% {
      background: linear-gradient(45deg, hsla(195, 2%, 59%, 1) 0%, hsla(0, 0%, 0%, 1) 69%);
    }
    100% {
      background: linear-gradient(45deg, hsla(47, 42%, 21%, 1) 26%, hsla(0, 0%, 0%, 1) 69%);
    }
  }
`}</style>
        {/* <ProfitAbleLoan /> */}
        {/* <GettingCards /> */}
        <Followus />
        {/* <Participate /> */}
      </main>
      <main>
        <Footer />
      </main>

      
    </>
  )
}