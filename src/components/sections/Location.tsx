import { Card } from "@/components/ui/Card";

const container = "mx-auto w-full max-w-7xl px-4 sm:px-6";

export function Location() {
    return (
        <section id="mapa" className="bg-white dark:bg-slate-900 py-24 transition-colors">
            <div className={container}>
                <div className="text-center mb-12">
                    <h2 className="font-display text-4xl font-bold tracking-tight text-slate-900 dark:text-white">
                        Localização Estratégica
                    </h2>
                    <p className="mt-4 text-lg text-slate-600 dark:text-slate-400">
                        Fácil acesso e estacionamento próprio para sua comodidade.
                    </p>
                </div>

                <Card className="p-2 bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 shadow-xl shadow-slate-200/50 dark:shadow-black/50 rounded-xl overflow-hidden">
                    <div className="aspect-[21/9] w-full bg-slate-100 dark:bg-slate-900 relative rounded-lg overflow-hidden">
                        <div className="absolute inset-0 flex items-center justify-center text-slate-400 font-medium text-sm">
                            Carregando mapa...
                        </div>
                        <iframe
                            title="Mapa Qualitintas"
                            className="h-full w-full relative z-10"
                            loading="lazy"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3821.573266935934!2d-49.3262297!3d-16.723857!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x935ef7c4767119e7%3A0x62952445037d287!2sAv.+C%C3%A9sar+Lattes%2C+228+-+Novo+Horizonte%2C+Goi%C3%A2nia+-+GO%2C+74363-400!5e0!3m2!1spt-BR!2sbr!4v1713550000000!5m2!1spt-BR!2sbr"
                        />
                    </div>
                </Card>
            </div>
        </section>
    );
}
