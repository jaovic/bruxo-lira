"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import WhatsappFloating from "@/components/WhatsappFloating";
import { Flame, Star } from "lucide-react";

const produtos = [
	{
		slug: "amarracao-amorosa",
		titulo: "Amarração Amorosa",
		descricao: "União definitiva e retorno amoroso.",
		valor: "R$ 1.200",
		image: "/produtos/amarracao.jpg",
	},
	{
		slug: "abertura-de-caminhos",
		titulo: "Abertura de Caminhos",
		descricao: "Desbloqueio financeiro e espiritual.",
		valor: "R$ 900",
		image: "/produtos/abertura.jpg",
	},
	{
		slug: "protecao-espiritual",
		titulo: "Proteção Espiritual",
		descricao: "Fechamento de corpo completo.",
		valor: "R$ 700",
		image: "/produtos/protecao.jpg",
	},
];

export default function Home() {
	return (
		<main className="bg-black text-red-700">
			{/* HERO */}
			<section className="py-28 text-center px-6">
				<Image
					src="/hero.jpg"
					alt="Especialista espiritual"
					width={180}
					height={180}
					className="mx-auto rounded-full border-4 border-yellow-500 shadow-[0_0_40px_rgba(180,0,0,0.9)] mb-8"
				/>

				<h1 className="text-5xl font-extrabold text-yellow-500">Bruxo Lira</h1>

				<p className="mt-6 max-w-2xl mx-auto text-red-600">
					Atendimentos realizados com responsabilidade, fundamento espiritual e
					sigilo absoluto. Experiência comprovada com diversas situações
					amorosas, financeiras e espirituais.
				</p>
			</section>

			{/* PRODUTOS */}
			<section className="max-w-6xl mx-auto px-6 py-20 grid md:grid-cols-3 gap-8">
				{produtos.map((p) => (
					<Link key={p.slug} href={`/produtos/${p.slug}`}>
						<Card className="bg-black border-red-900 cursor-pointer hover:scale-105 transition">
							<Image
								src={p.image}
								alt={p.titulo}
								width={400}
								height={300}
								className="rounded-t-lg object-cover"
							/>
							<CardContent className="p-6">
								<Flame className="text-yellow-600 mb-2" />
								<h3 className="text-xl text-yellow-500 font-bold">
									{p.titulo}
								</h3>
								<p className="text-red-600 text-sm mt-2">{p.descricao}</p>
								<p className="mt-4 text-yellow-500 font-bold">{p.valor}</p>
							</CardContent>
						</Card>
					</Link>
				))}
			</section>

			{/* RELATOS */}
			<section className="px-6 py-24 bg-red-950">
				<h2 className="text-4xl text-center text-yellow-500 font-bold mb-12">
					Relatos Reais de Clientes
				</h2>

				<div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-8">
					{[1, 2, 3].map((i) => (
						<Card key={i} className="bg-black border-red-900">
							<Image
								src={`/relatos/relato${i}.jpg`}
								width={400}
								height={650}
								alt="Print de conversa WhatsApp"
								className="rounded-t-lg object-cover"
							/>
							<CardContent className="p-4">
								<Star className="text-yellow-600 mb-2" />
								<p className="text-red-600 text-sm">
									Relato real de cliente satisfeito.
								</p>
							</CardContent>
						</Card>
					))}
				</div>

				{/* VER TODOS OS RELATOS */}
				<div className="text-center mt-14">
					<Button
						asChild
						className="bg-red-700 hover:bg-red-800 text-black font-bold px-10 py-6"
					>
						<Link href="/relatos">Ver todos os relatos</Link>
					</Button>
				</div>
			</section>
			<WhatsappFloating />

			{/* CONTATO FINAL */}
			<section className="px-6 py-28 text-center">
				<h2 className="text-4xl font-bold text-yellow-500 mb-6">
					Atendimento Direto e Sigiloso
				</h2>
				<p className="text-red-600 mb-10 max-w-xl mx-auto">
					Conversa direta, sem intermediários. Clique abaixo e fale comigo
					agora.
				</p>

				<Button
					asChild
					className="bg-gradient-to-r from-green-500 to-green-700 hover:from-green-600 hover:to-green-800 text-black font-extrabold px-12 py-8 text-xl shadow-[0_0_45px_rgba(0,255,0,0.9)]"
				>
					<a href="https://wa.me/5599999999999" target="_blank">
						Iniciar Atendimento
					</a>
				</Button>
			</section>

			<footer className="text-center text-xs text-red-800 pb-6">
				Resultados variam conforme fé, merecimento e situação espiritual.
			</footer>
		</main>
	);
}
