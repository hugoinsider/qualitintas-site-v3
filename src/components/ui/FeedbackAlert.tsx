"use client";

import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle, AlertCircle, Loader2, X } from "lucide-react";
import { useEffect } from "react";

interface FeedbackAlertProps {
    type: "loading" | "success" | "error" | null;
    message?: string;
    isVisible: boolean;
    onClose: () => void;
}

export function FeedbackAlert({ type, message, isVisible, onClose }: FeedbackAlertProps) {
    // Auto-close on success or error after 5s
    useEffect(() => {
        if (isVisible && type !== "loading") {
            const timer = setTimeout(onClose, 5000);
            return () => clearTimeout(timer);
        }
    }, [isVisible, type, onClose]);

    return (
        <AnimatePresence>
            {isVisible && type && (
                <motion.div
                    initial={{ opacity: 0, y: 50, scale: 0.9 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 20, scale: 0.95 }}
                    className="fixed bottom-6 right-6 z-50 w-full max-w-sm"
                >
                    <div
                        className={`
              relative overflow-hidden rounded-xl border p-4 shadow-2xl backdrop-blur-xl
              ${type === "loading" ? "bg-white/90 border-blue-200 text-primary-blue" : ""}
              ${type === "success" ? "bg-white/95 border-green-200 text-green-700" : ""}
              ${type === "error" ? "bg-white/95 border-red-200 text-red-700" : ""}
            `}
                    >
                        {/* ProgressBar for Success/Error */}
                        {type !== "loading" && (
                            <motion.div
                                initial={{ width: "100%" }}
                                animate={{ width: "0%" }}
                                transition={{ duration: 5, ease: "linear" }}
                                className={`absolute bottom-0 left-0 h-1 
                  ${type === "success" ? "bg-green-500" : "bg-red-500"}
                `}
                            />
                        )}

                        <div className="flex items-start gap-4">
                            <div
                                className={`
                  rounded-full p-2
                  ${type === "loading" ? "bg-blue-100" : ""}
                  ${type === "success" ? "bg-green-100" : ""}
                  ${type === "error" ? "bg-red-100" : ""}
                `}
                            >
                                {type === "loading" && <Loader2 className="h-6 w-6 animate-spin text-primary-blue" />}
                                {type === "success" && <CheckCircle className="h-6 w-6 text-green-600" />}
                                {type === "error" && <AlertCircle className="h-6 w-6 text-red-600" />}
                            </div>

                            <div className="flex-1">
                                <h4 className="font-bold text-sm uppercase tracking-wide opacity-90">
                                    {type === "loading" && "Enviando Solicitação..."}
                                    {type === "success" && "Orçamento Enviado!"}
                                    {type === "error" && "Erro no Envio"}
                                </h4>
                                <p className="mt-1 text-sm font-medium opacity-80">
                                    {message || (type === "loading" ? "Processando seu pedido..." : type === "success" ? "Recebemos seus dados. Logo entraremos em contato." : "Verifique os campos e tente novamente.")}
                                </p>
                            </div>

                            <button
                                onClick={onClose}
                                className="text-slate-400 hover:text-slate-600 transition-colors"
                                aria-label="Fechar"
                            >
                                <X className="h-5 w-5" />
                            </button>
                        </div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
