import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";

const Home: NextPage = () => {
    return (
        <div className="w-full h-screen py-12">
            <div className="max-w-xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="lg:text-center">
                    <h2 className="text-base text-red-500 font-semibold">
                        Good Morning
                    </h2>
                    <p className="mt-2 text-blue-800 text-3xl leading-8 font-extrabold tracking-tight sm:text-4xl">
                        Welcome to Sling Academy
                    </p>
                </div>

                <div className="mt-10 space-y-10 lg:space-y-0 lg:grid lg:grid-cols-4 lg:gap-x-8 lg:gap-y-10">
                    <div className="bg-amber-500 cursor-pointer text-white p-4 rounded-md text-center shadow-xl">
                        <div className="mt-2 font-bold">John Doe</div>
                        <div className="font-light">Some description</div>
                    </div>

                    <div className="bg-red-500 cursor-pointer text-white p-4 rounded-md text-center shadow-xl">
                        <div className="mt-2 font-bold">John Doe</div>
                        <div className="font-light">Some description</div>
                    </div>

                    <div className="bg-green-500 cursor-pointer text-white p-4 rounded-md text-center shadow-xl">
                        <div className="mt-2 font-bold">John Doe</div>
                        <div className="font-light">Some description</div>
                    </div>

                    <div className="bg-purple-500 cursor-pointer text-white p-4 rounded-md text-center shadow-xl">
                        <div className="mt-2 font-bold">John Doe</div>
                        <div className="font-light">Some description</div>
                    </div>
                </div>
            </div>

            <footer className="flex h-24 w-full items-center justify-center border-t">
                <a
                    className="flex items-center justify-center gap-2"
                    href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Powered by{" "}
                    <Image
                        src="/vercel.svg"
                        alt="Vercel Logo"
                        width={72}
                        height={16}
                    />
                </a>
            </footer>
        </div>
    );
};

export default Home;
