<h1 align="center">
  <img
    src=".github/logo.png"
    title="Marketplace"
    alt="Marketplace"
  />

  Marketplace
</h1>

<p align="center">
  <img alt="GitHub language count" src="https://img.shields.io/github/languages/count/PabloXT14/marketplace">

  <img alt="GitHub Top Language" src="https://img.shields.io/github/languages/top/PabloXT14/marketplace" />

  <img alt="Repository size" src="https://img.shields.io/github/repo-size/PabloXT14/marketplace">
  
  <a href="https://github.com/PabloXT14/marketplace/commits/master">
    <img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/PabloXT14/marketplace">
  </a>
    
   <img alt="License" src="https://img.shields.io/badge/license-MIT-blue">

   <a href="https://github.com/PabloXT14/marketplace/stargazers">
    <img alt="Stargazers" src="https://img.shields.io/github/stars/PabloXT14/marketplace?style=social">
  </a>
</p>

<p>
  <img src=".github/cover.png" alt="Capa do projeto" />
</p>

<p align="center">
 <a href="#-about">Sobre</a> | 
 <a href="#-layout">Layout</a> | 
 <a href="#-setup">Setup</a> | 
 <a href="#-technologies">Tecnologias</a> | 
 <a href="#-license">Licença</a>
</p>


## 💻 Sobre

O **Marketplace** é um aplicativo mobile construído com React Native + Expo que simula um e-commerce completo. Os usuários podem se autenticar, explorar anúncios de produtos com filtros avançados, visualizar detalhes dos produtos, adicionar itens ao carrinho, escolher cartões de crédito e finalizar pedidos. O app também permite acompanhar o histórico de compras e avaliar produtos através de comentários.

Principais pontos de aprendizagem e implementação:
- Consumo de uma API própria (`fastify` + `type-orm`) com `axios` e interceptors para refresh de token;
- Organização de navegação com `expo-router` (fluxos público e privado + tabs);
- Estado global com `zustand` (sessão, carrinho e filtros) e `react-query` para cache de requisições;
- Componentização de formulários com `react-hook-form` + `zod` e estilização com `nativewind`.


## 🎨 Layout

