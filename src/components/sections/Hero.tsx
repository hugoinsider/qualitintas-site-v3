"use client";

import { useState } from "react";
import { ArrowRight, Sparkles, Truck, Layers, BadgeDollarSign, UserCheck } from "lucide-react";
import { sendBudgetEmail } from "@/app/actions/send-budget";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { FeedbackAlert } from "@/components/ui/FeedbackAlert";

const container = "mx-auto w-full max-w-7xl px-4 sm:px-6";

export function Hero() {
    const [feedback, setFeedback] = useState<{
        type: "loading" | "success" | "error" | null;
        message?: string;
        isVisible: boolean;
    }>({ type: null, isVisible: false });

    // Form State
    const [formData, setFormData] = useState({
        name: "",
        whatsapp: "",
        message: "",
        lgpd: false
    });

    const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        let value = e.target.value.replace(/\D/g, "");
        if (value.length > 11) value = value.slice(0, 11);

        // Mask: (99) 99999-9999
        if (value.length > 2) {
            value = `(${value.slice(0, 2)}) ${value.slice(2)}`;
        }
        if (value.length > 9) { // (99) 99999 - char count is 10
            value = `${value.slice(0, 10)}-${value.slice(10)}`;
        }

        setFormData(prev => ({ ...prev, whatsapp: value }));
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value, type } = e.target;
        const checked = (e.target as HTMLInputElement).checked;

        setFormData(prev => ({
            ...prev,
            [name]: type === "checkbox" ? checked : value
        }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setFeedback({ type: "loading", isVisible: true });

        // Convert state to FormData for the server action
        const data = new FormData();
        data.append("name", formData.name);
        data.append("whatsapp", formData.whatsapp);
        data.append("message", formData.message);
        data.append("lgpd", formData.lgpd ? "on" : "");

        const result = await sendBudgetEmail(data);

        if (result.success) {
            setFeedback({
                type: "success",
                message: "Solicitação recebida com sucesso! Em breve entraremos em contato.",
                isVisible: true
            });
            // ONLY reset on success
            setFormData({ name: "", whatsapp: "", message: "", lgpd: false });
        } else {
            setFeedback({
                type: "error",
                message: result.error || "Erro ao enviar solicitação.",
                isVisible: true
            });
            // Do NOT reset form on error
        }
    };

    return (
        <section id="top" className="relative bg-slate-50 dark:bg-slate-950 overflow-hidden py-16 lg:py-24 transition-colors">
            {/* Global Feedback Alert */}
            <FeedbackAlert
                type={feedback.type}
                message={feedback.message}
                isVisible={feedback.isVisible}
                onClose={() => setFeedback(prev => ({ ...prev, isVisible: false }))}
            />

            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <img
                    src="/store/store-4.webp"
                    alt="Interior da Loja Qualitintas"
                    className="w-full h-full object-cover opacity-60 grayscale"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-slate-50 via-slate-50/90 to-transparent/50 dark:from-slate-950 dark:via-slate-950/90" />
            </div>

            {/* Background Accent */}
            <div className="absolute top-0 right-0 w-1/3 h-full bg-slate-100 dark:bg-slate-900 skew-x-12 translate-x-32 hidden lg:block z-0" />

            <div className={`${container} relative z-10 grid gap-12 lg:grid-cols-12 items-center`}>
                <div className="lg:col-span-7 flex flex-col justify-center">
                    <div className="inline-flex items-center gap-2 rounded-full bg-blue-50 dark:bg-blue-900/30 px-4 py-1.5 text-xs font-bold text-primary-blue w-fit mb-6 border border-blue-100 dark:border-blue-800 uppercase tracking-wide">
                        <Sparkles className="h-4 w-4" />
                        <span>Bem-vindo(a) a Qualitintas!</span>
                    </div>

                    <h1 className="text-balance font-display text-4xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-6xl leading-tight">
                        TEMOS OS MELHORES<br />
                        <span className="text-primary-blue">PRODUTOS PELO</span> <br />
                        MELHOR PREÇO!
                    </h1>

                    <p className="mt-6 max-w-2xl text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
                        Na Qualitintas, você encontra as melhores marcas, suporte técnico especializado e a agilidade que sua pintura precisa. Parceiro oficial do pintor e da indústria.
                    </p>

                    <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
                        <Button size="lg" variant="primary" className="h-14 text-base shadow-lg shadow-blue-500/20" asChild>
                            <a href="#produtos">
                                Conhecer Produtos <ArrowRight className="ml-2 h-5 w-5" />
                            </a>
                        </Button>
                        <Button size="lg" variant="outline" className="h-14 text-base bg-white/50 dark:bg-slate-900/50 backdrop-blur-sm" asChild>
                            <a href="#contato">Falar com Consultor</a>
                        </Button>
                    </div>

                    <div className="mt-16 grid gap-6 sm:grid-cols-2">
                        {[
                            {
                                icon: <Truck className="h-5 w-5" />,
                                title: "Entrega Rápida e Gratuita",
                                desc: "Agilidade para sua obra.",
                                id: "delivery",
                            },
                            {
                                icon: <Layers className="h-5 w-5" />,
                                title: "Grande Variedade",
                                desc: "Tudo o que você precisa.",
                                id: "variety",
                            },
                            {
                                icon: <BadgeDollarSign className="h-5 w-5" />,
                                title: "Os Melhores Preços",
                                desc: "Economia garantida.",
                                id: "price",
                            },
                            {
                                icon: <UserCheck className="h-5 w-5" />,
                                title: "Atendimento Especializado",
                                desc: "Fale com quem entende.",
                                id: "expert",
                            },
                        ].map((f) => (
                            <div key={f.id} className="flex gap-4 items-start p-4 hover:bg-white dark:hover:bg-slate-900 rounded-lg transition-colors border border-transparent hover:border-slate-200 dark:hover:border-slate-700 hover:shadow-sm">
                                <div className="shrink-0 p-2 bg-blue-50 dark:bg-blue-900/20 text-primary-blue rounded-md">{f.icon}</div>
                                <div>
                                    <h3 className="font-bold text-slate-900 dark:text-white text-sm">{f.title}</h3>
                                    <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">{f.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="lg:col-span-5 flex items-center justify-end">
                    <Card className="w-full max-w-md bg-white dark:bg-slate-900 border-t-4 border-t-industrial-orange shadow-xl shadow-slate-200/50 dark:shadow-slate-950/50 dark:border-slate-800">
                        <div className="mb-6">
                            <h3 className="text-xl font-bold text-slate-900 dark:text-white">Orçamento Expresso</h3>
                            <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
                                Receba uma cotação personalizada via WhatsApp.
                            </p>
                        </div>

                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div className="space-y-2">
                                <label className="text-xs font-semibold text-slate-700 dark:text-slate-300 uppercase tracking-wider">Nome Completo</label>
                                <Input
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    placeholder="Digite seu nome"
                                    className="dark:bg-slate-950 dark:border-slate-800"
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="text-xs font-semibold text-slate-700 dark:text-slate-300 uppercase tracking-wider">WhatsApp</label>
                                <Input
                                    name="whatsapp"
                                    value={formData.whatsapp}
                                    onChange={handlePhoneChange}
                                    required
                                    placeholder="(00) 00000-0000"
                                    maxLength={15}
                                    className="dark:bg-slate-950 dark:border-slate-800"
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="text-xs font-semibold text-slate-700 dark:text-slate-300 uppercase tracking-wider">Produtos</label>
                                <Textarea
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    placeholder="Descreva o que você precisa..."
                                    className="min-h-[100px] dark:bg-slate-950 dark:border-slate-800"
                                />
                            </div>

                            <div className="flex items-start gap-2">
                                <input
                                    type="checkbox"
                                    name="lgpd"
                                    checked={formData.lgpd}
                                    onChange={handleChange}
                                    required
                                    id="lgpd-check"
                                    className="mt-1 h-4 w-4 rounded border-slate-300 text-primary-blue focus:ring-primary-blue"
                                />
                                <label htmlFor="lgpd-check" className="text-xs text-slate-500 dark:text-slate-400 text-left cursor-pointer">
                                    Concordo com a <a href="/privacidade" target="_blank" className="underline hover:text-primary-blue">Política de Privacidade</a> e autorizo o contato.
                                </label>
                            </div>

                            <Button
                                type="submit"
                                disabled={feedback.type === "loading"}
                                size="lg"
                                variant="secondary"
                                className="w-full h-12 text-base font-bold shadow-md shadow-orange-500/20 disabled:opacity-70 disabled:cursor-not-allowed"
                            >
                                {feedback.type === "loading" ? "Enviando..." : "Solicitar Cotação"}
                            </Button>
                        </form>
                    </Card>
                </div>
            </div>
        </section>
    );
}
