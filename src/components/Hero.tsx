"use client";
import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
        {/* Background Gradients */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl -z-10 animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-3xl -z-10" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
            >
                <h2 className="text-lg md:text-xl font-medium text-secondary mb-4 tracking-wide uppercase">
                    Portfólio Profissional
                </h2>
                <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight text-white">
                    Mateus Sonnenberg
                    <span className="text-primary">.</span>
                </h1>
                <p className="text-xl md:text-2xl text-gray-400 max-w-2xl mx-auto mb-8 leading-relaxed">
                    Do <span className="text-secondary font-semibold">Elétron</span> ao <span className="text-primary font-semibold">Bit</span>.
                    <br />
                    Desenvolvedor & Engenheiro de Computação em Formação.
                </p>

                <div className="flex flex-col sm:flex-row justify-center gap-4">
                    <a href="#projects" className="px-8 py-3 rounded-full bg-primary text-white font-medium hover:bg-primary/90 transition-all shadow-[0_0_20px_-5px_var(--primary)]">
                        Ver Projetos
                    </a>
                    <a href="#contact" className="px-8 py-3 rounded-full border border-white/10 text-white hover:bg-white/5 transition-all">
                        Entre em Contato
                    </a>
                </div>
            </motion.div>
        </div>

        <motion.div
            className="absolute bottom-10 left-1/2 -translate-x-1/2"
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
        >
            <ArrowDown className="w-6 h-6 text-gray-500" />
        </motion.div>
    </section>
  );
};
