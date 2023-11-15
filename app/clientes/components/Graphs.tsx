import PyGraph from './PyGraph';

const Graphs = () => {
  return (
    <>
      <PyGraph path="/graphs/sankey_RFM_before_after.html" />
      <PyGraph path="/graphs/treemap_rfm_before.html" />
      <PyGraph path="/graphs/treemap_rfm_after.html" />
    </>
  );
};

export default Graphs;
