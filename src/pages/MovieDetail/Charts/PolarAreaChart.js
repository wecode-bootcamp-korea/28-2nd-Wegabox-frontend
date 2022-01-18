import { PolarArea } from 'react-chartjs-2';
import {
  ChartStyle,
  ChartTitle,
  ChartMaxInfo,
  ChartCanvas,
  ReviewRate,
} from './Styles';

export default function PolarAreaChart({ chart, data }) {
  return (
    <ChartStyle>
      <ChartTitle>{chart.title}</ChartTitle>
      <ChartMaxInfo>{chart.data[0]}점</ChartMaxInfo>
      <ChartCanvas>
        <ReviewRate>{chart.data[0]}</ReviewRate>
        <PolarArea
          type={chart.type}
          data={data}
          options={{
            plugins: {
              legend: {
                display: false,
              },
              tooltip: {
                enabled: false,
              },
            },
            animation: {
              animateScale: false,
            },
            scales: {
              r: {
                ticks: {
                  stepSize: 5,
                  display: false,
                },
              },
            },
          }}
        />
      </ChartCanvas>
    </ChartStyle>
  );
}
