import React from "react";
import {
  Column,
  Row,
  Card,
  Heading,
  Text,
  Grid,
  Line,
  Button,
  Scroller,
  StatusIndicator,
  Icon,
  LineChart
} from "@once-ui-system/core";
import { HeaderPreview } from ".";

interface StatCardProps {
  title: string;
  value: string;
  change: string;
  positive?: boolean;
  href?: string;
}

const StatCard: React.FC<StatCardProps> = ({ title, value, change, positive = true, href }) => (
  <Card minWidth={12} href={href} background="surface" padding="20" gap="12" radius="l" fillWidth direction="column">
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

export const DashboardMobilePreview: React.FC = () => {
  return (
    <Column fillWidth style={{minHeight: "100%"}}>
      <HeaderPreview mobile avatar="/images/lorant.jpg"/>
      <Row fillWidth style={{minHeight: "calc(100% - var(--static-space-64))"}}>
        <Row fillWidth horizontal="center" paddingBottom="l">
          <Column fillWidth gap="m" maxWidth="xl">
            <Column fillWidth gap="8" paddingTop="20" paddingX="20">
              <Row vertical="center" fillWidth horizontal="between" gap="8" wrap>
                <Heading variant="display-strong-s">
                  Dashboard
                </Heading>
                <Button prefixIcon="plus" size="s" data-border="rounded">
                  New
                </Button>
              </Row>
            </Column>

            <Scroller paddingLeft="16" fadeColor="transparent">
              <Row fitWidth flex={1} gap="8" paddingRight="16">
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

            <Column paddingX="16" gap="16">
              <LineChart
                height={20}
                axis="x"
                title="Revenue growth"
                description="January 2025"
                date={{
                  start: new Date("2024-12-31"),
                  end: new Date("2025-01-31"),
                  format: "dd"
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

              <Grid columns="1" gap="m" fillWidth>
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
              </Grid>
            </Column>
        </Column>
        </Row>
      </Row>
    </Column>
  );
};
