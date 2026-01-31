import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";

export default function DesignSystemPage() {
    return (
        <div className="min-h-screen p-12 bg-deep-black text-white space-y-12">
            <header className="border-b-2 border-white/20 pb-8">
                <h1 className="text-4xl md:text-6xl font-black mb-2 text-neon-green">
                    DESIGN SYSTEM
                </h1>
                <p className="text-xl text-gray-400 font-mono">
                    V4.0.0 // NEON BRUTALIST
                </p>
            </header>

            <section className="space-y-6">
                <h2 className="text-2xl font-bold border-l-4 border-neon-pink pl-4 mb-8">
                    Button Variants
                </h2>

                <div className="flex flex-wrap gap-8 items-center">
                    <Button variant="primary">Primary Action</Button>
                    <Button variant="secondary">Secondary Action</Button>
                    <Button variant="outline">Outline</Button>
                    <Button variant="ghost">Ghost</Button>
                    <Button variant="danger">Danger Zone</Button>
                </div>

                <div className="flex flex-wrap gap-8 items-center mt-8">
                    <Button size="sm">Small</Button>
                    <Button size="md">Medium</Button>
                    <Button size="lg">Large Button</Button>
                </div>
            </section>

            <section className="space-y-6">
                <h2 className="text-2xl font-bold border-l-4 border-neon-green pl-4 mb-8">
                    Colors & Typography
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                    <div className="aspect-square bg-neon-green p-4 text-black font-bold flex items-end">
                        NEON GREEN (#ccff00)
                    </div>
                    <div className="aspect-square bg-neon-pink p-4 text-black font-bold flex items-end">
                        NEON PINK (#ff0099)
                    </div>
                    <div className="aspect-square bg-deep-black border border-white p-4 text-white font-bold flex items-end">
                        DEEP BLACK
                    </div>
                    <div className="aspect-square bg-white p-4 text-black font-bold flex items-end">
                        WHITE
                    </div>
                </div>

                <div className="space-y-4 border border-white/20 p-8">
                    <h1 className="text-6xl font-black">Heading 1</h1>
                    <h2 className="text-5xl font-bold">Heading 2</h2>
                    <h3 className="text-4xl font-bold">Heading 3</h3>
                    <p className="max-w-prose text-gray-300">
                        Body text using Inter. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Vivamus lacinia odio vitae vestibulum vestibulum. Cras venenatis euismod malesuada.
                    </p>
                </div>
            </section>

            <section className="space-y-6">
                <h2 className="text-2xl font-bold border-l-4 border-white pl-4 mb-8">
                    Cards & Containers
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <Card>
                        <h3 className="text-xl font-bold mb-2 text-neon-green">Feature 01</h3>
                        <p className="text-gray-400">Standard card with hover effect.</p>
                    </Card>

                    <Card className="border-neon-pink hover:shadow-hard-pink">
                        <h3 className="text-xl font-bold mb-2 text-neon-pink">Feature 02</h3>
                        <p className="text-gray-400">Variant with pink border and shadow.</p>
                    </Card>

                    <Card className="bg-white text-black hover:border-black hover:shadow-[4px_4px_0px_white]">
                        <h3 className="text-xl font-bold mb-2">Feature 03</h3>
                        <p>Inverted high contrast card.</p>
                    </Card>
                </div>
            </section>
        </div>
    );
}
