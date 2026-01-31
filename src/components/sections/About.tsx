export function About() {
    return (
        <section id="sobre" className="py-24 bg-slate-50 dark:bg-slate-950 transition-colors">
            <div className="mx-auto max-w-7xl px-4 sm:px-6">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <div className="space-y-6">
                        <h2 className="font-display text-4xl font-bold text-slate-900 dark:text-white tracking-tight">
                            Sobre Nós
                        </h2>
                        <div className="w-20 h-1.5 bg-primary-blue rounded-full" />

                        <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed text-justify">
                            A <strong>Qualitintas</strong> é uma empresa no mercado há 07 anos atuando com comercialização de vendas técnicas direcionada à indústria.
                        </p>
                        <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed text-justify">
                            Nosso lema é vender produtos técnicos anticorrosivos e revestimentos de alto desempenho para pisos de concreto, garantindo durabilidade e qualidade superior em cada projeto.
                        </p>

                        <div className="grid grid-cols-2 gap-6 pt-6">
                            <div className="bg-white dark:bg-slate-900 p-6 rounded-xl shadow-sm border border-slate-100 dark:border-slate-800">
                                <span className="block text-4xl font-black text-industrial-orange mb-2">+7</span>
                                <span className="text-sm font-bold text-slate-600 dark:text-slate-400 uppercase tracking-wider">Anos de Mercado</span>
                            </div>
                            <div className="bg-white dark:bg-slate-900 p-6 rounded-xl shadow-sm border border-slate-100 dark:border-slate-800">
                                <span className="block text-4xl font-black text-primary-blue mb-2">100%</span>
                                <span className="text-sm font-bold text-slate-600 dark:text-slate-400 uppercase tracking-wider">Foco Técnico</span>
                            </div>
                        </div>
                    </div>

                    <div className="relative">
                        <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl shadow-indigo-500/10 bg-white border-8 border-white dark:border-slate-800">
                            <img
                                src="/store/store-1.webp"
                                alt="Equipe Qualitintas"
                                className="w-full h-full object-cover"
                            />
                        </div>
                        {/* Decoration */}
                        <div className="absolute -bottom-10 -right-10 w-full h-full border-2 border-industrial-orange rounded-2xl -z-10 hidden md:block" />
                    </div>
                </div>
            </div>
        </section>
    );
}
