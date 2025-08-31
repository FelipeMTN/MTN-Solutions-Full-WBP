import { Column, Heading, LineChart, Row, Schema, Meta } from "@once-ui-system/core";
import { baseURL, product } from "@/resources";

export async function generateMetadata() {
  return Meta.generate({
    title: product.analytics.title,
    description: product.analytics.description,
    baseURL: baseURL,
    path: product.analytics.path,
    canonical: product.analytics.canonical,
    image: product.analytics.image,
    robots: product.analytics.robots,
    alternates: product.analytics.alternates,
  });
}

export default function Analytics() {
  return (
    <>
      <Schema
        as="webPage"
        baseURL={baseURL}
        title={product.analytics.title}
        description={product.analytics.description}
        path={product.analytics.path}
      />
      <Column fillWidth gap="8" paddingX="16">
        <Row vertical="center" fillWidth horizontal="between" gap="8" wrap>
          <Heading variant="display-strong-s">
            Analytics
          </Heading>
        </Row>
      </Column>
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
    </>
  );
}