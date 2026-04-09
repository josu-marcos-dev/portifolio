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
    { icon: <Github />, url: "https://github.com/josu-marcos-dev", label: "GitHub" },
    { icon: <Linkedin />, url: "https://www.linkedin.com/in/josu%C3%A9-marcos-532a491b4/", label: "LinkedIn" },
    { icon: <Mail />, url: "https://mail.google.com/mail/?view=cm&fs=1&to=josuemarcosdasilva@gmail.com", label: "E-mail" },
  ];

  


  const projects = [
    {
      title: "TaskFlow API",
      description: "API RESTful para gerenciamento de tarefas, com implementação de operações CRUD, estruturação modular e foco em organização, autenticação e boas práticas.",
      link: "https://github.com/josu-marcos-dev/TaskFlow-API-",
      image: "/images/imagem01.png",
      skills: ["Linux", "Python", "FastAPI", "Docker", "PostgreSQL", "REST API", "JWT Authentication", "SQL Alchemy"],
    },
    {
      title: "Financial Control System",
      description: "Em desenvolvimento: Projeto que trabalha modelagem relacional avançada, transações e regras de negócio, lógica de backend pesada, visando mapear gastos pessoais",
      link: "https://github.com/josu-marcos-dev/Finance-Tracker",
      image: "/images/imagem02.png",
      skills: ["Python", "FastAPI", "PostgreSQL", "SQL", "Docker", "ML", "JWT Authentication", "SQL Alchemy", "Linux"],
    },
    {
      title: "Mini Banco de Dados em C",
      description: "Em desenvolvimento: Um banco de dados totalmente criado usando a linguagem C para praticar lógica avançada",
      link: "https://github.com/josu-marcos-dev/Data-Base-C",
      image: "/images/imagem03.png",
      skills: ["C", "Linux"],
    },
    {
      title: "Chatbot de Inteligência Artificial",
      description: "Um projeto universitário em grupo onde está sendo desenvolvido um assistente de IA treinado de forma específica.",
      link: "https://github.com/greenteamhc/gthc-chatbot",
      image: "/images/imagem04.png",
      skills: ["RAG", "Flask", "Python", "Linux", "ML", "AI"],
    },
  ];

  const skills = [
    { name: "Inteligência Artificial", link: "#Chatbot de Inteligência Artificial" },
    { name: "Front-End", link: "#Analisador de Dados de Rede Social" },
    { name: "Machine Learning", link: "#Algoritmos de ML em Dados publicos" },
    { name: "Back-End", link: "#TaskFlow API" },
    { name: "Dados", link: "#ashboard Interativo com Dados Públicos" },
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
      text: "Curiosidade, disciplina, determinação, excelência, compromisso, ética e aprendizado contínuo.",
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
          Bem-vindo ao meu espaço digital. Me chamo Josue Marcos, tenho 20 anos, sou estudante de Ciência da Computação 
          na Universidade Federal do ABC.<br />
          Aqui, meus projetos se dispõe tal como planetas no meu sistema solar, e refletem o universo que é minha mente!
          compartilho minha paixão por tecnologia e meus avanços profissionais e acadêmicos através de meus projetos.<br />
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
          Amo desenhar, ler, estudar, escrever, aprender e aplicar criatividade em meu trabalho, tanto na arte quanto no código.<br></br>
          Busco me desenvolver em engenharia de software, mas me interesso muito pelas áreas de Ciência de Dados, IA e ML. Possuo uma formação acadẽmica dupla e interdisciplinar
          por conta disso, além de minha formação (em curso) em Ciência da Computação, também sou bacharel em Ciência e Tecnologia, logo, detenho um amplo conhecimento de 
          Física, Matemática, Biologia e Química avançada.<br></br>
          Acredito na interdisciplinaridade como base para criar soluções técnicas inovadoras, versáteis e inclusivas.
        </p>
        <div className="flex flex-wrap justify-center gap-4 mt-4">
          <a
            href="/pdf/Currículo 2.6.pdf"
            download
            className="px-6 py-3 bg-[#1877f2] text-white rounded-full font-medium hover:bg-[#0f5dd0] transition"
            >
            Baixar meu currículo completo
          </a>
          <a
            href="/pdf/Resume 2.6.pdf"
            download
            className="px-6 py-3 bg-[#1877f2] text-white rounded-full font-medium hover:bg-[#0f5dd0] transition"
            >
            Download my full resume 
          </a>
        </div>
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
        <a href="https://mail.google.com/mail/?view=cm&fs=1&to=josuemarcosdasilva@gmail.com" className="inline-flex items-center gap-2 text-lg underline text-[#1877f2] hover:text-white transition">
          <ArrowDownCircle className="w-5 h-5" /> Envie um e-mail!
        </a>
      </motion.section>
    </div>
  );
}
