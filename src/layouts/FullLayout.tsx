import React from "react";
import {Inter} from "next/font/google";

const inter = Inter({subsets: ['latin']})

interface Props {
    children: React.ReactNode;
}

// const FullLayout: FC = ({children}) => {
const FullLayout: React.FC<Props> = ({children}) => {

    return (
        <>
            <div className={`min-h-screen ${inter.className}`}>
                <div className="w-full p-10">
                    {children}
                </div>
            </div>
        </>
    );
};

export default FullLayout;
