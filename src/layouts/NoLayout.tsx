import React from "react";

interface Props {
    children: React.ReactNode
}

const NoLayout: React.FC<Props> = ({children}) => {
    return (
        <div>
            {children}
        </div>
    );
}

export default NoLayout;
