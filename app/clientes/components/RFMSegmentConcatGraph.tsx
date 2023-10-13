import { graph } from '#/lib/clientss.graph';
import {
  ArcElement,
  BarElement,
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LinearScale,
  LineController,
  LineElement,
  PointElement,
  RadialLinearScale,
  Title,
  Tooltip,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  RadialLinearScale,
  ArcElement,
  PointElement,
  LineElement,
  LineController,
);

const clients = graph
  .sort((a, b) => a.RFM_Segment_Concat - b.RFM_Segment_Concat)
  .reverse()
  .slice(0, 50);

const cnpj = clients.map((client) => client.CNPJ);
const RFMTotal = clients.map((client) => client.RFM_Segment_Concat);

const RFMSegmentConcatGraph = () => {
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const,
      },
      title: {
        display: true,
        text: '50 Melhores clientes',
      },
    },
  };

  const data = {
    labels: cnpj,

    datasets: [
      {
        label: 'RFM Total',
        data: RFMTotal,
        backgroundColor: 'rgba(255, 99, 132)',
      },
    ],
  };

  return <Bar options={options} data={data} style={{ marginBottom: '3rem' }} />;
};

export default RFMSegmentConcatGraph;
