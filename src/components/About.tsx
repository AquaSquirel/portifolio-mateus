"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export const About = () => {
    return (
        <section id="about" className="py-20 bg-black/20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-white">Sobre Mim</h2>
                    
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
                        {/* Imagem e Texto Principal */}
                        <div className="lg:col-span-7 space-y-8">
                            <div className="flex flex-col md:flex-row gap-8 items-center md:items-start">
                                <div className="shrink-0 relative group">
                                    <div className="absolute -inset-1 bg-gradient-to-r from-primary to-secondary rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
                                    <div className="relative w-48 h-48 rounded-2xl overflow-hidden border border-white/10">
                                        <Image 
                                            src="https://avatars.githubusercontent.com/u/91857421?v=4" 
                                            alt="Mateus Sonnenberg" 
                                            fill
                                            className="object-cover"
                                        />
                                    </div>
                                </div>
                                <div className="space-y-6 text-gray-300 leading-relaxed text-lg text-center md:text-left">
                                    <p>
                                        Minha trajetória é movida pela curiosidade de decifrar sistemas e pelo desafio de construir soluções que unam <span className="text-white font-medium">hardware e software</span> de forma prática.
                                    </p>
                                    <p>
                                        Com formação técnica em <strong>Eletroeletrônica</strong> e <strong>Desenvolvimento de Sistemas</strong>, aprendi a transitar entre o circuito físico e a lógica do código para resolver problemas reais de gestão e produtividade.
                                    </p>
                                    <p>
                                        Atualmente cursando <strong>Engenharia de Computação</strong> na Facens, busco minha primeira oportunidade de <strong>estágio</strong> para aplicar essa visão multidisciplinar e evoluir em projetos que exijam tanto rigor técnico quanto criatividade.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Trajetória Acadêmica */}
                        <div className="lg:col-span-5 p-8 rounded-2xl bg-white/5 border border-white/10 relative overflow-hidden group hover:border-primary/30 transition-colors">
                            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"/>
                            <h3 className="text-xl font-bold text-white mb-6">Trajetória Acadêmica</h3>
                            <ul className="space-y-6">
                                <li className="flex gap-4 items-start">
                                    <span className="w-3 h-3 mt-1.5 rounded-full bg-primary shrink-0 shadow-[0_0_10px_var(--primary)]"/>
                                    <div>
                                        <h4 className="font-bold text-white text-lg">Engenharia de Computação</h4>
                                        <p className="text-sm text-gray-400">Facens • Início em 2026</p>
                                        <p className="text-xs text-gray-500 mt-1">Foco em Software & Hardware Avançado</p>
                                    </div>
                                </li>
                                <li className="flex gap-4 items-start">
                                    <span className="w-3 h-3 mt-1.5 rounded-full bg-secondary shrink-0 shadow-[0_0_10px_var(--secondary)]"/>
                                    <div>
                                        <h4 className="font-bold text-white text-lg">Técnico em Eletroeletrônica</h4>
                                        <p className="text-sm text-gray-400">IFSP Sorocaba • Concluído em 2025</p>
                                        <p className="text-xs text-gray-500 mt-1">Automação, Circuitos e Microcontroladores</p>
                                    </div>
                                </li>
                                <li className="flex gap-4 items-start">
                                    <span className="w-3 h-3 mt-1.5 rounded-full bg-indigo-500 shrink-0 shadow-[0_0_10px_rgba(99,102,241,0.5)]"/>
                                    <div>
                                        <h4 className="font-bold text-white text-lg">Técnico em Desenv. de Sistemas</h4>
                                        <p className="text-sm text-gray-400">ETEC Fernando Prestes • 2024 — 2025</p>
                                        <p className="text-xs text-gray-500 mt-1">Lógica, Web, Mobile e Banco de Dados</p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}