import React from 'react';
import {Label} from "@/components/ui/label";
import {Input} from "@/components/ui/input";
import Link from "next/link";
import {Button} from "@/components/ui/button";
import Image from "next/image";
import {InputIcon} from "@/components/ui/input-icon";
import {Lock, MailIcon} from "lucide-react";
import {Checkbox} from "@/components/ui/checkbox";

const Login = () => {
    return (
        <>
            <div className="w-full min-h-screen lg:grid lg:grid-cols-2">
                <div className="flex items-center justify-center py-12">
                    <div className="mx-auto grid w-[350px] gap-6">
                        <div className="grid gap-2 text-center">
                            <h1 className="text-3xl font-bold">Log in to your account</h1>
                        </div>
                        <div className="grid gap-4">
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
                                <Label htmlFor="password">Forgot password?</Label>
                                <InputIcon startIcon={Lock} type="password" placeholder="Password"/>
                                <div className="flex items-center my-1.5 mx-1">
                                    <div className="flex items-center space-x-2">
                                        <Checkbox id="terms"/>
                                        <label
                                            htmlFor="terms"
                                            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                        >
                                            Remember me
                                        </label>
                                    </div>
                                    <Link
                                        href="/forgot-password"
                                        className="ml-auto inline-block text-sm underline"
                                    >
                                        Forgot your password?
                                    </Link>
                                </div>
                            </div>
                            <Button type="submit" className="w-full">
                                Login
                            </Button>
                        </div>
                        <div className="mt-4 text-center text-sm">
                            Don&apos;t have an account?{" "}
                            <Link href="/en/register" className="underline">
                                Sign up
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

export default Login;