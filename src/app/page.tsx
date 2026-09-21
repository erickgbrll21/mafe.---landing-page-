import { Header } from "@/components/Header";
import { Hero } from "@/components/sections/Hero";
import { Sobre } from "@/components/sections/Sobre";
import { Valores } from "@/components/sections/Valores";
import { Servicos } from "@/components/sections/Servicos";
import { Projetos } from "@/components/sections/Projetos";
import { Orcamento } from "@/components/sections/Orcamento";
import { Contato } from "@/components/sections/Contato";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Sobre />
        <Valores />
        <Servicos />
        <Projetos />
        <Orcamento />
      </main>
      <Contato />
    </>
  );
}
