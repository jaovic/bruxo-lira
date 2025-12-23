"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import WhatsappFloating from "@/components/WhatsappFloating";
import RelatosCarousel from "@/components/RelatosCarousel";

export default function Home() {
	return (
		<main className="bg-black text-red-700">
			{/* HERO */}
			<section className="min-h-screen flex flex-col justify-center text-center px-6">
				<Image
					src="/hero.jpg"
					alt="Especialista espiritual"
					width={180}
					height={180}
					className="mx-auto rounded-full border-4 border-yellow-500 shadow-[0_0_40px_rgba(180,0,0,0.9)] mb-8"
				/>

				<h1 className="text-5xl font-extrabold text-yellow-500">Bruxo Lira</h1>

				<p className="mt-6 max-w-2xl mx-auto text-red-600">
					Atuando há mais de 3 anos com trabalhos espirituais sérios,
					direcionados e sigilosos. Experiência comprovada com questões
					amorosas, financeiras e espirituais, sempre com fundamento e
					responsabilidade.
				</p>
			</section>

			{/* CATEGORIAS */}
			<section className="max-w-6xl mx-auto px-6 py-20 grid md:grid-cols-3 gap-8">
				<Link href="/produtos/oraculos">
					<Card className="bg-black border-red-900 hover:scale-105 transition cursor-pointer h-full min-h-[420px] flex flex-col">
						<Image
							src="/categorias/oraculos.jpg"
							alt="Oráculos"
							width={400}
							height={300}
							className="rounded-t-lg object-cover h-[220px] w-full"
						/>
						<CardContent className="p-6 text-center flex-1 flex flex-col justify-between">
							<div>
								<h3 className="text-2xl text-yellow-500 font-bold mb-3">
									Oráculos
								</h3>
								<p className="text-red-600 text-sm">
									Leituras espirituais, respostas diretas e orientação
									ancestral.
								</p>
							</div>
						</CardContent>
					</Card>
				</Link>

				<Link href="/produtos/magias">
					<Card className="bg-black border-red-900 hover:scale-105 transition cursor-pointer h-full min-h-[420px] flex flex-col">
						<Image
							src="/categorias/magias.jpg"
							alt="Magias"
							width={400}
							height={300}
							className="rounded-t-lg object-cover h-[220px] w-full"
						/>
						<CardContent className="p-6 text-center flex-1 flex flex-col justify-between">
							<div>
								<h3 className="text-2xl text-yellow-500 font-bold mb-3">
									Magias
								</h3>
								<p className="text-red-600 text-sm">
									Pós, banhos e trabalhos energéticos.
								</p>
							</div>
						</CardContent>
					</Card>
				</Link>

				<Link href="/produtos/farmacia">
					<Card className="bg-black border-red-900 hover:scale-105 transition cursor-pointer h-full min-h-[420px] flex flex-col">
						<Image
							src="/categorias/farmacia.jpg"
							alt="Farmácia Espiritual"
							width={400}
							height={300}
							className="rounded-t-lg object-cover h-[220px] w-full"
						/>
						<CardContent className="p-6 text-center flex-1 flex flex-col justify-between">
							<div>
								<h3 className="text-2xl text-yellow-500 font-bold mb-3">
									Farmácia Espiritual
								</h3>
								<p className="text-red-600 text-sm">
									Garrafadas, fórmulas e preparos espirituais.
								</p>
							</div>
						</CardContent>
					</Card>
				</Link>
			</section>

			{/* RELATOS */}
			<section className="px-6 py-24 bg-red-950">
				<h2 className="text-4xl text-center text-yellow-500 font-bold mb-12">
					Relatos Reais de Clientes
				</h2>

				<RelatosCarousel />

				<div className="text-center mt-14">
					<Button
						asChild
						className="bg-red-700 hover:bg-red-800 text-black font-bold px-10 py-6"
					>
						<Link href="/relatos">Ver todos os relatos</Link>
					</Button>
				</div>
			</section>

			{/* CONTATO FINAL */}
			<section className="px-6 py-28 text-center">
				<h2 className="text-4xl font-bold text-yellow-500 mb-6">
					Atendimento Direto e Sigiloso
				</h2>
				<p className="text-red-600 mb-10 max-w-xl mx-auto">
					Atendimento individual, sem intermediários. Clique abaixo e fale
					diretamente comigo via WhatsApp.
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

			<WhatsappFloating />
		</main>
	);
}
