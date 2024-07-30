import React from "react";

const Layout = ({children, className=""}) => {
    return(
        <div className={`w-full h-full inline-block z-0 bg-light p-32 dark:bg-dark xl:p-30 lg:p-20 md:p-16 sm:p-12 ${className}`}>
            {children}
        </div>
    )
}

export default Layout