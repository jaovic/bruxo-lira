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
			<section
				className="min-h-screen flex items-center px-6 relative bg-cover bg-center"
				style={{ backgroundImage: "url('/hero-bg.jpg')" }}
			>
				<div className="absolute inset-0 bg-black/60" />

				<div className="relative max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
					<div className="flex justify-center md:justify-start">
						<Image
							src="/hero.jpg"
							alt="Bruxo Lira"
							width={260}
							height={260}
							className="rounded-full border-4 border-yellow-500 shadow-[0_0_60px_rgba(180,0,0,0.9)]"
						/>
					</div>

					<div className="text-center md:text-left">
						<h1 className="text-5xl font-extrabold text-yellow-500 mb-6">
							Bruxo Lira
						</h1>

						<p className="text-xl text-red-500 mb-6">
							Marcado antes do nascimento.
							<br />
							Forjado entre o altar e a encruzilhada.
						</p>

						<Button
							asChild
							className="bg-red-700 hover:bg-red-800 text-black font-bold px-10 py-6"
						>
							<a href="#sobre">Conhecer a Caminhada</a>
						</Button>
					</div>
				</div>
			</section>

			{/* SOBRE / MANIFESTO */}
			<section
				id="sobre"
				className="px-6 py-32 bg-gradient-to-b from-black via-red-950 to-black"
			>
				<div className="max-w-4xl mx-auto space-y-6 text-red-600 text-lg leading-relaxed">
					<p>Eu fui marcado antes do nascimento.</p>

					<p>
						Antes do meu primeiro choro, os espíritos já conheciam meu nome.
					</p>

					<p>
						Há quatro anos iniciei minha caminhada consciente na Umbanda, numa
						busca diária, assídua e silenciosa pelos mistérios do invisível.
						Atravessei casas, correntes e provas até firmar meus pés na Casa de
						Pai Oxalá, onde, há três anos, sirvo ao altar. Ali me foi confiado o
						atabaque — o coração vivo da gira — e, desde o dia em que fui
						autorizado, sustento, com meu toque, os portais por onde os guias
						descem. Hoje, por essa força, mais de cem almas são acolhidas,
						curadas e realinhadas a cada sessão.
					</p>

					<p>Mas meu espírito não se limita à luz do altar.</p>

					<p>
						Fui iniciado no Reiki pela linhagem do mestre Mikao Usui e honrei
						essa porta. Ainda assim, compreendi que aquela não era a raiz da
						minha alma. A minha raiz estava no sangue, nos mortos e nas
						encruzilhadas do tempo.
					</p>

					<p>
						Então fui encontrado pela Quimbanda Luciferiana. Recebi chaves,
						selos e outorgas e fui marcado como bruxo quimbandeiro. Porém, ao
						perceber caminhos que não correspondiam à verdade do meu espírito e
						intenções que não caminhavam em retidão, segui adiante. Busquei a
						fonte mais profunda e me batizei na Quimbanda Ancestral, templo fr
						quimbanda Rei 7 da lira, onde os Exus primordiais caminham, os
						mortos falam e a magia não se aprende — se desperta.
					</p>

					<p>
						Realizo atendimentos oraculares, feitiçarias, curas, abertura de
						caminhos, sorte, prosperidade, proteção, equilíbrio mental e
						reorganização do destino. Não opero por vaidade, mas por fundamento,
						pacto e autorização espiritual.
					</p>

					<p>
						Minha força não vem apenas do que aprendi;
						<br />
						vem do que herdei.
					</p>

					<p>
						Na minha ancestralidade paterna, meu tataravô era magista de guerra
						e defesa, capaz de proteger um território inteiro, a quilômetros de
						distância, com mirongas e feitiços firmados nos caminhos. Minha avó,
						com suas garrafadas milagrosas, curava onde a matéria não alcança.
						Meu tio, com mais de trinta e cinco anos no Candomblé Angola, é
						coluna viva da minha linhagem.
					</p>

					<p>
						Na minha linhagem materna, herdei a fé mística e inabalável:
						mulheres que rezam, sonham e pressentem. Desde meu nascimento, fui
						passado por benzimentos, cruzamentos e selamentos que foram cruciais
						para minha saúde e evolução espiritual — para sobreviver ao que
						outros não sobreviveriam. Minha mãe recebe sonhos que não pertencem
						a este mundo. Minha avó antevia acontecimentos antes que o tempo os
						revelasse. Meu avô, homem devoto aos santos católicos, os buscava,
						cultuava e lembrava com devoção verdadeira, sustentando no altar a
						força da fé ancestral.
					</p>

					<p>Eu sou continuidade de um pacto antigo.</p>

					<p>Sou aquele que caminha entre o altar e a encruzilhada.</p>

					<p>Sou aquele que acende velas para o céu e para os mortos.</p>

					<p>Sou portador de chaves, herdeiro de feitiços e voz de Exu.</p>

					<p className="text-yellow-500 font-bold text-xl text-center pt-6">
						Não sigo este caminho.
						<br />
						Eu sou este caminho.
					</p>
				</div>
			</section>

			{/* CATEGORIAS */}
			<section
				id="produtos"
				className="w-full py-24"
				style={{ backgroundImage: "url('/bg-textura.jpg')" }}
			>
				<div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-8">
					<Link href="/produtos/oraculos">
						<Card className="bg-black border-red-900">
							<CardContent className="p-6 text-center">
								<h3 className="text-2xl text-yellow-500 font-bold mb-3">
									Oráculos
								</h3>
								<p className="text-red-600 text-sm">
									Leituras espirituais diretas.
								</p>
							</CardContent>
						</Card>
					</Link>

					<Link href="/produtos/magias">
						<Card className="bg-black border-red-900">
							<CardContent className="p-6 text-center">
								<h3 className="text-2xl text-yellow-500 font-bold mb-3">
									Magias
								</h3>
								<p className="text-red-600 text-sm">
									Feitiçaria com fundamento.
								</p>
							</CardContent>
						</Card>
					</Link>

					<Link href="/produtos/farmacia">
						<Card className="bg-black border-red-900">
							<CardContent className="p-6 text-center">
								<h3 className="text-2xl text-yellow-500 font-bold mb-3">
									Farmácia Espiritual
								</h3>
								<p className="text-red-600 text-sm">Preparos específicos.</p>
							</CardContent>
						</Card>
					</Link>
				</div>
			</section>

			<footer className="text-center text-xs text-red-800 pb-6">
				Resultados variam conforme fé, merecimento e situação espiritual.
			</footer>

			<WhatsappFloating />
		</main>
	);
}
