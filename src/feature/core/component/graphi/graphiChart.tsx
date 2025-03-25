import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import { Bar } from 'react-chartjs-2';


ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const data = {
  labels: ['Enero', 'Febrero', 'Marzo'],
  datasets: [
    {
      label: 'Ventas',
      data: [4000, 3000, 5000],
      backgroundColor: ['#a20f5c', '#d53287', '#5E0073'],
    },

    {
      label: 'Gastos',
      data: [6000, 2000, 1000],
      backgroundColor: ['#a20f5c', '#d53287', '#5E0073'],
    },
  ],
};

 export const GraphiChart = () => {
  return (
    <div className="md:w-[700px] h-[700px] justify-center mx-auto items-center flex">
    <Bar data={data} />
    </div>
  )
}

