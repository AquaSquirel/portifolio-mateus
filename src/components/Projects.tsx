"use client";
import { motion } from "framer-motion";
import { Smartphone, Map, Server, Calendar, Github, ExternalLink } from "lucide-react";

const projects = [
    {
        title: "TopVan",
        description: "Aplicativo mobile para gestão de pagamentos e alunos de transporte escolar. Desenvolvido para digitalizar o controle financeiro e organizar a frota de um negócio familiar.",
        tags: ["Mobile", "Gestão", "Finanças"],
        icon: <Smartphone className="w-6 h-6" />,
        color: "from-blue-500 to-cyan-500",
        highlight: "Impacto real em eficiência",
        github: "https://github.com/AquaSquirel/topvan-app-pagamentos",
        link: null
    },
    {
        title: "Ferramenta de Medição Agrícola",
        description: "App para produtividade no campo, permitindo medir talhões e demarcar áreas agrícolas via GPS. Solução de engenharia aplicada ao agronegócio.",
        tags: ["GPS", "Agronomia", "Maps"],
        icon: <Map className="w-6 h-6" />,
        color: "from-green-500 to-emerald-500",
        highlight: "Engenharia Aplicada",
        github: "https://github.com/AquaSquirel/AgroSketch",
        link: null
    },
    {
        title: "Home Server & Automação",
        description: "Infraestrutura doméstica rodando Linux para hospedagem de projetos, bots de WhatsApp e serviços locais. Laboratório prático de redes e sysadmin.",
        tags: ["Linux", "Docker", "Bots"],
        icon: <Server className="w-6 h-6" />,
        color: "from-purple-500 to-indigo-500",
        highlight: "Infraestrutura Real",
        github: null,
        link: null
    },
    {
        title: "Semana C&T - IFSP",
        description: "Desenvolvimento do site e materiais para a Semana de Ciência e Tecnologia. Trabalho colaborativo em ambiente institucional.",
        tags: ["Web", "Institucional", "Design"],
        icon: <Calendar className="w-6 h-6" />,
        color: "from-orange-500 to-red-500",
        highlight: "Colaboração Acadêmica",
        github: "https://github.com/AquaSquirel/SCT-ifsp_sor-site",
        link: "https://snct.ifsp-sor.mateuss.com.br/"
    }
];

export const Projects = () => {
    return (
        <section id="projects" className="py-20 bg-black/20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center text-white">Projetos em Destaque</h2>
                    <p className="text-gray-400 text-center max-w-2xl mx-auto mb-16">
                        Soluções criadas para resolver problemas reais, do agronegócio à gestão empresarial.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {projects.map((project, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="group relative rounded-2xl bg-card border border-card-border overflow-hidden hover:border-white/20 transition-all shadow-lg hover:shadow-primary/5 flex flex-col h-full"
                            >
                                <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${project.color}`} />
                                
                                <div className="p-8 flex-1 flex flex-col">
                                    <div className="flex justify-between items-start mb-6">
                                        <div className={`p-3 rounded-lg bg-white/5 text-white group-hover:bg-white/10 transition-colors`}>
                                            {project.icon}
                                        </div>
                                        <span className={`text-xs font-bold px-3 py-1 rounded-full border border-white/10 bg-white/5 text-gray-300`}>
                                            {project.highlight}
                                        </span>
                                    </div>

                                    <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-primary transition-colors">
                                        {project.title}
                                    </h3>
                                    
                                    <p className="text-gray-400 mb-6 line-clamp-3 leading-relaxed">
                                        {project.description}
                                    </p>

                                    <div className="mt-auto space-y-6">
                                        <div className="flex flex-wrap gap-2">
                                            {project.tags.map((tag, i) => (
                                                <span key={i} className="text-xs font-medium px-2.5 py-1 rounded-md bg-secondary/10 text-secondary border border-secondary/20">
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>

                                        <div className="flex gap-3 pt-2">
                                            {project.github && (
                                                <a 
                                                    href={project.github} 
                                                    target="_blank" 
                                                    rel="noopener noreferrer"
                                                    className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/5 hover:bg-white/10 text-white text-sm font-medium transition-colors border border-white/5 hover:border-white/20"
                                                >
                                                    <Github className="w-4 h-4" />
                                                    Code
                                                </a>
                                            )}
                                            {project.link && (
                                                <a 
                                                    href={project.link} 
                                                    target="_blank" 
                                                    rel="noopener noreferrer"
                                                    className="flex items-center gap-2 px-4 py-2 rounded-lg bg-primary/10 hover:bg-primary/20 text-primary text-sm font-medium transition-colors border border-primary/20"
                                                >
                                                    <ExternalLink className="w-4 h-4" />
                                                    Demo
                                                </a>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};