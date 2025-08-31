import React from "react";
import {
  Column,
  Row,
  Card,
  Heading,
  Text,
  Grid,
  Line,
  Avatar,
  Button,
  Scroller,
  StatusIndicator,
  Icon,
  LineChart
} from "@once-ui-system/core";
import { SidebarPreview, HeaderPreview } from ".";

interface StatCardProps {
  title: string;
  value: string;
  change: string;
  positive?: boolean;
  href?: string;
}

const StatCard: React.FC<StatCardProps> = ({ title, value, change, positive = true, href }) => (
  <Card minWidth={12} href={href} padding="20" gap="12" radius="l" fillWidth direction="column">
    <Row vertical="center" gap="12">
      <Row fillWidth textVariant="label-default-s" onBackground="neutral-medium">
        {title}
      </Row>
      <Row gap="8" vertical="center" onBackground={positive ? "success-weak" : "danger-weak"}>
        <Icon size="xs" name={positive ? "trendUp" : "trendDown"}/>
        <Text variant="body-default-xs">{change}</Text>
      </Row>
    </Row>
    <Heading variant="display-strong-xs">
      {value}
    </Heading>
  </Card>
);

interface ActivityItemProps {
  avatar: string;
  action: string;
  time: string;
  href?: string;
  icon: string;
}

const ActivityItem: React.FC<ActivityItemProps> = ({ avatar, action, time, href, icon }) => (
  <Card direction="column" href={href} background="transparent" border="transparent" fillWidth>
    <Row fillWidth horizontal="between" paddingX="24" height="64" vertical="center">
      <Column fillWidth gap="8">
        <Text variant="body-default-s">
          {action}
        </Text>
        <Row vertical="center" gap="12" data-scaling="90">
          <Avatar size="xs" src={avatar} />
          <Text variant="label-default-s" onBackground="neutral-weak">
            {time}
          </Text>
        </Row>
      </Column>
      <Icon name={icon} size="xs" onBackground="neutral-weak"/>
    </Row>
    <Line />
  </Card>
);

interface StatusItemProps {
  name: string;
  status: string;
  href?: string;
  icon: string;
}

const StatusItem: React.FC<StatusItemProps> = ({ name, status, icon, href = "#" }) => (
  <Card direction="column" background="transparent" href={href} border="transparent" fillWidth>
    <Row fillWidth horizontal="between" height="64" vertical="center" paddingX="24">
      <Row vertical="center" gap="12">
        <Icon name={icon} size="xs" onBackground="neutral-weak"/>
        <Text variant="body-default-s">
          {name}
        </Text>
      </Row>
      <Row vertical="center" gap="12">
        <Text variant="body-default-xs" onBackground="neutral-weak">{status}</Text>
        <StatusIndicator color={getStatusVariant(status)}/>
      </Row>
    </Row>
    <Line />
  </Card>
);

const getStatusVariant = (status: string): "green" | "yellow" | "red" | "gray" => {
  switch (status.toLowerCase()) {
    case "on track":
      return "green";
    case "at risk":
      return "red";
    case "delayed":
      return "gray";
    default:
      return "gray";
  }
};

