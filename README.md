# Fly Commerce ✈️

Fly Commerce é uma aplicação de front-end para uma loja virtual, desenvolvida com foco em tecnologias web modernas e uma interface de usuário limpa e responsiva.

## ✨ Funcionalidades Implementadas

Até o momento, o projeto inclui as seguintes funcionalidades:

- **Página Inicial (Homepage):**
  - Exibição de um banner promocional.
  - Seção para visualização de categorias de produtos.
  - Grade de produtos com cards interativos.
- **Cards de Produto:**
  - Efeito de hover que revela opções como "Adicionar ao Carrinho".
  - Animações sutis para uma melhor experiência do usuário.
  - Badges para destacar produtos "Novos" ou em "Promoção".
- **Páginas de Autenticação:**
  - Interface para Login de usuários.
  - Interface para Registro de novos usuários.
- **Componentes Reutilizáveis:**
  - Um sistema de componentes de UI, incluindo botões, inputs e badges, para garantir consistência visual em toda a aplicação.

## 🚀 Tecnologias Utilizadas

- **Framework:** [Next.js](https://nextjs.org/) (com React)
- **Linguagem:** [TypeScript](https://www.typescriptlang.org/)
- **Estilização:** [Tailwind CSS](https://tailwindcss.com/)
- **Ícones:** [React Icons](https://react-icons.github.io/react-icons/)

## 📂 Estrutura do Projeto

A estrutura de pastas principal está organizada da seguinte forma:

```
fly-commerce/
├── public/              # Arquivos estáticos (imagens, ícones)
└── src/
    ├── components/      # Componentes React reutilizáveis (ProductCard, Header, etc.)
    ├── interfaces/      # Definições de tipos e interfaces TypeScript
    ├── mocks/           # Dados mocados para simular uma API
    ├── pages/           # Páginas da aplicação e rotas
    └── styles/          # Estilos globais
```

## 🏁 Como Executar o Projeto

Para rodar o projeto em seu ambiente local, siga os passos abaixo.

1. **Instale as dependências:**

   ```bash
   npm install
   ```

2. **Inicie o servidor de desenvolvimento:**

   ```bash
   npm run dev
   ```

3. Abra [http://localhost:3000](http://localhost:3000) em seu navegador para ver a aplicação em funcionamento.