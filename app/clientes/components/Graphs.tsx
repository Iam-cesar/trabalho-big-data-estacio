import BarClientGraph from './BarClientGraph';
import FGraph from './FGraph';
import FrequencyGraph from './FrequencyGraph';
import MGraph from './MGraph';
import MonetaryValueGraph from './MonetaryValueGraph';
import RankGraph from './RankGraph';
import RecencyGraph from './RecencyGraph';
import RFMSegmentConcatGraph from './RFMSegmentConcatGraph';
import RGraph from './RGraph';

const Graphs = () => {
  return (
    <>
      <BarClientGraph />
      <RankGraph />
      <RecencyGraph />
      <FrequencyGraph />
      <MonetaryValueGraph />
      <RGraph />
      <FGraph />
      <MGraph />
      <RFMSegmentConcatGraph />
    </>
  );
};

export default Graphs;
