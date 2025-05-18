# IberiaHub - Landing Page

## Descrição
Este projeto é uma landing page para a IberiaHub, uma plataforma que une as comunidades de esports de Portugal e Espanha. O site apresenta uma interface moderna com tema escuro e acentos em neon vermelho e amarelo, representando as cores das bandeiras de Portugal e Espanha.

## Funcionalidades
- Design responsivo para desktop, tablet e dispositivos móveis
- Animações suaves usando Framer Motion
- Efeitos de partículas e visuais dinâmicos
- Navegação por âncoras para seções da página
- Tema escuro com acentos em neon vermelho e amarelo

## Tecnologias Utilizadas
- React
- TypeScript
- Tailwind CSS
- Framer Motion para animações
- React Icons
- ShadCN UI Components

## Estrutura do Projeto
- `/client` - Código do front-end
  - `/src` - Código fonte
    - `/components` - Componentes React
    - `/hooks` - Custom hooks
    - `/pages` - Páginas da aplicação
    - `/lib` - Funções utilitárias
- `/server` - Código do back-end
- `/shared` - Código compartilhado entre front-end e back-end

## Como Extrair e Executar o Projeto

### Requisitos
- Node.js (versão 18.x ou superior)
- npm ou yarn

### Instalação
1. Clone o repositório ou extraia os arquivos para o seu computador
2. Navegue até a pasta do projeto
3. Instale as dependências:
```bash
npm install
# ou
yarn install
```

### Execução em Ambiente de Desenvolvimento
```bash
npm run dev
# ou
yarn dev
```
O servidor será iniciado na porta 5000. Acesse `http://localhost:5000` no seu navegador.

### Build para Produção
```bash
npm run build
# ou
yarn build
```

### Iniciar em Ambiente de Produção
Após o build:
```bash
npm run start
# ou
yarn start
```

## Conteúdo e Seções
- **Hero** - Apresentação inicial do IberiaHub com chamada para ação
- **Missão** - Os três pilares da missão do IberiaHub
- **Hubs** - Informações sobre os hubs de jogos (CS2, Valorant, LoL)
- **CTA** - Seção de chamada para ação "Liga-te ao Futuro dos Esports"
- **Footer** - Rodapé com links e informações de contato

## Personalização
As cores principais do tema podem ser encontradas em `index.css` e nos componentes individuais. O design usa predominantemente:
- Fundo escuro: `#0D0D0D`, `#151515`
- Vermelho neon: `#FF2D55` (representando Portugal)
- Amarelo neon: `#FFCC00` (representando Espanha)

## Contato
Para mais informações, entre em contato pelo email fornecido no rodapé do site.