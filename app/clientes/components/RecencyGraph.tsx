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

const clients = graph.sort((a, b) => a.Recency - b.Recency).slice(0, 25);

const cnpj = clients.map((client) => client.CNPJ);
const recency = clients.map((client) => client.Recency);

const RecencyGraph = () => {
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const,
      },
      title: {
        display: false,
        text: 'Clientes',
      },
    },
  };

  const data = {
    labels: cnpj,
    datasets: [
      {
        label: 'Recency',
        data: recency,
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
    ],
  };

  return <Bar options={options} data={data} style={{ marginBottom: '3rem' }} />;
};

export default RecencyGraph;
