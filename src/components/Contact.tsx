"use client";
import { Github, Linkedin, Mail } from "lucide-react";

export const Contact = () => {
    return (
        <footer id="contact" className="py-12 border-t border-white/5 bg-black/40">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <h2 className="text-2xl font-bold text-white mb-6">Vamos Conversar?</h2>
                <p className="text-gray-400 mb-8 max-w-lg mx-auto">
                    Estou sempre aberto a novas oportunidades e projetos que desafiem meus conhecimentos em hardware e software.
                </p>
                
                <div className="flex justify-center gap-6 mb-8">
                    <a href="https://github.com/AquaSquirel" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full bg-white/5 hover:bg-white/10 text-white transition-colors hover:scale-110 duration-300">
                        <Github className="w-6 h-6" />
                    </a>
                    <a href="https://www.linkedin.com/in/mateus-sonnenberg-530584285/" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full bg-white/5 hover:bg-white/10 text-blue-400 transition-colors hover:scale-110 duration-300">
                        <Linkedin className="w-6 h-6" />
                    </a>
                    <a href="mailto:mateus.sonnenberg.amaral@gmail.com" className="p-3 rounded-full bg-white/5 hover:bg-white/10 text-emerald-400 transition-colors hover:scale-110 duration-300">
                        <Mail className="w-6 h-6" />
                    </a>
                </div>
                
                <p className="text-sm text-gray-600">
                    © {new Date().getFullYear()} Mateus Sonnenberg. Desenvolvido com Next.js & Tailwind.
                </p>
            </div>
        </footer>
    )
}
