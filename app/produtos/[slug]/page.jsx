import Image from "next/image";
import { notFound } from "next/navigation";
import { Button } from "@/components/ui/button";

const produtos = {
	"amarracao-amorosa": {
		titulo: "Amarração Amorosa",
		descricao:
			"Trabalho espiritual voltado à união definitiva, com fundamentos sérios e acompanhamento espiritual.",
		valor: "R$ 1.200",
		image: "/produtos/amarracao.jpg",
	},
	"abertura-de-caminhos": {
		titulo: "Abertura de Caminhos",
		descricao:
			"Limpeza espiritual completa para desbloqueio financeiro, profissional e emocional.",
		valor: "R$ 900",
		image: "/produtos/abertura.jpg",
	},
	"protecao-espiritual": {
		titulo: "Proteção Espiritual",
		descricao:
			"Fechamento de corpo e proteção contra energias negativas e ataques espirituais.",
		valor: "R$ 700",
		image: "/produtos/protecao.jpg",
	},
};

export default async function ProdutoPage({ params }) {
	// 🔴 AQUI ESTÁ A DIFERENÇA
	const { slug } = await params;

	const produto = produtos[slug];

	if (!produto) {
		notFound();
	}

	return (
		<main className="bg-black text-red-700 px-6 py-24">
			<div className="max-w-3xl mx-auto text-center">
				<Image
					src={produto.image}
					alt={produto.titulo}
					width={700}
					height={450}
					className="mx-auto rounded-lg mb-10 shadow-[0_0_40px_rgba(180,0,0,0.9)]"
				/>

				<h1 className="text-4xl font-extrabold text-yellow-500 mb-6">
					{produto.titulo}
				</h1>

				<p className="text-red-600 mb-8 leading-relaxed">{produto.descricao}</p>

				<p className="text-3xl font-bold text-yellow-500 mb-12">
					{produto.valor}
				</p>

				<Button
					asChild
					className="bg-green-600 hover:bg-green-700 text-black font-bold px-12 py-7 text-lg shadow-[0_0_35px_rgba(0,255,0,0.8)]"
				>
					<a
						href={`https://wa.me/5599999999999?text=Tenho%20interesse%20em%20${encodeURIComponent(
							produto.titulo
						)}`}
						target="_blank"
					>
						Falar no WhatsApp
					</a>
				</Button>
			</div>
		</main>
	);
}
