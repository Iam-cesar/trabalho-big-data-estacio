'use client'

import { BarElement, CategoryScale, Chart as ChartJS, Legend, LinearScale, Title, Tooltip } from "chart.js";
import { Bar } from "react-chartjs-2";
import graph from '../../lib/client.graph';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export default function Page() {

  const id = graph.ids
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
        label: 'Dataset 1',
        data: graph.values,
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
    ],
  };
  
  return (
    <div className="prose prose-sm prose-invert max-w-none">
      <h1 className="text-xl font-bold">Clientes</h1>
      <Bar options={options} data={data} />
    </div>
  );
}
