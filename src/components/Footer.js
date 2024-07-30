import React from "react";
import Layout from "./Layout";
import Link from "next/link";

const Footer = () => {
    return(
        <fotter className="w-full border-t-2 border-solid border-dark dark:border-light sm:text-base
        font-medium text-lg">
            <Layout className="py-8 flex items-center justify-between lg:flex-col lg:py-6 dark:text-light dark:border-light hover:bg-stone-200 text-dark border-4 border-dark 
            border-s-transparent dark:border-s-transparent border-e-transparent dark:border-e-transparent dark:border-b-transparent border-b-transparent  ">
                <span>{new Date().getFullYear()} &copy; All Rights Reserved.</span>
                <div className="flex items-center md:my-2 ">
                    Build With <span className="text-primary text-2xl px-1">&#9825;</span>by&nbsp;
                <Link href="/" className="underline">Lishan Pasindu</Link>
                </div>
                <Link href="/" className="underline">Say Hello</Link>
            </Layout>
        </fotter>
    )
}

export default Footer