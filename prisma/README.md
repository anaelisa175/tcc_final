# 🗄️ Schema do Banco de Dados - BrainWave Connect

Este documento descreve o schema do banco de dados para o MVP do BrainWave Connect.

## 📊 Tabelas Implementadas (MVP)

### 1. **artigos** ⭐⭐⭐

Tabela principal que armazena todos os artigos sobre neurodivergência.

**Campos:**

- `id` - Identificador único (auto-incremento)
- `titulo` - Título do artigo (máx. 200 caracteres)
- `descricao` - Breve descrição/resumo
- `conteudo` - Conteúdo completo do artigo (texto longo)
- `imagemPrincipal` - URL da imagem de capa
- `categoria` - Categoria do artigo (ex: "Neurociência", "TDAH", "Autismo")
- `dataPublicacao` - Data de publicação (padrão: agora)
- `dataAtualizacao` - Data da última atualização (auto)
- `visualizacoes` - Contador de visualizações (padrão: 0)
- `destaque` - Se o artigo está em destaque (padrão: false)

**Índices:**

- categoria
- dataPublicacao
- destaque

**Relacionamentos:**

- 1:N com `quiz_perguntas` (um artigo pode ter várias perguntas de quiz)

---

### 2. **contatos** ⭐⭐⭐

Armazena mensagens enviadas através do formulário "Fale Conosco".

**Campos:**

- `id` - Identificador único
- `nome` - Nome do remetente (máx. 100 caracteres)
- `email` - Email do remetente (máx. 150 caracteres)
- `mensagem` - Conteúdo da mensagem
- `dataEnvio` - Data/hora do envio (padrão: agora)
- `status` - Status da mensagem (PENDENTE, LIDO, RESPONDIDO)
- `resposta` - Resposta do administrador (opcional)
- `dataResposta` - Data da resposta (opcional)

**Índices:**

- status
- dataEnvio

**Status possíveis:**

- `PENDENTE` - Mensagem não lida
- `LIDO` - Mensagem visualizada
- `RESPONDIDO` - Mensagem respondida

---

### 3. **faqs** ⭐⭐

Perguntas frequentes exibidas na seção FAQ do site.

**Campos:**

- `id` - Identificador único
- `pergunta` - Texto da pergunta (máx. 255 caracteres)
- `resposta` - Texto da resposta
- `ordem` - Ordem de exibição (padrão: 0)
- `ativo` - Se a FAQ está ativa/visível (padrão: true)
- `categoria` - Categoria da FAQ (opcional)
- `dataCriacao` - Data de criação (padrão: agora)

**Índices:**

- ativo
- ordem

---

### 4. **quiz_perguntas** ⭐⭐

Perguntas dos quizzes interativos associados aos artigos.

**Campos:**

- `id` - Identificador único
- `artigoId` - ID do artigo relacionado (opcional, pode ser NULL)
- `pergunta` - Texto da pergunta
- `ordem` - Ordem da pergunta no quiz (padrão: 0)

**Índices:**

- artigoId

**Relacionamentos:**

- N:1 com `artigos` (muitas perguntas para um artigo)
- 1:N com `quiz_opcoes` (uma pergunta tem várias opções)

---

### 5. **quiz_opcoes** ⭐⭐

Opções de resposta para cada pergunta do quiz.

**Campos:**

- `id` - Identificador único
- `perguntaId` - ID da pergunta relacionada
- `textoOpcao` - Texto da opção de resposta (máx. 255 caracteres)
- `correta` - Se esta é a resposta correta (padrão: false)
- `ordem` - Ordem de exibição (padrão: 0)

**Índices:**

- perguntaId

**Relacionamentos:**

- N:1 com `quiz_perguntas` (muitas opções para uma pergunta)

**Regra de negócio:**

- Apenas UMA opção deve ter `correta = true` por pergunta

---

### 6. **busca_historico** ⭐

Registro de todas as buscas realizadas no site (analytics).

**Campos:**

- `id` - Identificador único
- `termoBusca` - Termo pesquisado (máx. 255 caracteres)
- `resultadoEncontrado` - Se houve resultados (padrão: true)
- `quantidadeResultados` - Quantidade de resultados encontrados (padrão: 0)
- `dataBusca` - Data/hora da busca (padrão: agora)

**Índices:**

- dataBusca
- termoBusca

**Uso:**

- Análise de termos mais buscados
- Identificar lacunas de conteúdo
- Melhorar a relevância dos resultados

---

## 🔗 Diagrama de Relacionamentos

```
artigos (1) ──< (N) quiz_perguntas (1) ──< (N) quiz_opcoes

contatos (independente)

faqs (independente)

busca_historico (independente)
```

---

## 📝 Comandos Úteis

### Criar migração inicial

```bash
npx prisma migrate dev --name init
```

### Gerar cliente Prisma

```bash
npx prisma generate
```

### Abrir Prisma Studio (GUI)

```bash
npx prisma studio
```

### Resetar banco de dados

```bash
npx prisma migrate reset
```

### Aplicar migrations em produção

```bash
npx prisma migrate deploy
```

---

## 🌱 Seeds (Dados Iniciais)

Para popular o banco com dados de exemplo, execute:

```bash
npx prisma db seed
```

---

## 🔐 Segurança

- **IMPORTANTE:** Nunca commite o arquivo `.env` com credenciais reais
- Use `.env.example` como template
- Em produção, use variáveis de ambiente do servidor

---

## 🚀 Próximos Passos (Pós-MVP)

Tabelas para implementar no futuro:

- `usuarios` - Sistema de autenticação
- `comentarios` - Comentários em artigos
- `favoritos` - Artigos salvos pelos usuários
- `quiz_resultados` - Histórico de resultados dos quizzes
- `compartilhamentos` - Tracking de compartilhamentos sociais
- `categorias` - Tabela separada para categorias

---

**Última atualização:** Outubro 2025
