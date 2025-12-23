"use client";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { ChevronLeft, ChevronRight } from "lucide-react";

const feedbacks = [
	{ id: 1, nome: "Ana", texto: "A leitura foi absurda de precisa." },
	{ id: 2, nome: "Bruno", texto: "Me ajudou a tomar uma decisão difícil." },
	{ id: 3, nome: "Carla", texto: "Energia forte e muito respeito." },
	{ id: 4, nome: "Diego", texto: "Bateu com tudo que estou vivendo." },
	{ id: 5, nome: "Elaine", texto: "Orientação clara e direta." },
	{ id: 6, nome: "Felipe", texto: "Voltarei com certeza." },
	{ id: 7, nome: "Gabriela", texto: "Muito acima do esperado." },
	{ id: 8, nome: "Henrique", texto: "Leitura honesta e sem enrolação." },
	{ id: 9, nome: "Isabela", texto: "Saí mais leve depois da consulta." },
	{ id: 10, nome: "João", texto: "Recomendo de olhos fechados." },
];

export default function FeedbacksCarousel() {
	const [index, setIndex] = useState(0);
	const total = feedbacks.length;

	const prev = () => {
		if (index === 0) return;
		setIndex(index - 3);
	};

	const next = () => {
		if (index + 3 >= total) return;
		setIndex(index + 3);
	};

	return (
		<section className="max-w-6xl mx-auto px-6 py-20">
			<h2 className="text-3xl font-bold text-yellow-500 mb-6">Feedbacks</h2>

			<div className="relative">
				{/* Botão esquerdo */}
				<button
					onClick={prev}
					disabled={index === 0}
					className="
						absolute 
						-left-14 
						top-1/2 
						-translate-y-1/2
						w-10 h-10
						flex items-center justify-center
						rounded-full
						bg-black/60
						border border-red-900
						text-yellow-500
						hover:scale-110 transition
						disabled:opacity-30
					"
				>
					<ChevronLeft size={40} />
				</button>

				{/* Cards */}
				<div className="grid md:grid-cols-3 gap-6">
					{feedbacks.slice(index, index + 3).map((fb) => (
						<Card key={fb.id} className="bg-black border-red-900">
							<CardContent className="p-6">
								<p className="text-red-600 mb-4">“{fb.texto}”</p>
								<span className="text-yellow-500 font-bold">— {fb.nome}</span>
							</CardContent>
						</Card>
					))}
				</div>

				{/* Botão direito */}
				<button
					onClick={next}
					disabled={index + 3 >= total}
					className="
						absolute 
						-right-14 
						top-1/2 
						-translate-y-1/2
						w-10 h-10
						flex items-center justify-center
						rounded-full
						bg-black/60
						border border-red-900
						text-yellow-500
						hover:scale-110 transition
						disabled:opacity-30
					"
				>
					<ChevronRight size={40} />
				</button>
			</div>
		</section>
	);
}
