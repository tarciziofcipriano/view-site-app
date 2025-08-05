# VIEW-SITE-APP

## 1. Visão Geral
O **VIEW-SITE-APP** é um aplicativo mobile desenvolvido com o objetivo de renderizar páginas web dentro de um aplicativo utilizando a biblioteca `react-native-webview`. Este projeto permite que os usuários visualizem sites de forma integrada em uma aplicação nativa, proporcionando uma experiência fluida e adaptada para dispositivos móveis.

O aplicativo foi criado utilizando o **Expo**, uma plataforma que facilita o desenvolvimento e a construção de aplicativos React Native.

## 2. Objetivo
O objetivo principal do VIEW-SITE-APP é possibilitar a exibição de websites em um ambiente nativo, aproveitando as capacidades do React Native e da biblioteca `react-native-webview` para renderizar conteúdo web de maneira eficiente e com boa performance.

## 3. Tecnologias Utilizadas
- **React Native**: Framework para desenvolvimento de aplicativos móveis multiplataforma.
- **Expo**: Plataforma para construção, teste e deploy de aplicativos React Native.
- **react-native-webview**: Biblioteca que permite a integração de WebViews para renderização de páginas web dentro do aplicativo.
- **Node.js**: Ambiente de execução para gerenciamento de pacotes e scripts.
- **npm**: Gerenciador de pacotes utilizado para instalação das dependências.


### Pré-requisitos
- Node.js (versão 16 ou superior)
- npm ou Yarn
- Expo CLI instalado globalmente:
  ```bash
  npm install -g expo-cli
  ```
- Dispositivo físico ou emulador (Android/iOS) configurado para testes.


### Arquivo Principal (app\_layout.tsx)
O arquivo `app\_layout.tsx` é o ponto de entrada do aplicativo e contém a lógica principal para renderizar a WebView.


## 4. Funcionalidades
- **Renderização de Websites**: O aplicativo utiliza a `react-native-webview` para carregar e exibir páginas web.
- **Suporte Multiplataforma**: Funciona em dispositivos iOS e Android, graças ao React Native e ao Expo.
- **Interface Simples**: Interface minimalista com foco na exibição do conteúdo web.
- **Configuração de URL Dinâmica**: Possibilidade de configurar a URL a ser exibida diretamente no código ou por meio de inputs do usuário (futuras implementações).

## 5. Instalação e Execução
Siga os passos abaixo para configurar e executar o projeto localmente:

1. Clone o repositório do projeto (caso aplicável):
   ```bash
   git clone <URL_DO_REPOSITORIO>
   ```

2. Acesse o diretório do projeto:
   ```bash
   cd view-site-app
   ```

3. Instale as dependências:
   ```bash
   npm install
   ```

4. Inicie o servidor de desenvolvimento do Expo:
   ```bash
   npx expo start
   ```

5. Escaneie o QR code gerado no terminal usando o aplicativo **Expo Go** em um dispositivo móvel ou execute em um emulador.


## 6. Limitações
- **Dependência de Conexão**: O aplicativo requer uma conexão ativa com a internet para carregar páginas web.
- **Compatibilidade de Sites**: Alguns websites podem não ser totalmente compatíveis com WebViews devido a restrições de renderização ou políticas de segurança (CORS, por exemplo).
- **Performance**: Páginas web pesadas podem impactar a performance em dispositivos mais antigos.

## 7. Observações (Adicionar app na store)
- Visualizar e baixar as builds (após pronto o app): https://docs.expo.dev/build/setup/
- Criar uma conta desenvolvedor na playstore: https://play.google.com/console/u/0/signup
