"use client";
import React from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export const Navbar = () => {
    const [isOpen, setIsOpen] = React.useState(false);

    const navs = [
        { name: "Sobre", href: "#about" },
        { name: "Projetos", href: "#projects" },
        { name: "Skills", href: "#skills" },
        { name: "Contato", href: "#contact" },
    ];

    return (
        <nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-background/80 backdrop-blur-md">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex items-center">
                        <Link href="/" className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
                            Mateus Sonnenberg
                        </Link>
                    </div>
                    <div className="hidden md:block">
                        <div className="ml-10 flex items-baseline space-x-8">
                            {navs.map((nav) => (
                                <Link
                                    key={nav.name}
                                    href={nav.href}
                                    className="text-gray-300 hover:text-white hover:bg-white/5 transition-all duration-300 px-3 py-2 rounded-md text-sm font-medium"
                                >
                                    {nav.name}
                                </Link>
                            ))}
                        </div>
                    </div>
                    <div className="-mr-2 flex md:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none"
                        >
                            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                        </button>
                    </div>
                </div>
            </div>
            {isOpen && (
                <div className="md:hidden bg-background border-b border-white/5">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        {navs.map((nav) => (
                            <Link
                                key={nav.name}
                                href={nav.href}
                                className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                                onClick={() => setIsOpen(false)}
                            >
                                {nav.name}
                            </Link>
                        ))}
                    </div>
                </div>
            )}
        </nav>
    );
};
