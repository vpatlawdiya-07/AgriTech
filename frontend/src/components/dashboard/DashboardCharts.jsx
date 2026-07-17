import {
  Grid,
  Typography,
} from "@mui/material";

import AppCard from "../ui/Card";

import {
  ResponsiveContainer,
  LineChart,
  Line,
  AreaChart,
  Area,
  BarChart,
  Bar,
  CartesianGrid,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

export default function DashboardCharts({ sensor }) {

  const moistureData = [
    { time: "9 AM", value: sensor?.moisture - 4 || 0 },
    { time: "10 AM", value: sensor?.moisture - 2 || 0 },
    { time: "11 AM", value: sensor?.moisture || 0 },
    { time: "12 PM", value: sensor?.moisture + 2 || 0 },
    { time: "1 PM", value: sensor?.moisture + 1 || 0 },
  ];

  const temperatureData = [
    { time: "9 AM", value: sensor?.temperature - 1 || 0 },
    { time: "10 AM", value: sensor?.temperature || 0 },
    { time: "11 AM", value: sensor?.temperature + 1 || 0 },
    { time: "12 PM", value: sensor?.temperature + 2 || 0 },
    { time: "1 PM", value: sensor?.temperature + 1 || 0 },
  ];

  const npkData = [
    {
      name: "N",
      value: sensor?.nitrogen || 0,
    },
    {
      name: "P",
      value: sensor?.phosphorus || 0,
    },
    {
      name: "K",
      value: sensor?.potassium || 0,
    },
  ];

  return (

    <Grid
      container
      spacing={3}
      mt={1}
    >

      {/* Moisture */}

      <Grid
        item
        xs={12}
        lg={6}
      >

        <AppCard
          title="💧 Moisture Trend"
        >

          <ResponsiveContainer
            width="100%"
            height={300}
          >

            <AreaChart
              data={moistureData}
            >

              <CartesianGrid strokeDasharray="3 3" />

              <XAxis dataKey="time" />

              <YAxis />

              <Tooltip />

              <Area
                type="monotone"
                dataKey="value"
                stroke="#00ACC1"
                fill="#B2EBF2"
              />

            </AreaChart>

          </ResponsiveContainer>

        </AppCard>

      </Grid>

      {/* Temperature */}

      <Grid
        item
        xs={12}
        lg={6}
      >

        <AppCard
          title="🌡 Temperature Trend"
        >

          <ResponsiveContainer
            width="100%"
            height={300}
          >

            <LineChart
              data={temperatureData}
            >

              <CartesianGrid strokeDasharray="3 3" />

              <XAxis dataKey="time" />

              <YAxis />

              <Tooltip />

              <Line
                type="monotone"
                dataKey="value"
                stroke="#E53935"
                strokeWidth={3}
              />

            </LineChart>

          </ResponsiveContainer>

        </AppCard>

      </Grid>

      {/* NPK */}

      <Grid
        item
        xs={12}
      >

        <AppCard
          title="🌱 NPK Comparison"
        >

          <ResponsiveContainer
            width="100%"
            height={300}
          >

            <BarChart
              data={npkData}
            >

              <CartesianGrid strokeDasharray="3 3" />

              <XAxis dataKey="name" />

              <YAxis />

              <Tooltip />

              <Bar
                dataKey="value"
                fill="#43A047"
                radius={[8,8,0,0]}
              />

            </BarChart>

          </ResponsiveContainer>

        </AppCard>

      </Grid>

    </Grid>

  );

}