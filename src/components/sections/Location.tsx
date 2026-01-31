import { Card } from "@/components/ui/Card";

const container = "mx-auto w-full max-w-7xl px-4 sm:px-6";

export function Location() {
    return (
        <section id="mapa" className="bg-white py-24">
            <div className={container}>
                <div className="text-center mb-12">
                    <h2 className="font-display text-4xl font-bold tracking-tight text-slate-900">
                        Localização Estratégica
                    </h2>
                    <p className="mt-4 text-lg text-slate-600">
                        Fácil acesso e estacionamento próprio para sua comodidade.
                    </p>
                </div>

                <Card className="p-2 bg-white border border-slate-200 shadow-xl shadow-slate-200/50 rounded-xl overflow-hidden">
                    <div className="aspect-[21/9] w-full bg-slate-100 relative rounded-lg overflow-hidden">
                        <div className="absolute inset-0 flex items-center justify-center text-slate-400 font-medium text-sm">
                            Carregando mapa...
                        </div>
                        <iframe
                            title="Mapa Qualitintas"
                            className="h-full w-full relative z-10"
                            loading="lazy"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14693.308736362846!2d-47.0734!3d-22.9056!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94c8cf4788c6b73b%3A0x6b3b555555555555!2sCampinas%2C%20SP!5e0!3m2!1spt-BR!2sbr!4v1700000000000"
                        />
                    </div>
                </Card>
            </div>
        </section>
    );
}
