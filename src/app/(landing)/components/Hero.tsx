import {
  Badge,
  Button,
  Column,
  Heading,
  Media,
  Tag,
  Text,
} from "@once-ui-system/core";

export const Hero: React.FC<React.ComponentProps<typeof Column>> = ({
  ...flex
}) => {
  return (
    <Column fillWidth fitHeight horizontal="center" align="center">
      <Column maxWidth="l" gap="32" fitHeight horizontal="center" {...flex}>
        <Column maxWidth="m" horizontal="center" gap="16" marginBottom="32">
          <Badge
            href="#services"
            id="badge-services"
            paddingY="4"
            paddingLeft="4"
            paddingRight="16"
            gap="8"
            border="neutral-alpha-medium"
            background="overlay"
            arrow
            effect={false}
          >
            <Tag size="l" variant="brand" marginRight="12">
              <Text variant="body-strong-xs">NEW</Text>
            </Tag>
            <Text variant="label-default-s">Complete Business Solutions</Text>
          </Badge>
          <Heading variant="display-strong-l" marginTop="12">
            Your business challenges, our expertise
          </Heading>
          <Heading
            wrap="balance"
            onBackground="neutral-medium"
            variant="body-default-xl"
            marginBottom="16"
          >
            From design to development to translations — MTN Solutions provides
            end-to-end business services to elevate every aspect of your company
          </Heading>
          <Button id="hero-cta" href="#contact" arrowIcon>
            Transform your business
          </Button>
        </Column>
        <Media
          src="/images/dashboard-desktop.jpg"
          border="neutral-alpha-weak"
          aspectRatio="16 / 9"
          fillWidth
          priority
          radius="xl"
          sizes="(max-width: 1200px) 100vw, 1200px"
        />
      </Column>
    </Column>
  );
};
