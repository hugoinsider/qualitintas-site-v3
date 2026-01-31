"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/Button";
import { X, Cookie, ShieldCheck } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export function CookieConsent() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const consent = localStorage.getItem("cookie-consent");
        if (!consent) {
            // Delay slightly for better UX
            const timer = setTimeout(() => setIsVisible(true), 1500);
            return () => clearTimeout(timer);
        }
    }, []);

    const handleAccept = () => {
        localStorage.setItem("cookie-consent", "accepted");
        setIsVisible(false);
    };

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    initial={{ y: 100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: 100, opacity: 0 }}
                    className="fixed bottom-4 right-4 z-[9999] max-w-sm w-full p-6 bg-white rounded-xl shadow-2xl border border-slate-200"
                >
                    <button
                        onClick={() => setIsVisible(false)}
                        className="absolute top-2 right-2 p-1 text-slate-400 hover:text-slate-600"
                    >
                        <X className="h-4 w-4" />
                    </button>

                    <div className="flex items-start gap-4">
                        <div className="shrink-0 w-10 h-10 bg-blue-50 text-primary-blue rounded-lg flex items-center justify-center">
                            <ShieldCheck className="h-6 w-6" />
                        </div>
                        <div>
                            <h4 className="font-bold text-slate-900 mb-1">Privacidade & Dados</h4>
                            <p className="text-xs text-slate-500 leading-relaxed mb-4">
                                Utilizamos cookies para personalizar sua experiência e garantir a segurança de seus dados conforme a LGPD.
                            </p>

                            <div className="flex gap-2">
                                <Button size="sm" variant="primary" onClick={handleAccept} className="w-full text-xs h-9">
                                    Aceitar Tudo
                                </Button>
                                <Button size="sm" variant="ghost" onClick={() => setIsVisible(false)} className="w-auto text-xs h-9">
                                    Recusar
                                </Button>
                            </div>
                        </div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