export const DashboardPreview: React.FC = () => {
  return (
    <Column fillWidth style={{minHeight: "100%"}}>
      <HeaderPreview avatar="/images/lorant.jpg"/>
      <Row fillWidth style={{minHeight: "calc(100% - var(--static-space-64))"}}>
        <Row m={{hide: true}} maxWidth={16} padding="8">
          <SidebarPreview />
        </Row>
        <Row fillWidth horizontal="center" paddingX="l" paddingBottom="l">
          <Column fillWidth gap="m" maxWidth="xl">
            <Column fillWidth gap="8" paddingTop="24" paddingX="16">
              <Row vertical="center" fillWidth horizontal="between" gap="8" wrap>
                <Heading variant="display-strong-s">
                  Dashboard
                </Heading>
                <Button prefixIcon="plus" size="s" data-border="rounded">
                  New <Row s={{hide: true}} marginLeft="4">Project</Row>
                </Button>
              </Row>
              <Text variant="body-default-m" onBackground="neutral-medium">
                Welcome back, Alex! Here's what's happening today.
              </Text>
            </Column>

            <Scroller>
              <Row fitWidth flex={1} gap="8">
                {[
                  { title: "Revenue", value: "$24,345", change: "12.5%", positive: true },
                  { title: "Visitors", value: "2,345", change: "8.3%", positive: true },
                  { title: "Conversion", value: "3.2%", change: "1.8%", positive: false },
                  { title: "Session", value: "4m 32s", change: "10.3%", positive: true },
                ].map((stat, index) => (
                  <StatCard
                    key={index}
                    title={stat.title}
                    value={stat.value}
                    change={stat.change}
                    positive={stat.positive}
                    href="#"
                  />
                ))}
              </Row>
            </Scroller>

            <LineChart
              minHeight={20}
              axis="x"
              title="Revenue growth"
              description="January 2025"
              date={{
                start: new Date("2024-12-31"),
                end: new Date("2025-01-31"),
                format: "MMM dd"
              }}
              series={[
                { key: "Current period", color: "blue" },
                { key: "Previous period", color: "gray" }
              ]}
              data={[
                { date: "2025-01-01", "Current period": 4654, "Previous period": 1365 },
                { date: "2025-01-02", "Current period": 1575, "Previous period": 3457 },
                { date: "2025-01-03", "Current period": 5557, "Previous period": 4355 },
                { date: "2025-01-04", "Current period": 6525, "Previous period": 5252 },
                { date: "2025-01-05", "Current period": 5534, "Previous period": 6453 },
                { date: "2025-01-06", "Current period": 4375, "Previous period": 3347 },
                { date: "2025-01-07", "Current period": 5456, "Previous period": 2245 },
                { date: "2025-01-08", "Current period": 5425, "Previous period": 2142 },
                { date: "2025-01-09", "Current period": 2412, "Previous period": 1041 },
                { date: "2025-01-10", "Current period": 4375, "Previous period": 1137 },
                { date: "2025-01-11", "Current period": 3345, "Previous period": 7234 },
                { date: "2025-01-12", "Current period": 5123, "Previous period": 1312 },
                { date: "2025-01-13", "Current period": 6912, "Previous period": 4291 },
                { date: "2025-01-14", "Current period": 8654, "Previous period": 3165 },
                { date: "2025-01-15", "Current period": 4234, "Previous period": 2023 },
                { date: "2025-01-16", "Current period": 3423, "Previous period": 1142 },
                { date: "2025-01-17", "Current period": 2312, "Previous period": 231 },
                { date: "2025-01-18", "Current period": 1234, "Previous period": 3423 }
              ]}
            />

            <Grid columns="2" m={{columns: "1"}} gap="m" fillWidth>
              <Column fillWidth border="neutral-medium" radius="l" overflow="hidden" height={20}>
                <Row vertical="center" horizontal="between" fillWidth paddingLeft="24" paddingRight="12" paddingY="12" gap="m" wrap>
                  <Heading wrap="nowrap" variant="heading-strong-s">
                    Project status
                  </Heading>
                  <Row gap="4">
                    <Button weight="default" variant="secondary" size="s">
                      Weekly
                    </Button>
                    <Button weight="default" size="s">
                      Monthly
                    </Button>
                    <Button weight="default" variant="secondary" size="s">
                      Yearly
                    </Button>
                  </Row>
                </Row>
                
                <Column fillWidth borderTop="neutral-medium" overflowY="auto">
                  {[
                    { name: "Mobile App Development", status: "At Risk", icon: "code" },
                    { name: "Marketing Campaign", status: "On Track", icon: "sparkle" },
                    { name: "Database Migration", status: "On Track", icon: "code" },
                    { name: "Website Redesign", status: "On Track", icon: "sparkle" },
                    { name: "Product Launch", status: "Delayed", icon: "sparkle" },
                    { name: "Server Upgrade", status: "Delayed", icon: "code" },
                  ].map((project, index) => (
                    <StatusItem
                      key={index}
                      name={project.name}
                      status={project.status}
                      icon={project.icon}
                    />
                  ))}
                </Column>
              </Column>

              <Column border="neutral-medium" radius="l" fillWidth overflow="hidden" height={20}>
                <Row fillWidth vertical="center" horizontal="between" paddingLeft="24" paddingRight="12" paddingY="12" gap="16" wrap>
                  <Heading wrap="nowrap" variant="heading-strong-s">
                    Recent activity
                  </Heading>
                  <Button size="s" weight="default" variant="secondary" suffixIcon="chevronRight">
                    View all
                  </Button>
                </Row>
                <Column fillWidth borderTop="neutral-medium" overflowY="auto">
                  {[
                    {
                      avatar: "/images/lorant.jpg",
                      action: "Completed the Website Redesign task",
                      time: "2 hours ago",
                      icon: "check"
                    },
                    {
                      avatar: "/images/lorant.jpg",
                      action: "Commented on Mobile App Development",
                      time: "4 hours ago",
                      icon: "chat"
                    },
                    {
                      avatar: "/images/lorant.jpg",
                      action: "Created a new task in Marketing Campaign",
                      time: "Yesterday",
                      icon: "plus"
                    },
                    {
                      avatar: "/images/lorant.jpg",
                      action: "Completed 3 tasks in Product Launch",
                      time: "Yesterday",
                      icon: "check"
                    },
                    {
                      avatar: "/images/lorant.jpg",
                      action: "Created a new task in Marketing Campaign",
                      time: "2 days ago",
                      icon: "plus"
                    },
                    {
                      avatar: "/images/lorant.jpg",
                      action: "Completed 3 tasks in Product Launch",
                      time: "4 days ago",
                      icon: "check"
                    }
                  ].map((activity, index) => (
                    <ActivityItem 
                      key={index}
                      avatar={activity.avatar}
                      action={activity.action}
                      time={activity.time}
                      icon={activity.icon}
                    />
                  ))}
                </Column>
              </Column>
            </Grid>
          </Column>
        </Row>
      </Row>
    </Column>
  );
};
