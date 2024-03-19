'use client'
import Image from 'next/image';
import Headerimg from "./headerimg";

export default function Header() {
    return (
        <main className="w-full">
            <div className="border shadow flex justify-around items-center px-4 w-full">
                <div>
                    <Image
                        src="/logo.png"
                        alt="logo pion"
                        width={150}
                        height={150}
                    />
                </div>
                <div className="flex items-center gap-20">
                    <p className='hover:text-main'>Home</p>
                    <p className='hover:text-main'>About Us</p>
                    <p className='hover:text-main'>Roadmap</p>
                    <p className='hover:text-main'>Contact Us</p>
                </div>
                <div className="bg-main px-6 py-2 rounded-md">
                    <div className='flex items-center gap-2'>
                        <p className='rounded-md font-normal xl:text-base sm:text-sm text-white'>Let's Earn</p>
                        <Headerimg/>
                    </div>
                </div>
            </div>
        </main>
    )
}
