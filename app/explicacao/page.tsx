export default function Page() {
  return (
    <>
      <div className="prose prose-sm prose-invert mb-8 max-w-none">
        <h1 className="text-xl font-bold ">
          Metas, critérios ou indicadores de avaliação do projeto
        </h1>

        <p className="text-base">
          Primeiramente, seguimos as orientações do professor, direcionando
          nosso foco para dois pilares essenciais, visando aprimorar a prestação
          de nossos serviços e destacar-nos frente aos concorrentes. Estes
          pilares compreendem a competição online e a segmentação de clientes.
          Usamos a ferramenta trello para podermos nos organizar melhor e ir
          vendo os itens que já tínhamos feitos.
        </p>
        <p className="text-base">
          A nossa abordagem inicial consistiu na análise detalhada dos
          concorrentes. Coletamos informações sobre vendas e produtos que
          apresentam maior visibilidade em comparação aos nossos, investigando
          as estratégias adotadas por eles para se destacarem no mercado. Em
          sequência, realizamos uma minuciosa análise de nossa base de dados.
          Tal análise proporcionou uma compreensão aprofundada sobre quais
          produtos têm maior demanda, além de investigar a sazonalidade de
          determinados itens ao longo do ano.
        </p>
        <p className="text-base">
          Ao examinarmos o comportamento de nossos clientes, identificamos que
          alguns clientes, anteriormente fiéis, passaram a realizar compras de
          maneira esporádica, ou, em alguns casos, deixaram de ser clientes.
          Diante dessa constatação, iniciamos a concepção de estratégias para
          incentivar a retenção de clientes. Isso pode ser alcançado por meio de
          promoções atrativas, da implementação de planos premium, entre outros,
          visando estabelecer uma maior fidelidade por parte dos clientes em
          relação aos nossos produtos e serviços para animais de estimação.
        </p>
      </div>

      <div className="prose prose-sm prose-invert mb-8 max-w-none">
        <h4 className="text-base font-bold">Recursos previstos </h4>

        <p className="text-base">
          O elemento fundamental em nosso projeto foi a dedicação à pesquisa e
          compreensão das ferramentas e plataformas mencionadas na seção 2.6.
          Isso nos permitiu extrair o máximo benefício dessas tecnologias,
          aproveitando o recurso mais valioso que tínhamos à nossa disposição: o
          tempo. É importante ressaltar que, neste projeto, conseguimos atingir
          um nível significativo de proficiência, apesar do prazo relativamente
          curto. Isso se deu em grande parte pelo fato de que não foram
          necessários investimentos financeiros, uma vez que as tecnologias
          utilizadas eram de código aberto e gratuitas. Embora nossos estudos
          não tenham alcançado a profundidade desejada devido às restrições
          temporais, fomos capazes de implementar as soluções com um alto grau
          de competência.
        </p>
      </div>

      <div className="prose prose-sm prose-invert max-w-none">
        <h4 className="text-base font-bold">Detalhamento técnico do projeto</h4>

        <p className="text-base">
          Em nosso projeto, usamos a documentação de um RFM para podermos ter
          uma sequência de passos a serem seguidos com a orientação do nosso
          professor juntamente com o uso das ferramentas Pandas, PyTorch e
          BeautifulSoup para coleta de dados e tratamento dos mesmos. Pandas é
          uma biblioteca Python amplamente reconhecida para análise de dados,
          PyTorch é comumente empregado em tarefas de aprendizado de máquina é
          visão computacional e BeautifulSoup e uma ferramenta de Web Scraping
          na qual faz coleta de dados e/ou informações via HTML. Nossa primeira
          ação consistiu na coleta de dados. Inicialmente, é essencial coletar
          os dados relevantes, que podem estar armazenados em arquivos CSV,
          xlsx, txt ou bancos de dados. E um robô web scraping foi feito para
          realizarmos a coleta, tratamento e filtragem dos dados na qual eram
          necessários para fazer uma análise de mercado de acordo com cada
          produto e seus referentes preços.
        </p>
        <p className="text-base">
          Por fim realizamos a limpeza e manipulação dos dados, incluindo a
          filtragem das colunas pertinentes, como vendas, preços, concorrentes e
          clientes em potencial, além da eliminação de informações irrelevantes.
        </p>
        <p className="text-base">
          Após a obtenção dos dados necessários e relevantes, avançamos para a
          segunda etapa, que envolve a criação de dashboards com gráficos para
          apresentar nossas análises. Neste ponto, contamos com o auxílio do
          Power BI, uma ferramenta que facilita a elaboração de painéis
          interativos e a visualização de dados de maneira eficaz.
        </p>
        <p className="text-base">
          Na apresentação, iremos demonstrar como essas ferramentas e abordagens
          nos permitiram obter informações valiosas, proporcionando ao cliente
          uma visão abrangente de suas operações e dados, com o objetivo de
          tomar decisões informadas e estratégicas.
        </p>
      </div>
    </>
  );
}
