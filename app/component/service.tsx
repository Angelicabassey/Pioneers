'use client'
import Serviceup from "./serviceup";
import Simg from "./simg";
import Servarrow from "./servarrow";

export default function Service() {
    return (
        <main>
            <h3 className='font-meduim text-main px-20 text-2xl w-4/12'>Take a Glance at Our Features</h3>
            <div className='flex justify-between- px-20 gap-24 my-10'>
                <div className='flex flex-row bg-main gap-20 p-8 shadow-lg rounded-3xl w-12/12- h-56'>
                    <div className="flex flex-col gap-8">
                        <div>
                            <h3 className="font-meduim text-xl">Learn & Earn</h3>
                            <p className=" w-48 my-2">Lorem ipsum dolor sit amet consectetur.</p>
                        </div>
                        <button className="flex items-center gap-4"><Serviceup /> Learn more</button>
                    </div>
                    <Simg />
                </div>
                <div className='flex flex-row justify-between gap-10 p-8 border shadow-xl rounded-3xl w-12/12- h-56'>
                    <div className="flex flex-col gap-8">
                        <div>
                            <h3 className="font-meduim text-xl">Learn & Earn</h3>
                            <p className=" w-48 my-2">Lorem ipsum dolor sit amet consectetur.</p>
                        </div>
                        <button className="flex items-center gap-4"><Servarrow /> Learn more</button>
                    </div>
                    <Simg />
                </div>
            </div>

            <div className='flex px-20 gap-24 my-10'>
                <div className='flex flex-row gap-20 p-8 shadow-lg rounded-3xl w-12/12- h-56'>
                    <div className="flex flex-col gap-8">
                        <div>
                            <h3 className="font-meduim text-xl">Learn & Earn</h3>
                            <p className=" w-48 my-2">Lorem ipsum dolor sit amet consectetur.</p>
                        </div>
                        <button className="flex items-center gap-4"><Servarrow/> Learn more</button>
                    </div>
                    <Simg />
                </div>
                <div className='flex flex-row bg-main justify-between gap-10 p-8 border shadow-xl rounded-3xl w-12/12- h-56'>
                    <div className="flex flex-col gap-8">
                        <div>
                            <h3 className="font-meduim text-xl">Learn & Earn</h3>
                            <p className=" w-48 my-2">Lorem ipsum dolor sit amet consectetur.</p>
                        </div>
                        <button className="flex items-center gap-4"><Serviceup /> Learn more</button>
                    </div>
                    <Simg />
                </div>
            </div>
        </main >
    );
}