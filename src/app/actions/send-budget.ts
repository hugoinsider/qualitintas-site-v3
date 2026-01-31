"use server";

import nodemailer from "nodemailer";

export async function sendBudgetEmail(formData: FormData) {
    const name = formData.get("name") as string;
    const whatsapp = formData.get("whatsapp") as string;
    const message = formData.get("message") as string;
    const lgpd = formData.get("lgpd") as string;

    if (!lgpd) {
        return { success: false, error: "Você deve concordar com os termos da LGPD." };
    }

    if (!name || !whatsapp || !message) {
        return { success: false, error: "Preencha todos os campos." };
    }

    // Configuração do Transporter (Você deve definir essas variáveis no .env)
    // Exemplo para Gmail (Requer Senha de App):
    // SMTP_HOST=smtp.gmail.com
    // SMTP_PORT=587
    // SMTP_USER=seu-email@gmail.com
    // SMTP_PASS=sua-senha-de-app
    const transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST || "smtp.example.com",
        port: Number(process.env.SMTP_PORT) || 587,
        secure: false, // true para 465, false para outras portas
        auth: {
            user: process.env.SMTP_USER || "user",
            pass: process.env.SMTP_PASS || "pass",
        },
        tls: {
            rejectUnauthorized: false
        }
    });

    try {
        await transporter.sendMail({
            from: `"Site Qualitintas" <${process.env.SMTP_USER}>`,
            to: "hugoalvesdesolza@gmail.com",
            subject: `Orçamento Expresso: ${name}`,
            text: `
        Nome: ${name}
        WhatsApp: ${whatsapp}
        
        Mensagem:
        ${message}
      `,
            html: `
        <h2>Novo Pedido de Orçamento</h2>
        <p><strong>Nome:</strong> ${name}</p>
        <p><strong>WhatsApp:</strong> ${whatsapp}</p>
        <p><strong>Mensagem:</strong></p>
        <p>${message.replace(/\n/g, "<br>")}</p>
      `,
        });

        console.log("Email enviado com sucesso!");
        return { success: true };
    } catch (error) {
        console.error("Erro ao enviar email:", error);
        return { success: false, error: "Falha ao enviar o email. Tente novamente mais tarde." };
    }
}
