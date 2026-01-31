import { Droplets, Phone, MessageSquareText, MapPin, Mail } from "lucide-react";

export function Footer() {
    return (
        <footer className="bg-slate-900 text-slate-300 py-16 border-t border-slate-800">
            <div className="mx-auto w-full max-w-7xl px-4 sm:px-6">
                <div className="grid gap-12 md:grid-cols-4">
                    <div className="col-span-2">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-10 h-10 bg-primary-blue text-white rounded-lg flex items-center justify-center shadow-lg shadow-blue-900/50">
                                <Droplets className="h-5 w-5" />
                            </div>
                            <span className="font-display text-2xl font-bold tracking-tight text-white">
                                Qualitintas
                            </span>
                        </div>
                        <p className="max-w-md text-slate-400 leading-relaxed">
                            Referência em Campinas no fornecimento de tintas imobiliárias, industriais e automotivas. Qualidade técnica e atendimento que você confia.
                        </p>
                    </div>

                    <div>
                        <h4 className="font-bold text-white text-sm uppercase tracking-wider mb-6">
                            Navegação
                        </h4>
                        <ul className="space-y-4 text-sm font-medium">
                            <li><a href="#top" className="hover:text-primary-blue transition-colors">Início</a></li>
                            <li><a href="#produtos" className="hover:text-primary-blue transition-colors">Produtos</a></li>
                            <li><a href="#loja" className="hover:text-primary-blue transition-colors">A Loja</a></li>
                            <li><a href="#mapa" className="hover:text-primary-blue transition-colors">Localização</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-bold text-white text-sm uppercase tracking-wider mb-6">
                            Fale Conosco
                        </h4>
                        <ul className="space-y-4 text-sm font-medium text-slate-400">
                            <li className="flex items-center gap-3">
                                <Phone className="h-4 w-4 text-industrial-orange" /> (19) 3213-4455
                            </li>
                            <li className="flex items-center gap-3">
                                <MessageSquareText className="h-4 w-4 text-industrial-orange" /> WhatsApp Comercial
                            </li>
                            <li className="flex items-center gap-3">
                                <Mail className="h-4 w-4 text-industrial-orange" /> <a href="mailto:vendas@qualitintas.ind.br" className="hover:text-primary-blue transition-colors">vendas@qualitintas.ind.br</a>
                            </li>
                            <li className="flex items-start gap-3">
                                <MapPin className="h-4 w-4 text-industrial-orange mt-0.5" />
                                <span>Av. César Lattes 228<br />Novo Horizonte, Goiânia - GO</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="h-px w-full bg-slate-800 my-12" />

                <div className="flex flex-col md:flex-row justify-between items-center gap-6 text-sm font-medium text-slate-500">
                    <p>© {new Date().getFullYear()} Qualitintas. Todos os direitos reservados.</p>

                    {/* Trust & Payments */}
                    <div className="flex items-center gap-4">
                        <div className="flex items-center gap-2 bg-white/5 px-3 py-1 rounded border border-white/10" title="Site Seguro">
                            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                            <span className="text-xs text-slate-300 font-bold">Site Seguro</span>
                        </div>
                        <div className="flex gap-2 opacity-70 grayscale hover:grayscale-0 transition-all">
                            {/* Generic Credit Card Icons */}
                            <img src="https://img.icons8.com/color/48/visa.png" alt="Visa" className="h-6" />
                            <img src="https://img.icons8.com/color/48/mastercard.png" alt="Mastercard" className="h-6" />
                            <img src="https://img.icons8.com/color/48/pix.png" alt="Pix" className="h-6" />
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
