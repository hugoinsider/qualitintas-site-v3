"use client";

import {
    Clock,
    MapPin,
    Phone,
    MessageSquareText,
    Droplets,
    Menu,
    X
} from "lucide-react";
import { Button } from "@/components/ui/Button";
import { useState } from "react";
import Image from "next/image";

const container = "mx-auto w-full max-w-7xl px-4 sm:px-6";

function BrandMark() {
    return (
        <div className="flex items-center gap-3 group cursor-pointer">
            <div className="grid place-items-center text-white rounded-lg">
                {/* <Droplets className="h-5 w-5" strokeWidth={2.5} /> */}
                <Image src="/logo.webp" alt="Logo" width={150} height={250} />
            </div>
            {/* <div className="leading-tight">
                <div className="font-display text-lg font-bold tracking-tight text-slate-900">
                    Qualitintas
                </div>
                <div className="text-xs text-slate-500 font-medium tracking-wide">
                    Qualidade em cada gota
                </div>
            </div> */}
        </div>
    );
}

function TopBar() {
    return (
        <div className="border-b border-slate-200 bg-slate-50 hidden md:block">
            <div className={`${container} flex flex-col gap-2 py-2 sm:flex-row sm:items-center sm:justify-between`}>
                <div className="flex flex-wrap items-center gap-x-6 gap-y-1 text-xs font-medium text-slate-600">
                    <div className="flex items-center gap-2">
                        <Clock className="h-3 w-3 text-industrial-orange" />
                        <span>Seg–Sex: 08:00–18:00 • Sáb: 08:00–13:00</span>
                    </div>
                    <div className="hidden sm:block text-slate-300">|</div>
                    <a href="#contato" className="inline-flex items-center gap-2 hover:text-primary-blue transition-colors">
                        <Phone className="h-3 w-3 text-industrial-orange" />
                        <span>(19) 3213-4455</span>
                    </a>
                </div>
                <div className="flex items-center gap-2">
                    <a
                        href="#mapa"
                        className="inline-flex items-center gap-2 px-3 py-1 text-xs font-semibold text-primary-blue hover:text-primary-blue/80 hover:bg-white rounded-full transition-colors"
                    >
                        <MapPin className="h-3 w-3" />
                        <span>Como chegar</span>
                    </a>
                </div>
            </div>
        </div>
    );
}

import { ThemeToggle } from "@/components/ui/ThemeToggle";
import { FontSizeToggle } from "@/components/ui/FontSizeToggle";
import { WhatsAppIcon } from "@/components/ui/WhatsAppIcon";

// ... existing imports

export function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const items = [
        { label: "Linha de Produtos", href: "#produtos" },
        { label: "Nossa Unidade", href: "#loja" },
        { label: "Localização", href: "#mapa" },
        { label: "Atendimento", href: "#contato" },
    ];

    return (
        <>
            <TopBar />
            <header className="sticky top-0 z-50 border-b border-slate-200 dark:border-slate-800 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md shadow-sm transition-colors">
                <div className={`${container} flex items-center justify-between py-3`}>
                    <a href="#top" className="shrink-0">
                        <BrandMark />
                    </a>

                    {/* Desktop Nav */}
                    <nav className="hidden items-center gap-1 md:flex">
                        {items.map((it) => (
                            <a
                                key={it.href}
                                href={it.href}
                                className="px-4 py-2 text-sm font-medium text-slate-600 dark:text-slate-300 transition-all hover:text-primary-blue hover:bg-slate-50 dark:hover:bg-slate-800 rounded-md"
                            >
                                {it.label}
                            </a>
                        ))}
                    </nav>

                    <div className="hidden md:flex items-center gap-3">
                        <div className="flex items-center gap-2 border-r border-slate-200 dark:border-slate-700 pr-3 mr-1">
                            <FontSizeToggle />
                            <ThemeToggle />
                        </div>

                        <Button
                            variant="secondary"
                            size="sm"
                            className="font-bold shadow-md"
                            onClick={() => window.open("https://api.whatsapp.com/send/?phone=5562983240125&text=Ol%C3%A1%2C+vim+atrav%C3%A9s+do+site%21+Pode+me+ajudar&type=phone_number&app_absent=0", "_blank")}
                        >
                            Orçamento WhatsApp
                            <WhatsAppIcon className="ml-2 h-4 w-4" />
                        </Button>
                    </div>

                    {/* Mobile Menu Toggle */}
                    <div className="flex items-center gap-2 md:hidden">
                        <ThemeToggle />
                        <button
                            className="p-2 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-md"
                            onClick={() => setIsOpen(!isOpen)}
                        >
                            {isOpen ? <X /> : <Menu />}
                        </button>
                    </div>
                </div>

                {/* Mobile Nav */}
                {isOpen && (
                    <div className="md:hidden border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900">
                        <nav className="flex flex-col p-4 space-y-2">
                            {items.map((it) => (
                                <a
                                    key={it.href}
                                    href={it.href}
                                    onClick={() => setIsOpen(false)}
                                    className="px-4 py-3 text-sm font-medium text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-800 hover:text-primary-blue rounded-md transition-all"
                                >
                                    {it.label}
                                </a>
                            ))}
                            <div className="pt-4 flex flex-col gap-3">
                                <div className="flex justify-center">
                                    <FontSizeToggle />
                                </div>
                                <Button className="w-full" variant="secondary" onClick={() => window.open("https://api.whatsapp.com/send/?phone=5562983240125&text=Ol%C3%A1%2C+vim+atrav%C3%A9s+do+site%21+Pode+me+ajudar&type=phone_number&app_absent=0", "_blank")}>
                                    WhatsApp <WhatsAppIcon className="ml-2 h-4 w-4" />
                                </Button>
                            </div>
                        </nav>
                    </div>
                )}
            </header>
        </>
    );
}
