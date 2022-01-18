import { Line } from 'react-chartjs-2';
import { ChartStyle, ChartTitle, ChartMaxInfo, ChartCanvas } from './Styles';

export default function LineChart({ chart, data }) {
  const reducer = (sum, currentValue) => sum + currentValue;

  return (
    <ChartStyle>
      <ChartTitle>{chart.title}</ChartTitle>
      <ChartMaxInfo>누적 {chart.data.reduce(reducer)}명</ChartMaxInfo>
      <ChartCanvas>
        <Line
          type={chart.type}
          data={data}
          options={{
            maintainAspectRatio: false,
            plugins: {
              legend: {
                display: false,
              },
            },
            scales: {
              x: {
                title: {
                  align: 'center',
                },
                ticks: {
                  padding: 10,
                },
              },
              y: {
                min: 0,
                max: 10000,
                ticks: {
                  padding: 0,
                  display: false,
                },
                grid: {
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
