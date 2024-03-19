import Image from 'next/image';
import Headerimg from "./headerimg";

export default function Header() {
    return (
        <main className="w-full">
                <div className="border shadow flex justify-around items-center px-4 w-full">
                    <div>
                        <a href="#">
                            <Image
                                src="/logo.png"
                                alt="Next.js Logo"
                                width={150}
                                height={150}
                            />
                        </a>
                    </div>
                    <div className="flex items-center gap-20">
                        <p className='hover:text-main'><a className='text-main' href="">Home</a></p>
                        <p className='hover:text-main'><a href="">About Us</a></p>
                        <p className='hover:text-main'><a href="">Roadmap</a></p>
                        <p className='hover:text-main'><a href="">Contact Us</a></p>
                    </div>
                    <div className="bg-main px-6 py-2 rounded-md">
                        <a className='flex items-center gap-2' href="#">
                            <p className='rounded-md font-normal xl:text-base sm:text-sm text-white'>Let's Earn</p>
                            <Headerimg/>
                        </a>
                    </div>
                </div>
        </main>
    )
}
