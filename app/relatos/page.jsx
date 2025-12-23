"use client";

import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { MessageCircle, Star } from "lucide-react";

const relatos = [
	"Cheguei desacreditada, mas o resultado veio rápido. O retorno aconteceu em menos de 20 dias.",
	"Trabalho sério, sem enrolação. Minha vida financeira destravou depois da abertura de caminhos.",
	"Já tinha tentado outros lugares e nada funcionou. Aqui foi diferente.",
	"A leitura foi direta e certeira. Me orientou exatamente no que eu precisava.",
	"Resultado visível. Energia muito forte.",
	"Fui tratada com respeito e clareza. Recomendo.",
	"Nada genérico. Foi cirúrgico.",
	"Funcionou onde tudo falhou antes.",
	"Atendimento firme, sem ilusão.",
	"Voltarei com certeza.",
];

export default function RelatosPage() {
	return (
		<main className="min-h-screen bg-black text-red-700 px-6 py-24">
			<h1 className="text-4xl font-extrabold text-yellow-500 text-center mb-16">
				Relatos Reais de Clientes
			</h1>

			<section className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 mb-24">
				{relatos.map((texto, index) => (
					<Card
						key={index}
						className="bg-black border border-red-900 shadow-[0_0_25px_rgba(180,0,0,0.4)]"
					>
						<CardContent className="p-6">
							<Star className="text-yellow-600 mb-4" />
							<p className="text-red-600 text-sm leading-relaxed">“{texto}”</p>
						</CardContent>
					</Card>
				))}
			</section>

			<div className="text-center">
				<Link
					href="https://wa.me/5599999999999?text=Quero%20fazer%20um%20trabalho%20espiritual"
					target="_blank"
					className="inline-flex items-center justify-center gap-2
						bg-gradient-to-r from-green-500 to-green-700
						hover:from-green-600 hover:to-green-800
						text-black font-extrabold px-12 py-6 text-lg
						rounded-md shadow-[0_0_40px_rgba(0,255,0,0.8)]"
				>
					<MessageCircle />
					Entrar em Contato
				</Link>
			</div>
		</main>
	);
}
