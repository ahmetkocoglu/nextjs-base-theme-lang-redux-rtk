"use client"

import React from 'react';
import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card";
import FolderTree, {testData} from "@darraghor/react-folder-tree";
import "@darraghor/react-folder-tree/dist/style.css";
import {DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger} from "@/components/ui/dropdown-menu";
import {ChevronDown, MailIcon, MoveLeft, MoveRight, SquareX, User} from "lucide-react";
import {Checkbox} from "@/components/ui/checkbox";
import {Label} from "@/components/ui/label";
import {InputIcon} from "@/components/ui/input-icon";
import {Input} from "@/components/ui/input";

const LayerPage = () => {
    const onTreeStateChange = (state: any, event: any) => console.log(state, event)

    return (
        <main className="flex flex-col gap-4 p-4 lg:gap-6 lg:p-6">
            <div className="grid grid-cols-3 gap-4">
                <div className="border rounded-md">
                    <Card className="w-full h-full">
                        <CardHeader>
                            <CardTitle className="text-md">Layers</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <FolderTree data={testData} onChange={onTreeStateChange}/>
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
                <div>
                    <Card className="w-full h-full">
                        <CardHeader>
                            <CardTitle className="text-md">Style</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="grid gap-5">
                                <div key={0}
                                     className="py-1.5 flex items-center rounded-lg text-muted-foreground transition-all hover:text-primary">
                                    <span>Class</span>
                                    <DropdownMenu>
                                        <DropdownMenuTrigger className="ml-auto flex">
                                            -state-
                                        </DropdownMenuTrigger>
                                        <DropdownMenuContent>
                                            <DropdownMenuItem>Add</DropdownMenuItem>
                                            <DropdownMenuItem>Edit</DropdownMenuItem>
                                            <DropdownMenuItem>Delete</DropdownMenuItem>
                                        </DropdownMenuContent>
                                    </DropdownMenu>
                                </div>
                                <div className="border w-full grid grid-cols-2 gap-2 p-3">
                                    {[0, 2, 3, 4, 5, 6, 7].map(() => {
                                        return <div className="flex items-center justify-between border py-2.5">
                                            <div className="flex items-center space-x-2">
                                                <Checkbox id="terms"/>
                                                <label
                                                    htmlFor="terms"
                                                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                                >
                                                    class-name
                                                </label>
                                            </div>
                                            <span><SquareX className="h-4 w-4"/></span>
                                        </div>
                                    })}
                                </div>
                                <DropdownMenu>
                                    <DropdownMenuTrigger className="mr-auto flex">
                                        Settings
                                    </DropdownMenuTrigger>
                                    <DropdownMenuContent>
                                        <DropdownMenuItem>Settings</DropdownMenuItem>
                                    </DropdownMenuContent>
                                </DropdownMenu>
                                <div className="grid gap-2">
                                    <Label htmlFor="email">ID</Label>
                                    <Input
                                        id="email"
                                        type="text"
                                        placeholder="ID"
                                    />
                                </div>
                                <div className="grid gap-2">
                                    <Label htmlFor="email">Title</Label>
                                    <Input
                                        id="email"
                                        type="text"
                                        placeholder="Title"
                                    />
                                </div>
                                <DropdownMenu>
                                    <DropdownMenuTrigger className="mr-auto flex">
                                        Layout
                                    </DropdownMenuTrigger>
                                    <DropdownMenuContent>
                                        <DropdownMenuItem>Layout</DropdownMenuItem>
                                    </DropdownMenuContent>
                                </DropdownMenu>
                                <div className="grid gap-2">
                                    <Label htmlFor="email">Display</Label>
                                    <div className="flex gap-2">
                                        {[0, 2, 3, 4, 5, 6, 7].map(() => {
                                            return <div
                                                className="border rounded-md w-10 h-10 flex items-center justify-center">
                                                <SquareX className="h-4 w-4"/>
                                            </div>
                                        })}
                                    </div>
                                </div>
                                <div className="grid gap-2">
                                    <Label htmlFor="email">Float</Label>
                                    <div className="flex gap-2">
                                        <div className="border rounded-md w-1/3 h-10 flex items-center justify-center">
                                            <SquareX className="h-4 w-4"/>
                                        </div>
                                        <div className="border rounded-md w-1/3 h-10 flex items-center justify-center">
                                            <MoveLeft className="h-4 w-4"/>
                                        </div>
                                        <div className="border rounded-md w-1/3 h-10 flex items-center justify-center">
                                            <MoveRight className="h-4 w-4"/>
                                        </div>
                                    </div>
                                </div>
                                <DropdownMenu>
                                    <DropdownMenuTrigger className="mr-auto flex">
                                        Dimensions
                                    </DropdownMenuTrigger>
                                    <DropdownMenuContent>
                                        <DropdownMenuItem>Dimensions</DropdownMenuItem>
                                    </DropdownMenuContent>
                                </DropdownMenu>
                                <div className="grid gap-2">
                                    <Label htmlFor="email">Width</Label>
                                    <div className="flex gap-2 border rounded-md pr-3">
                                        <Input
                                            id="email"
                                            type="email"
                                            placeholder=""
                                            className="border-0"
                                        />
                                        <DropdownMenu>
                                            <DropdownMenuTrigger className="mt-3 mr-auto flex">
                                                <ChevronDown className="h-4 w-4"/>
                                            </DropdownMenuTrigger>
                                            <DropdownMenuContent>
                                                <DropdownMenuItem>Dimensions</DropdownMenuItem>
                                            </DropdownMenuContent>
                                        </DropdownMenu>
                                    </div>
                                </div>
                                <div className="grid gap-2">
                                    <Label htmlFor="email">Height</Label>
                                    <div className="flex gap-2 border rounded-md pr-3">
                                        <Input
                                            id="email"
                                            type="email"
                                            placeholder=""
                                            className="border-0"
                                        />
                                        <DropdownMenu>
                                            <DropdownMenuTrigger className="mt-3 mr-auto flex">
                                                <ChevronDown className="h-4 w-4"/>
                                            </DropdownMenuTrigger>
                                            <DropdownMenuContent>
                                                <DropdownMenuItem>Dimensions</DropdownMenuItem>
                                            </DropdownMenuContent>
                                        </DropdownMenu>
                                    </div>
                                </div>
                                <DropdownMenu>
                                    <DropdownMenuTrigger className="mr-auto flex">
                                        Spacing
                                    </DropdownMenuTrigger>
                                    <DropdownMenuContent>
                                        <DropdownMenuItem>Spacing</DropdownMenuItem>
                                    </DropdownMenuContent>
                                </DropdownMenu>
                                <Label htmlFor="email">Margin</Label>
                                <div className="grid grid-cols-2 gap-2">
                                    <div>
                                        <Label htmlFor="email">Top</Label>
                                        <div className="flex gap-2 border rounded-md pr-3">
                                            <Input
                                                id="email"
                                                type="email"
                                                placeholder=""
                                                className="border-0"
                                            />
                                            <DropdownMenu>
                                                <DropdownMenuTrigger className="mt-3 mr-auto flex">
                                                    <ChevronDown className="h-4 w-4"/>
                                                </DropdownMenuTrigger>
                                                <DropdownMenuContent>
                                                    <DropdownMenuItem>-</DropdownMenuItem>
                                                </DropdownMenuContent>
                                            </DropdownMenu>
                                        </div>
                                    </div>
                                    <div>
                                        <Label htmlFor="email">Left</Label>
                                        <div className="flex gap-2 border rounded-md pr-3">
                                            <Input
                                                id="email"
                                                type="email"
                                                placeholder=""
                                                className="border-0"
                                            />
                                            <DropdownMenu>
                                                <DropdownMenuTrigger className="mt-3 mr-auto flex">
                                                    <ChevronDown className="h-4 w-4"/>
                                                </DropdownMenuTrigger>
                                                <DropdownMenuContent>
                                                    <DropdownMenuItem>-</DropdownMenuItem>
                                                </DropdownMenuContent>
                                            </DropdownMenu>
                                        </div>
                                    </div>
                                </div>
                                <div className="grid grid-cols-2 gap-2">
                                    <div>
                                        <Label htmlFor="email">Bottom</Label>
                                        <div className="flex gap-2 border rounded-md pr-3">
                                            <Input
                                                id="email"
                                                type="email"
                                                placeholder=""
                                                className="border-0"
                                            />
                                            <DropdownMenu>
                                                <DropdownMenuTrigger className="mt-3 mr-auto flex">
                                                    <ChevronDown className="h-4 w-4"/>
                                                </DropdownMenuTrigger>
                                                <DropdownMenuContent>
                                                    <DropdownMenuItem>-</DropdownMenuItem>
                                                </DropdownMenuContent>
                                            </DropdownMenu>
                                        </div>
                                    </div>
                                    <div>
                                        <Label htmlFor="email">Right</Label>
                                        <div className="flex gap-2 border rounded-md pr-3">
                                            <Input
                                                id="email"
                                                type="email"
                                                placeholder=""
                                                className="border-0"
                                            />
                                            <DropdownMenu>
                                                <DropdownMenuTrigger className="mt-3 mr-auto flex">
                                                    <ChevronDown className="h-4 w-4"/>
                                                </DropdownMenuTrigger>
                                                <DropdownMenuContent>
                                                    <DropdownMenuItem>-</DropdownMenuItem>
                                                </DropdownMenuContent>
                                            </DropdownMenu>
                                        </div>
                                    </div>
                                </div>
                                <div className="border w-full h-72"></div>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </main>
    )
        ;
};

export default LayerPage;