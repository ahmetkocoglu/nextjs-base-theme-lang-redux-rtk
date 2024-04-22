import React from "react";
import {useDraggable} from "@dnd-kit/core";
import Image from "next/image";
import {Pencil, PencilLine, SquareX} from "lucide-react";

const CustomStyle = {
    //display: "flex",
    width: "140px",
    height: "140px",
    backgroundColor: "#e8e8a2"
};

interface Props {
    id: string;
    content: string;
    styles: any;
    customClass: string;
    img: string;
}

export function Draggable({id, content, styles, customClass, img}: Props) {
    const {attributes, listeners, setNodeRef, transform} = useDraggable({
        id
    });

    const style = transform
        ? {
            transform: `translate3d(${transform.x}px, ${transform.y}px, 0)`
        }
        : {};

    const handleDoubleClick = () => {
        console.log('----');
    }

    return (
        <div
            key={id}
            ref={setNodeRef}
            style={{...style, ...CustomStyle, ...styles}}
            {...listeners}
            {...attributes}
            className={`${customClass} relative group`}
            onDoubleClick={handleDoubleClick}
        >
            <div className="hidden absolute px-0.5 py-1 -right-0.5 -top-7 group-hover:flex gap-0.5">
                <button
                    className="bg-amber-100 w-6 h-6 hover:text-black border rounded-md text-black/90 mr-auto">
                    <Pencil className="h-4 w-4 m-auto"/>
                </button>
                <button
                    className="bg-amber-100 w-6 h-6 hover:text-black border rounded-md text-black/90 mr-auto">
                    <SquareX className="h-4 w-4 m-auto"/>
                </button>
            </div>
            {content}
            {img !== '' && <Image src={img} alt="test" height={250}
                                  width={250}/>}

        </div>
    );
}
