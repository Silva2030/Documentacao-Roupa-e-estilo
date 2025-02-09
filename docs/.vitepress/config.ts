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
          { text: '3 Principais Recursos   ', link: '/3_Principaisrecursos' },
          { text: '4  Diagrama de caso de uso  ', link: '/4_Diagramadecasodeuso' },
          { text: '5 Diagrama de classe  ', link: '/5_Diagramadeclasse' },
          { text: '6 Protótipo de tela ', link: '/6_Prototipodetela' },
          { text: '7 Cronograma de Entrega ', link: '/7_Cronogramaeentrega' },
          { text: '8 Riscos e Mistigações ', link: '/8_Riscosemistigacoes' },
          { text: '9 Curso e Orçamento  ', link: '/9_Cursoeorcamento' },
          { text: '10 Considerções finais  ', link: '/10_Consideracoesfinais' },








          // ...
        ],
      },
    ],
  },
});
