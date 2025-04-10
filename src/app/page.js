'use client';

import { useState, useEffect } from "react";
import { Github, Mail, Linkedin, Globe, ArrowDownCircle, User, Eye, Heart } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Portfolio() {
  const [darkMode, setDarkMode] = useState(true);
  const toggleDarkMode = () => setDarkMode(!darkMode);

  useEffect(() => {
    document.documentElement.style.scrollBehavior = "smooth";
  }, []);

  const links = [
    { icon: <Github />, url: "https://github.com/josuemarcos", label: "GitHub" },
    { icon: <Linkedin />, url: "https://linkedin.com/in/josuemarcos", label: "LinkedIn" },
    { icon: <Mail />, url: "mailto:josue@email.com", label: "E-mail" },
  ];

  const projects = [
    {
      title: "Living Better Me",
      description: "Criação de conteúdo e estruturação do site de uma startup de saúde mental.",
      link: "https://wpss.livingbetterme.com/",
      image: "https://via.placeholder.com/400x200.png?text=Living+Better+Me",
      skills: ["React", "Figma", "Tailwind CSS"],
    },
    {
      title: "Clone Netflix",
      description: "Projeto React com API para listagem de filmes e responsividade total.",
      link: "https://github.com/josuemarcos/netflix-clone",
      image: "https://via.placeholder.com/400x200.png?text=Clone+Netflix",
      skills: ["React", "JavaScript", "Tailwind CSS"],
    },
    {
      title: "Dashboard Financeiro",
      description: "Painel de controle interativo usando Power BI e integração com banco de dados.",
      link: "https://github.com/josuemarcos/dashboard-financeiro",
      image: "https://via.placeholder.com/400x200.png?text=Dashboard",
      skills: ["Power BI", "Python"],
    },
    {
      title: "Portfólio Artístico",
      description: "Site para exibir minhas artes e croquis com layout responsivo.",
      link: "https://github.com/josuemarcos/portfolio-artistico",
      image: "https://via.placeholder.com/400x200.png?text=Arte",
      skills: ["Figma", "Tailwind CSS", "JavaScript"],
    },
  ];

  const skills = [
    { name: "React", link: "#Living Better Me" },
    { name: "Node.js", link: "#" },
    { name: "Tailwind CSS", link: "#Clone Netflix" },
    { name: "Git", link: "#" },
    { name: "JavaScript", link: "#Clone Netflix" },
    { name: "Python", link: "#Dashboard Financeiro" },
    { name: "Figma", link: "#Living Better Me" },
    { name: "Power BI", link: "#Dashboard Financeiro" },
  ];

  const qualities = [
    {
      icon: <User className="w-6 h-6 text-[#1877f2]" />,
      title: "Missão",
      text: "Gerar soluções impactantes e avanços reais através da criatividade e tecnologia.",
    },
    {
      icon: <Eye className="w-6 h-6 text-[#1877f2]" />,
      title: "Visão",
      text: "Ser referência na área de tecnológica com propósito de impacto social e humano.",
    },
    {
      icon: <Heart className="w-6 h-6 text-[#1877f2]" />,
      title: "Valores",
      text: "Curiosidade, disciplina, determinação, excelência, ética e aprendizado contínuo.",
    },
  ];

  return (
    <div className="bg-[#18191a] text-white font-sans transition-colors duration-300 min-h-screen font-[Segoe UI]">
      <header className="flex justify-between items-center px-8 py-6 shadow-sm border-b border-[#3a3b3c]">
        <h1 className="text-4xl font-bold tracking-tight">Josué Marcos</h1>
        <div className="flex items-center gap-5">
          {links.map(({ icon, url, label }) => (
            <a
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              key={label}
              aria-label={label}
              className="text-gray-300 hover:text-[#1877f2] transition-colors duration-300"
            >
              {icon}
            </a>
          ))}
        </div>
      </header>

      <motion.section
        className="py-24 px-8 bg-black text-center"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="flex items-center justify-center gap-3 text-3xl font-semibold mb-6">
          <Globe className="text-[#1877f2] animate-bounce" />
          <h2 className="font-bold">Sobre meu universo</h2>
        </div>
        <p className="text-lg max-w-3xl mx-auto text-gray-300">
          Bem-vindo ao meu cosmos digital. Me chamo Josue Marcos, tenho 20 anos, sou estudante de Ciência da Computação 
          na Universidade Federal do ABC.<br />
          Aqui, meus projetos se dispõe tal como planetas em meu sistema solar, e refletem o universo que é minha mente!
          compartilho minha paixão por tecnologia, meus avanços profissionais e acadêmicos através de meus projetos.<br />
          Sonho alto, sou ambicioso, estratégico, quero ir além e tenho aversão ao ordinário!<br />
          <br /><b><i>"É justo que aquilo que muito vale, muito custe!"</i></b>
        </p>
      </motion.section>

      <motion.section
        className="py-24 px-8 bg-[#242526] text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-4xl font-bold mb-4">🚀 Projetos</h2>
        <p className="mb-12 text-lg text-gray-400">Veja um pouco mais do meu trabalho</p>
        <div className="grid md:grid-cols-2 gap-10 justify-center">
          {projects.map((proj) => (
            <motion.a
              key={proj.title}
              whileHover={{ scale: 1.04 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="rounded-xl overflow-hidden bg-[#3a3b3c] hover:shadow-2xl transition-all duration-300 group border border-[#4e4f50] block"
              id={proj.title}
              href={proj.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={proj.image} alt={proj.title} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-2xl font-semibold mb-2 text-white group-hover:text-[#1877f2] transition-colors duration-300">{proj.title}</h3>
                <p className="text-gray-300">{proj.description}</p>
              </div>
              <div className="bg-[#4e4f50] p-4 border-t border-gray-600">
                <p className="text-sm text-gray-200 mb-2">Tecnologias usadas:</p>
                <ul className="flex flex-wrap gap-2 justify-center">
                  {proj.skills.map(skill => (
                    <li key={skill} className="bg-[#18191a] border border-gray-500 px-3 py-1 text-xs rounded-full text-gray-100 font-medium">
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.a>
          ))}
        </div>
      </motion.section>

      <motion.section
        className="py-20 px-8 bg-[#18191a]"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-5xl mx-auto bg-[#242526] p-10 rounded-2xl border border-[#3a3b3c]">
          <h2 className="text-3xl font-bold text-center mb-8 text-white">🧠 Skills</h2>
          <div className="flex flex-wrap justify-center gap-4">
            {skills.map(skill => (
              <a href={skill.link} key={skill.name} className="text-sm bg-[#3a3b3c] border border-gray-600 px-5 py-2 rounded-full text-white hover:bg-[#1877f2] hover:text-white transition duration-300">
                {skill.name}
              </a>
            ))}
          </div>
        </div>
      </motion.section>

      <motion.section
        className="py-20 px-8 bg-[#202124] text-center"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-3xl font-bold mb-4">📄 Me conheça melhor</h2>
        <p className="max-w-3xl mx-auto mb-6 text-gray-300">
          Tenho inglês avançado, espanhol básico, perfil autodidata e gosto de colaborar com equipes diversas.
          Amo desenhar, aprender coisas novas e aplicar criatividade em tudo que faço — tanto na arte quanto no código.
        </p>
        <a
          href="https://drive.google.com/file/d/1SGA9L6b0iZg1cv5B3E5x7p7kgzqUtwZT/view"
          target="_blank"
          className="inline-block mt-4 px-6 py-3 bg-[#1877f2] text-white rounded-full font-medium hover:bg-[#0f5dd0] transition"
        >
          Ver meu currículo completo
        </a>
      </motion.section>

      <motion.section
        className="py-20 px-6 bg-[#18191a] text-center"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-6">
          {qualities.map((q) => (
            <div key={q.title} className="bg-[#242526] p-6 rounded-2xl border border-[#3a3b3c] hover:shadow-lg transition duration-300">
              <div className="flex items-center justify-center mb-4">{q.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{q.title}</h3>
              <p className="text-gray-300 text-sm leading-relaxed">{q.text}</p>
            </div>
          ))}
        </div>
      </motion.section>

      <motion.section
        className="py-16 px-8 bg-[#18191a] text-center border-t border-[#3a3b3c]"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        <p className="mb-4 text-gray-400 text-lg">Quer trabalhar comigo?</p>
        <a href="mailto:josue@email.com" className="inline-flex items-center gap-2 text-lg underline text-[#1877f2] hover:text-white transition">
          <ArrowDownCircle className="w-5 h-5" /> Envie um e-mail!
        </a>
      </motion.section>
    </div>
  );
}
