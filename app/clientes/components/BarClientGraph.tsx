import graph from '#/lib/client.graph';
import {
  BarElement,
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LinearScale,
  Title,
  Tooltip,
} from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
);

const BarClientGraph = () => {
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
    labels: graph.labels,
    datasets: [
      {
        label: 'Clientes',
        data: graph.values,
        backgroundColor: ['rgba(255, 99, 132, 0.5)'],
      },
    ],
  };

  return (
    <Doughnut options={options} data={data} style={{ marginBottom: '3rem' }} />
  );
};

export default BarClientGraph;
