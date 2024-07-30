import React from "react";
import {motion} from "framer-motion"

const Skill =({name,x,y}) =>{
return(
    <motion.div className="flex items-center justify-center rounded-full font-bold dark:bg-light dark:text-dark dark:shadow-light bg-dark text-light py-3 px-6 shadow-dark
    cursor-pointer absolute lg:py-2 lg:px-4 md:text-sm md:py-1.5 md:px-3 xs:bg-transparent xs:dark:bg-transparent
    xs:text-dark xs:dark:text-light xs:font-bold
    "
    whileHover={{scale:1.05}}
    initial={{x:0,y:0}}
    whileInView={{x:x,y:y}}
    transition={{duration:1.5}}
    >
        {name}
    </motion.div>
)
}

const Skills = () => {
    return(
       
        <>
        
        <h2 className="font-bold text-8xl mt-64 md:mt-20 w-full text-center dark:text-light md:text-5xl"  >Skills</h2>

        <div className="w-full lg:p-5 h-screen relative font-bold flex items-center dark:bg-dark justify-center 
         lg:h-[80vh] sm:h-[60vh] xs:h-[50vh] rounded-full dark:bg-circularDark bg-circularLight
         lg:bg-circularLightLg lg:dark:bg-circularDarkLg
         md:bg-circularLightMd md:dark:bg-circularDarkMd
         sm:bg-circularLightSm sm:dark:bg-circularDarkSm
         
         ">

            <motion.div className="flex items-center justify-center rounded-full font-bold dark:bg-light dark:text-dark bg-dark
             text-light p-8 shadow-dark lg:p-6 md:p-4 xs:text-xs xs:p-2
            cursor-pointer
            "
            whileHover={{scale:1.05}}
            >
                Web
            </motion.div>

            <Skill name="HTML" x="-25vw" y="2vw"/>
            <Skill name="GitHub" x="-40vw" y="-2vw"/>
            <Skill name="CSS" x="-5vw" y="-10vw"/>
            <Skill name="JavaScript" x="20vw" y="6vw"/>
            <Skill name="ReactJs" x="0vw" y="12vw"/>
            <Skill name="NextJs" x="-20vw" y="-15vw"/>
            <Skill name="Java" x="15vw" y="-12vw"/>
            <Skill name="Figma" x="32vw" y="-5vw"/>
            <Skill name="Firebase" x="0vw" y="-20vw"/>
            <Skill name="Tailwind CSS" x="-25vw" y="18vw"/>
            <Skill name="BootsTrap" x="18vw" y="18vw"/>

        </div>

        </>

    )
}

export default Skills