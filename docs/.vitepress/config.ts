import { defineConfig } from 'vitepress';

// refer https://vitepress.dev/reference/site-config for details
export default defineConfig({
  lang: 'en-US',
  title: 'VitePress',
  description: 'Vite & Vue powered static site generator.',

  themeConfig: {
    nav: [
      { text: 'Example', link: '/example' },

      // {
      //   text: 'Dropdown Menu',
      //   items: [
      //     { text: 'Item A', link: '/item-1' },
      //     { text: 'Item B', link: '/item-2' },
      //     { text: 'Item C', link: '/item-3' },
      //   ],
      // },

      // ...
    ],

    sidebar: [
      {
        // text: 'Guide',
        items: [
          { text: '1  introdução', link: '/1_introducao' },
          { text: '2  Descrição Do Projeto', link: '/2_Descricaodoprojeto' },
          { text: '3 Principais recursos e funcionalidades', link: '/3_Principaisrecursosefuncionalidades' },
          { text: '4 Diagrama de caso de uso', link: '/4_Diagramadecasodeuso' },
          { text: '5 Diagrama de classe', link: '/5_Diagramadeclasse' },
          { text: '6 Prototipo de tela', link: '/6_Prototipodetela' },
          { text: '7 Cronograma de entrega', link: '/7_Cronogramaeentrega' },
          { text: '8 Risco e mistigacao', link: '/8_Riscoemistigacao' },
          { text: '9 Custos e orgamentos', link: '/9_Custoseorgamentos' },
          { text: '10 Consideracoes', link: '/10_Consideracoes' },

          // ...
        ],
      },
    ],
  },
});
