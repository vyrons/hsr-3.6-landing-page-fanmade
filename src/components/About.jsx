import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import AnimatedTitle from "./AnimatedTitle";
gsap.registerPlugin(ScrollTrigger);

const About = () => {
  useGSAP(() => {
    const clipAnimation = gsap.timeline({
      scrollTrigger: {
        trigger: "#clip",
        start: "center center",
        end: "+=800 center",
        scrub: 0.5,
        pin: true,
        pinSpacing: true,
      },
    });

    gsap.set(".mask-clip-path", {
      clipPath: "polygon(25% 0%, 100% 0%, 75% 100%, 0% 100%)",
    });

    clipAnimation.to(".mask-clip-path", {
      clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
      width: "100vw",
      height: "100vh",
      borderRadius: 0,
    });

    
  });

  return (
    <div id="about" className="min-h-screen w-screen">
      <div className="relative mb-8 mt-36 flex flex-col items-center gap-5">
        <h2 className="font-general text-sm uppercase md:text-[10px]">
          {" "}
          Welcome to Honkai Star Rail
        </h2>

        <AnimatedTitle
          title="STEP INT<b>O</b> THE ENDLESS <br/>NIGHT OF <b>A</b>MPHOREUS"
          containerClass="mt-5 !text-black text-center"
        />

        <div className="about-subtext">
          <p>Explore Amphoreus</p>
          <p>a world shrouded in eternal night.</p>
          <p>The adventure begins in Version 3.6.</p>
        </div>
      </div>

      <div className="h-dvh w-screen" id="clip">
        <div className="mask-clip-path about-image">
          <img
            src="img/about.webp"
            alt="Background"
            className="absolute left-0 top-0 size-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
