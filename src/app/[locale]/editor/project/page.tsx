"use client"

import React, {useState} from 'react';
import {Card, CardContent, CardFooter, CardHeader, CardTitle} from "@/components/ui/card";
import {Label} from "@/components/ui/label";
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectTrigger,
    SelectValue
} from "@/components/ui/select";
import {EllipsisVertical, CalendarDays} from "lucide-react";
import {Button} from "@/components/ui/button";
import {
    DropdownMenu,
    DropdownMenuContent, DropdownMenuItem,
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

const projects = ["Page 1", "Page 2", "Page 3", "Page 4", "Page 5",]
const histories = [1, 2, 3, 4, 5, 6, 7, 8, 9]

const ProjectPage = () => {
    const [position, setPosition] = useState("bottom")

    return (
        <main className="flex flex-col gap-4 p-4 lg:gap-6 lg:p-6">
            <div className="grid grid-cols-3 gap-4">
                <div>
                    <Card className="w-full h-full">
                        <CardHeader>
                            <CardTitle className="text-md">Project</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <ul>
                                {projects.map((k: string, index: number) => {
                                    return <li key={index}
                                               className="border-b py-1.5 flex items-center gap-3 rounded-lg text-muted-foreground transition-all hover:text-primary">
                                        <span>{k}</span>
                                        <DropdownMenu>
                                            <DropdownMenuTrigger className="ml-auto flex"><EllipsisVertical
                                                className="h-4 w-4"/></DropdownMenuTrigger>
                                            <DropdownMenuContent>
                                                <DropdownMenuItem>Make Home Page</DropdownMenuItem>
                                                <DropdownMenuItem>Make 404 Page</DropdownMenuItem>
                                                <DropdownMenuItem>Add State</DropdownMenuItem>
                                                <DropdownMenuItem>Rename</DropdownMenuItem>
                                                <DropdownMenuItem>Duplicate</DropdownMenuItem>
                                                <DropdownMenuItem>Hide</DropdownMenuItem>
                                                <DropdownMenuItem>Copy</DropdownMenuItem>
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
                                <Select>
                                    <SelectTrigger className="w-full">
                                        <SelectValue placeholder="State"/>
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectGroup>
                                            <SelectItem value="apple">State 1</SelectItem>
                                            <SelectItem value="banana">State 2</SelectItem>
                                            <SelectItem value="blueberry">State 3</SelectItem>
                                        </SelectGroup>
                                    </SelectContent>
                                </Select>
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
                    <Card className="w-full">
                        <CardHeader>
                            <CardTitle className="text-md">Version History</CardTitle>
                        </CardHeader>
                        <CardContent>
                            {histories.map((k: number, index: number) => {
                                return <div key={index}
                                            className="flex w-full border border-white/30 rounded-sm mb-4 px-3 py-2 text-md font-light">
                                    <div className="flex-none w-10 h-10">
                                        <Image src="/images/user.png" alt="test" width={40} height={40}/>
                                    </div>
                                    <div className="grow h-10 px-2 leading-tight">
                                        <h4 className="text-sm">Auto Saved Version</h4>
                                        <div className="text-sm flex">
                                            <CalendarDays className="h-4 w-4 mr-2"/>
                                            <small>Feb 07, 2023, 01:30 PM</small>
                                        </div>
                                    </div>
                                    <div className="flex-none w-14 h-10">
                                        Restore
                                    </div>
                                </div>
                            })}
                        </CardContent>
                    </Card>
                </div>
            </div>
        </main>
    )
        ;
};

export default ProjectPage;