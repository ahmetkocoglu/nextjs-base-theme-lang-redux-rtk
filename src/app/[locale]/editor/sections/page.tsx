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
import Image from "next/image";

const projects = ["State 1", "State 2", "State 3", "State 4", "State 5",]
const histories = [1, 2, 3, 4, 5, 6, 7, 8, 9]

const SectionPage = () => {
    const [position, setPosition] = useState("bottom")

    return (
        <main className="flex flex-col gap-4 p-4 lg:gap-6 lg:p-6">
            <div className="grid grid-cols-3 gap-4">
                <div className="border rounded-md">
                    <Tabs defaultValue="account" className="w-full">
                        <TabsList className="grid w-full grid-cols-2">
                            <TabsTrigger value="account">Sections</TabsTrigger>
                            <TabsTrigger value="password">My Sections</TabsTrigger>
                        </TabsList>
                        <TabsContent value="account">
                            <div className="my-2">
                                <Select>
                                    <SelectTrigger className="w-full">
                                        <SelectValue placeholder="Header"/>
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectGroup>
                                            <SelectItem value="apple">Header</SelectItem>
                                            <SelectItem value="banana">HeroPage</SelectItem>
                                        </SelectGroup>
                                    </SelectContent>
                                </Select>
                            </div>
                            <div className="py-2.5">
                                <Image
                                    src="/header-01.png"
                                    alt="Image"
                                    width={1500}
                                    height={100}
                                    className="w-full object-cover dark:brightness-[0.2] dark:grayscale"
                                />
                            </div>
                            <div className="py-2.5">
                                <Image
                                    src="/header-02.png"
                                    alt="Image"
                                    width={1500}
                                    height={100}
                                    className="w-full object-cover dark:brightness-[0.2] dark:grayscale"
                                />
                            </div>
                            <div className="py-2.5">
                                <Image
                                    src="/header-03.png"
                                    alt="Image"
                                    width={1500}
                                    height={100}
                                    className="w-full object-cover dark:brightness-[0.2] dark:grayscale"
                                />
                            </div>
                            <div className="py-2.5">
                                <Image
                                    src="/header-04.png"
                                    alt="Image"
                                    width={1500}
                                    height={100}
                                    className="w-full object-cover dark:brightness-[0.2] dark:grayscale"
                                />
                            </div>
                            <div className="my-2">
                                <Select>
                                    <SelectTrigger className="w-full">
                                        <SelectValue placeholder="HeroPage"/>
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectGroup>
                                            <SelectItem value="banana">HeroPage</SelectItem>
                                            <SelectItem value="apple">Header</SelectItem>
                                        </SelectGroup>
                                    </SelectContent>
                                </Select>
                            </div>
                            <div className="py-2.5">
                                <Image
                                    src="/hero-01.png"
                                    alt="Image"
                                    width={1500}
                                    height={100}
                                    className="w-full object-cover dark:brightness-[0.2] dark:grayscale"
                                />
                            </div>
                            <div className="py-2.5">
                                <Image
                                    src="/hero-02.png"
                                    alt="Image"
                                    width={1500}
                                    height={100}
                                    className="w-full object-cover dark:brightness-[0.2] dark:grayscale"
                                />
                            </div>
                        </TabsContent>
                        <TabsContent value="password">
                            <div className="my-2">
                                <h1>My Components</h1>
                            </div>
                            <div className="my-2"></div>
                        </TabsContent>
                    </Tabs>
                </div>
                <div>
                    <Card className="w-full h-full">
                        <CardHeader>
                        </CardHeader>
                        <CardContent>

                        </CardContent>
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

export default SectionPage;