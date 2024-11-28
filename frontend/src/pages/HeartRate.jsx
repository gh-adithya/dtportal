import React from "react";
import { Typography, Card, CardContent, Box } from "@mui/material";
import { LineChart } from "@mui/x-charts/LineChart";

const HeartRate = () => {
  const heartRateData = [72, 75, 68, 80, 76, 74, 70];

  return (
    <Card
      sx={{
        borderRadius: 4,
        boxShadow: 3,
        background: "linear-gradient(to bottom, #e3f2fd, #bbdefb)",
        p: 2,
      }}
    >
      <CardContent>
        <Typography variant="h5" sx={{ fontWeight: "bold", mb: 2 }}>
          Heart Rate Monitoring
        </Typography>
        <Box display="flex" justifyContent="center" alignItems="center">
          <LineChart
            xAxis={[
              {
                data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
                scaleType: "point",
              },
            ]}
            series={[
              {
                data: heartRateData,
                label: "Heart Rate (BPM)",
              },
            ]}
            width={600}
            height={300}
            sx={{ "& .MuiChart-root": { color: "#1976d2" } }}
          />
        </Box>
      </CardContent>
    </Card>
  );
};

export default HeartRate;
