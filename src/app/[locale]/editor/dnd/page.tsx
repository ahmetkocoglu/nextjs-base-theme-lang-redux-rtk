"use client"

import React, {useState} from "react";
import {DndContext, useDraggable} from "@dnd-kit/core";
import {Draggable} from "./Draggable";
import {Droppable} from "./Droppable";
import "./styles.css";
import {Button} from "@/components/ui/button";
import {Label} from "@/components/ui/label";
import {Input} from "@/components/ui/input";
import {
    Dialog, DialogClose,
    DialogContent,
    DialogDescription, DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger
} from "@/components/ui/dialog";
import { useRef } from 'react';

const notesData = [
    {
        id: "1",
        content: "Text",
        position: {
            x: 450,
            y: 250
        },
        customClass: "text-red-500",
        img: ""
    },
    {
        id: "2",
        content: "Image",
        position: {
            x: 830,
            y: 250
        },
        customClass: "text-blue-500",
        img: ""
    },
    {
        id: "3",
        content: "Text Blue",
        position: {
            x: 650,
            y: 250
        },
        customClass: "text-blue-500",
        img: ""
    }
];

export default function App() {
    const [notes, setNotes] = useState(notesData);
    const [location, setLocation] = useState();

    const refTitle = useRef<HTMLInputElement | null>(null);
    const refColor = useRef<HTMLInputElement | null>(null);
    const refImage = useRef<HTMLInputElement | null>(null);

    function handleDragEnd(ev: any) {
        // What to do here??
        // It's not a sortable, it's a free drag and drop
        const note: any = notes.find((x) => x.id === ev.active.id);
        note.position.x += ev.delta.x;
        note.position.y += ev.delta.y;
        const _notes = notes.map((x) => {
            if (x.id === note.id) return note;
            return x;
        });

        setNotes(_notes);
    }

    const handleAddModule = () => {
        setNotes([{
            id: `${notes.length + 1}`,
            content: refTitle.current?.value ?? "",
            position: {
                x: 650,
                y: 450
            },
            customClass: refColor.current?.value ?? "",
            img: refImage.current?.value ?? ""
        }, ...notes])
    }

    return (
        <main className="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6">
            <div className="flex items-center">
                <h1 className="text-lg font-semibold md:text-2xl">Inventory</h1>
            </div>
            <div className="h-full rounded-lg border border-dashed shadow-sm overflow-hidden">
                <DndContext onDragEnd={handleDragEnd}>
                    <Droppable>
                        {notes.map((note) => (
                            <Draggable
                                styles={{
                                    position: "absolute",
                                    left: `${note.position.x}px`,
                                    top: `${note.position.y}px`
                                }}
                                customClass={`${note.customClass}`}
                                key={note.id}
                                id={note.id}
                                content={`${note.content} ${(note.position.x).toFixed()} ${(note.position.y).toFixed()}`}
                                img={note.img}
                            />
                        ))}
                    </Droppable>
                </DndContext>
            </div>
            <Dialog>
                <DialogTrigger asChild>
                    <Button variant="outline">Add Component</Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[425px]">
                    <DialogHeader>
                        <DialogTitle>Add Component</DialogTitle>
                        <DialogDescription>
                            Make changes to your profile here. Click save when you`re done.
                        </DialogDescription>
                    </DialogHeader>
                    <div className="grid gap-4 py-4">
                        <div className="grid grid-cols-4 items-center gap-4">
                            <Label htmlFor="title" className="text-right">
                                Title
                            </Label>
                            <Input
                                id="title"
                                ref={refTitle}
                                defaultValue="Title"
                                className="col-span-3"
                            />
                        </div>
                        <div className="grid grid-cols-4 items-center gap-4">
                            <Label htmlFor="color" className="text-right">
                                Color
                            </Label>
                            <Input
                                id="color"
                                ref={refColor}
                                defaultValue="text-blue-500"
                                className="col-span-3"
                            />
                        </div>
                        <div className="grid grid-cols-4 items-center gap-4">
                            <Label htmlFor="image" className="text-right">
                                Image
                            </Label>
                            <Input
                                id="image"
                                ref={refImage}
                                defaultValue="/hero-01.png"
                                className="col-span-3"
                            />
                        </div>
                    </div>
                    <DialogFooter>
                        <DialogClose asChild>
                            <Button type="submit" onClick={handleAddModule}>Save changes</Button>
                        </DialogClose>
                    </DialogFooter>
                </DialogContent>
            </Dialog>
        </main>

    );
}
