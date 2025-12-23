"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MessageCircle, Star } from "lucide-react";

const relatos = [
	{
		texto:
			"Cheguei desacreditada, mas o resultado veio rápido. O retorno aconteceu em menos de 20 dias.",
	},
	{
		texto:
			"Trabalho sério, sem enrolação. Minha vida financeira destravou depois da abertura de caminhos.",
	},
	{
		texto:
			"Já tinha tentado outros lugares e nada funcionou. Aqui foi diferente.",
	},
];

export default function RelatosPage() {
	return (
		<main className="min-h-screen bg-black text-red-700 px-6 py-24">
			<h1 className="text-4xl font-extrabold text-yellow-500 text-center mb-12">
				Relatos Reais de Clientes
			</h1>

			<div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-8 mb-20">
				{relatos.map((r, index) => (
					<Card
						key={index}
						className="bg-black border border-red-900 shadow-[0_0_30px_rgba(180,0,0,0.5)]"
					>
						<CardContent className="p-6">
							<Star className="text-yellow-600 mb-4" />
							<p className="text-red-600 text-sm leading-relaxed">
								“{r.texto}”
							</p>
						</CardContent>
					</Card>
				))}
			</div>

			<div className="text-center">
				<Button
					asChild
					className="bg-gradient-to-r from-green-500 to-green-700 hover:from-green-600 hover:to-green-800 text-black font-extrabold px-12 py-7 text-lg shadow-[0_0_40px_rgba(0,255,0,0.8)]"
				>
					<a
						href="https://wa.me/5599999999999?text=Quero%20fazer%20um%20trabalho%20espiritual"
						target="_blank"
					>
						<MessageCircle className="mr-2" />
						Entrar em Contato
					</a>
				</Button>
			</div>
		</main>
	);
}
