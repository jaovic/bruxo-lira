import Link from "next/link";

export default function ManifestoPage() {
	return (
		<main className="bg-black text-red-700 min-h-screen">
			{/* HEADER */}
			<header className="fixed top-0 w-full z-50 bg-black/80 backdrop-blur border-b border-red-900">
				<div className="max-w-4xl mx-auto px-6 py-4 flex justify-between items-center">
					<Link href="/" className="text-yellow-500 font-extrabold text-lg">
						← Voltar para Home
					</Link>
				</div>
			</header>

			<section className="px-6 py-32 pt-40 bg-gradient-to-b from-black via-red-950 to-black">
				<div className="max-w-4xl mx-auto">
					<h1 className="text-4xl md:text-5xl font-extrabold text-yellow-500 mb-14 text-center">
						Manifesto Espiritual
					</h1>

					<div className="space-y-8 text-red-600 leading-relaxed text-lg">
						<p>
							Há quatro anos iniciei minha caminhada consciente na Umbanda, numa
							busca diária, assídua e silenciosa pelos mistérios do invisível.
							pelos mistérios do invisível. Atravessei casas, correntes e provas
							até firmar meus pés na Casa de Umbanda Pai Oxalá, onde, há três
							anos, foi me proporcionado vivências e experiências incríveis.
						</p>

						<p>
							Ali também me foi confiado o atabaque, o coração vivo da gira e,
							desde o dia em que fui autorizado, sustento, com meu toque, com
							amor e muita energia os portais por onde os guias descem. Hoje,
							mais de cem almas são acolhidas, curadas e realinhadas a cada
							sessão.
						</p>

						<p>
							Fui iniciado no Reiki pela linhagem do mestre Mikao Usui e honrei
							essa porta. Ainda assim, compreendi que aquela não era a raiz da
							minha alma. A minha raiz estava no sangue, nos mortos e nas
							encruzilhadas do tempo.
						</p>

						<p>
							Então fui encontrado pela Quimbanda Luciferiana. Recebi chaves,
							selos e outorgas e fui marcado como bruxo quimbandeiro. Porém, ao
							perceber caminhos que não correspondiam à verdade do meu espírito
							e intenções que não caminhavam em retidão, segui adiante. Busquei
							a fonte mais profunda e me batizei na Quimbanda Ancestral, templo
							de Quimbanda Rei 7 da Lira, onde os Exus primordiais caminham, os
							mortos falam e a magia não se aprende — se desperta.
						</p>

						<p>
							Realizo atendimentos oraculares, feitiçarias, curas, abertura de
							caminhos, sorte, prosperidade, proteção, equilíbrio mental e
							reorganização do destino. Não opero por vaidade, mas por
							fundamento, pacto e autorização espiritual.
						</p>

						<p>
							Minha força não vem apenas do que aprendi;
							<br />
							vem do que herdei.
						</p>

						<p>
							Na minha ancestralidade paterna, meu tataravô era magista de
							guerra e defesa, capaz de proteger um território inteiro, a
							quilômetros de distância, com mirongas e feitiços firmados nos
							caminhos. Minha avó, com suas garrafadas milagrosas, curava onde a
							matéria não alcança. Meu tio, com mais de trinta e cinco anos no
							Candomblé Angola, é coluna viva da minha linhagem.
						</p>

						<p>
							Na minha linhagem materna, herdei a fé mística e inabalável:
							mulheres que rezam, sonham e pressentem. Desde meu nascimento, fui
							passado por benzimentos, cruzamentos e selamentos que foram
							cruciais para minha saúde e evolução espiritual — para sobreviver
							ao que outros não sobreviveriam. Minha mãe recebe sonhos que não
							pertencem a este mundo. Minha avó antevia acontecimentos antes que
							o tempo os revelasse. Meu avô, homem devoto aos santos católicos,
							os buscava, cultuava e lembrava com devoção verdadeira,
							sustentando no altar a força da fé ancestral.
						</p>

						<p className="font-bold text-red-500">
							Eu sou continuidade de um pacto antigo.
						</p>

						<p>
							Sou aquele que caminha entre o altar e a encruzilhada.
							<br />
							Sou aquele que acende velas para o céu e para os mortos.
							<br />
							Sou portador de chaves, herdeiro de feitiços e voz de Exu.
						</p>

						<p className="text-yellow-500 font-extrabold text-xl text-center pt-6">
							Não sigo este caminho.
							<br />
							Eu sou este caminho.
						</p>
					</div>
				</div>
			</section>
		</main>
	);
}
