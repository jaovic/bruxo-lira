"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function ApostilaSection() {
	const whatsappNumber = "+5531975113397";
	const message = encodeURIComponent(
		"Olá, quero adquirir a apostila espiritual. Pode me passar as informações?",
	);

	const whatsappLink = `https://wa.me/${whatsappNumber}?text=${message}`;

	return (
		<section className="w-full py-24 bg-black border-t border-yellow-500">
			<div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
				{/* IMAGEM */}
				<div className="flex justify-center">
					<Card className="bg-black border-yellow-500 shadow-[0_0_40px_rgba(180,0,0,0.6)] p-0 overflow-hidden">
						<Image
							src="/apostila.png"
							alt="Apostila Espiritual"
							width={400}
							height={500}
							className="object-cover"
						/>
					</Card>
				</div>

				{/* TEXTO */}
				<div className="text-center md:text-left">
					<h2 className="text-4xl font-bold text-yellow-500 mb-6">
						Apostila Espiritual - O Poder das Ervas e dos Elementos
					</h2>

					<p className="text-red-500 leading-relaxed mb-6">
						Desenvolvida pelo médium, Gabriel A. Ribeiro, esta apostila reúne
						fundamentos, ensinamentos e orientações sobre o uso espiritual de
						ervas, plantas, flores, raízes, cascas e grãos, oferecendo
						conhecimento organizado para quem deseja compreender e aplicar esses
						elementos com consciência e responsabilidade.
					</p>

					<ul className="text-red-600 space-y-3 mb-8">
						<li>• Fundamentos espirituais explicados com clareza</li>
						<li>• Princípios energéticos e proteção</li>
						<li>• Orientações práticas e responsáveis</li>
						<li>• Material digital enviado após confirmação</li>
					</ul>

					<Button
						asChild
						className="bg-red-700 hover:bg-red-800 text-black font-bold px-10 py-6"
					>
						<Link href={whatsappLink} target="_blank">
							Quero adquirir pelo WhatsApp
						</Link>
					</Button>
				</div>
			</div>
		</section>
	);
}
