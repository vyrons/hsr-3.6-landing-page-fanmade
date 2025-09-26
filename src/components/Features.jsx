import { useRef, useState } from "react";
import { TiLocationArrow } from "react-icons/ti";

const BentoTilt = ({ children, className = "" }) => {
  const [transformStyle, setTransformStyle] = useState("");
  const itemRef = useRef();

  const handleMouseMove = (e) => {
    if (!itemRef.current) {
      return;
    }

    const { left, top, width, height } =
      itemRef.current.getBoundingClientRect();

    const relativeX = (e.clientX - left) / width;
    const relativeY = (e.clientY - top) / height;

    const tiltX = (relativeY - 0.5) * 5;
    const tiltY = (relativeX - 0.5) * -5;

    const newTransform = `perspective(700px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale3d(0.95, 0.95, 0.95)`;

    setTransformStyle(newTransform);
  };

  const handleMouseLeave = () => {
    setTransformStyle("");
  };

  return (
    <div
      className={className}
      ref={itemRef}
      onMouseMove={handleMouseMove}
      on
      onMouseLeave={handleMouseLeave}
      style={{ transform: transformStyle }}
    >
      {children}
    </div>
  );
};

const BentoCard = ({ src, title, description }) => {
  return (
    <div className="relative size-full">
      <video
        src={src}
        loop
        muted
        autoPlay
        className="absolute left-0 top-0 size-full object-cover object-center"
      />
      <div className="relative z-10 flex size-full flex-col justify-between p-5 text-blue-50">
        <div>
          <h1 className="bento-title special-font">{title}</h1>
          <p className="mt-3 max-w-64 text-xs md:text-base">{description}</p>
        </div>
      </div>

      {title}
    </div>
  );
};

const Features = () => {
  return (
    <section id="features" className="bg-black pb-52">
      <div className="container mx-auto px-3 md:px-10">
        <div className="px-5 py-32">
          <p className="font-circular-web text-lg text-blue-50">
            A New Chapter Unfolds
          </p>
          <p className="max-w-md font-circular-web text-lg text-blue-50 opacity-50">
            Step into Amphoreus, a world consumed by endless night. In Version
            3.6, players will explore vast underground ruins, forgotten
            civilizations, and new domains that challenge both strategy and
            courage. This patch unveils a darker chapter of Honkai Star Rail,
            where the line between light and shadow blurs, and the fate of Earth
            rests within your hands.
          </p>
        </div>
        <BentoTilt className="border-hsla relative mb-7 h-96 w-full overflow-hidden rounded-md md:h-[65vh]">
          <BentoCard
            src="videos/feature-1.mp4"
            title={
              <>
                E<b>c</b>lipse
              </>
            }
            description="Dive into Version 3.6 of Honkai Star Rail, where Amphoreus opens its underground ruins filled with new domains, powerful enemies, unique mechanics, and exclusive rewards that push every Trailblazer to their limits."
          />
        </BentoTilt>

        <div className="grid h-[135vh] grid-cols-2 grid-rows-3 gap-7">
          <BentoTilt className=" bento-tilt_1 row-span-1 md:col-span-1 md: row-span-2">
            <BentoCard
              src="videos/feature-2.mp4"
              title={
                <>
                  <b>A</b>scend
                </>
              }
              description="Take the lead in Version 3.6 with Evernight, using her unique skill to summon Evey, boost your memosprites’ CRIT DMG, and dominate in High AoE battles while mastering her Darkest Riddle state and unlocking powerful rewards."
            />
          </BentoTilt>
          <BentoTilt className=" bento-tilt_1 row-span-1 md:col-span-1 md: row-span-2">
            <BentoCard
              src="videos/feature-3.mp4"
              title={
                <>
                  For<b>T</b>ress
                </>
              }
              description="Harness the power of Dan Heng Permansor Terrae in Version 3.6, where his unique Preservation path shields your team via Bondmate mechanics, deploys a Soul Dragon for follow-up attacks, and delivers massive AoE support while bolstering endurance and tactical defense."
            />
          </BentoTilt>
          <BentoTilt className="bento-tilt_2">
            <a
              href="https://hsr.hoyoverse.com/ua2?lp=sr03&utm_source=SEA_google_SEA_search_UA2_Brand&hoyotrace_channel=ga_channel&gad_source=1&gad_campaignid=20028025355&gbraid=0AAAAAoiRZe003I7iZ9ToG9VRbEWOh5xkf&gclid=CjwKCAjw89jGBhB0EiwA2o1On_jidq8BJZ4ZxePhQyIQWh0RRyGBsH9mIKGlDSMEa70PGOOH5ovlIRoCbQQQAvD_BwE"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="flex size-full flex-col justify-between bg-violet-50 p-5">
                <h1 className="bento-title special-font max-w-64 text-black">
                  D<b>o</b>wnlo<b>a</b>d <b>n</b>ow!
                </h1>
                <TiLocationArrow className="m-5 scale-[5] self-end" />
              </div>
            </a>
          </BentoTilt>
          <BentoTilt className="bento-tilt_2">
            <BentoCard
              src="videos/feature-4.mp4"
              title={
                <>
                  <b>C</b>limax
                </>
              }
              description="Conquer Version 3.6 Endgame with Memory of Chaos, Pure Fiction, and Anomaly Arbitration to earn Stellar Jades and exclusive rewards."
            />
          </BentoTilt>
        </div>
      </div>
    </section>
  );
};

export default Features;
