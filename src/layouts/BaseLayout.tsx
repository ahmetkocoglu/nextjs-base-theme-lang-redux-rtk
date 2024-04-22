import Footer from "@/components/footer";
import Header from "@/components/header";
import React from "react";
import {Inter} from "next/font/google";
import LeftSideMenu from "@/components/left-side-menu";

const inter = Inter({subsets: ['latin']})

interface Props {
    children: React.ReactNode
}

const BaseLayout: React.FC<Props> = ({children}) => {
    return (
        <div className={`min-h-screen ${inter.className}`}>
            <div className="flex">
                <div>
                    <LeftSideMenu/>
                </div>
                <div className="flex-grow">
                    <Header/>
                    <div className="w-full">
                        {children}
                    </div>
                    <Footer/>
                </div>
            </div>
        </div>
    );
}

export default BaseLayout;
