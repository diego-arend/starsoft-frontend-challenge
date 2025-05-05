# Frontend Challenge Starsoft

Este é um projeto [Next.js](https://nextjs.org) inicializado com [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Como Iniciar
### Ambiente local de desenvolvimento
- Primeiro, instale as dependências do projeto:
```bash
npm install
```
  - Depois, execute o servidor de desenvolvimento:
```bash
npm run dev
```
- Abra http://localhost:3000 em seu navegador para ver o resultado.

### Ambiente docker de produção
- Execute com comando 
```bash
docker compose up -d
```
- Acesse no navegador http://localhost:3000

### Estrutura do Projeto

```markdown
starsoft-frontend-challenge/
├── public/                    # Arquivos estáticos
├── src/
│   ├── __tests__/             # Testes unitários
│   ├── app/                   # Páginas e layout principal (App Router)
│   ├── components/            # Componentes reutilizáveis
│   ├── constants/             # Constantes e valores padrão
│   ├── hooks/                 # Custom hooks
│   ├── providers/             # Providers de contexto
│   ├── redux/                 # Configuração e slices do Redux
│   ├── services/              # Serviços de API
│   ├── styles/                # Estilos globais e temas
│   ├── types/                 # Definições de tipos TypeScript
│   └── utils/                 # Funções utilitárias
├── .env.example               # Variáveis de ambiente
├── Dockerfile                 # Configuração do Docker
├── docker-compose.yml         # Configuração do Docker Compose
└── next.config.ts             # Configuração do Next.js
```

### DECISÕES DE IMPLEMENTAÇÃO
- No Figma indica que a tela deve mostrar 8 itens por vez. Porém a API só retorna o mínimo de 10 itens por busca, mesmo editando no swagger a quantidade de itens inferior a 10. Portanto foi escolhido que a request padrão tem 12 itens.
- No Figma são mostradas as imagens nos CARDS com background padrão do tema. Porém as imagens retonardas nas urls da API possuem background coloridos. Foi escolhido não efetuar alterações nas imagens pois à correção, em um cenário de produto real, deveria ser acordado com o UI/UX para refatorar as imagens.
- O Design do Figma não é consistente relativo as páginas do projeto. Portanto foi escolhido utilizar apenas a página principal e um componente de overlay para o Carrinho de Compras. Em um produto real, as demais páginas definidas pelo UI/UX seriam implementadas seguindo as boas práticas do App-Router do NextJs.
- Por obrigatoriedade dos requisitos do desafio é solicitado o uso de biblioteca React Querie. Como a API só fornece um endpoint para busca de produtos foi definido o uso desta implementação para efetuar a request na API do lado do cliente. Como melhoria futura a implementação poderia considerar efetuar a chamada do lado do servidor para melhorar a performance de carregamento das imagens. No lado do servidor o Next Image proporciona otimização, lazy loading e evita layout shifts. O carregamento via cliente esta atrapalhando as avalições no Lighthouse devido a latência de stream das imagens.

## Dependências

Este projeto utiliza as seguintes dependências de produção:

- **Next.js 15**: Framework React para aplicações de produção
- **React 18**: Biblioteca JavaScript para construção de interfaces de usuário
- **Styled Components**: Biblioteca CSS-in-JS para estilização de componentes
- **Redux Toolkit**: Gerenciamento de estado global
- **React Query / TanStack Query**: Biblioteca para gerenciamento de estado de requests
- **Framer Motion**: Biblioteca de animações para React
- **React Hot Toast**: Notificações toast elegantes e customizáveis
- **TypeScript**: Verificação estática de tipos para JavaScript

### Dependências de Desenvolvimento

- **ESLint**: Para qualidade e consistência de código
- **Jest e React Testing Library**: Framework de teste e utilitários
- **Pacotes @types**: Definições de tipos TypeScript para várias bibliotecas

## Configurações aplicadas e organização do projeto
  1. **Confguração do Styled Components 
  - O projeto implementa o styled-components com Next.js usando uma configuração personalizada para suporte à renderização do lado do servidor (SSR):
  - Implementação do Registry: Utilizamos o componente `StyledComponentsRegistry` que aproveita o `useState` do React e o `useServerInsertedHTML` do Next.js para injetar corretamente os estilos durante o SSR.
  - Um provedor de tema global envolve a aplicação para garantir um estilo consistente em todos os componentes. O tema inclui:
   - Paleta de cores (primária, escura, escalas de cinza)
   - Configurações de tipografia
   - Sistema de espaçamento
   - Estilos de borda
  - Os componentes usam a convenção de nomenclatura `$prop` para props do styled-components para evitar que sejam passados para elementos DOM
   - Os estilos são separados em seus próprios arquivos no diretório `src/styles/components`
   - Componentes UI comuns são construídos para serem reutilizáveis em toda a aplicação
  - Esta configuração proporciona desempenho ideal e experiência de desenvolvedor ao usar styled-components com Next.js, incluindo renderização adequada do lado do servidor, isolamento de componentes e consistência de tema.
  ```js
   // next.config.js
   compiler: {
     styledComponents: true,
   }
  ```

  2. **Configuração do TanStack Query (React Query)
  - O projeto utiliza TanStack Query para gerenciamento de estado assíncrono e consultas à API:
  - QueryProvider Personalizado: Um provider centralizado em src/providers/QueryProvider.tsx configura o   QueryClient com as configurações padrão:
    ```jsx
    // Configurações padrão globais para todas as queries
    new QueryClient({
      defaultOptions: {
        queries: {
          staleTime: 1000 * 60 * 5, // 5 minutos de tempo de vida útil dos dados
          refetchOnWindowFocus: false, // Não recarrega dados quando a janela recebe foco
          retry: 1, // Número de tentativas de refetch em caso de erro
        },
      },
    })
    ```
  - Custom Hooks para Endpoints: Hooks personalizados encapsulam a lógica de consulta, como em useProducts:
    ```jsx
    export const useProducts = ({ page = 1, limit = ITEMS_PER_PAGE }) => {
      return useQuery({
        queryKey: ['products', { page, limit }],
        queryFn: () => ProductsService.getProducts(page, limit),
        staleTime: 1000 * 60 * 5, // Cache de 5 minutos
      });
    };
    ```
  - Paginação e Estado de Loading: 
  - O componente HomePage aproveita as funcionalidades do TanStack Query para:
  - Gerenciar estados de carregamento (isLoading)
  - Lidar com erros (isError, error)
  - Implementar paginação com cache entre páginas
  - Persistência do cache entre navegações

  4. **Configuração do Redux Toolkit
  - O projeto implementa o Redux Toolkit para gerenciamento de estado global, com foco especial no carrinho de compras:
  - Configuração da Store: Uma store centralizada é configurada em `src/redux/store.ts` com middleware otimizado:
   ```jsx
   export const store = configureStore({
     reducer: {
       cart: cartReducer,
       // outros reducers podem ser adicionados aqui
     },
     middleware: (getDefaultMiddleware) =>
       getDefaultMiddleware({
         serializableCheck: {
           // Ignorar ações não serializáveis específicas
           ignoredActions: ['persist/PERSIST'],
         },
       }),
   });
  ```
  - Slices para Features: Cada feature tem seu próprio slice, como o cartSlice:
    ```jsx
    const cartSlice = createSlice({
      name: 'cart',
      initialState,
      reducers: {
        addToCart: (state, action: PayloadAction<Product>) => {
          const existingItem = state.items.find(item => item.id === action.payload.id);
          
          if (existingItem) {
            existingItem.quantity += 1;
          } else {
            state.items.push({ ...action.payload, quantity: 1 });
          }
          
          state.totalItems = getTotalItems(state.items);
          state.totalAmount = calculateTotalAmount(state.items);
          
          // Persistência no localStorage
          localStorage.setItem('cart', JSON.stringify(state));
        },
        // outros reducers...
      },
    });
    ```
  - Persistência de Estado: O carrinho implementa persistência via localStorage:
    ```jsx
    // Inicialização do carrinho com dados do localStorage (executada no lado do cliente)
    export const initializeCart = () => (dispatch: AppDispatch) => {
      if (typeof window !== 'undefined') {
        const savedCart = localStorage.getItem('cart');
        
        if (savedCart) {
          try {
            const parsedCart = JSON.parse(savedCart);
            dispatch(setCart(parsedCart));
          } catch (error) {
            console.error('Erro ao carregar o carrinho:', error);
            localStorage.removeItem('cart');
          }
        }
      }
    };
    ```
  - Hooks Tipados: Hooks customizados com tipagem para garantir type safety:
    ```jsx
    // src/hooks/useRedux.ts
    export const useAppDispatch = () => useDispatch<AppDispatch>();
    export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
    ```
  - Integração com Componentes: Os componentes usam os hooks para acessar e modificar o estado:
    ```jsx
    // Exemplo em um componente
    const dispatch = useAppDispatch();
    const { items, totalItems, totalAmount } = useAppSelector(state => state.cart);

    const handleAddToCart = (product) => {
      dispatch(addToCart(product));
      toast.success(`${product.name} adicionado ao carrinho!`);
    };
    ```

  5. **Configuração de Testes
  - O projeto implementa uma estrutura robusta de testes utilizando Jest e React Testing Library, com configurações personalizadas para facilitar testes de componentes que dependem de providers e mocks:
  - Utilitários de Teste Centralizados: O arquivo `src/__tests__/test-utils.ts` fornece funções auxiliares para renderizar componentes com todos os providers necessários:
   ```tsx
   // src/__tests__/test-utils.ts
   export function renderWithProviders(
     ui: React.ReactElement,
     {
       preloadedState = {},
       store = configureTestStore(preloadedState),
       ...renderOptions
     } = {}
   ) {
     function Wrapper({ children }: { children: React.ReactNode }): JSX.Element {
       return (
         <Provider store={store}>
           <QueryProvider>
             <ThemeProvider theme={theme}>
               {children}
             </ThemeProvider>
           </QueryProvider>
         </Provider>
       );
     }
     
     return { store, ...render(ui, { wrapper: Wrapper, ...renderOptions }) };
   }
   ```
  - Este utilitário permite que os componentes sejam testados com todos os contextos necessários (Redux, React Query, Theme), simulando o ambiente real da aplicação.
  - Mocks para Componentes e Módulos Externos:
  - Next.js Image Mock: Devido à complexidade do componente de imagem do Next.js, um mock personalizado foi criado:
    ```tsx
    // src/__tests__/mocks/nextImage.mock.ts
    const NextImageMock = {
      setupNextImageMock: () => {
        jest.mock('next/image', () => ({
          __esModule: true,
          default: (props: any) => {
            return <img {...props} />;
          }
        }));
      }
    };
    ```
  - Next Link Mock: Para simular o comportamento do componente Link do Next.js nos testes:
    ```tsx
    // src/__tests__/mocks/nextLink.mock.ts
    const NextLinkMock = {
      setupNextLinkMock: () => {
        jest.mock('next/link', () => ({
          __esModule: true,
          default: ({ children, href, ...rest }: any) => (
            <a href={href} {...rest}>
              {children}
            </a>
          )
        }));
      }
    };
    ```
  - Framer Motion Mock: Para evitar problemas com animações durante os testes, o Framer Motion é mockado:
    ```tsx
    // src/__tests__/mocks/framer-motion.mock.tsx
    import React from 'react';

    const FramerMotionMock = {
      setupMock: () => {
        jest.mock('framer-motion', () => ({
          AnimatePresence: ({ 
            children, 
            onExitComplete 
          }: { 
            children?: React.ReactNode; 
            onExitComplete?: () => void 
          }) => {
            return (
              <div 
                data-testid="animate-presence-mock" 
                data-exit-complete={!!onExitComplete}
                onClick={() => onExitComplete && onExitComplete()}
              >
                {children}
              </div>
            );
          },
          motion: {
            div: ({ 
              children, 
              ...props 
            }: { 
              children?: React.ReactNode; 
              [key: string]: unknown;
            }) => (
              <div data-testid="motion-div-mock" {...props}>
                {children}
              </div>
            ),
          },
        }));
      }
    };

    export default FramerMotionMock;
    ```