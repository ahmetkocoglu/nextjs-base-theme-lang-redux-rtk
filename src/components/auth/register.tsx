import React from 'react';
import {Label} from "@/components/ui/label";
import Link from "next/link";
import {Button} from "@/components/ui/button";
import Image from "next/image";
import {InputIcon} from "@/components/ui/input-icon";
import {Lock, MailIcon, User, Phone, Building} from "lucide-react";

const Register = () => {
    return (
        <>
            <div className="w-full min-h-screen lg:grid lg:grid-cols-2">
                <div className="flex items-center justify-center py-12">
                    <div className="mx-auto grid w-[350px] gap-6">
                        <div className="grid gap-2 text-center">
                            <h1 className="text-3xl font-bold">Welcome to Autanate!</h1>
                        </div>
                        <div className="grid gap-4">
                            <div className="grid grid-cols-2 gap-4">
                                <div className="grid gap-2">
                                    <Label htmlFor="email">Name</Label>
                                    <InputIcon
                                        id="email"
                                        type="email"
                                        startIcon={User}
                                        placeholder="Name"
                                        required
                                    />
                                </div>
                                <div className="grid gap-2">
                                    <Label htmlFor="email">Surname</Label>
                                    <InputIcon
                                        id="email"
                                        type="email"
                                        startIcon={User}
                                        placeholder="Surname"
                                        required
                                    />
                                </div>
                            </div>
                            <div className="grid gap-2">
                                <Label htmlFor="email">Company Name</Label>
                                <InputIcon
                                    id="email"
                                    type="email"
                                    startIcon={Building}
                                    placeholder="Company Name"
                                    required
                                />
                            </div>
                            <div className="grid gap-2">
                                <Label htmlFor="email">Email</Label>
                                <InputIcon
                                    id="email"
                                    type="email"
                                    startIcon={MailIcon}
                                    placeholder="m@example.com"
                                    required
                                />
                            </div>
                            <div className="grid gap-2">
                                <Label htmlFor="email">Phone</Label>
                                <InputIcon
                                    id="email"
                                    type="email"
                                    startIcon={Phone}
                                    placeholder="Phone"
                                    required
                                />
                            </div>
                            <div className="grid gap-2">
                                <Label htmlFor="email">Password</Label>
                                <InputIcon
                                    id="email"
                                    type="password"
                                    startIcon={Lock}
                                    placeholder="Password"
                                    required
                                />
                            </div>
                            <Button type="submit" className="w-full">
                                Sign up
                            </Button>
                        </div>
                        <div className="mt-4 text-center text-sm">
                            Don&apos;t have an account?{" "}
                            <Link href="/en/login" className="underline">
                                Sign in
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="hidden bg-muted lg:flex items-center">
                    <Image
                        src="/001.png"
                        alt="Image"
                        width={500}
                        height={500}
                        className="w-full object-cover dark:brightness-[0.2] dark:grayscale"
                    />
                </div>
            </div>
        </>
    );
};

export default Register;