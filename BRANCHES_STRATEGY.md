# 🌳 Estratégia de Branches - BrainWave Connect

## 📋 Visão Geral

Este projeto mantém **dois branches principais independentes**, sem merge entre eles:

```
main (CRA)          ──────────────> Create React App (Original)

migration-nextjs    ──────────────> Next.js 15 (Nova versão)
```

---

## 🔀 Estrutura de Branches

### 1️⃣ **`main`** - Versão Create React App (Original)

- **Tecnologia:** React 19 + Create React App
- **Status:** Versão estável original
- **Propósito:** Manter o projeto CRA funcionando
- **Não fazer merge com:** `migration-nextjs`

### 2️⃣ **`migration-nextjs`** - Versão Next.js (Nova)

- **Tecnologia:** Next.js 15 + TypeScript + Prisma
- **Status:** Em desenvolvimento ativo
- **Propósito:** Nova versão moderna do projeto
- **Não fazer merge com:** `main`

### 3️⃣ **`backup-v2`** - Backup

- **Propósito:** Snapshot de segurança do CRA
- **Status:** Congelado

---

## 🚫 Regras Importantes

### ❌ **NUNCA fazer:**

```bash
# NÃO FAZER MERGE
git checkout main
git merge migration-nextjs  # ❌ NUNCA!

# NÃO FAZER MERGE REVERSO
git checkout migration-nextjs
git merge main  # ❌ NUNCA!
```

### ✅ **SEMPRE fazer:**

```bash
# Trabalhar isoladamente em cada branch
git checkout migration-nextjs
git add .
git commit -m "feat: nova funcionalidade"
git push origin migration-nextjs
```

---

## 🔄 Workflow Recomendado

### Para trabalhar no **Next.js** (migration-nextjs):

```bash
# 1. Garantir que está no branch correto
git checkout migration-nextjs

# 2. Atualizar do remoto
git pull origin migration-nextjs

# 3. Fazer suas alterações
# ... editar arquivos ...

# 4. Commitar
git add .
git commit -m "feat: descrição da mudança"

# 5. Push
git push origin migration-nextjs
```

### Para trabalhar no **CRA** (main):

```bash
# 1. Mudar para o branch main
git checkout main

# 2. Atualizar do remoto
git pull origin main

# 3. Fazer suas alterações
# ... editar arquivos ...

# 4. Commitar
git add .
git commit -m "fix: descrição da correção"

# 5. Push
git push origin main
```

---

## 📊 Comparação dos Branches

| Aspecto            | `main` (CRA)     | `migration-nextjs` (Next.js) |
| ------------------ | ---------------- | ---------------------------- |
| **Framework**      | Create React App | Next.js 15                   |
| **React**          | 19               | 19                           |
| **TypeScript**     | ❌ Não           | ✅ Sim                       |
| **Routing**        | React Router     | App Router (Next.js)         |
| **Backend**        | ❌ Não           | ✅ API Routes                |
| **Banco de Dados** | ❌ Não           | ✅ Prisma + MySQL            |
| **SSR**            | ❌ Não           | ✅ Sim                       |
| **Build**          | react-scripts    | Next.js                      |
| **Estrutura**      | `/src`           | `/app`                       |
| **Dependências**   | ~1386 pacotes    | ~52 pacotes                  |

---

## 🎯 Quando Usar Cada Branch

### Use `main` quando:

- ✅ Precisar manter compatibilidade com CRA
- ✅ Trabalhar com a versão estável original
- ✅ Fazer hotfixes na versão antiga

### Use `migration-nextjs` quando:

- ✅ Desenvolver novas funcionalidades modernas
- ✅ Trabalhar com banco de dados
- ✅ Implementar SSR/ISR
- ✅ Usar TypeScript
- ✅ Criar API routes

---

## 🚀 Deploy

### Estratégia de Deploy Sugerida:

**Opção 1: Dois ambientes separados**

```
Produção CRA:     https://brainwave-cra.vercel.app
Produção Next.js: https://brainwave-next.vercel.app
```

**Opção 2: Substituição gradual**

```
1. Deploy Next.js em staging
2. Testar completamente
3. Quando estável, trocar produção
4. Manter CRA como fallback
```

---

## 📝 Histórico de Commits

### Branch `migration-nextjs`:

```
e5f7b4e - instalação prisma e bd
af9bcdb - chore: remover arquivos do CRA e limpar dependencias
050cf99 - chore: backup antes da migracao para Next.js
a967043 - (ponto de partida do backup-v2)
```

### Branch `main`:

```
a6e3065 - fix: adicionar diretiva 'use client'
... (histórico CRA original)
```

---

## 🔧 Comandos Úteis

### Ver diferenças entre branches:

```bash
git diff main..migration-nextjs
```

### Ver commits únicos do migration-nextjs:

```bash
git log main..migration-nextjs
```

### Ver commits únicos do main:

```bash
git log migration-nextjs..main
```

### Listar todos os branches:

```bash
git branch -a
```

### Ver qual branch está ativo:

```bash
git branch --show-current
```

---

## ⚠️ Avisos Importantes

1. **Não fazer merge entre os branches** - São projetos diferentes
2. **Manter .gitignore atualizado** em ambos
3. **Documentar mudanças** em cada branch separadamente
4. **Testar cada branch** antes de fazer push

---

## 🎓 Por Que Manter Separado?

### Vantagens:

✅ **Flexibilidade** - Manter duas versões rodando  
✅ **Segurança** - Versão CRA continua estável  
✅ **Testes** - Testar Next.js sem afetar produção  
✅ **Rollback fácil** - Voltar para CRA se necessário  
✅ **Comparação** - Ver evolução entre versões

### Quando fazer merge (futuro):

- ⏰ Quando Next.js estiver 100% testado
- ⏰ Quando decidir descontinuar o CRA
- ⏰ Quando todas as funcionalidades forem portadas

---

## 📞 Perguntas Frequentes

**Q: Posso copiar código entre os branches?**  
A: Sim! Copie manualmente ou use `git cherry-pick` para commits específicos.

**Q: E se eu fizer merge acidentalmente?**  
A: Use `git reset --hard HASH` para voltar ao commit anterior ao merge.

**Q: Como sincronizar uma funcionalidade?**  
A: Desenvolva em um branch e replique manualmente no outro.

**Q: Qual branch usar para desenvolvimento?**  
A: `migration-nextjs` - É o futuro do projeto!

---

**Última atualização:** Outubro 2025  
**Mantido por:** BrainWave Connect Team
