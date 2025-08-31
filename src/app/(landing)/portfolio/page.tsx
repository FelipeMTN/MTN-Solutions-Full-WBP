import { Portfolio, Testimonial } from "@/app/(landing)/components";
import {
  Meta,
  Schema,
  Column,
  Heading,
  Row,
  Text,
  Grid,
  Card,
  Media,
  Button,
} from "@once-ui-system/core";
import { baseURL, landing } from "@/resources";
import { featuredTestimonials } from "@/content";

export async function generateMetadata() {
  return Meta.generate({
    title: landing.portfolio.title,
    description: landing.portfolio.description,
    baseURL: baseURL,
    path: landing.portfolio.path,
    canonical: landing.portfolio.canonical,
    image: landing.portfolio.image,
    robots: landing.portfolio.robots,
    alternates: landing.portfolio.alternates,
  });
}

const allProjects = [
  {
    title: "E-commerce Platform Redesign",
    category: "Web Development & Design",
    description:
      "Complete overhaul of an online retail platform resulting in 150% increase in conversions",
    image: "/images/dashboard-desktop.jpg",
    tags: ["React", "Node.js", "UI/UX", "E-commerce", "SEO"],
    year: "2024",
    client: "RetailCorp",
    results: [
      "150% increase in conversions",
      "40% faster page load times",
      "25% reduction in cart abandonment",
    ],
    link: "#",
  },
  {
    title: "International Brand Expansion",
    category: "Translation & Localization",
    description:
      "Multi-language website and marketing materials for global market entry",
    image: "/images/once-ui.jpg",
    tags: [
      "Translation",
      "Localization",
      "Cultural Adaptation",
      "SEO",
      "Marketing",
    ],
    year: "2024",
    client: "GlobalTech",
    results: [
      "Expanded to 8 new markets",
      "300% increase in international sales",
      "Reduced time-to-market by 60%",
    ],
    link: "#",
  },
  {
    title: "Startup Brand & Digital Presence",
    category: "Complete Business Solution",
    description:
      "Full brand development, website creation, and digital marketing strategy for tech startup",
    image: "/images/about.jpg",
    tags: [
      "Branding",
      "Web Development",
      "Digital Marketing",
      "Strategy",
      "UI/UX",
    ],
    year: "2023",
    client: "InnovateTech",
    results: [
      "$2M seed funding raised",
      "10k+ organic monthly visitors",
      "95% brand recognition in target market",
    ],
    link: "#",
  },
  {
    title: "Mobile App Development",
    category: "Mobile Development",
    description:
      "Cross-platform mobile application with real-time features and seamless UX",
    image: "/images/dashboard-desktop.jpg",
    tags: ["React Native", "Firebase", "Real-time", "UI/UX", "API Integration"],
    year: "2023",
    client: "ConnectApp",
    results: [
      "50k+ downloads in first month",
      "4.8 app store rating",
      "30% daily active user retention",
    ],
    link: "#",
  },
  {
    title: "Manufacturing Automation System",
    category: "Business Automation",
    description: "Custom workflow automation and inventory management system",
    image: "/images/once-ui.jpg",
    tags: ["Automation", "System Integration", "Workflow", "API", "Analytics"],
    year: "2023",
    client: "ManufacturePro",
    results: [
      "80% reduction in manual tasks",
      "99.9% system uptime",
      "500% ROI within first year",
    ],
    link: "#",
  },
  {
    title: "Healthcare Platform Redesign",
    category: "Web Development & Compliance",
    description:
      "HIPAA-compliant patient portal with enhanced security and user experience",
    image: "/images/about.jpg",
    tags: [
      "Healthcare",
      "HIPAA Compliance",
      "Security",
      "Patient Portal",
      "Accessibility",
    ],
    year: "2024",
    client: "MedCenter",
    results: [
      "100% HIPAA compliance",
      "60% increase in patient engagement",
      "45% reduction in support tickets",
    ],
    link: "#",
  },
];

