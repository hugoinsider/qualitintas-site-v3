"use client";

import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

const SUPPLIERS = [
    "/suppliers/supplier-1.webp",
    "/suppliers/supplier-2.webp",
    "/suppliers/supplier-3.webp",
    "/suppliers/supplier-4.webp",
    "/suppliers/supplier-5.webp",
    "/suppliers/supplier-6.webp",
];

export function Suppliers() {
    const [emblaRef] = useEmblaCarousel({ loop: true, align: "start", slidesToScroll: 1 }, [
        Autoplay({ delay: 2000, stopOnInteraction: false }),
    ]);

    return (
        <section className="bg-white py-16 border-y border-slate-100">
            <div className="mx-auto max-w-7xl px-4 sm:px-6">
                <h3 className="text-center font-display text-2xl font-bold text-slate-900 mb-10 uppercase tracking-wide">
                    Principais Fornecedores
                </h3>

                <div className="overflow-hidden" ref={emblaRef}>
                    <div className="flex gap-12 items-center select-none cursor-grab active:cursor-grabbing">
                        {SUPPLIERS.map((src, i) => (
                            <div key={i} className="flex-[0_0_150px] min-w-0 h-32 flex items-center justify-center grayscale hover:grayscale-0 transition-all opacity-80 hover:opacity-100">
                                <img
                                    src={src}
                                    alt={`Fornecedor ${i + 1}`}
                                    className="max-h-28 w-auto object-contain"
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
