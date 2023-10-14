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
  .sort((a, b) => a.M - b.M)
  .reverse()
  .slice(0, 50);

const cnpj = clients.map((client) => client.CNPJ);
const M = clients.map((client) => client.M);

const MGraph = () => {
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const,
      },
      title: {
        display: false,
        text: 'M',
      },
    },
  };

  const data = {
    labels: cnpj,
    datasets: [
      {
        label: 'M',
        data: M,
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
    ],
  };

  return <Bar options={options} data={data} style={{ marginBottom: '3rem' }} />;
};

export default MGraph;
