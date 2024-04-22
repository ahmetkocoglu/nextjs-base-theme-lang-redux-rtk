"use client"

import React, {useState} from 'react';
import {Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle} from "@/components/ui/card";
import {Label} from "@/components/ui/label";
import {Input} from "@/components/ui/input";
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue
} from "@/components/ui/select";
import {EllipsisVertical, CalendarDays, Plus} from "lucide-react";
import {Button} from "@/components/ui/button";
import {
    DropdownMenu,
    DropdownMenuContent, DropdownMenuItem,
    DropdownMenuLabel, DropdownMenuRadioGroup, DropdownMenuRadioItem,
    DropdownMenuSeparator,
    DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";
import {
    Breadcrumb, BreadcrumbEllipsis,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList, BreadcrumbPage,
    BreadcrumbSeparator
} from "@/components/ui/breadcrumb";
import {Textarea} from "@/components/ui/textarea";
import Image from "next/image";

const projects = ["State 1", "State 2", "State 3", "State 4", "State 5",]
const histories = [1, 2, 3, 4, 5, 6, 7, 8, 9]

const StatePage = () => {
    const [position, setPosition] = useState("bottom")

    return (
        <main className="flex flex-col gap-4 p-4 lg:gap-6 lg:p-6">
            <div className="grid grid-cols-3 gap-4">
                <div>
                    <Card className="w-full h-full">
                        <CardHeader>
                            <CardTitle className="text-md">
                                States
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <ul>
                                <li key={0}
                                    className="border-b py-1.5 flex items-center gap-3 rounded-lg text-muted-foreground transition-all hover:text-primary">
                                        <span>State</span>
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
                                </li>
                                {projects.map((k: string, index: number) => {
                                    return <li key={index}
                                               className="border-b py-1.5 flex items-center gap-3 rounded-lg text-muted-foreground transition-all hover:text-primary">
                                        <span>{k}</span>
                                        <DropdownMenu>
                                            <DropdownMenuTrigger className="ml-auto flex">
                                                <EllipsisVertical className="h-4 w-4"/>
                                            </DropdownMenuTrigger>
                                            <DropdownMenuContent>
                                                <DropdownMenuItem>Add</DropdownMenuItem>
                                                <DropdownMenuItem>Edit</DropdownMenuItem>
                                                <DropdownMenuItem>Delete</DropdownMenuItem>
                                            </DropdownMenuContent>
                                        </DropdownMenu>
                                    </li>
                                })}
                            </ul>
                        </CardContent>
                        <CardFooter className="flex justify-between">
                            {/*<Button variant="outline">Cancel</Button>
                            <Button>Deploy</Button>*/}
                        </CardFooter>
                    </Card>
                </div>
                <div>
                    <Card className="w-full">
                        <CardHeader>
                            <CardTitle className="text-md">Add State</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <Breadcrumb>
                                <BreadcrumbList>
                                    <BreadcrumbItem>
                                        <BreadcrumbLink href="/">Linked to</BreadcrumbLink>
                                    </BreadcrumbItem>
                                    <BreadcrumbSeparator/>
                                    <BreadcrumbItem>
                                        <BreadcrumbPage>Page 1</BreadcrumbPage>
                                    </BreadcrumbItem>
                                </BreadcrumbList>
                            </Breadcrumb>
                            <div className="grid w-full items-center gap-1.5 mt-5">
                                <Label htmlFor="email">State Name</Label>
                                <Input placeholder="State Name" />
                            </div>
                            <div className="grid w-full items-center gap-1.5 mt-5">
                                <Label htmlFor="email">State Description</Label>
                                <Textarea className="w-full" placeholder="Placeholder"/>
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
                            <CardTitle className="text-md">Version History</CardTitle>
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