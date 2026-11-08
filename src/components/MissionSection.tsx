import { Lottie } from "lottie-react";
import signatureAnimation from "../assets/signature-signing-3s.json";
import { BlurFade } from "./magicui/blur-fade";
import { MorphingText } from "./magicui/morphing-text";

export function MissionSection() {
  return (
    <section className="relative w-full bg-[#FF0000]">
      {/* Main Text Content */}
      <div className="relative z-20 flex min-h-svh flex-col items-center justify-center px-6 py-16 pb-[calc(100%*736/1456*0.26)]">
        <div className="flex flex-col items-center w-full text-center relative max-w-180 mx-auto">
          {/* H1 - Big & Prominent */}
          <BlurFade delay={0.2} duration={0.6} inView className="w-full">
            <h1 className="w-full mb-6 sm:mb-8">
              <MorphingText
                texts={["Kalevala", "ਕਾਲੇਵਾਲਾ", "ˈkɑle̞ʋɑlɑ"]}
                className="text-white h-20 sm:h-24 md:h-28 text-[40pt] md:text-[50pt] lg:text-[58pt]"
              />
            </h1>
          </BlurFade>

          {/* H2 - Bigger & Noticeable */}
          <BlurFade delay={0.5} duration={0.6} inView>
            <h2 className="text-white text-2xl sm:text-3xl md:text-4xl font-bold uppercase tracking-wider mb-3">
              The Folk Literature of Finland
            </h2>
          </BlurFade>

          {/* Subtitle / Script description */}
          <BlurFade delay={0.8} duration={0.6} inView>
            <p className="text-white/85 text-lg sm:text-xl font-normal max-w-150 leading-relaxed mb-8">
              A poetic translation in Punjabi Language, Shahmukhi script.
            </p>
          </BlurFade>

          {/* Paragraphs - Consistent sizing */}
          <div className="w-full flex flex-col items-center gap-4">
            <BlurFade delay={1.1} duration={0.6} inView>
              <p className="text-white/90 text-[15px] sm:text-[16px] leading-[1.75] max-w-160 text-center font-light">
                The Kalevala, Finland's National Epic, Now Speaks Punjabi.
                Translator Arshad Farooq, Who Lives In Finland, Has Carried Its
                Verses Into A Poetic Translation In The Shahmukhi Script,
                Published By Lingua-Taar.
              </p>
            </BlurFade>

            <BlurFade delay={1.4} duration={0.6} inView>
              <p className="text-white/90 text-[15px] sm:text-[16px] leading-[1.75] max-w-120 text-center font-light">
                The Printed Edition Is Coming Soon.
              </p>
            </BlurFade>
          </div>

          {/* Signature Animation - Back in the middle content */}
          <BlurFade delay={1.7} duration={0.6} inView>
            <div
              className="w-[280px] sm:w-[340px] max-w-full mt-8"
              role="img"
              aria-label="Arshad Farooq signature"
            >
              <Lottie
                src={signatureAnimation}
                loop={false}
                autoplay
                className="w-full h-auto aspect-[2172/724]"
              />
            </div>
          </BlurFade>
        </div>
      </div>

      {/* Wise Men Illustration Section with Bottom Link */}
      <div className="relative w-full overflow-hidden -mt-[calc(100%*736/1456*0.56)]">
        <img
          src="/red-bg.png"
          alt="Wise men with the Kalevala"
          className="relative z-10 block w-full h-auto [mask-image:linear-gradient(to_bottom,transparent_0%,transparent_32%,black_39%)]"
        />

        {/* Arshad Farooq Website all the way on the bottom middle with 20px padding under it */}
        <div className="absolute inset-x-0 bottom-0 z-30 pb-[20px] px-4 flex justify-center text-center">
          <a
            href="https://arshadfarooq.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/85 hover:text-white text-sm sm:text-base tracking-widest uppercase font-light underline underline-offset-4 transition-colors drop-shadow-[0_2px_10px_rgba(0,0,0,0.9)]"
          >
            arshadfarooq.com
          </a>
        </div>
      </div>
    </section>
  );
}
