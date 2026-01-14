"use client";
import { motion } from "framer-motion";
import { Cpu, Code, Settings } from "lucide-react";

const skillCategories = [
    {
        category: "Desenvolvimento",
        icon: <Code className="w-8 h-8 text-primary" />,
        description: "Linguagens e tecnologias para software e engenharia.",
        items: ["Node.js", "Python", "C / C++", "TypeScript", "React"]
    },
    {
        category: "Hardware & Eletrônica",
        icon: <Cpu className="w-8 h-8 text-secondary" />,
        description: "Base técnica vinda da formação em Eletroeletrônica.",
        items: ["Microcontroladores", "Circuitos", "Automação"]
    },
    {
        category: "Ferramentas & Infra",
        icon: <Settings className="w-8 h-8 text-emerald-500" />,
        description: "Experiência prática com sistemas e manutenção.",
        items: ["Linux", "Docker", "Git", "Redes"]
    }
];

export const Skills = () => {
    return (
        <section id="skills" className="py-20 relative overflow-hidden">
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl -z-10" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-4xl font-bold mb-4 text-white"
                    >
                        Conhecimentos & Tecnologias
                    </motion.h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        Minha base técnica é construída através de projetos práticos e formação acadêmica constante.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {skillCategories.map((skill, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="p-8 rounded-2xl bg-card border border-card-border hover:border-primary/30 transition-all group"
                        >
                            <div className="mb-6 p-3 rounded-xl bg-white/5 w-fit group-hover:scale-110 transition-transform duration-300">
                                {skill.icon}
                            </div>
                            <h3 className="text-xl font-bold text-white mb-2">{skill.category}</h3>
                            <p className="text-sm text-gray-500 mb-6">{skill.description}</p>
                            <div className="flex flex-wrap gap-2">
                                {skill.items.map((item, i) => (
                                    <span key={i} className="text-xs font-medium px-3 py-1 rounded-full bg-white/5 text-gray-400 border border-white/5">
                                        {item}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}