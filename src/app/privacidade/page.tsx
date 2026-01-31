import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

export default function PrivacidadePage() {
    return (
        <div className="min-h-screen bg-slate-50 font-body text-slate-900">
            <Navbar />
            <main className="mx-auto w-full max-w-4xl px-4 sm:px-6 py-24">
                <h1 className="font-display text-4xl font-bold mb-8">Política de Privacidade</h1>

                <div className="prose prose-slate max-w-none">
                    <p>Última atualização: {new Date().toLocaleDateString('pt-BR')}</p>

                    <h3>1. Introdução</h3>
                    <p>
                        A Qualitintas respeita a sua privacidade e está comprometida em proteger os dados pessoais que você compartilha conosco. Esta política descreve como coletamos, usamos e protegemos suas informações, em conformidade com a Lei Geral de Proteção de Dados (LGPD - Lei nº 13.709/2018).
                    </p>

                    <h3>2. Coleta de Dados</h3>
                    <p>
                        Coletamos informações que você nos fornece diretamente, como nome, e-mail e telefone, ao preencher o formulário de "Orçamento Expresso" ou entrar em contato via WhatsApp.
                    </p>

                    <h3>3. Uso das Informações</h3>
                    <p>
                        As informações coletadas são utilizadas exclusivamente para:
                        <ul>
                            <li>Responder às suas solicitações de orçamento e dúvidas.</li>
                            <li>Melhorar nossos produtos e serviços.</li>
                            <li>Enviar comunicações sobre ofertas e novidades, caso você tenha optado por recebê-las.</li>
                        </ul>
                    </p>

                    <h3>4. Compartilhamento de Dados</h3>
                    <p>
                        Não vendemos, trocamos ou transferimos suas informações pessoais para terceiros, exceto quando necessário para fornecer um serviço solicitado por você (ex: entrega de produtos) ou quando exigido por lei.
                    </p>

                    <h3>5. Cookies</h3>
                    <p>
                        Utilizamos cookies para melhorar a experiência do usuário em nosso site. Você pode optar por desativar os cookies nas configurações do seu navegador, mas isso pode afetar a funcionalidade do site.
                    </p>

                    <h3>6. Seus Direitos</h3>
                    <p>
                        De acordo com a LGPD, você tem o direito de acessar, corrigir, excluir ou limitar o uso de seus dados pessoais. Para exercer esses direitos, entre em contato conosco pelo e-mail vendas@qualitintas.ind.br.
                    </p>

                    <h3>7. Segurança</h3>
                    <p>
                        Adotamos medidas de segurança adequadas para proteger seus dados contra acesso não autorizado, alteração, divulgação ou destruição.
                    </p>
                </div>
            </main>
            <Footer />
        </div>
    );
}
