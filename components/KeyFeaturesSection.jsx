import React from 'react';
import Productivity from "../public/productivity.jpg"
import Image from 'next/image';
import { FaRegCircleCheck } from "react-icons/fa6";

const KeyFeaturesSection = () => {
    return (
        <div className='flex items-center gap-6 my-24'>
            <div className='flex-1'>
                <Image src={Productivity} className='rounded-2xl'/>
            </div>
            <div className='flex flex-col flex-1 gap-6'>
                <h1 className='text-5xl font-bold '>Key Features of <br />Our Productivity Hub</h1>
                <hr className='border-red-500'/>
                <ul className='text-2xl space-y-4'>
                    <li className='flex flex-col '>
                        <div className='flex items-center gap-2'>
                            <FaRegCircleCheck />
                            Task Management Simplified
                        </div>
                        <div className='ml-9'>
                            <small>Easily create, edit, and categorize tasks for better organization.</small>
                        </div>
                    </li>
                    <li className='flex flex-col '>
                        <div className='flex items-center gap-2'>
                            <FaRegCircleCheck />
                            Team Collaboration
                        </div>
                        <div className='ml-9'>
                            <small>Assign tasks, track progress, and work together seamlessly.</small>
                        </div>
                    </li>
                    <li className='flex flex-col '>
                        <div className='flex items-center gap-2'>
                            <FaRegCircleCheck />
                            Deadline Reminders & Notifications
                        </div>
                        <div className='ml-9'>
                            <small>Never miss an important task with smart reminders.</small>
                        </div>
                    </li>
                    <li className='flex flex-col '>
                        <div className='flex items-center gap-2'>
                            <FaRegCircleCheck />
                            Task Prioritization
                        </div>
                        <div className='ml-9'>
                        <small>Focus on what matters most with high, medium, and low-priority tasks.</small>
                        </div>
                    </li>
                    <li className='flex flex-col '>
                        <div className='flex items-center gap-2'>
                            <FaRegCircleCheck />
                            Progress Tracking & Analytics
                        </div>
                        <div className='ml-9'>
                            <small>Visualize your productivity with insightful dashboards.</small>
                        </div>
                    </li>
                    <li className='flex flex-col '>
                        <div className='flex items-center gap-2'>
                            <FaRegCircleCheck />
                            Secure & Cross-Platform
                        </div>
                        <div className='ml-9'>
                            <small>Access your tasks anytime, anywhere on web and mobile.</small>
                        </div>
                    </li>
                    
                </ul>
            </div>
        </div>
    );
};

export default KeyFeaturesSection;