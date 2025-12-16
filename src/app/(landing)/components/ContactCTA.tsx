import {
  Row,
  Column,
  Heading,
  Button,
  Mask,
  Particle,
  Text,
  Input,
  Background,
  HoloFx,
  Grid,
  Icon,
} from "@once-ui-system/core";

export const ContactCTA = () => {
  const contactMethods = [
    {
      icon: "email",
      title: "Email Us",
      description: "Get a response within 24 hours",
      action: "contact@mtnsolutions.com",
      href: "mailto:contact@mtnsolutions.com",
    },
    {
      icon: "chat",
      title: "Schedule a Call",
      description: "Book a free consultation",
      action: "Schedule Now",
      href: "#schedule",
    },
    {
      icon: "document",
      title: "Get a Quote",
      description: "Receive a detailed project proposal",
      action: "Request Quote",
      href: "#quote",
    },
  ];

  return (
    <Column fillWidth horizontal="center" id="contact">
      {/* Main CTA Section */}
      <Column
        fillWidth
        horizontal="center"
        borderBottom="neutral-alpha-medium"
        paddingX="l"
      >
        <Row maxWidth="l" paddingX="56">
          <Row
            borderTop="neutral-alpha-medium"
            borderLeft="neutral-alpha-medium"
            borderRight="neutral-alpha-medium"
            height="20"
            fillWidth
            topRadius="xl"
          />
        </Row>
        <Row maxWidth="l" paddingX="24">
          <Row
            borderTop="neutral-alpha-medium"
            borderLeft="neutral-alpha-medium"
            borderRight="neutral-alpha-medium"
            height="24"
            fillWidth
            topRadius="xl"
          />
        </Row>
        <Row
          maxWidth="l"
          height="m"
          center
          paddingX="l"
          topRadius="xl"
          gap="32"
          s={{ direction: "column" }}
          borderTop="neutral-alpha-medium"
          borderLeft="neutral-alpha-medium"
          borderRight="neutral-alpha-medium"
          overflow="hidden"
        >
          <Column horizontal="center" align="center" gap="24">
            <Heading as="h2" align="center" variant="display-strong-m">
              Ready to transform your business
              <Text onBackground="brand-medium">?</Text>
            </Heading>
            <Column maxWidth="m" horizontal="center">
              <Text
                align="center"
                wrap="balance"
                variant="body-default-xl"
                onBackground="neutral-medium"
              >
                Let's discuss your challenges and create a custom solution that
                drives real results for your business.
              </Text>
            </Column>
          </Column>
          <Row
            position="absolute"
            minWidth={68}
            minHeight={28}
            radius="full"
            border="brand-alpha-medium"
          />
          <Row
            position="absolute"
            minWidth={54}
            minHeight={28}
            radius="full"
            border="brand-alpha-medium"
          />
          <Row
            position="absolute"
            minWidth={40}
            minHeight={28}
            radius="full"
            border="brand-alpha-medium"
          />
          <Row
            position="absolute"
            minWidth={28}
            minHeight={28}
            radius="full"
            border="brand-alpha-medium"
            overflow="hidden"
          >
            <Mask fill position="absolute" x={50} y={50} radius={25}>
              <Particle
                style={{ transform: "scale(1.1)" }}
                opacity={70}
                position="absolute"
                top="0"
                left="0"
                fill
                interactive
                speed={4}
                density={100}
                size="2"
                interactionRadius={50}
              />
            </Mask>
          </Row>
          <Button
            data-border="rounded"
            id="main-cta-button"
            href="mailto:contact@mtnsolutions.com"
            arrowIcon
            size="l"
          >
            Start Your Project
          </Button>
        </Row>
      </Column>

      {/* Contact Methods Section */}
      <Column fillWidth horizontal="center" paddingY="xl">
        <Column maxWidth="l" gap="xl" paddingX="l">
          <Column horizontal="center" gap="16" marginBottom="32">
            <Text
              onBackground="brand-medium"
              variant="label-strong-m"
              align="center"
            >
              Get In Touch
            </Text>
            <Heading variant="display-strong-s" align="center">
              Multiple ways to connect
            </Heading>
            <Column maxWidth="m" horizontal="center">
              <Text
                wrap="balance"
                onBackground="neutral-medium"
                variant="body-default-l"
                align="center"
              >
                Choose the method that works best for you. We're here to help
                bring your vision to life.
              </Text>
            </Column>
          </Column>

          <Grid columns={3} s={{ columns: 1 }} gap="24">
            {contactMethods.map((method, index) => (
              <Column
                key={index}
                fillWidth
                padding="32"
                gap="20"
                radius="xl"
                background="surface"
                border="neutral-alpha-medium"
                horizontal="center"
                align="center"
              >
                <Row
                  width="12"
                  height="12"
                  radius="full"
                  background="brand-alpha-weak"
                  horizontal="center"
                  vertical="center"
                >
                  <Icon
                    name={method.icon}
                    onBackground="brand-medium"
                    size="s"
                  />
                </Row>
                <Column horizontal="center" align="center" gap="8">
                  <Text variant="heading-strong-s" align="center">
                    {method.title}
                  </Text>
                  <Text
                    variant="body-default-s"
                    onBackground="neutral-medium"
                    align="center"
                  >
                    {method.description}
                  </Text>
                </Column>
                <Button
                  href={method.href}
                  variant="secondary"
                  size="s"
                  data-border="rounded"
                  fillWidth
                >
                  {method.action}
                </Button>
              </Column>
            ))}
          </Grid>

          {/* Quick Contact Form */}
          <Column
            fillWidth
            overflow="hidden"
            vertical="center"
            padding="48"
            radius="xl"
            horizontal="center"
            align="center"
            border="neutral-alpha-weak"
            background="surface"
            marginTop="32"
          >
            <Particle
              opacity={50}
              position="absolute"
              top="0"
              left="0"
              fill
              interactive
              speed={2}
              size="1"
              density={80}
              interactionRadius={30}
              pointerEvents="none"
            />
            <HoloFx
              fill
              top="0"
              left="0"
              position="absolute"
              texture={{
                opacity: 0,
              }}
            >
              <Background
                position="absolute"
                top="0"
                left="0"
                gradient={{
                  display: true,
                  x: 0,
                  y: 125,
                  colorStart: "accent-solid-strong",
                  colorEnd: "static-transparent",
                }}
              />
              <Background
                gradient={{
                  display: true,
                  x: 125,
                  y: 100,
                  width: 150,
                  height: 150,
                  colorStart: "brand-background-strong",
                  colorEnd: "static-transparent",
                }}
              />
            </HoloFx>

            <Column horizontal="center" maxWidth="s" gap="24">
              <Column horizontal="center" align="center" gap="12">
                <Text variant="heading-strong-xl" align="center">
                  Quick Project Inquiry
                </Text>
                <Text
                  variant="body-default-m"
                  wrap="balance"
                  onBackground="neutral-medium"
                  align="center"
                >
                  Tell us about your project and we'll get back to you within 24
                  hours
                </Text>
              </Column>

              <Column fillWidth gap="12">
                <Row fillWidth gap="12" s={{ direction: "column" }}>
                  <Input
                    placeholder="Your Name"
                    id="contact-name"
                    type="text"
                    required
                  />
                  <Input
                    placeholder="Your Email"
                    id="contact-email"
                    type="email"
                    required
                  />
                </Row>
                <Input
                  placeholder="Project Description"
                  id="contact-message"
                  type="text"
                  required
                />
                <Button fillWidth id="contact-form-button" arrowIcon>
                  Send Inquiry
                </Button>
              </Column>
            </Column>
          </Column>
        </Column>
      </Column>
    </Column>
  );
};
