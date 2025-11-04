const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

async function main() {
  console.log("🌱 Iniciando seed do banco de dados...");

  // Limpar dados existentes (opcional - comente se não quiser limpar)
  await prisma.artigo.deleteMany();
  await prisma.fAQ.deleteMany();
  await prisma.contato.deleteMany();
  console.log("✅ Dados antigos removidos");

  // ============================================
  // 1. CRIAR ARTIGOS
  // ============================================
  console.log("📝 Criando artigos...");

  const artigo1 = await prisma.artigo.create({
    data: {
      titulo: "Neurodivergência: O Que É e Por Que Importa?",
      slug: "neurodivergencia-o-que-e-por-que-importa",
      subtitulo: "Entenda o conceito e sua importância na sociedade atual",
      descricao: "Entenda o conceito e sua importância na sociedade atual.",
      conteudo: `A neurodivergência é um conceito que reconhece e valoriza as diferenças neurológicas entre as pessoas...`,
      componente: "NeurodivergenciaArtigo",
      imagemPrincipal: "/imagens/img1.jpg",
      imagemCapa: "/imagens/img1.jpg",
      categoria: "Neurociência",
      tags: '["neurodivergência", "neurociência", "diversidade", "inclusão"]',
      autor: "BrainWave Connect",
      visualizacoes: 0,
      destaque: true,
      premium: true,
      ativo: true
    }
  });

  const artigo2 = await prisma.artigo.create({
    data: {
      titulo: "TDAH Além dos Estereótipos",
      slug: "tdah-alem-dos-estereotipos",
      subtitulo: "Descubra como o TDAH afeta a vida além da hiperatividade",
      descricao: "Descubra como o TDAH afeta a vida além da hiperatividade.",
      conteudo: `O TDAH é muito mais complexo do que simplesmente não conseguir ficar parado...`,
      componente: "TDAHEsterotipos",
      imagemPrincipal: "/imagens/img2.jpg",
      imagemCapa: "/imagens/img2.jpg",
      categoria: "TDAH",
      tags: '["TDAH", "estereótipos", "hiperatividade", "atenção"]',
      autor: "BrainWave Connect",
      visualizacoes: 0,
      destaque: true,
      premium: false,
      ativo: true
    }
  });

  const artigo3 = await prisma.artigo.create({
    data: {
      titulo: "Autismo e Comunicação: Além das Palavras",
      slug: "autismo-comunicacao-alem-das-palavras",
      subtitulo: "Compreendendo as diferentes formas de comunicação no autismo",
      descricao: "Compreendendo as diferentes formas de comunicação no autismo.",
      conteudo: `A comunicação no autismo vai muito além das palavras faladas...`,
      componente: "AutismoComunicacao",
      imagemPrincipal: "/imagens/img3.jpg",
      imagemCapa: "/imagens/img3.jpg",
      categoria: "Autismo",
      tags: '["autismo", "comunicação", "linguagem", "interação social"]',
      autor: "BrainWave Connect",
      visualizacoes: 0,
      destaque: true,
      premium: false,
      ativo: true
    }
  });

  const artigo4 = await prisma.artigo.create({
    data: {
      titulo: "TDAH na Vida Adulta: Navegando os Desafios",
      slug: "tdah-vida-adulta-navegando-desafios",
      subtitulo: "Como o TDAH afeta adultos e estratégias para uma vida plena",
      descricao: "Como o TDAH afeta adultos e estratégias para uma vida plena.",
      conteudo: `O TDAH na vida adulta apresenta características únicas e desafios específicos...`,
      componente: "TDAHVidaAdulta",
      imagemPrincipal: "/imagens/img8.jpg",
      imagemCapa: "/imagens/img8.jpg",
      categoria: "TDAH",
      tags: '["TDAH", "vida adulta", "trabalho", "relacionamentos"]',
      autor: "BrainWave Connect",
      visualizacoes: 0,
      destaque: false,
      premium: true,
      ativo: true
    }
  });

  const artigo5 = await prisma.artigo.create({
    data: {
      titulo: "Autismo e Emprego: Construindo Oportunidades",
      slug: "autismo-emprego-construindo-oportunidades",
      subtitulo: "A inclusão de pessoas autistas no mercado de trabalho",
      descricao: "A inclusão de pessoas autistas no mercado de trabalho.",
      conteudo: `A inclusão de pessoas autistas no mercado de trabalho representa uma oportunidade transformadora...`,
      componente: "AutismoEmprego",
      imagemPrincipal: "/imagens/img10.jpg",
      imagemCapa: "/imagens/img10.jpg",
      categoria: "Autismo",
      tags: '["autismo", "emprego", "inclusão", "mercado de trabalho"]',
      autor: "BrainWave Connect",
      visualizacoes: 0,
      destaque: false,
      premium: true,
      ativo: true
    }
  });

  const artigo6 = await prisma.artigo.create({
    data: {
      titulo: "Sensorialidade no Autismo: Compreendendo as Diferenças",
      slug: "sensorialidade-autismo-compreendendo-diferencas",
      subtitulo: "O processamento sensorial único no espectro autista",
      descricao: "O processamento sensorial único no espectro autista.",
      conteudo: `O processamento sensorial no autismo é uma das características mais significativas...`,
      componente: "SensorialidadeAutismo",
      imagemPrincipal: "/imagens/img7.jpg",
      imagemCapa: "/imagens/img7.jpg",
      categoria: "Autismo",
      tags: '["autismo", "sensorialidade", "processamento sensorial", "hipersensibilidade"]',
      autor: "BrainWave Connect",
      visualizacoes: 0,
      destaque: false,
      premium: true,
      ativo: true
    }
  });

  const artigo7 = await prisma.artigo.create({
    data: {
      titulo: "TDAH e Hiperfoco: Explorando o Superpoder da Concentração",
      slug: "tdah-hiperfoco-superpoder-concentracao",
      subtitulo: "Como o hiperfoco pode ser uma força poderosa no TDAH",
      descricao: "Como o hiperfoco pode ser uma força poderosa no TDAH.",
      conteudo: `O hiperfoco é um dos aspectos mais fascinantes e mal compreendidos do TDAH...`,
      componente: "TDAHHiperfoco",
      imagemPrincipal: "/imagens/img9.jpg",
      imagemCapa: "/imagens/img9.jpg",
      categoria: "TDAH",
      tags: '["TDAH", "hiperfoco", "concentração", "produtividade"]',
      autor: "BrainWave Connect",
      visualizacoes: 0,
      destaque: true,
      premium: true,
      ativo: true
    }
  });

  const artigo8 = await prisma.artigo.create({
    data: {
      titulo: "Inclusão Escolar: Construindo Pontes para Todos",
      slug: "inclusao-escolar-construindo-pontes",
      subtitulo: "Como criar ambientes educacionais verdadeiramente inclusivos",
      descricao: "Como criar ambientes educacionais verdadeiramente inclusivos.",
      conteudo: `A inclusão escolar vai muito além de apenas colocar estudantes com necessidades especiais...`,
      componente: "InclusaoEscolar",
      imagemPrincipal: "/imagens/img6.jpg",
      imagemCapa: "/imagens/img6.jpg",
      categoria: "Educação",
      tags: '["inclusão", "educação", "escola", "diversidade"]',
      autor: "BrainWave Connect",
      visualizacoes: 0,
      destaque: false,
      premium: true,
      ativo: true
    }
  });

  const artigo9 = await prisma.artigo.create({
    data: {
      titulo: "Ansiedade e Neurodivergência: Navegando Águas Complexas",
      slug: "ansiedade-neurodivergencia-navegando-aguas-complexas",
      subtitulo: "A relação entre ansiedade e condições neurodivergentes",
      descricao: "A relação entre ansiedade e condições neurodivergentes.",
      conteudo: `A ansiedade em pessoas neurodivergentes apresenta características únicas...`,
      componente: "AnsiedadeNeurodivergencia",
      imagemPrincipal: "/imagens/img4.jpg",
      imagemCapa: "/imagens/img4.jpg",
      categoria: "Saúde Mental",
      tags: '["ansiedade", "neurodivergência", "saúde mental", "bem-estar"]',
      autor: "BrainWave Connect",
      visualizacoes: 0,
      destaque: false,
      premium: true,
      ativo: true
    }
  });

  const artigo10 = await prisma.artigo.create({
    data: {
      titulo: "Tecnologia e Neurodivergência: Ferramentas de Empoderamento",
      slug: "tecnologia-neurodivergencia-ferramentas-empoderamento",
      subtitulo: "Como a tecnologia pode apoiar pessoas neurodivergentes",
      descricao: "Como a tecnologia pode apoiar pessoas neurodivergentes.",
      conteudo: `A tecnologia tem se mostrado uma aliada poderosa para pessoas neurodivergentes...`,
      componente: "TecnologiaNeurodivergentes",
      imagemPrincipal: "/imagens/img12.jpg",
      imagemCapa: "/imagens/img12.jpg",
      categoria: "Tecnologia",
      tags: '["tecnologia", "neurodivergência", "assistiva", "inovação"]',
      autor: "BrainWave Connect",
      visualizacoes: 0,
      destaque: false,
      premium: true,
      ativo: true
    }
  });

  const artigo11 = await prisma.artigo.create({
    data: {
      titulo: "Neurodivergência e Criatividade: Impulsionando a Inovação",
      slug: "neurodivergencia-criatividade-impulsionando-inovacao",
      subtitulo: "Como a neurodivergência impulsiona a inovação",
      descricao: "Como a neurodivergência impulsiona a inovação.",
      conteudo: `A relação entre neurodivergência e criatividade é uma das áreas mais fascinantes da pesquisa em neurociência moderna...`,
      componente: "NeurodivergenciaCriatividade",
      imagemPrincipal: "/imagens/img15.jpg",
      imagemCapa: "/imagens/img15.jpg",
      categoria: "Inovação",
      tags: '["criatividade", "inovação", "neurodivergência", "potencial"]',
      autor: "BrainWave Connect",
      visualizacoes: 0,
      destaque: false,
      premium: true,
      ativo: true
    }
  });

  const artigo12 = await prisma.artigo.create({
    data: {
      titulo: "Dislexia e Criatividade: Transformando Desafios em Superpoderes",
      slug: "dislexia-criatividade-transformando-desafios-superpoderes",
      subtitulo: "Como a dislexia pode ser uma fonte de criatividade extraordinária",
      descricao: "Como a dislexia pode ser uma fonte de criatividade extraordinária.",
      conteudo: `A dislexia é muito mais que uma 'dificuldade de leitura'...`,
      componente: "DislexiaCriatividade",
      imagemPrincipal: "/imagens/img13.jpg",
      imagemCapa: "/imagens/img13.jpg",
      categoria: "Dislexia",
      tags: '["dislexia", "criatividade", "superpoderes", "talentos"]',
      autor: "BrainWave Connect",
      visualizacoes: 0,
      destaque: false,
      premium: true,
      ativo: true
    }
  });

  const artigo13 = await prisma.artigo.create({
    data: {
      titulo: "Saúde Mental e Neurodivergência: Cuidado Integral",
      slug: "saude-mental-neurodivergencia-cuidado-integral",
      subtitulo: "Como cuidar da saúde mental em cérebros neurodivergentes",
      descricao: "Abordagens para o cuidado integral da saúde mental em pessoas neurodivergentes.",
      conteudo: `A saúde mental é fundamental para todos, mas para pessoas neurodivergentes, requer abordagens específicas...`,
      componente: "SaudeMentalNeurodivergencia",
      imagemPrincipal: "/imagens/img14.jpg",
      imagemCapa: "/imagens/img14.jpg",
      categoria: "Saúde Mental",
      tags: '["saúde mental", "neurodivergência", "bem-estar", "cuidado integral"]',
      autor: "BrainWave Connect",
      visualizacoes: 0,
      destaque: false,
      premium: true,
      ativo: true
    }
  });

  console.log(`✅ ${13} artigos criados`);

  // ============================================
  // 2. CRIAR FAQs
  // ============================================
  console.log("❔ Criando FAQs...");

  await prisma.fAQ.createMany({
    data: [
      {
        pergunta: "O que é o Brainwave Connect?",
        resposta:
          "O Brainwave Connect é um espaço de informação, acolhimento e conexão para pessoas com autismo, TDAH e outras condições relacionadas à neurodiversidade.",
        ordem: 1,
        ativo: true
      },
      {
        pergunta: "Quais assuntos são abordados no Brainwave Connect?",
        resposta:
          "Abordamos temas como autismo, TDAH, dislexia, neurodiversidade em geral, estratégias de apoio, inclusão escolar e profissional, entre outros tópicos relevantes.",
        ordem: 2,
        ativo: true
      },
      {
        pergunta: "Como posso contribuir com o Brainwave Connect?",
        resposta:
          "Você pode compartilhar nosso conteúdo, enviar sugestões de temas ou entrar em contato para parcerias através do formulário de contato no site.",
        ordem: 3,
        ativo: true
      },
      {
        pergunta: "O conteúdo do site substitui orientação profissional?",
        resposta:
          "Não. Nosso conteúdo é informativo e educacional, mas não substitui a orientação de profissionais de saúde qualificados para diagnóstico ou tratamento.",
        ordem: 4,
        ativo: true
      }
    ]
  });

  console.log(`✅ ${4} FAQs criadas`);

  // ============================================
  // 3. CRIAR CONTATO DE EXEMPLO
  // ============================================
  console.log("📧 Criando contato de exemplo...");

  await prisma.contato.create({
    data: {
      nome: "João Silva",
      email: "joao.silva@example.com",
      mensagem: "Gostaria de sugerir um artigo sobre neurodivergência no ambiente de trabalho.",
      status: "LIDO"
    }
  });

  console.log(`✅ Contato de exemplo criado`);

  console.log(`🎉 Seed concluído com sucesso!`);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });