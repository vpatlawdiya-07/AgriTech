import {
  Timeline,
  TimelineItem,
  TimelineSeparator,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
} from "@mui/lab";

import {
  Typography,
  Chip,
} from "@mui/material";

import {
  Sensors,
  CloudQueue,
  Agriculture,
  Description,
  SmartToy,
} from "@mui/icons-material";

import AppCard from "../ui/Card";

export default function RecentActivity() {

  const activities = [
    {
      title: "Sensor data updated",
      time: "Just now",
      color: "success",
      icon: <Sensors />,
    },
    {
      title: "Weather synchronized",
      time: "2 min ago",
      color: "info",
      icon: <CloudQueue />,
    },
    {
      title: "AI recommendation generated",
      time: "5 min ago",
      color: "warning",
      icon: <SmartToy />,
    },
    {
      title: "Farm information updated",
      time: "12 min ago",
      color: "primary",
      icon: <Agriculture />,
    },
    {
      title: "Report generated",
      time: "20 min ago",
      color: "secondary",
      icon: <Description />,
    },
  ];

  return (
    <AppCard
      title="📋 Recent Activity"
      subtitle="Latest system events"
    >
      <Timeline position="right">
        {activities.map((item, index) => (
          <TimelineItem key={index}>
            <TimelineSeparator>

              <TimelineDot color={item.color}>
                {item.icon}
              </TimelineDot>

              {index !== activities.length - 1 && (
                <TimelineConnector />
              )}

            </TimelineSeparator>

            <TimelineContent>

              <Typography
                fontWeight="bold"
              >
                {item.title}
              </Typography>

              <Chip
                label={item.time}
                size="small"
                sx={{
                  mt: 1,
                }}
              />

            </TimelineContent>

          </TimelineItem>
        ))}
      </Timeline>
    </AppCard>
  );

}