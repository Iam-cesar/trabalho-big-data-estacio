export default function Page() {
  return (
    <>
      <div className="prose prose-sm prose-invert mb-8 max-w-none">
        <h1 className="text-xl font-bold">
          Planejamento e desenvolvimento do projeto
        </h1>
        <p className="text-base">
          O projeto seguirá a metodologia CRISP-DM, que é amplamente utilizada
          para planejar e desenvolver projetos de mineração de dados. As etapas
          do CRISP-DM serão adaptadas para atender ao objetivo de realizar uma
          análise de dados e processamento de texto com técnicas de
          pré-processamento, análise estatística e agrupamento de dados.
        </p>
      </div>

      <div className="prose prose-sm prose-invert mb-8 max-w-none">
        <h4 className="text-base font-bold">Entendimento do Negócio</h4>

        <p className="text-base">
          O objetivo deste projeto é realizar uma análise de dados e
          processamento de texto utilizando técnicas de pré-processamento,
          análise estatística e agrupamento de dados. Essa análise fornecerá
          insights relevantes sobre os dados e ajudará na tomada de decisões
          estratégicas relacionadas ao negócio.
        </p>
      </div>

      <div className="prose prose-sm prose-invert mb-8 max-w-none">
        <h4 className="text-base font-bold">Entendimento dos Dados</h4>

        <p className="text-base">
          A etapa inicial do projeto será a leitura e seleção dos dados.
          Utilizaremos a base que se encontra no em uma planilha do Excel,
          contendo os dados a serem analisados, além de recursos disponíveis
          como computadores com Python e bibliotecas instaladas. Iremos explorar
          o conjunto de dados para entender sua estrutura, características e
          possíveis desafios, onde identificaremos a real necessidade do
          tratamento dos dados para geração de valores para a empresa.
        </p>
      </div>

      <div className="prose prose-sm prose-invert mb-8 max-w-none">
        <h4 className="text-base font-bold">Preparação dos Dados</h4>

        <p className="text-base">
          No processo de preparação dos dados realizaremos a leitura do mesmo.
          Isso garantirá a qualidade dos dados utilizados na análise. Serão
          aplicadas técnicas adequadas, como a remoção de registros com valores
          ausentes e a imputação desses valores, se necessário.
        </p>
        <p className="text-base">
          Essa etapa é crucial para garantir a consistência dos resultados. Em
          seguida, faremos uma análise descritiva utilizando a biblioteca
          pandas, onde nos permitirá compreender melhor as características dos
          dados, como distribuições, valores extremos e correlações. A análise
          descritiva fornecerá insights iniciais sobre os dados e ajudará a
          identificar possíveis padrões ou anomalias.
        </p>
      </div>

      <div className="prose prose-sm prose-invert mb-8 max-w-none">
        <h4 className="text-base font-bold">Modelagem </h4>

        <p className="text-base">
          Após a análise descritiva, passaremos ao pré-processamento de texto,
          onde aplicaremos técnicas específicas para tratar o texto contido nos
          dados. Faremos a remoção de pontuações, tokenização, remoção de stop
          words e outras técnicas necessárias para preparar o texto para
          análises posteriores. Esse processo será essencial para melhorar a
          qualidade dos dados textuais.
        </p>
        <p className="text-base">
          Em seguida, criaremos um robô. Esse robô é uma representação numérica
          dos textos que captura a importância relativa de cada termo nos
          textos. A criação do robô nos permitirá aplicar técnicas de
          agrupamento nos dados de texto e identificar padrões ou grupos
          semelhantes.
        </p>
        <p className="text-base">
          Com a metodologia RFM, buscamos inicialmente identificar informações
          cruciais. Utilizamos ferramentas poderosas, como Pandas, PyTorch e um
          robô de web scraping, para coletar esses dados de forma mais
          eficiente.
        </p>
        <p className="text-base">
          Posteriormente, organizamos essas informações em planilhas do Excel e
          criamos insights valiosos por meio de gráficos. Essa análise detalhada
          orienta a definição da melhor estratégia inicial para apresentar ao
          nosso cliente.
        </p>
      </div>

      <div className="prose prose-sm prose-invert max-w-none">
        <h4 className="text-base font-bold">Implantação (Deployment)</h4>

        <p className="text-base">
          Na fase de implantação, optamos pelo Power BI para visualizar os
          resultados de maneira mais elaborada. Essa ferramenta proporciona uma
          compreensão aprofundada dos grupos formados pelos dados textuais,
          elevando a eficácia da análise.
        </p>
        <p className="text-base">
          Ao longo do projeto, realizaremos reuniões semanais para alinhamento e
          discussão do progresso. O cronograma prevê início em 08/2023, com
          conclusão em 11/2023. Utilizaremos plataformas colaborativas para
          compartilhamento de arquivos e códigos, e ferramentas de mensagens
          para comunicação assíncrona entre os membros da equipe.
        </p>
        <p className="text-base">
          Cada etapa concluída será apresentada em reuniões para feedback e
          ajustes necessários. O acompanhamento do progresso será feito por meio
          de um quadro de tarefas online (Trello e Teams), onde cada responsável
          atualizará regularmente o status de suas tarefas. A comunicação
          contínua entre os membros da equipe garantirá a troca de informações e
          a resolução de dúvidas ou problemas que possam surgir ao longo do
          projeto.
        </p>
      </div>
    </>
  );
}
