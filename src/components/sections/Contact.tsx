import { Button } from "@/components/ui/Button";
import { MessageSquareText, MapPin } from "lucide-react";

const container = "mx-auto w-full max-w-7xl px-4 sm:px-6";

export function Contact() {
    return (
        <section id="contato" className="bg-primary-blue py-24 relative overflow-hidden">
            {/* Subtle Pattern */}
            <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />

            <div className={`${container} relative z-10 text-center`}>
                <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight mb-6 text-white">
                    Pronto para iniciar sua obra?
                </h2>

                <p className="text-xl mb-12 max-w-3xl mx-auto text-blue-50 font-medium leading-relaxed">
                    Fale agora com nossa equipe comercial e garanta as <strong className="text-white">condições especiais</strong> para empresas e grandes volumes.
                </p>

                <div className="flex flex-col sm:flex-row gap-6 justify-center">

                    <Button size="lg" className="h-16 px-10 text-lg font-bold bg-white text-primary-blue hover:bg-blue-50 hover:shadow-lg transition-all border-none">
                        Falar no WhatsApp
                        <MessageSquareText className="ml-3 h-6 w-6" />
                    </Button>

                    <Button size="lg" variant="outline" className="h-16 px-10 text-lg font-bold text-white border-white/30 hover:bg-white/10 hover:text-white hover:border-white">
                        Ver Localização
                        <MapPin className="ml-3 h-6 w-6" />
                    </Button>
                </div>
            </div>
        </section>
    );
}
