import Image from "next/image";
import React from "react";

import timeManagementImage from "../public/task-management-concept.jpg"

const HeroSection = () => {
    return (
        <div className='bg-red-50 p-10 rounded-3xl flex gap-6 items-center'>
            <div className='flex flex-col gap-6 flex-1 text-center'>
                <h1 className='text-4xl font-bold dark:text-black'>Boost Your Productivity with the
                    <br />
                    Ultimate Task Management App
                    <br />
                    <span><span className="text-red-600">K</span>aizen</span>
                </h1>
                <p className="dark:text-black text-xl">Stay organized, meet deadlines, and collaborate effortlessly
                    <br />
                    whether you're a student, freelancer, or business professional.</p>
            </div>
            <div className='flex-1'>
                <Image src={timeManagementImage} alt='Time Management Image' className='rounded-2xl' />
            </div>
        </div>
    );
};

export default HeroSection;