"use client";

import { useState, useCallback, useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { Phone, Sparkles, BadgeCheck, ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

const container = "mx-auto w-full max-w-7xl px-4 sm:px-6";

const IMAGES = [
    "/store/store-1.webp",
    "/store/store-2.webp",
    "/store/store-3.webp",
    "/store/store-4.webp",
    "/store/store-5.webp",
];

function StoreCarousel() {
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
        Autoplay({ delay: 4000, stopOnInteraction: false }),
    ]);
    const [selectedIndex, setSelectedIndex] = useState(0);

    const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
    const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);
    const scrollTo = useCallback((index: number) => emblaApi && emblaApi.scrollTo(index), [emblaApi]);

    const onSelect = useCallback(() => {
        if (!emblaApi) return;
        setSelectedIndex(emblaApi.selectedScrollSnap());
    }, [emblaApi]);

    useEffect(() => {
        if (!emblaApi) return;
        onSelect();
        emblaApi.on("select", onSelect);
        emblaApi.on("reInit", onSelect);
    }, [emblaApi, onSelect]);

    return (
        <div className="relative group rounded-2xl overflow-hidden shadow-2xl shadow-slate-300/50">
            {/* Viewport */}
            <div className="overflow-hidden bg-slate-100" ref={emblaRef}>
                <div className="flex touch-pan-y">
                    {IMAGES.map((src, index) => (
                        <div className="flex-[0_0_100%] min-w-0 relative aspect-[4/3]" key={index}>
                            <img
                                src={src}
                                alt={`Showroom Qualitintas ${index + 1}`}
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60" />
                        </div>
                    ))}
                </div>
            </div>

            {/* Controls */}
            <button
                onClick={scrollPrev}
                className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/10 backdrop-blur-md border border-white/20 rounded-full flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-all hover:bg-white hover:text-primary-blue hover:scale-110"
                aria-label="Previous slide"
            >
                <ChevronLeft className="h-6 w-6" />
            </button>

            <button
                onClick={scrollNext}
                className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/10 backdrop-blur-md border border-white/20 rounded-full flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-all hover:bg-white hover:text-primary-blue hover:scale-110"
                aria-label="Next slide"
            >
                <ChevronRight className="h-6 w-6" />
            </button>

            {/* Dots */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-10">
                {IMAGES.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => scrollTo(index)}
                        className={cn(
                            "w-2.5 h-2.5 rounded-full transition-all shadow-sm",
                            index === selectedIndex
                                ? "bg-white scale-110 w-6"
                                : "bg-white/50 hover:bg-white/80"
                        )}
                        aria-label={`Go to slide ${index + 1}`}
                    />
                ))}
            </div>

            {/* Caption Overlay */}
            <div className="absolute bottom-0 left-0 p-8 w-full z-10 pointer-events-none">
                <div className="text-white">
                    <p className="font-bold text-lg drop-shadow-md">Visite nosso Showroom</p>
                    <p className="text-sm text-slate-200 drop-shadow-md">Av. César Lattes 228 Qd 100 Lt 11/12 - Goiânia/GO</p>
                </div>
            </div>
        </div>
    );
}

export function Store() {
    return (
        <section id="loja" className="bg-slate-50 dark:bg-slate-950 py-24 border-y border-slate-200 dark:border-slate-800 transition-colors">
            <div className={container}>
                <div className="grid gap-16 lg:grid-cols-2 lg:items-center">

                    {/* Carousel Section */}
                    <div className="order-2 lg:order-1">
                        <StoreCarousel />
                    </div>

                    <div className="order-1 lg:order-2">
                        <div className="inline-block px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-primary-blue text-xs font-bold rounded-full mb-6 uppercase tracking-wider">
                            Infraestrutura Completa
                        </div>

                        <h2 className="font-display text-4xl font-bold tracking-tight mb-6 text-slate-900 dark:text-white">
                            Sua loja de tintas <br />em Goiânia
                        </h2>
                        <p className="text-lg text-slate-600 dark:text-slate-400 mb-10 leading-relaxed">
                            Ambiente amplo com showroom completo, estacionamento privativo e equipe técnica altamente treinada para auxiliar em especificações complexas.
                        </p>

                        <div className="space-y-6">
                            {[
                                { title: "Tintometria Digital", desc: "Criamos a cor exata do seu projeto em minutos.", icon: <Sparkles className="h-6 w-6" /> },
                                { title: "Consultoria Técnica", desc: "Suporte especializado para grandes obras.", icon: <Phone className="h-6 w-6" /> },
                                { title: "Distribuidor Premium", desc: "Suvinil, Coral, Sherwin-Williams e mais.", icon: <BadgeCheck className="h-6 w-6" /> },
                            ].map((item, i) => (
                                <div key={i} className="flex gap-4 group">
                                    <div className="shrink-0 w-12 h-12 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg flex items-center justify-center text-industrial-orange shadow-sm group-hover:shadow-md group-hover:scale-105 transition-all duration-300">
                                        {item.icon}
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-slate-900 dark:text-white text-lg">{item.title}</h4>
                                        <p className="text-sm text-slate-600 dark:text-slate-400">{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
