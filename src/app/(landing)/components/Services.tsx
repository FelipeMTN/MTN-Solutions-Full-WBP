import {
  Column,
  Heading,
  Row,
  Text,
  Media,
  Grid,
  Background,
  Button,
  Icon,
} from "@once-ui-system/core";

export const Services = ({ ...flex }: React.ComponentProps<typeof Column>) => {
  const section = {
    title: "Complete Business Solutions",
    subtitle: "Everything your business needs to thrive",
    description:
      "MTN Solutions is your one-stop partner for comprehensive business transformation. We handle the technical complexity so you can focus on what matters most — growing your business.",
  };

  const services = [
    {
      icon: "style",
      title: "Design & Branding",
      description:
        "Professional brand identity, UI/UX design, and visual marketing materials that make your business stand out",
    },
    {
      icon: "code",
      title: "Development & Programming",
      description:
        "Custom websites, mobile apps, and software solutions built with cutting-edge technology and best practices",
    },
    {
      icon: "globe",
      title: "Translation Services",
      description:
        "Professional translation and localization services to expand your business into global markets",
    },
    {
      icon: "trend",
      title: "Digital Marketing",
      description:
        "Strategic marketing campaigns, SEO optimization, and social media management to grow your reach",
    },
    {
      icon: "apps",
      title: "Business Automation",
      description:
        "Streamline operations with custom automation solutions, workflow optimization, and system integration",
    },
    {
      icon: "people",
      title: "Strategic Consulting",
      description:
        "Expert guidance on business strategy, digital transformation, and operational efficiency improvements",
    },
  ];

  return (
    <Column fillWidth horizontal="center" id="services">
      <Column
        fill
        position="absolute"
        paddingY="8"
        borderTop="neutral-alpha-medium"
        borderBottom="neutral-alpha-medium"
        borderStyle="dashed"
        style={{
          transform: "skewY(-3deg)",
        }}
      >
        <Background
          fill
          data-solid="color"
          horizontal="center"
          paddingY="xl"
          mask={{
            x: 30,
            y: 0,
            radius: 75,
          }}
          gradient={{
            display: true,
            x: 50,
            y: -50,
            height: 200,
            colorStart: "accent-solid-strong",
            colorEnd: "brand-background-strong",
          }}
        ></Background>
      </Column>
      <Column overflow="hidden" paddingY="160" gap="xl" {...flex}>
        <Row
          fillWidth
          s={{ direction: "column-reverse" }}
          gap="40"
          vertical="center"
        >
          <Column fillWidth gap="20" paddingY="24" paddingX="20">
            <Text onBackground="brand-medium" variant="label-strong-m">
              {section.title}
            </Text>
            <Heading as="h2" variant="display-strong-m">
              {section.subtitle}
            </Heading>
            <Text
              wrap="balance"
              variant="body-default-xl"
              onBackground="neutral-medium"
              marginBottom="12"
            >
              {section.description}
            </Text>
            <Button
              href="#contact"
              data-border="rounded"
              size="s"
              suffixIcon="chevronRight"
            >
              Get started today
            </Button>
          </Column>
          <Row fillWidth>
            <Media
              radius="l"
              aspectRatio="16 / 9"
              fitHeight
              src="/images/once-ui.jpg"
              alt="MTN Solutions comprehensive business services"
            />
          </Row>
        </Row>
        <Grid
          fillWidth
          columns={3}
          m={{ columns: 2 }}
          s={{ columns: 1 }}
          gap="32"
        >
          {services.map((service, index) => (
            <Column
              fillWidth
              gap="16"
              padding="32"
              key={index}
              radius="xl"
              background="surface"
              border="neutral-alpha-medium"
            >
              <Row gap="12" vertical="center" marginBottom="8">
                <Icon
                  name={service.icon}
                  size="m"
                  onBackground="brand-medium"
                />
                <Text variant="heading-strong-s">{service.title}</Text>
              </Row>
              <Text
                wrap="balance"
                variant="body-default-s"
                onBackground="neutral-medium"
              >
                {service.description}
              </Text>
            </Column>
          ))}
        </Grid>
      </Column>
    </Column>
  );
};
