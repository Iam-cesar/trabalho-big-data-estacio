export type Item = {
  name: string;
  slug: string;
  description?: string;
};

export const demos: { name: string; items: Item[] }[] = [
  {
    name: 'Início',
    items: [
      {
        name: 'Objetivo',
        slug: 'objetivo',
        description: 'Objetivo principal do trabalho',
      },
      {
        name: 'Trajetória',
        slug: 'trajetoria',
        description: 'Esforço e trabalho até o resultado final',
      },
      {
        name: 'Como chegamos a solução ?',
        slug: 'solucao',
        description: 'Pensamento empregado a resolução da terefa',
      },
      {
        name: 'Explicação do projeto',
        slug: 'explicacao',
        description:
          'Resumo do pensamento do grupo em relação a resolução do trabalho',
      },
    ],
  },
  {
    name: 'Gráficos',
    items: [
      {
        name: 'Clientes',
        slug: 'clientes',
        description: 'Grafico representando situação dos clientes',
      },
      {
        name: 'Produtos',
        slug: 'produtos',
        description: 'Grafico representando a situação dos produtos',
      },
      
    ],
  },
  {
    name: 'Sobre os integrantes',
    items: [
      {
        name: 'Membros',
        slug: 'membros',
        description: 'Informação sobre os integrantes do grupo.',
      },
    ],
  }
];
