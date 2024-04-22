import Footer from "@/components/footer";
import Header from "@/components/header";
import React from "react";
import {Inter} from "next/font/google";
import LeftSideMenu from "@/components/left-side-menu";

const inter = Inter({subsets: ['latin']})

interface Props {
    children: React.ReactNode
}

const CmsLayout: React.FC<Props> = ({children}) => {
    return (
        <div className={`min-h-screen ${inter.className}`}>
            {children}
        </div>
    );
}

export default CmsLayout;
