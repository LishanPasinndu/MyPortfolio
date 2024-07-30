import AnimatedText from "@/components/AnimatedText";
import Layout from "@/components/Layout";
import Head from "next/head";
import Image from "next/image";
import React, { useEffect, useLayoutEffect, useRef } from "react";
import profilePic from "../../public/images/profile/shan.jpeg";
import { useInView, useMotionValue, useSpring } from "framer-motion";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import TransitionEffect from "@/components/TransitionEffect";

const AnimationNumbers = ({ value }) => {
  const ref = useRef(null);

  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { duration: 3000 });
  const isInview = useInView(ref, { once: true });

  useEffect(() => {
    if (isInview) {
      motionValue.set(value);
    }
  }, [isInview, value, motionValue]);

  useEffect(() => {
    springValue.on("change", (latest) => {
      if (ref.current && latest.toFixed(0) <= value) {
        ref.current.textContent = latest.toFixed(0);
      }
    });
  }, [springValue, value]);

  return <span ref={ref}></span>;
};

const about = () => {
  return (
    <>
      <Head>
        <title>Lishan Pasindu | About Page</title>
        <meta name="description" content="any" />
      </Head>

      <TransitionEffect />

      <main className="flex w-full flex-col items-center justify-center">
        <Layout className="pt-16">
          <AnimatedText
            text="About Me"
            className="mb-16 lg:!text-7xl sm:!text-3xl xs:!3xl dark:text-light"
          />
          <div className="grid w-full grid-cols-8 gap-16 sm:gap-8">
            <div className="col-span-3 flex flex-col items-start justify-start xl:col-span-4 dark:text-light md:col-span-8">
              <h2 className="mb-4 text-lg font-bold uppercase text-dark/75 dark:text-light/75">
                Biography
              </h2>
              <p className="font-medium ">
                Hi, I m Lishan Pasindu wickrama , a web developer and UI/UX
                designer with a passion for creating beautiful, functional, and
                user-centered digital experiences. With 2 years of experience in
                the field. I am always looking for new and innovative ways to
                bring my clients visions to life.
              </p>

              <p className="my-4 font-medium">
                I am going to Java institute for advanced technology . I am a
                undergraduate BEng in software Engineering in IIC university. I
                love to develop new things. My objective is to construct and
                design a responsive website for you that is of the highest
                quality possible. My main goal in my work is to deliver
                outstanding service with prompt, precise, and professional
                results. My services are 100% accurate. I always give my clients
                my full attention and complete the work ahead of schedule.
              </p>

              <p className="font-medium">
                Whether I can develop E-commerce Web applications using
                PHP/Java/.Net/Next Js, Mobile App using React js/ Java Android ,
                Dekstop Applications using Java with oop concept etc ...
              </p>
            </div>

            <div
              className="col-span-3 relative h-max rounded-2xl border-2 border-solid border-dark
bg-light dark:bg-dark dark:border-light p-8 xl:col-span-4 md:col-span-8"
            >
              <div className="absolute top-0 -right-3  xl:col-span-4 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark dark:bg-light" />
              <Image
                src={profilePic}
                a="Lishan"
                className="w-full h-auto rounded-2xl"
                priority
                sizes="(max-width: 768px) 100vw
                (max-width: 1200px) 50vw,
                33vw"
              />
            </div>

            <div className="col-span-2 flex flex-col md:mt-7  items-end justify-between md:text-center xl:col-span-8 md:items-center xl:flex-row xl:items-center md:order-3">
              <div className="flex flex-col items-end justify-center md:text-center md:items-center">
                <span className="inline-block md:text-5xl text-7xl font-bold dark:text-light">
                  <AnimationNumbers value={8} />+
                </span>
                <h2 className="text-xl md:text-sm  font-medium capitalize text-dark/75 dark:text-light/75">
                  Stisfied Client
                </h2>
              </div>

              <div className="flex flex-col md:ms-5 md:items-center md:justify-center md:text-center items-end justify-center">
                <span className="inline-block md:text-5xl text-7xl font-bold dark:text-light">
                  <AnimationNumbers value={10} />+
                </span>
                <h2 className="text-xl md:text-sm  font-medium capitalize text-dark/75  dark:text-light/75">
                  Projects Completed
                </h2>
              </div>

              <div className="flex flex-col md:ms-5 md:text-center md:items-center md:justify-center items-end justify-center">
                <span className="inline-block md:text-5xl text-7xl font-bold dark:text-light ">
                  <AnimationNumbers value={2} />+
                </span>
                <h2 className="text-xl md:text-sm  font-medium capitalize text-dark/75  dark:text-light/75">
                  Years of Experience
                </h2>
              </div>
            </div>
          </div>

          <Skills />
          <Experience />
          <Education />
        </Layout>
      </main>
    </>
  );
};

export default about;