export default function PortfolioPage() {
  return (
    <Column fillWidth horizontal="center" gap="xl" paddingX="l">
      <Schema
        as="webPage"
        baseURL={baseURL}
        title={landing.portfolio.title}
        description={landing.portfolio.description}
        path={landing.portfolio.path}
      />

      {/* Hero Section */}
      <Column maxWidth={40} gap="12" horizontal="center">
        <Text
          onBackground="brand-medium"
          variant="label-strong-m"
          align="center"
        >
          Our Work
        </Text>
        <Heading as="h1" align="center" variant="display-strong-l">
          Portfolio of Success Stories
        </Heading>
        <Text
          align="center"
          onBackground="neutral-medium"
          variant="body-default-xl"
          wrap="balance"
        >
          See how we've helped businesses across industries achieve remarkable
          growth through our comprehensive solutions.
        </Text>
      </Column>

      {/* Featured Project */}
      <Row
        fillWidth
        maxWidth="l"
        s={{ direction: "column" }}
        gap="40"
        vertical="center"
        padding="48"
        radius="xl"
        background="surface"
        border="neutral-alpha-medium"
      >
        <Column fillWidth gap="20">
          <Text variant="label-strong-s" onBackground="brand-medium">
            Featured Project
          </Text>
          <Heading variant="display-strong-s">{allProjects[0].title}</Heading>
          <Text
            wrap="balance"
            variant="body-default-l"
            onBackground="neutral-medium"
          >
            {allProjects[0].description}
          </Text>
          <Column gap="12">
            <Text variant="heading-strong-xs">Key Results:</Text>
            {allProjects[0].results.map((result, index) => (
              <Text
                key={index}
                variant="body-default-s"
                onBackground="neutral-medium"
              >
                • {result}
              </Text>
            ))}
          </Column>
          <Row gap="8" wrap marginTop="16">
            {allProjects[0].tags.map((tag, index) => (
              <Text
                key={index}
                variant="body-default-xs"
                padding="6"
                paddingX="12"
                radius="full"
                background="brand-alpha-weak"
                onBackground="brand-medium"
              >
                {tag}
              </Text>
            ))}
          </Row>
          <Button
            href={allProjects[0].link}
            data-border="rounded"
            size="s"
            suffixIcon="chevronRight"
            marginTop="16"
          >
            View Case Study
          </Button>
        </Column>
        <Row fillWidth aspectRatio="4 / 3" radius="l" overflow="hidden">
          <Media
            src={allProjects[0].image}
            alt={allProjects[0].title}
            fill
            sizes="(max-width: 768px) 100vw, 600px"
          />
        </Row>
      </Row>

      {/* All Projects Grid */}
      <Column fillWidth maxWidth="l" gap="32">
        <Column horizontal="center" gap="16">
          <Heading variant="display-strong-s" align="center">
            All Projects
          </Heading>
          <Text
            wrap="balance"
            onBackground="neutral-medium"
            variant="body-default-l"
            align="center"
          >
            Explore our complete portfolio of successful business
            transformations
          </Text>
        </Column>

        <Grid fillWidth columns={2} m={{ columns: 1 }} gap="24">
          {allProjects.slice(1).map((project, index) => (
            <Card
              key={index}
              fillWidth
              padding="0"
              radius="xl"
              background="surface"
              border="neutral-alpha-medium"
              direction="column"
              href={project.link}
              transition="micro-medium"
            >
              <Row fillWidth aspectRatio="16 / 9" radius="xl" overflow="hidden">
                <Media
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 480px"
                />
              </Row>
              <Column fillWidth gap="16" padding="24">
                <Row fillWidth horizontal="between" vertical="center">
                  <Text variant="label-strong-s" onBackground="brand-medium">
                    {project.category}
                  </Text>
                  <Text variant="body-default-xs" onBackground="neutral-weak">
                    {project.year}
                  </Text>
                </Row>
                <Heading variant="heading-strong-s">{project.title}</Heading>
                <Text
                  wrap="balance"
                  variant="body-default-s"
                  onBackground="neutral-medium"
                >
                  {project.description}
                </Text>

                {/* Key Results */}
                <Column gap="8">
                  <Text variant="label-strong-xs" onBackground="neutral-medium">
                    Key Results:
                  </Text>
                  {project.results.slice(0, 2).map((result, resultIndex) => (
                    <Text
                      key={resultIndex}
                      variant="body-default-xs"
                      onBackground="neutral-weak"
                    >
                      • {result}
                    </Text>
                  ))}
                </Column>

                <Row gap="6" wrap marginTop="8">
                  {project.tags.slice(0, 4).map((tag, tagIndex) => (
                    <Text
                      key={tagIndex}
                      variant="body-default-xs"
                      padding="4"
                      paddingX="8"
                      radius="full"
                      background="neutral-alpha-weak"
                      onBackground="neutral-weak"
                    >
                      {tag}
                    </Text>
                  ))}
                  {project.tags.length > 4 && (
                    <Text
                      variant="body-default-xs"
                      padding="4"
                      paddingX="8"
                      radius="full"
                      background="neutral-alpha-weak"
                      onBackground="neutral-weak"
                    >
                      +{project.tags.length - 4} more
                    </Text>
                  )}
                </Row>
              </Column>
            </Card>
          ))}
        </Grid>
      </Column>

      {/* Client Testimonials */}
      <Row fillWidth horizontal="center" paddingX="xl" marginTop="xl">
        <Column maxWidth="m" gap="32">
          <Heading variant="display-strong-s" align="center">
            What Our Clients Say
          </Heading>
          <Grid columns={2} s={{ columns: 1 }} gap="24">
            {featuredTestimonials.map((testimonial, index) => (
              <Testimonial key={index} testimonial={testimonial} />
            ))}
          </Grid>
        </Column>
      </Row>

      {/* CTA Section */}
      <Row
        fillWidth
        maxWidth="l"
        padding="48"
        radius="xl"
        background="surface"
        border="neutral-alpha-medium"
        horizontal="center"
        vertical="center"
        s={{ direction: "column" }}
        gap="24"
        marginY="xl"
      >
        <Column horizontal="center" align="center" gap="12">
          <Heading variant="display-strong-s" align="center">
            Ready to create your success story?
          </Heading>
          <Text
            wrap="balance"
            variant="body-default-l"
            onBackground="neutral-medium"
            align="center"
            maxWidth="m"
          >
            Let's discuss your project and create a custom solution that
            delivers the results your business needs.
          </Text>
        </Column>
        <Row gap="12" s={{ direction: "column", fillWidth: true }}>
          <Button href="#contact" arrowIcon size="l" data-border="rounded">
            Start Your Project
          </Button>
          <Button
            href="/services"
            variant="secondary"
            size="l"
            data-border="rounded"
          >
            Explore Services
          </Button>
        </Row>
      </Row>
    </Column>
  );
}
