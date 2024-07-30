import AnimatedText from "@/components/AnimatedText";
import Layout from "@/components/Layout";
import React from "react";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { GithubIcon } from "@/components/Icons";
import project1 from "../../public/images/projects/Eshop.png";
import project2 from "../../public/images/projects/SriLal.png";
import project3 from "../../public/images/projects/Repay.png";
import project4 from "../../public/images/projects/Syntex.png";
import project5 from "../../public/images/projects/Portfolio.png";
import project6 from "../../public/images/projects/CSE.png";
import project7 from "../../public/images/projects/Blood.png";
import project8 from "../../public/images/projects/Coffe.png";
import project9 from "../../public/images/projects/ShanOptical.png";
import project10 from "../../public/images/projects/Yaathra.png";
import project11 from "../../public/images/projects/Car.png";
import project12 from "../../public/images/projects/Mobile.jpg";
import TransitionEffect from "@/components/TransitionEffect";

const FeaturedProject = ({ type, title, summury, img, github, link }) => {
  return (
    <article
      className="w-full flex items-center justify-between
    rounded-3xl border border-solid dark:bg-dark dark:text-light dark:border-light  border-dark bg-light shadow-2xl p-12
     lg:flex-col lg:p-8 xs:rounded-2x xs:rounded-br-3xl xs:p-4 "
    >
      <Link
        href={link}
        target="_blank"
        className="w-1/2 cursor-pointer overflow-hidden rounded-lg  lg:w-full "
      >
        <Image src={img} alt={title} className="w-full h-auto " />
      </Link>

      <div className="w-1/2 flex flex-col  items-start md:items-center xs:items-center md:text-center xs:text-center  dark:text-light justify-between pl-6 lg:w-full lg:pl-0 lg:pt-6">
        <span className="text-primary font-medium text-2xl xs:text-base ">
          {type}
        </span>
        <Link href={link} target="_blank" className="hover:underline-offset-2">
          <h2 className="my-2 w-full text-left text-4xl font-bold md:text-3xl sm:text-2xl md:text-center">
            {title}
          </h2>
        </Link>
        <p className="my-2  dark:text-light font-medium text-1xl text-dark">
          {summury}
        </p>
        <div className="mt-2 flex items-center">
          <Link href={github} target="_blank" className="w-10">
            <GithubIcon />
          </Link>
          <Link
            href={link}
            target="_blank"
            className="ml-4 rounded-lg  dark:text-dark dark:bg-light bg-dark text-light p-2 px-6 text-lg font-semibold"
          >
            Visit Project
          </Link>
        </div>
      </div>
    </article>
  );
};

