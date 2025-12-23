import Image from "next/image";
import { notFound } from "next/navigation";
import { produtos } from "@/data/produtos";
import { Button } from "@/components/ui/button";

export default async function ProdutoPage({ params }) {
	const { categoria, slug } = await params;

	const produto = produtos.find(
		(p) => p.categoria === categoria && p.slug === slug
	);

	if (!produto) return notFound();

	return (
		<main className="bg-black text-red-700 min-h-screen px-6 py-28">
			<div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
				<Image
					src={produto.image}
					alt={produto.titulo}
					width={500}
					height={500}
					className="rounded-lg object-cover shadow-[0_0_40px_rgba(180,0,0,0.9)]"
				/>

				<div>
					<h1 className="text-4xl text-yellow-500 font-bold mb-6">
						{produto.titulo}
					</h1>

					<p className="text-red-600 mb-6">{produto.descricao}</p>

					<p className="text-3xl text-yellow-500 font-bold mb-10">
						{produto.valor}
					</p>

					<Button
						asChild
						className="bg-gradient-to-r from-green-500 to-green-700 text-black font-bold px-10 py-6 text-lg shadow-[0_0_40px_rgba(0,255,0,0.9)]"
					>
						<a
							href={`https://wa.me/+5531975113397?text=Tenho interesse no produto: ${produto.titulo}`}
							target="_blank"
						>
							Iniciar Atendimento
						</a>
					</Button>
				</div>
			</div>
		</main>
	);
}
