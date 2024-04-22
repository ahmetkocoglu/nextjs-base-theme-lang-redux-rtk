import {UniqueIdentifier} from '@dnd-kit/core';
import {useSortable} from '@dnd-kit/sortable';
import React from 'react';
import {CSS} from '@dnd-kit/utilities';
import clsx from 'clsx';
import {Contact, Delete, DeleteIcon, Edit, Move, Trash, Trash2} from "lucide-react";
import MenuPage from "@/components/section/menu-page";
import HeroPage from "@/components/section/hero-page";
import AboutUsPage from "@/components/section/about-us-page";
import ContactPage from "@/components/section/contact-page";
import FooterPage from "@/components/section/footer-page";
import {LuDelete} from "react-icons/lu";
import {useRouter} from "next/navigation";

type ItemsType = {
    id: UniqueIdentifier;
    title: string;
    section: string;
    trash: any
};

const Items = ({id, title, section, trash}: ItemsType) => {
    const {
        attributes,
        listeners,
        setNodeRef,
        transform,
        transition,
        isDragging,
    } = useSortable({
        id: id,
        data: {
            type: 'item',
        },
    });
    const router = useRouter();

    const handleEdit = (item: string) => {
        router.replace(`/en/editor/dnd/${item}`)
    }

    return (
        <div
            ref={setNodeRef}
            {...attributes}
            style={{
                transition,
                transform: CSS.Translate.toString(transform),
            }}
            className={clsx(
                'px-2 py-4 bg-white dark:bg-gray-700 shadow-md rounded-xl w-full border border-transparent hover:border-gray-200 cursor-pointer relative group',
                isDragging && 'opacity-50',
            )}
        >
            <div
                className="border bg-white p-2 text-xs rounded-xl shadow-lg hover:shadow-xl text-black absolute right-0.5 -top-7 hidden group-hover:flex">
              <span
                  className="inline-flex items-center rounded-md bg-red-50 px-2 py-0 text-xs font-medium text-red-700 ring-1 ring-inset ring-red-600/10">{title}</span>
                <span
                    className="inline-flex items-center rounded-md bg-red-50 px-2 py-0 text-xs font-medium text-red-700 ring-1 ring-inset ring-red-600/10">{section}</span>
                <Trash2 className="h-4 w-4 mx-1" onClick={() => trash(id)}/>
                <Edit className="h-4 w-4 mx-1" onClick={() => handleEdit(section)}/>
                <Move className="h-4 w-4" {...listeners}/>
            </div>
            {/*flex items-center justify-between*/}
            <div className="section">
                {(section === "Menu" || section === "menu") ? <MenuPage/> : ''}
                {(section === "Hero" || section === "hero") ? <HeroPage/> : ''}
                {(section === "About us" || section === "about-us") ? <AboutUsPage/> : ''}
                {(section === "Contact" || section === "contact") ? <ContactPage/> : ''}
                {(section === "Footer" || section === "footer") ? <FooterPage/> : ''}
            </div>
        </div>
    );
};

export default Items;
