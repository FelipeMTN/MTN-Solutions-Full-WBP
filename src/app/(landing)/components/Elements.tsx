import { Column, Heading, Row, Text, Media, Mask, Logo, Line, Background, SmartLink, Fade } from "@once-ui-system/core";

const features = [
  {
    content: (
      <Column fill style={{isolation: "isolate"}}>
        <Row
          position="absolute"
          width={32}
          aspectRatio="1120 / 820"
          style={{right: "-1rem", bottom: "-1.5rem"}}>
          <Media
            src="/images/magic-convert-fg.png"
            alt={"Flat lay mockups of Magic Convert"}
            sizes={"(max-width: 1024px) 90vw, 640px"}
          />
        </Row>
        <Fade leftRadius="xl" position="absolute" left="0" fillHeight maxWidth={40} to="right" />
        <Column fill padding="xl" gap="12" maxWidth={40} vertical="center">
          <Logo style={{marginLeft: "-0.25rem"}} wordmark="/trademarks/wordmark-light.svg" size="xs"/>
          <Line width="24" marginTop="16" marginBottom="16"/>
          <Heading size="l">
            The base of your empire
          </Heading>
          <Text onBackground="neutral-medium" variant="body-default-m" wrap="balance">
            Magic Convert provides an optimized entry-point for your online presence. Built for conversion, scale and minimal config.
          </Text>
          <Text variant="label-strong-s" marginTop="8">
            <SmartLink href="#" suffixIcon="chevronRight">
              Learn more
            </SmartLink>
          </Text>
        </Column>
      </Column>
    ),
  },
  {
    content: (
      <Column fill style={{isolation: "isolate"}}>
        <Background
          leftRadius="xl"
          position="absolute"
          fillHeight
          right="0"
          bottom="0"
          left={undefined}
          rightRadius="xl"
          mask={{
            x: 100,
            y: 100,
            radius: 75,
          }}
          dots={{
            display: true,
            size: "2",
            color: "neutral-background-strong",
          }}
        />
        <Row
          position="absolute"
          width={32}
          aspectRatio="1200 / 1024"
          style={{right: "-1rem", bottom: "-1.5rem"}}>
          <Media
            src="/images/magic-docs-fg.png"
            alt={"Figure wearing custom merch"}
            sizes={"(max-width: 1024px) 90vw, 640px"}
          />
        </Row>
        <Fade leftRadius="xl" position="absolute" left="0" fillHeight maxWidth={40} to="right" />
        <Column fill padding="xl" gap="12" maxWidth={40} vertical="center">
          <Logo style={{marginLeft: "-0.25rem"}} wordmark="/trademarks/magic-docs-dark.svg" size="xs"/>
          <Line width="24" marginTop="16" marginBottom="16"/>
          <Heading size="l">
            The brain of your product
          </Heading>
          <Text onBackground="neutral-medium" variant="body-default-m" wrap="balance">
            Magic Docs lets you share your knowledge without complicated setup. Frame your business as an authority in your field.
          </Text>
          <Text variant="label-strong-s" marginTop="8">
            <SmartLink href="#" suffixIcon="chevronRight">
              Learn more
            </SmartLink>
          </Text>
        </Column>
      </Column>
    ),
  },
  {
    content: (
      <Column fill style={{isolation: "isolate"}}>
        <Mask
          position="absolute"
          fillHeight
          right="0"
          bottom="0"
          left={undefined}
          rightRadius="xl"
          leftRadius="xl"
          x={90}
          y={10}
          radius={50}>
          <Media
            src="/images/magic-store-background.jpg"
            alt={"Figure wearing custom merch"}
            sizes={"(max-width: 1024px) 90vw, 640px"}
          />
        </Mask>
        <Row
          position="absolute"
          width={28}
          aspectRatio="1200 / 960"
          style={{right: "-1rem", bottom: "-1.5rem"}}>
          <Media
            src="/images/magic-store-fg.png"
            alt={"Figure wearing custom merch"}
            sizes={"(max-width: 1024px) 90vw, 640px"}
          />
        </Row>
        <Fade leftRadius="xl" position="absolute" left="0" fillHeight maxWidth={40} to="right" />
        <Column fill padding="xl" gap="12" maxWidth={40} vertical="center">
          <Logo style={{marginLeft: "-0.25rem"}} wordmark="/trademarks/magic-store-dark.svg" size="xs"/>
          <Line width="24" marginTop="16" marginBottom="16"/>
          <Heading size="l">
            The soul of your brand
          </Heading>
          <Text onBackground="neutral-medium" variant="body-default-m" wrap="balance">
            Magic Store helps you sell branded merch to your community. Inventory, payment and shipping are all handled for you.
          </Text>
          <Text variant="label-strong-s" marginTop="8">
            <SmartLink href="#" suffixIcon="chevronRight">
              Learn more
            </SmartLink>
          </Text>
        </Column>
      </Column>
    ),
  },
];

export const Elements = ({ ...flex }: React.ComponentProps<typeof Column>) => {
  return (
    <Column gap="xl" fillWidth {...flex}>
      {features.map((feature, index) => (
        <Row
          key={index}
          position="sticky"
          data-theme={index === 0 ? "light" : undefined}
          top="80"
          minHeight={24}
          gap="xl"
          radius="xl"
          background="page"
          vertical="center"
          m={{direction: "column"}}
          border="neutral-alpha-medium"
        >
          <Column
            fill
            gap="m"
            m={{direction: "column"}}
          >
            {feature.content}
          </Column>
        </Row>
      ))}
    </Column>
  );
};