Você pode visualizar o layout base do projeto através [desse link](https://www.figma.com/community/file/1552434564673033742/marketplace). É necessário ter conta no [Figma](https://www.figma.com/) para acessá-lo.

A seguir, veja uma demonstração das principais telas da aplicação:

### Splash

<p align="center">
  <img
    src=".github/screens/splash.png"
    alt="Tela Splash"
    title="Tela Splash"
  />
</p>

### Login

<p align="center">
  <img
    src=".github/screens/login.png"
    alt="Tela de Login"
    title="Tela de Login"
  />
</p>

### Registro

<p align="center">
  <img
    src=".github/screens/register.png"
    alt="Tela de Cadastro"
    title="Tela de Cadastro"
  />
</p>

### Home

<p align="center">
  <img
    src=".github/screens/home.png"
    alt="Tela Home"
    title="Tela Home"
  />
</p>

### Filtros

<p align="center">
  <img
    src=".github/screens/filter.png"
    alt="Tela de Filtros"
    title="Tela de Filtros"
  />
</p>

### Produto

<p align="center">
  <img
    src=".github/screens/product.png"
    alt="Tela do Produto"
    title="Tela do Produto"
  />
</p>

### Feedback

<p align="center">
  <img
    src=".github/screens/feedback.png"
    alt="Tela de Feedback"
    title="Tela de Feedback"
  />
</p>

### Carrinho Vazio

<p align="center">
  <img
    src=".github/screens/cart-empty.png"
    alt="Tela do Carrinho Vazio"
    title="Tela do Carrinho Vazio"
  />
</p>

### Carrinho com Produtos

<p align="center">
  <img
    src=".github/screens/cart-products.png"
    alt="Tela do Carrinho com Produtos"
    title="Tela do Carrinho com Produtos"
  />
</p>

### Cartão de Crédito

<p align="center">
  <img
    src=".github/screens/credit-card.png"
    alt="Tela do Cartão de Crédito"
    title="Tela do Cartão de Crédito"
  />
</p>

### Pagamento

<p align="center">
  <img
    src=".github/screens/cart-payment.png"
    alt="Tela do Pagamento"
    title="Tela do Pagamento"
  />
</p>

### Pedidos Vazio

<p align="center">
  <img
    src=".github/screens/orders-empty.png"
    alt="Tela de Pedidos Vazio"
    title="Tela de Pedidos Vazio"
  />
</p>

### Pedidos com Produtos

<p align="center">
  <img
    src=".github/screens/orders.png"
    alt="Tela de Pedidos com Produtos"
    title="Tela de Pedidos com Produtos"
  />
</p>

### Perfil

<p align="center">
  <img
    src=".github/screens/profile.png"
    alt="Tela de Perfil"
    title="Tela de Perfil"
  />
</p>


## ⚙ Setup

### 📝 Pré-requisitos

Antes de começar você precisa ter instalado em sua máquina:

* [Git](https://git-scm.com)
* [Node.js](https://nodejs.org/en/) (>= 18)
* [NPM](https://www.npmjs.com/) ou [Yarn](https://yarnpkg.com/)

Além disso recomendamos o uso do [VSCode](https://code.visualstudio.com/) ou editor de sua preferência.

### Clonando o repositório

```bash
# Clone este repositório
$ git clone git@github.com:PabloXT14/marketplace.git

$ cd marketplace
```

### Backend (API)

```bash
# Acesse a pasta da API
$ cd api

# Instale as dependências
$ npm install

# Crie o arquivo .env baseado em .env.example (ajuste credenciais, banco etc.)

# Execute as migrations
$ npm run migration:run

# Inicie a API
$ npm run dev
```

> Por padrão a API sobe em `http://localhost:3001` e expõe a documentação em `http://localhost:3001/docs`.

### Aplicativo mobile

```bash
# Volte para a raiz e acesse o app mobile
$ cd ../mobile

# Instale as dependências
$ npm install

# Opcional: ajuste o arquivo src/shared/api/marketplace.ts para apontar o BASE_URL
# para o IP local da sua máquina/servidor

# Execute o build necessário para rodar em dispositivos/emuladores nativos
$ npx expo prebuild

# Rode em Android ou iOS
$ npx expo run:android
$ npx expo run:ios
```

Durante o desenvolvimento você também pode utilizar `npx expo start` para rodar o Metro bundler.


## 🛠 Tecnologias

Principais ferramentas utilizadas no projeto:

- **[React Native](https://reactnative.dev/)**
- **[Expo](https://expo.dev/)**
- **[TypeScript](https://www.typescriptlang.org/)**
- **[Expo Router](https://expo.dev/router)**
- **[NativeWind](https://www.nativewind.dev/)**
- **[React Hook Form](https://react-hook-form.com/)**
- **[Zod](https://zod.dev/)**
- **[React Query](https://tanstack.com/query/latest)**
- **[Zustand](https://zustand-demo.pmnd.rs/)**
- **[Axios](https://axios-http.com/)**
- **[Bottom Sheet](https://github.com/gorhom/react-native-bottom-sheet)**
- **[Expo Image Picker](https://docs.expo.dev/versions/latest/sdk/imagepicker/)**
- **[Async Storage](https://docs.expo.dev/versions/latest/sdk/async-storage/)**
- **[Fastify](https://fastify.dev/)**
- **[TypeORM](https://typeorm.io/)**

> Para mais detalhes das dependências gerais da aplicação mobile veja o arquivo `mobile/package.json`.

> Para mais detalhes das dependências da API back-end veja o arquivo `api/package.json`.


## 📝 Licença

Este projeto está sob a licença MIT. Consulte o arquivo [LICENSE](./LICENSE) para mais informações

<p align="center">
  Feito com 💜 por Pablo Alan 👋🏽 <a href="https://www.linkedin.com/in/pabloalan/" target="_blank">Entre em contato!</a>
</p>