const Projects = () => {
  return (
    <>
      <Head>
        <title>Lishan Pasindu | My Projects </title>
        <meta name="description" content="any" />
      </Head>

      <TransitionEffect />

      <main className="w-full mb-16 flex flex-col items-center justify-center">
        <Layout className="pt-16">
          <AnimatedText
            text="My Completed Projects"
            className="mb-16 dark:text-light lg:!text-7xl sm:!text-3xl xs:!3xl"
          />

          <div className="grid grid-cols-12 gap-24 xl:gap-x-16 lg:gap-x-8 md:gap-y-24 sm:gap-x-0">
            <div className="col-span-12">
              <FeaturedProject
                title="Eshop - E Commerce Web Application"
                img={project1}
                summury="
                Eshop is a fully completed E-Commerce web application develop by me.I am using html,css,PHP,Ajax,BootsTrap for this project and developing with VSC IDE. 
                Main functions are this application, Register,Login,View product, Search,Buy,Add to cart,Checkout,Wishlist,Order History,Sell 
                product etc...          "
                link="/"
                type="Web Application Project"
                github="/"
              />
            </div>
          </div>

          <div className="grid grid-cols-12 gap-24 mt-16 xl:gap-x-16 lg:gap-x-8 md:gap-y-24 sm:gap-x-0">
            <div className="col-span-12">
              <FeaturedProject
                title="Sri Lal - E Commerce Web Application"
                img={project2}
                summury="
Sri Lal is a fully completed E-Commerce web application develop by me.I am using html,css,PHP,Ajax,BootsTrap for this project and developing with VSC IDE. 
                Main functions are this application, Register,Login,View product, Search,Buy,Add to cart,Checkout,Wishlist,Order History,Sell 
                product etc... "
                link="/"
                type="Web Application Project"
                github="/"
              />
            </div>
          </div>

          <div className="grid grid-cols-12 gap-24 mt-16 xl:gap-x-16 lg:gap-x-8 md:gap-y-24 sm:gap-x-0">
            <div className="col-span-12">
              <FeaturedProject
                title="Repay - Money Trading platform"
                img={project3}
                summury="
               Repay is a web application design by me.I am using html,css,PHP,Ajax,BootsTrap for this project and developing with VSC IDE. 
                I am design only UI for this project . Main User Interfaces are Home,Profile,Regsiter & Login,My wallet,History,About etc... 
                "
                link="/"
                type="Web Application Project"
                github="/"
              />
            </div>
          </div>

          <div className="grid grid-cols-12 gap-24 mt-16 xl:gap-x-16 lg:gap-x-8 md:gap-y-24 sm:gap-x-0">
            <div className="col-span-12">
              <FeaturedProject
                title="Syntex Solution "
                img={project4}
                summury="
                Syntex solutions is a software company founded by me.I am develop website for this company. I am using html,css,PHP,Ajax,BootsTrap for this project and developing with VSC IDE. 
                Main functions are this application Home,About,Work Process,Oure Services,Our Team,Contact us etc... "
                link="/"
                type="Web Application Project"
                github="/"
              />
            </div>
          </div>

          <div className="grid grid-cols-12 gap-24 mt-16 xl:gap-x-16 lg:gap-x-8 md:gap-y-24 sm:gap-x-0">
            <div className="col-span-12">
              <FeaturedProject
                title="My First Portfolio"
                img={project5}
                summury="
This is a fully completed Portfolio develop by me.I am using html,css,PHP,Ajax,BootsTrap,JavaScript for this project and developing with VSC IDE. 
                Main functions are this application, Home,About, My Project and Contact Me etc... "
                link="/"
                type="Web Application Project"
                github="/"
              />
            </div>
          </div>

          <div className="grid grid-cols-12 gap-24 mt-16 xl:gap-x-16 lg:gap-x-8 md:gap-y-24 sm:gap-x-0">
            <div className="col-span-12">
              <FeaturedProject
                title="C&S Stock Managment System"
                img={project6}
                summury="
                This is a fully completed Dektop application develop by me.I am using Java with oopc and develop using NteBeans IDE. 
                Main functions are this application, Login,View Dashboard, Stock Mnage, Ref Agent Managment, Products Managment, Cheque and Credit Management etc... "
                link="/"
                type="Dekstop Application Project"
                github="/"
              />
            </div>
          </div>

          <div className="grid grid-cols-12 gap-24 mt-16 xl:gap-x-16 lg:gap-x-8 md:gap-y-24 sm:gap-x-0">
            <div className="col-span-12">
              <FeaturedProject
                title="Blood donation System"
                img={project7}
                summury="
This is a fully completed Dekstop application develop by me.I am using Java with oopc and develop using NteBeans IDE.
                Main functions are this application, Register new Donaters , Search Donaters ,Mnage Donaters Details and Print Donaters Report etc... "
                link="/"
                type="Dekstop Application Project"
                github="/"
              />
            </div>
          </div>

          <div className="grid grid-cols-12 gap-24 mt-16 xl:gap-x-16 lg:gap-x-8 md:gap-y-24 sm:gap-x-0">
            <div className="col-span-12">
              <FeaturedProject
                title="Coffee Shop Dekstop App"
                img={project8}
                summury="
This is a fully completed Dekstop application develop by me.I am using Java with oopc and develop using NteBeans IDE.
                Main functions are this application Login and managing orders etc... "
                link="/"
                type="Dekstop Application Project"
                github="/"
              />
            </div>
          </div>

          <div className="grid grid-cols-12 gap-24 mt-16 xl:gap-x-16 lg:gap-x-8 md:gap-y-24 sm:gap-x-0">
            <div className="col-span-12">
              <FeaturedProject
                title="SHAN Optical Dekstop App"
                img={project9}
                summury="
This is a fully completed Dekstop application Design by me.I am using Java with oopc and develop using NteBeans IDE.
                I am design only UI for this project . Main User Interfaces are Home,Manage Daily Production, Manage Emplyee Detailes etc... "
                link="/"
                type="Dekstop Application Project"
                github="/"
              />
            </div>
          </div>

          <div className="grid grid-cols-12 gap-24 mt-16 xl:gap-x-16 lg:gap-x-8 md:gap-y-24 sm:gap-x-0">
            <div className="col-span-12">
              <FeaturedProject
                title="Yaathra - LMS Dekstop App"
                img={project10}
                summury="
This is a fully completed Dekstop application develop by me.I am using Java with oopc and develop using NteBeans IDE.
                Main functions are this application, Managing students, Manging Teachers, Managing Subjects, Managing Class Managing Attendence, Managing Class Feeses and other functions etc... "
                link="/"
                type="Dekstop Application Project"
                github="/"
              />
            </div>
          </div>

          <div className="grid grid-cols-12 gap-24 mt-16 xl:gap-x-16 lg:gap-x-8 md:gap-y-24 sm:gap-x-0">
            <div className="col-span-12">
              <FeaturedProject
                title="Car Rental System  "
                img={project11}
                summury="
This is a fully completed Dekstop application develop by me.I am using Java with oopc and develop using NteBeans IDE.
                Main functions are this application, Managing cars, Manging Drivers, Managing Passenger, Managing Booking, View History and other functions etc... "
                link="/"
                type="Dekstop Application Project"
                github="/"
              />
            </div>
          </div>

          <div className="grid grid-cols-12 gap-24 mt-16 xl:gap-x-16 lg:gap-x-8 md:gap-y-24 sm:gap-x-0">
            <div className="col-span-12">
              <FeaturedProject
                title="Nadee Clothing"
                img={project12}
                summury="
This is a fully completed Mobile application develop by me.I am using Java with oopc and develop using Android Studio IDE.
                Main functions are this application Prduct buy, Add to Cart, Wishlist , Search, Category etc... "
                link="/"
                type="Mobile Application Project"
                github="/"
              />
            </div>
          </div>
        </Layout>
      </main>
    </>
  );
};

export default Projects;
