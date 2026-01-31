import { Sparkles, Layers, Wrench, Construction, ChevronRight, Droplets } from "lucide-react";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";

const container = "mx-auto w-full max-w-7xl px-4 sm:px-6";

export function Products() {
    const products = [
        {
            id: "leinertex",
            title: "Leinertex",
            desc: "Tintas e Revestimentos de alta performance para renovar seus ambientes.",
            icon: <Layers className="h-6 w-6" />,
            image: "/products/leinertex.webp",
        },
        {
            id: "coral",
            title: "Coral",
            desc: "Tintas Imobiliárias. A cor certa para pintar sua casa e sua vida.",
            icon: <Sparkles className="h-6 w-6" />,
            image: "/products/coral.webp",
        },
        {
            id: "jotun",
            title: "Jotun",
            desc: "Tintas Industriais de Alto Desempenho. Proteção líder mundial.",
            icon: <Construction className="h-6 w-6" />,
            image: "/products/jotun.webp",
        },
        {
            id: "qualisol",
            title: "Qualisol",
            desc: "Thinner e Solventes para preparação e limpeza profissional.",
            icon: <Wrench className="h-6 w-6" />,
            image: "/products/qualisol.webp",
        },
        {
            id: "hm",
            title: "HM Rubber",
            desc: "Borracha Líquida e Impermeabilizantes. Tecnologia flexível.",
            icon: <Droplets className="h-6 w-6" />,
            image: "/products/hm.webp",
        },
    ];

    return (
        <section id="produtos" className="bg-white dark:bg-slate-900 py-20 text-slate-900 dark:text-white transition-colors">
            <div className={container}>
                <div className="text-center mb-16">
                    <h2 className="font-display text-4xl font-bold tracking-tight mb-4 text-slate-900 dark:text-white">
                        Nossos Produtos
                    </h2>
                    <p className="mt-4 max-w-2xl mx-auto text-lg text-slate-600 dark:text-slate-400">
                        Trabalhamos com as marcas referência no mercado para garantir o melhor resultado e durabilidade.
                    </p>
                </div>

                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
                    {products.map((p) => (
                        <div key={p.id}>
                            <Card className="h-full p-0 overflow-hidden border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 hover:border-primary-blue/50 dark:hover:border-primary-blue/50 hover:shadow-lg transition-all group">
                                <div className="aspect-[4/3] relative overflow-hidden bg-slate-100 dark:bg-slate-900">
                                    <div className="absolute inset-0 bg-slate-900/10 group-hover:bg-transparent transition-colors z-10" />
                                    <img
                                        src={p.image}
                                        alt={p.title}
                                        className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
                                    />
                                    <div className="absolute bottom-4 left-4 bg-white/90 dark:bg-slate-900/90 backdrop-blur rounded-lg p-3 text-primary-blue shadow-sm z-20">
                                        {p.icon}
                                    </div>
                                </div>

                                <div className="p-6">
                                    <h3 className="text-xl font-bold mb-3 text-slate-900 dark:text-white">{p.title}</h3>
                                    <p className="text-sm text-slate-600 dark:text-slate-400 mb-6 leading-relaxed min-h-[60px]">
                                        {p.desc}
                                    </p>
                                    <Button variant="ghost" className="w-full justify-between items-center text-primary-blue hover:text-primary-blue hover:bg-blue-50 dark:hover:bg-blue-900/20 px-0 hover:px-4">
                                        Ver Catálogo <ChevronRight className="h-4 w-4" />
                                    </Button>
                                </div>
                            </Card>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
