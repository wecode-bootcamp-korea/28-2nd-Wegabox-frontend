import { Radar } from 'react-chartjs-2';
import { ChartStyle, ChartTitle, ChartMaxInfo } from './Styles';

export default function RadarChart({ chart, data }) {
  return (
    <ChartStyle>
      <ChartTitle>{chart.title}</ChartTitle>
      <ChartMaxInfo>영상미, OST</ChartMaxInfo>
      <Radar
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
          scales: {
            r: {
              min: 0,
              max: 100,
              ticks: {
                display: false,
                stepSize: 20,
              },
            },
          },
        }}
      />
    </ChartStyle>
  );
}
