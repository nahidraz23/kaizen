"use client";
import Image from "next/image";
import React from "react";

import timeManagementImage from "../public/task-management-concept.jpg"
import { Button } from "@heroui/button";
import { Link } from "@heroui/link";

const HeroSection = () => {
    return (
        <div className='dark:bg-slate-800 bg-blue-50 p-10 rounded-3xl flex gap-6 items-center'>
            <div className='flex flex-col gap-6 flex-1 '>
                <h1 className='text-4xl font-bold'>Boost Your Productivity with the
                    <br />
                    Ultimate Task Management App
                    <br />
                    <span><span className="text-red-600">K</span>aizen</span>
                </h1>
                <p className="text-xl">Stay organized, meet deadlines, and collaborate effortlessly.</p>
                <div>
                    <Button
                        className="bg-red-500 text-white shadow-lg text-lg"
                        radius="lg"
                        as={Link}
                        href="/signin"
                    >
                        Get Started For Free
                    </Button>
                </div>
            </div>
            <div className='flex-1'>
                <Image src={timeManagementImage} alt='Time Management Image' className='rounded-2xl' />
            </div>
        </div>
    );
};

export default HeroSection;