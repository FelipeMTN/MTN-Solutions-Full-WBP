import {
  Column,
  Heading,
  Row,
  Text,
  Media,
  Grid,
  Background,
  Button,
  Card,
  Mask,
  SmartLink,
} from "@once-ui-system/core";

export const Portfolio = ({ ...flex }: React.ComponentProps<typeof Column>) => {
  const portfolioItems = [
    {
      title: "E-commerce Platform",
      category: "Web Development",
      description:
        "Complete e-commerce solution with custom design and payment integration",
      image: "/images/dashboard-desktop.jpg",
      tags: ["React", "Node.js", "Design", "SEO"],
      link: "#",
    },
    {
      title: "Brand Identity & Website",
      category: "Design & Development",
      description:
        "Full brand redesign and responsive website for growing startup",
      image: "/images/once-ui.jpg",
      tags: ["Branding", "UI/UX", "WordPress", "Marketing"],
      link: "#",
    },
    {
      title: "Mobile App Development",
      category: "App Development",
      description: "Cross-platform mobile application with real-time features",
      image: "/images/about.jpg",
      tags: ["React Native", "Firebase", "UI Design"],
      link: "#",
    },
    {
      title: "Multi-language Business Site",
      category: "Translation & Localization",
      description:
        "Global expansion project with professional translation and cultural adaptation",
      image: "/images/dashboard-desktop.jpg",
      tags: ["Translation", "Localization", "International SEO"],
      link: "#",
    },
    {
      title: "Business Automation System",
      category: "Automation & Integration",
      description: "Custom workflow automation reducing manual tasks by 80%",
      image: "/images/once-ui.jpg",
      tags: ["Automation", "API Integration", "Efficiency"],
      link: "#",
    },
    {
      title: "Digital Marketing Campaign",
      category: "Marketing & Strategy",
      description:
        "Comprehensive digital marketing strategy resulting in 300% growth",
      image: "/images/about.jpg",
      tags: ["Strategy", "SEO", "Social Media", "Analytics"],
      link: "#",
    },
  ];

  return (
    <Column fillWidth horizontal="center" id="portfolio">
      <Column
        fill
        position="absolute"
        paddingY="8"
        style={{
          transform: "skewY(3deg)",
        }}
      >
        <Background
          fill
          data-solid="color"
          horizontal="center"
          paddingY="xl"
          mask={{
            x: 70,
            y: 0,
            radius: 60,
          }}
          gradient={{
            display: true,
            x: 80,
            y: -30,
            height: 150,
            colorStart: "brand-solid-medium",
            colorEnd: "accent-background-strong",
          }}
        ></Background>
      </Column>
      <Column overflow="hidden" paddingY="160" gap="xl" {...flex}>
        <Column
          fillWidth
          gap="20"
          paddingY="24"
          paddingX="20"
          horizontal="center"
        >
          <Text
            onBackground="brand-medium"
            variant="label-strong-m"
            align="center"
          >
            Our Work
          </Text>
          <Heading as="h2" variant="display-strong-m" align="center">
            Proven results across industries
          </Heading>
          
          <Column maxWidth="m" horizontal="center">
            <Text
              wrap="balance"
              variant="body-default-xl"
              onBackground="neutral-medium"
              marginBottom="12"
              align="center"
            >
              See how we've helped businesses like yours overcome challenges and
              achieve remarkable growth through our comprehensive solutions.
            </Text>
          </Column>
        </Column>

        <Grid
          fillWidth
          columns={3}
          m={{ columns: 2 }}
          s={{ columns: 1 }}
          gap="24"
          paddingX="20"
        >
          {portfolioItems.map((item, index) => (
            <Card
              key={index}
              fillWidth
              padding="0"
              radius="xl"
              background="surface"
              border="neutral-alpha-medium"
              direction="column"
              href={item.link}
              transition="micro-medium"
            >
              <Row fillWidth aspectRatio="16 / 9" radius="xl" overflow="hidden">
                <Media
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 400px"
                />
              </Row>
              <Column fillWidth gap="12" padding="24">
                <Text variant="label-strong-s" onBackground="brand-medium">
                  {item.category}
                </Text>
                <Heading variant="heading-strong-s">{item.title}</Heading>
                <Text
                  wrap="balance"
                  variant="body-default-s"
                  onBackground="neutral-medium"
                >
                  {item.description}
                </Text>
                {/* FIXED: Wrapped tags in Row to handle radius/background */}
                <Row gap="8" wrap marginTop="8">
                  {item.tags.map((tag, tagIndex) => (
                    <Row
                      key={tagIndex}
                      padding="4"
                      paddingX="8"
                      radius="full"
                      background="neutral-alpha-weak"
                      vertical="center"
                    >
                      <Text
                        variant="body-default-xs"
                        onBackground="neutral-weak"
                      >
                        {tag}
                      </Text>
                    </Row>
                  ))}
                </Row>
              </Column>
            </Card>
          ))}
        </Grid>

        <Row fillWidth horizontal="center" marginTop="40">
          <Button
            href="/portfolio"
            data-border="rounded"
            size="m"
            suffixIcon="chevronRight"
          >
            View complete portfolio
          </Button>
        </Row>
      </Column>
    </Column>
  );
};
