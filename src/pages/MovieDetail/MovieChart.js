import {
  Chart as ChartJS,
  ArcElement,
  LineElement,
  BarElement,
  PointElement,
  BarController,
  LineController,
  RadarController,
  CategoryScale,
  LinearScale,
  LogarithmicScale,
  RadialLinearScale,
  TimeScale,
  TimeSeriesScale,
  Decimation,
  Filler,
  Legend,
  Title,
  Tooltip,
  SubTitle,
} from 'chart.js';
import BarChart from './Charts/BarChart';
import LineChart from './Charts/LineChart';
import PolarAreaChart from './Charts/PolarAreaChart';
import RadarChart from './Charts/RadarChart';

ChartJS.register(
  ArcElement,
  LineElement,
  BarElement,
  PointElement,
  BarController,
  LineController,
  RadarController,
  CategoryScale,
  LinearScale,
  LogarithmicScale,
  RadialLinearScale,
  TimeScale,
  TimeSeriesScale,
  Decimation,
  Filler,
  Legend,
  Title,
  Tooltip,
  SubTitle
);

export default function MovieChart({ chart, ticketRate }) {
  const data = {
    type: chart.type,
    labels: chart.labels,
    datasets: [
      {
        label: chart.title,
        data: chart.data,
        backgroundColor:
          (chart.type === 'bar') | (chart.type === 'polarArea')
            ? '#037b94'
            : 'rgba(3, 123, 148, 0)',
        borderColor: '#037b94',
        barPercentage: 0.6,
        fill: true,
      },
    ],
  };
  const charts = {
    radar: <RadarChart chart={chart} data={data} />,
    line: <LineChart chart={chart} data={data} />,
    bar: <BarChart chart={chart} data={data} ticketRate={ticketRate} />,
    polarArea: <PolarAreaChart chart={chart} data={data} />,
  };

  return charts[chart.type];
}
