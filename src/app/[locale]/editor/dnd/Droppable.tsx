import React from "react";
import { useDroppable } from "@dnd-kit/core";

const CustomStyle = {
    display: "flex",
    width: "w-full",
    height: "600px",
    background: "green"
};

interface Props {
    children: any;
}

export function Droppable({ children }: Props) {
    const { isOver, setNodeRef } = useDroppable({
        id: "droppable"
    });
    const style = {
        color: isOver ? "green" : undefined
    };

    return (
        <div ref={setNodeRef} style={{ ...style, ...CustomStyle }}>
            {children}
        </div>
    );
}
