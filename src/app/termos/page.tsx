import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

export default function TermosPage() {
    return (
        <div className="min-h-screen bg-slate-50 font-body text-slate-900">
            <Navbar />
            <main className="mx-auto w-full max-w-4xl px-4 sm:px-6 py-24">
                <h1 className="font-display text-4xl font-bold mb-8">Termos de Uso</h1>

                <div className="prose prose-slate max-w-none">
                    <p>Última atualização: {new Date().toLocaleDateString('pt-BR')}</p>

                    <h3>1. Aceitação dos Termos</h3>
                    <p>
                        Ao acessar e usar o site da Qualitintas (www.qualitintas.ind.br), você aceita e concorda em estar vinculado aos termos e disposições deste acordo. Além disso, ao usar os serviços particulares deste site, você estará sujeito a toda regra ou diretriz postada aplicável a tais serviços.
                    </p>

                    <h3>2. Uso do Site</h3>
                    <p>
                        O site e seu conteúdo são destinados apenas para uso informativo e comercial relacionado aos nossos produtos e serviços. Você concorda em não usar o site para fins ilegais ou proibidos por estes termos.
                    </p>

                    <h3>3. Propriedade Intelectual</h3>
                    <p>
                        Todo o conteúdo incluído neste site, como textos, gráficos, logotipos, ícones, imagens e software, é propriedade da Qualitintas ou de seus fornecedores de conteúdo e é protegido pelas leis de direitos autorais internacionais e do Brasil.
                    </p>

                    <h3>4. Limitação de Responsabilidade</h3>
                    <p>
                        A Qualitintas não será responsável por quaisquer danos diretos, indiretos, incidentais, especiais ou consequentes resultantes do uso ou da incapacidade de usar o site ou por custos de aquisição de bens e serviços substitutos.
                    </p>

                    <h3>5. Alterações nos Termos</h3>
                    <p>
                        A Qualitintas reserva-se o direito de alterar estes termos a qualquer momento. Recomendamos que você revise esta página periodicamente para quaisquer alterações. O uso continuado do site após a publicação de alterações constituirá sua aceitação de tais alterações.
                    </p>

                    <h3>6. Contato</h3>
                    <p>
                        Se você tiver dúvidas sobre estes Termos de Uso, entre em contato conosco através do e-mail vendas@qualitintas.ind.br.
                    </p>
                </div>
            </main>
            <Footer />
        </div>
    );
}
