import { Bar } from 'react-chartjs-2';
import { ChartStyle, ChartTitle, ChartMaxInfo, ChartCanvas } from './Styles';

export default function BarChart({ chart, data, ticketRate }) {
  return (
    <ChartStyle>
      <ChartTitle>{chart.title}</ChartTitle>
      <ChartMaxInfo>{ticketRate}%</ChartMaxInfo>
      <ChartCanvas>
        <Bar
          type={chart.type}
          data={data}
          options={{
            maintainAspectRatio: false,
            plugins: {
              legend: {
                display: false,
              },
              tooltip: {
                enabled: false,
              },
            },
            scales: {
              x: {
                title: {
                  align: 'center',
                },
                ticks: {
                  // padding: 50,
                  tickLength: 0,
                },
                grid: {
                  display: false,
                },
              },
              y: {
                display: false,
                grid: {
                  display: false,
                },
                min: 0,
                max: 100,
              },
            },
          }}
        />
      </ChartCanvas>
    </ChartStyle>
  );
}
