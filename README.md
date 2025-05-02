# Frontend Challenge Starsoft

Este é um projeto [Next.js](https://nextjs.org) inicializado com [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Como Iniciar

- Primeiro, instale as dependências do projeto:
```bash
npm install
```
  - Depois, execute o servidor de desenvolvimento:
```bash
npm run dev
```
- Abra http://localhost:3000 em seu navegador para ver o resultado.

## Dependências

Este projeto utiliza as seguintes dependências principais:

- **Next.js 15**: Framework React para aplicações de produção
- **React 18**: Biblioteca JavaScript para construção de interfaces de usuário
- **Styled Components**: Biblioteca CSS-in-JS para estilização de componentes
- **TypeScript**: Verificação estática de tipos para JavaScript

### Dependências de Desenvolvimento

- **ESLint**: Para qualidade e consistência de código
- **Pacotes @types**: Definições de tipos TypeScript para várias bibliotecas

## Decisões Principais

### Configuração do Styled Components

O projeto implementa o styled-components com Next.js usando uma configuração personalizada para suporte à renderização do lado do servidor (SSR):

1. **Implementação do Registry**: Utilizamos o componente `StyledComponentsRegistry` que aproveita o `useState` do React e o `useServerInsertedHTML` do Next.js para injetar corretamente os estilos durante o SSR.

2. **Provider de Tema**: Um provedor de tema global envolve a aplicação para garantir um estilo consistente em todos os componentes. O tema inclui:
   - Paleta de cores (primária, escura, escalas de cinza)
   - Configurações de tipografia
   - Sistema de espaçamento
   - Estilos de borda

3. **Estrutura de Componentes**:
   - Os componentes usam a convenção de nomenclatura `$prop` para props do styled-components para evitar que sejam passados para elementos DOM
   - Os estilos são separados em seus próprios arquivos no diretório `src/styles/components`
   - Componentes UI comuns são construídos para serem reutilizáveis em toda a aplicação

4. **Configuração do Compilador Next.js**:
  - Esta configuração proporciona desempenho ideal e experiência de desenvolvedor ao usar styled-components com Next.js, incluindo renderização adequada do lado do servidor, isolamento de componentes e consistência de tema.
   ```js
   // next.config.js
   compiler: {
     styledComponents: true,
   }
````

