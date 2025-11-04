# 🚀 Guia de Setup do Banco de Dados

Este guia mostra como configurar o banco de dados para o BrainWave Connect.

## 📋 Pré-requisitos

- Node.js instalado
- MySQL instalado e rodando
- OU PostgreSQL (alternativa)

---

## 🔧 Passo 1: Configurar Variáveis de Ambiente

1. Copie o arquivo de exemplo:

```bash
copy .env.example .env
```

2. Edite o arquivo `.env` e configure sua conexão de banco:

**Para MySQL:**

```env
DATABASE_URL="mysql://root:sua_senha@localhost:3306/brainwave_db"
```

**Para PostgreSQL:**

```env
DATABASE_URL="postgresql://postgres:sua_senha@localhost:5432/brainwave_db"
```

---

## 🗄️ Passo 2: Criar o Banco de Dados

**MySQL:**

```sql
CREATE DATABASE brainwave_db CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
```

**PostgreSQL:**

```sql
CREATE DATABASE brainwave_db;
```

---

## 📦 Passo 3: Instalar Dependências

```bash
npm install
```

---

## 🔄 Passo 4: Executar Migrations

Criar as tabelas no banco de dados:

```bash
npm run db:migrate
```

Ou diretamente:

```bash
npx prisma migrate dev --name init
```

---

## 🌱 Passo 5: Popular o Banco (Seed)

Adicionar dados de exemplo:

```bash
npm run db:seed
```

---

## ✅ Passo 6: Verificar

Abrir o Prisma Studio para visualizar os dados:

```bash
npm run db:studio
```

Acesse: `http://localhost:5555`

---

## 📊 Estrutura Criada

Após executar as migrations e o seed, você terá:

### Tabelas:

✅ `artigos` - 3 artigos de exemplo  
✅ `quiz_perguntas` - 3 perguntas  
✅ `quiz_opcoes` - 12 opções de resposta  
✅ `faqs` - 4 perguntas frequentes  
✅ `contatos` - 1 contato de exemplo  
✅ `busca_historico` - Vazia (será populada pelo uso)

---

## 🔥 Comandos Úteis

### Ver status das migrations

```bash
npx prisma migrate status
```

### Gerar cliente Prisma (após alterar schema)

```bash
npm run db:generate
```

### Resetar banco completamente

```bash
npx prisma migrate reset
```

> ⚠️ **CUIDADO**: Isso apaga todos os dados!

### Criar nova migration

```bash
npx prisma migrate dev --name nome_da_migration
```

### Aplicar migrations em produção

```bash
npx prisma migrate deploy
```

---

## 🐛 Troubleshooting

### Erro de conexão

- Verifique se o MySQL/PostgreSQL está rodando
- Confirme usuário e senha no `.env`
- Teste a conexão: `npx prisma db pull`

### Erro "Unknown database"

- Crie o banco manualmente (Passo 2)

### Erro de permissão

- No MySQL, garanta que o usuário tem privilégios:

```sql
GRANT ALL PRIVILEGES ON brainwave_db.* TO 'seu_usuario'@'localhost';
FLUSH PRIVILEGES;
```

---

## 📚 Próximos Passos

Após o setup:

1. ✅ Teste o Prisma Studio
2. ✅ Crie rotas API no Next.js (`/app/api`)
3. ✅ Conecte os componentes React às APIs
4. ✅ Implemente funcionalidades de CRUD

---

## 🔗 Links Úteis

- [Prisma Docs](https://www.prisma.io/docs)
- [Next.js API Routes](https://nextjs.org/docs/app/building-your-application/routing/route-handlers)
- [MySQL Docs](https://dev.mysql.com/doc/)

---

**Pronto para começar!** 🎉

Execute `npm run dev` e comece a desenvolver!
