"use client"

import React, {useState} from 'react';
import {Card, CardContent, CardFooter, CardHeader, CardTitle} from "@/components/ui/card";
import {Label} from "@/components/ui/label";
import {Input} from "@/components/ui/input";
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectTrigger,
    SelectValue
} from "@/components/ui/select";
import {Plus} from "lucide-react";
import {Button} from "@/components/ui/button";
import {
    DropdownMenu,
    DropdownMenuContent, DropdownMenuItem,
    DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";
import {Tabs, TabsContent, TabsList, TabsTrigger} from "@/components/ui/tabs";

const projects = ["State 1", "State 2", "State 3", "State 4", "State 5",]
const histories = [1, 2, 3, 4, 5, 6, 7, 8, 9]

const StatePage = () => {
    const [position, setPosition] = useState("bottom")

    return (
        <main className="flex flex-col gap-4 p-4 lg:gap-6 lg:p-6">
            <div className="grid grid-cols-3 gap-4">
                <div className="border rounded-md">
                    <Tabs defaultValue="account" className="w-full">
                        <TabsList className="grid w-full grid-cols-2">
                            <TabsTrigger value="account">Components</TabsTrigger>
                            <TabsTrigger value="password">My Components</TabsTrigger>
                        </TabsList>
                        <TabsContent value="account">
                            <div className="my-2">
                                <Select>
                                    <SelectTrigger className="w-full">
                                        <SelectValue placeholder="Basic"/>
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectGroup>
                                            <SelectItem value="apple">Basic</SelectItem>
                                            <SelectItem value="banana">Buttons</SelectItem>
                                        </SelectGroup>
                                    </SelectContent>
                                </Select>
                            </div>
                            <div className="my-5 grid grid-cols-2 gap-5 px-5 text-center">
                                <div className="border p-5">
                                    <div>
                                        <div className="w-full rounded-md border-[#97DAD2] h-52 border"></div>
                                    </div>
                                    <h6 className="mt-5">1 Column</h6>
                                </div>
                                <div className="border p-5">
                                    <div className="grid grid-cols-2 gap-5 text-center">
                                        <div>
                                            <div className="w-full rounded-md border-[#97DAD2] h-52 border"></div>
                                        </div>
                                        <div>
                                            <div className="w-full rounded-md border-[#97DAD2] h-52 border"></div>
                                        </div>
                                    </div>
                                    <h6 className="pt-5">2 Column</h6>
                                </div>
                            </div>
                            <div className="my-10 grid grid-cols-2 gap-5 px-5 text-center">
                                <div className="border p-5">
                                    <div className="grid grid-cols-3 gap-5 text-center">
                                        <div className="w-full rounded-md border-[#97DAD2] h-52 border"></div>
                                        <div className="w-full rounded-md border-[#97DAD2] h-52 border"></div>
                                        <div className="w-full rounded-md border-[#97DAD2] h-52 border"></div>
                                    </div>
                                    <h6 className="pt-5">3 Column</h6>
                                </div>
                                <div className="border p-5">
                                    <div className="grid grid-cols-3 gap-5 text-center">
                                        <div className="w-full rounded-md border-[#97DAD2] h-52 border"></div>
                                        <div
                                            className="w-full col-span-2 rounded-md border-[#97DAD2] h-52 border"></div>
                                    </div>
                                    <h6 className="pt-5">2 Column 3/7</h6>
                                </div>
                            </div>
                            <div className="my-10 grid grid-cols-2 gap-5 px-5 text-center">
                                <div className="border p-5">
                                    <div>
                                        <svg width="96" height="76" viewBox="0 0 48 38" fill="none"
                                             xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M1.5 6.5V1.5H34V6.5M19 1.5V36.5M24 36.5H14M31.5 21.5V19H46.5V21.5M39 19V36.5M36.5 36.5H41.5"
                                                stroke="#97DAD2" strokeWidth="2.5" strokeLinecap="round"
                                                strokeLinejoin="round"/>
                                        </svg>
                                    </div>
                                    <h6 className="pt-5">Text</h6>
                                </div>
                                <div className="border p-5">
                                    <div>
                                        <svg width="120" height="120" viewBox="0 0 60 60" fill="none"
                                             xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M22.5003 37.5001L37.5003 22.5001M27.5003 15.0003L28.6578 13.6603C31.0023 11.3161 34.182 9.99928 37.4974 9.99951C40.8128 9.99975 43.9924 11.317 46.3366 13.6615C48.6807 16.006 49.9976 19.1858 49.9973 22.5012C49.9971 25.8166 48.6798 28.9961 46.3353 31.3403L45.0003 32.5003M32.5004 45.0001L31.5079 46.3351C29.136 48.6806 25.9348 49.9961 22.5991 49.9961C19.2634 49.9961 16.0622 48.6806 13.6904 46.3351C12.5212 45.1791 11.5931 43.8027 10.9596 42.2855C10.3262 40.7683 10 39.1405 10 37.4964C10 35.8522 10.3262 34.2245 10.9596 32.7073C11.5931 31.1901 12.5212 29.8136 13.6904 28.6576L15.0004 27.5001"
                                                stroke="#97DAD2" strokeWidth="2.5" strokeLinecap="round"
                                                strokeLinejoin="round"/>
                                        </svg>
                                    </div>
                                    <h6 className="pt-5">Link</h6>
                                </div>
                            </div>
                            <div className="my-10 grid grid-cols-2 gap-5 px-5 text-center">
                                <div className="border p-5">
                                    <div>
                                        <svg width="120" height="120" viewBox="0 0 60 60" fill="none"
                                             xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M37.5 20H37.525M7.5 40.0002L20 27.5002C22.32 25.2677 25.18 25.2677 27.5 27.5002L40 40.0002M35 35.0002L37.5 32.5002C39.82 30.2677 42.68 30.2677 45 32.5002L52.5 40.0002M7.5 15C7.5 13.0109 8.29018 11.1032 9.6967 9.6967C11.1032 8.29018 13.0109 7.5 15 7.5H45C46.9891 7.5 48.8968 8.29018 50.3033 9.6967C51.7098 11.1032 52.5 13.0109 52.5 15V45C52.5 46.9891 51.7098 48.8968 50.3033 50.3033C48.8968 51.7098 46.9891 52.5 45 52.5H15C13.0109 52.5 11.1032 51.7098 9.6967 50.3033C8.29018 48.8968 7.5 46.9891 7.5 45V15Z"
                                                stroke="#97DAD2" strokeWidth="2.5" strokeLinecap="round"
                                                strokeLinejoin="round"/>
                                        </svg>
                                    </div>
                                    <h6 className="pt-5">Text</h6>
                                </div>
                                <div className="border p-5">
                                    <div>
                                        <svg width="120" height="120" viewBox="0 0 60 60" fill="none"
                                             xmlns="http://www.w3.org/2000/svg">
                                            <g clipPath="url(#clip0_1085_2674)">
                                                <path
                                                    d="M5 20C5 17.3478 6.05357 14.8043 7.92893 12.9289C9.8043 11.0536 12.3478 10 15 10H45C47.6522 10 50.1957 11.0536 52.0711 12.9289C53.9464 14.8043 55 17.3478 55 20V40C55 42.6522 53.9464 45.1957 52.0711 47.0711C50.1957 48.9464 47.6522 50 45 50H15C12.3478 50 9.8043 48.9464 7.92893 47.0711C6.05357 45.1957 5 42.6522 5 40V20Z"
                                                    stroke="#97DAD2" strokeWidth="2.5" strokeLinecap="round"
                                                    strokeLinejoin="round"/>
                                                <path d="M25 22.5L37.5 30L25 37.5V22.5Z" stroke="#97DAD2"
                                                      strokeWidth="2.5" strokeLinecap="round"
                                                      strokeLinejoin="round"/>
                                            </g>
                                            <defs>
                                                <clipPath id="clip0_1085_2674">
                                                    <rect width="60" height="60" fill="white"/>
                                                </clipPath>
                                            </defs>
                                        </svg>
                                    </div>
                                    <h6 className="pt-5">Link</h6>
                                </div>
                            </div>
                            <div className="my-2">
                                <Select>
                                    <SelectTrigger className="w-full">
                                        <SelectValue placeholder="Extra"/>
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectGroup>
                                            <SelectItem value="apple">Basic</SelectItem>
                                            <SelectItem value="banana">Buttons</SelectItem>
                                        </SelectGroup>
                                    </SelectContent>
                                </Select>
                            </div>
                            <div className="my-5 grid grid-cols-2 gap-5 px-5 text-center">
                                <div className="border p-5">
                                    <div>
                                        <div className="w-full rounded-md border-[#97DAD2] h-52 border"></div>
                                    </div>
                                    <h6 className="mt-5">1 Column</h6>
                                </div>
                                <div className="border p-5">
                                    <div className="grid grid-cols-2 gap-5 text-center">
                                        <div>
                                            <div className="w-full rounded-md border-[#97DAD2] h-52 border"></div>
                                        </div>
                                        <div>
                                            <div className="w-full rounded-md border-[#97DAD2] h-52 border"></div>
                                        </div>
                                    </div>
                                    <h6 className="pt-5">2 Column</h6>
                                </div>
                            </div>
                        </TabsContent>
                        <TabsContent value="password">
                            <div className="my-2">
                                <h1>My Components</h1>
                            </div>
                            <div className="my-2">
                                <div key={0}
                                     className="border-0 mx-2.5 my-3 flex items-center gap-3 rounded-lg text-muted-foreground transition-all hover:text-primary">
                                    <span>Buttons</span>
                                    <DropdownMenu>
                                        <DropdownMenuTrigger className="ml-auto flex">
                                            <Plus className="h-4 w-4"/>
                                        </DropdownMenuTrigger>
                                        <DropdownMenuContent>
                                            <DropdownMenuItem>Add</DropdownMenuItem>
                                            <DropdownMenuItem>Edit</DropdownMenuItem>
                                            <DropdownMenuItem>Delete</DropdownMenuItem>
                                        </DropdownMenuContent>
                                    </DropdownMenu>
                                </div>
                                <div key={1}
                                     className="border mx-1.5 my-2.5 px-3 py-2.5 flex items-center gap-3 rounded-lg text-muted-foreground transition-all hover:text-primary">
                                    <span>btn-primary</span>
                                    <DropdownMenu>
                                        <DropdownMenuTrigger className="ml-auto flex">
                                            <Plus className="h-4 w-4"/>
                                        </DropdownMenuTrigger>
                                        <DropdownMenuContent>
                                            <DropdownMenuItem>Add</DropdownMenuItem>
                                            <DropdownMenuItem>Edit</DropdownMenuItem>
                                            <DropdownMenuItem>Delete</DropdownMenuItem>
                                        </DropdownMenuContent>
                                    </DropdownMenu>
                                </div>
                                <div key={2}
                                     className="border mx-1.5 my-2.5 px-3 py-2.5 flex items-center gap-3 rounded-lg text-muted-foreground transition-all hover:text-primary">
                                    <span>btn-secondary</span>
                                    <DropdownMenu>
                                        <DropdownMenuTrigger className="ml-auto flex">
                                            <Plus className="h-4 w-4"/>
                                        </DropdownMenuTrigger>
                                        <DropdownMenuContent>
                                            <DropdownMenuItem>Add</DropdownMenuItem>
                                            <DropdownMenuItem>Edit</DropdownMenuItem>
                                            <DropdownMenuItem>Delete</DropdownMenuItem>
                                        </DropdownMenuContent>
                                    </DropdownMenu>
                                </div>
                            </div>
                            <div className="my-2">
                                <div key={0}
                                     className="border-0 mx-2.5 my-3 flex items-center gap-3 rounded-lg text-muted-foreground transition-all hover:text-primary">
                                    <span>Textbox</span>
                                    <DropdownMenu>
                                        <DropdownMenuTrigger className="ml-auto flex">
                                            <Plus className="h-4 w-4"/>
                                        </DropdownMenuTrigger>
                                        <DropdownMenuContent>
                                            <DropdownMenuItem>Add</DropdownMenuItem>
                                            <DropdownMenuItem>Edit</DropdownMenuItem>
                                            <DropdownMenuItem>Delete</DropdownMenuItem>
                                        </DropdownMenuContent>
                                    </DropdownMenu>
                                </div>
                                <div key={1}
                                     className="border mx-1.5 my-2.5 px-3 py-2.5 flex items-center gap-3 rounded-lg text-muted-foreground transition-all hover:text-primary">
                                    <span>btn-primary</span>
                                    <DropdownMenu>
                                        <DropdownMenuTrigger className="ml-auto flex">
                                            <Plus className="h-4 w-4"/>
                                        </DropdownMenuTrigger>
                                        <DropdownMenuContent>
                                            <DropdownMenuItem>Add</DropdownMenuItem>
                                            <DropdownMenuItem>Edit</DropdownMenuItem>
                                            <DropdownMenuItem>Delete</DropdownMenuItem>
                                        </DropdownMenuContent>
                                    </DropdownMenu>
                                </div>
                                <div key={2}
                                     className="border mx-1.5 my-2.5 px-3 py-2.5 flex items-center gap-3 rounded-lg text-muted-foreground transition-all hover:text-primary">
                                    <span>btn-secondary</span>
                                    <DropdownMenu>
                                        <DropdownMenuTrigger className="ml-auto flex">
                                            <Plus className="h-4 w-4"/>
                                        </DropdownMenuTrigger>
                                        <DropdownMenuContent>
                                            <DropdownMenuItem>Add</DropdownMenuItem>
                                            <DropdownMenuItem>Edit</DropdownMenuItem>
                                            <DropdownMenuItem>Delete</DropdownMenuItem>
                                        </DropdownMenuContent>
                                    </DropdownMenu>
                                </div>
                            </div>
                            <div className="my-2">
                                <div key={0}
                                     className="border-0 mx-2.5 my-3 flex items-center gap-3 rounded-lg text-muted-foreground transition-all hover:text-primary">
                                    <span>Background</span>
                                    <DropdownMenu>
                                        <DropdownMenuTrigger className="ml-auto flex">
                                            <Plus className="h-4 w-4"/>
                                        </DropdownMenuTrigger>
                                        <DropdownMenuContent>
                                            <DropdownMenuItem>Add</DropdownMenuItem>
                                            <DropdownMenuItem>Edit</DropdownMenuItem>
                                            <DropdownMenuItem>Delete</DropdownMenuItem>
                                        </DropdownMenuContent>
                                    </DropdownMenu>
                                </div>
                                <div key={1}
                                     className="border mx-1.5 my-2.5 px-3 py-2.5 flex items-center gap-3 rounded-lg text-muted-foreground transition-all hover:text-primary">
                                    <span>btn-primary</span>
                                    <DropdownMenu>
                                        <DropdownMenuTrigger className="ml-auto flex">
                                            <Plus className="h-4 w-4"/>
                                        </DropdownMenuTrigger>
                                        <DropdownMenuContent>
                                            <DropdownMenuItem>Add</DropdownMenuItem>
                                            <DropdownMenuItem>Edit</DropdownMenuItem>
                                            <DropdownMenuItem>Delete</DropdownMenuItem>
                                        </DropdownMenuContent>
                                    </DropdownMenu>
                                </div>
                                <div key={2}
                                     className="border mx-1.5 my-2.5 px-3 py-2.5 flex items-center gap-3 rounded-lg text-muted-foreground transition-all hover:text-primary">
                                    <span>btn-secondary</span>
                                    <DropdownMenu>
                                        <DropdownMenuTrigger className="ml-auto flex">
                                            <Plus className="h-4 w-4"/>
                                        </DropdownMenuTrigger>
                                        <DropdownMenuContent>
                                            <DropdownMenuItem>Add</DropdownMenuItem>
                                            <DropdownMenuItem>Edit</DropdownMenuItem>
                                            <DropdownMenuItem>Delete</DropdownMenuItem>
                                        </DropdownMenuContent>
                                    </DropdownMenu>
                                </div>
                            </div>
                        </TabsContent>
                    </Tabs>
                </div>
                <div>
                    <Card className="w-full">
                        <CardHeader>
                            <CardTitle className="text-md">Add Folder</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="grid w-full items-center gap-1.5 mt-5">
                                <Label htmlFor="email">Folder Name</Label>
                                <Input placeholder="Folder Name"/>
                            </div>
                        </CardContent>
                        <CardFooter>
                            <Button className="w-full">Save</Button>
                        </CardFooter>
                    </Card>
                </div>
                <div>
                    <Card className="w-full h-full">
                        <CardHeader>
                        </CardHeader>
                        <CardContent>

                        </CardContent>
                    </Card>
                </div>
            </div>
        </main>
    )
        ;
};

export default StatePage;