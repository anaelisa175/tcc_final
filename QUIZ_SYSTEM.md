# Sistema de Quiz Dinâmico - BrainWave Connect

## 📋 Visão Geral

O sistema de quiz foi completamente reformulado para usar banco de dados, tornando-o mais profissional, escalável e fácil de manter.

## 🎯 Benefícios

### Antes (Quiz Estático)
- ❌ Perguntas hardcoded no componente
- ❌ Sem histórico de tentativas
- ❌ Difícil de adicionar novos quizzes
- ❌ Sem estatísticas
- ❌ Sem validação no backend

### Depois (Quiz Dinâmico)
- ✅ Perguntas armazenadas no banco de dados
- ✅ Histórico completo de tentativas
- ✅ Fácil gerenciamento via seed ou admin
- ✅ Estatísticas de desempenho
- ✅ Validação segura no backend
- ✅ Suporte a múltiplos quizzes por artigo

## 🗃️ Estrutura do Banco de Dados

### Tabelas Principais

1. **Quiz**: Informações gerais do quiz
   - `id`, `artigoId`, `titulo`, `descricao`, `ativo`

2. **QuizPergunta**: Perguntas do quiz
   - `id`, `quizId`, `pergunta`, `ordem`, `ativo`

3. **QuizOpcao**: Opções de resposta
   - `id`, `perguntaId`, `textoOpcao`, `correta`, `ordem`

4. **QuizTentativa**: Histórico de tentativas
   - `id`, `quizId`, `sessionId`, `pontuacao`, `totalPerguntas`, `completado`

5. **QuizResposta**: Respostas individuais
   - `id`, `tentativaId`, `perguntaId`, `opcaoId`, `correta`

## 🚀 API Endpoints

### 1. Buscar Quiz por Artigo
```
GET /api/artigos/[slug]/quiz
```

**Resposta:**
```json
{
  "id": 1,
  "titulo": "Quiz: Neurodivergência",
  "descricao": "Teste seus conhecimentos",
  "perguntas": [
    {
      "id": 1,
      "pergunta": "O que significa...",
      "ordem": 1,
      "opcoes": [
        {
          "id": 1,
          "textoOpcao": "Uma pessoa...",
          "ordem": 1
        }
      ]
    }
  ]
}
```

**Nota:** O campo `correta` das opções NÃO é retornado para não revelar a resposta.

### 2. Salvar Tentativa
```
POST /api/quiz/[quizId]/tentativa
```

**Body:**
```json
{
  "respostas": [
    {
      "perguntaId": 1,
      "opcaoId": 1
    }
  ],
  "sessionId": "session_123",
  "tempoConclusao": 45
}
```

**Resposta:**
```json
{
  "tentativaId": 1,
  "pontuacao": 2,
  "totalPerguntas": 3,
  "percentual": 67,
  "respostas": [...],
  "completado": true,
  "dataTentativa": "2025-10-15T..."
}
```

### 3. Buscar Tentativa Específica
```
GET /api/quiz/[quizId]/tentativa?tentativaId=1
```

## 💻 Como Usar

### No Componente

```tsx
import QuizDinamico from "./QuizDinamico";

export default function MeuArtigo() {
  return (
    <section className="quiz-section">
      <h2>Teste Seu Conhecimento</h2>
      <div className="quiz-container">
        <QuizDinamico artigoSlug="meu-artigo-slug" />
      </div>
    </section>
  );
}
```

### Adicionar Novo Quiz (via seed.js)

```javascript
const quiz = await prisma.quiz.create({
  data: {
    artigoId: artigo.id,
    titulo: "Quiz: Título do Quiz",
    descricao: "Descrição do quiz",
    perguntas: {
      create: [
        {
          pergunta: "Sua pergunta aqui?",
          ordem: 1,
          opcoes: {
            create: [
              {
                textoOpcao: "Opção A",
                correta: true,
                ordem: 1
              },
              {
                textoOpcao: "Opção B",
                correta: false,
                ordem: 2
              }
            ]
          }
        }
      ]
    }
  }
});
```

## 📊 Funcionalidades

### Implementadas
- ✅ Buscar quiz por artigo
- ✅ Validação de respostas no backend
- ✅ Cálculo automático de pontuação
- ✅ Histórico de tentativas
- ✅ Tempo de conclusão
- ✅ SessionID para usuários não logados
- ✅ Feedback visual de resultado
- ✅ Percentual de acertos

### Futuras (Opcionais)
- [ ] Dashboard de estatísticas
- [ ] Ranking de pontuações
- [ ] Badges e conquistas
- [ ] Quiz com timer
- [ ] Dificuldade progressiva
- [ ] Explicações para respostas
- [ ] Comparação com média geral

## 🔒 Segurança

1. **Validação no Backend**: Todas as respostas são validadas no servidor
2. **Campo 'correta' oculto**: Não exposto na API de busca
3. **Sanitização de entrada**: Dados validados antes de salvar
4. **Rate limiting**: Considerar adicionar para evitar spam

## 📈 Estatísticas Disponíveis

Com o novo sistema, você pode facilmente gerar:
- Taxa de acerto por pergunta
- Perguntas mais difíceis
- Média de tempo de conclusão
- Distribuição de pontuações
- Progresso ao longo do tempo

## 🛠️ Manutenção

### Executar Migration
```bash
npx prisma migrate dev
```

### Atualizar Seed
```bash
npm run db:seed
```

### Visualizar Dados
```bash
npx prisma studio
```

## 📝 Notas Importantes

1. O sistema usa `sessionId` para rastrear tentativas de usuários não logados
2. Quando implementar autenticação, substitua `sessionId` por `userId`
3. Todas as pontuações são calculadas no backend para segurança
4. O tempo é medido no frontend mas pode ser opcional

## 🎓 Recomendação do Professor

✅ **Aprovado!** Este sistema é mais profissional e organizado, facilitando:
- Gerenciamento de conteúdo
- Análise de dados
- Escalabilidade
- Manutenção

---

**Desenvolvido por:** BrainWave Connect Team  
**Data:** Outubro 2025  
**Versão:** 2.0
