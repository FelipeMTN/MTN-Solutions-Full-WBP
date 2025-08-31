import {
  AutoScroll,
  Background,
  Column,
  Fade,
  Flex,
  Heading,
  Particle,
  SmartLink,
  Text,
  User,
} from "@once-ui-system/core";
import { ReactNode } from "react";

interface Testimonial {
  content: ReactNode;
  avatar?: string;
  name?: string;
  role?: string;
  link?: string;
  company?: string;
}

interface Props extends Omit<React.ComponentProps<typeof Flex>, "content"> {
  testimonials: Testimonial[];
}

export const Testimonials: React.FC<Props> = ({ testimonials, ...flex }) => (
  <Column fillWidth {...flex}>
    <Column fillWidth horizontal="center" gap="12" paddingTop="xl" paddingBottom="32">
      <Column top="0" position="absolute" maxWidth="xl" border="neutral-medium" fill radius="xl" overflow="hidden">
        <Particle opacity={70} position="absolute" top="0" left="0" fill interactive speed={4} size="2" density={100} interactionRadius={40} pointerEvents="none"/>
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
      </Column>
      <Column maxWidth="xs" gap="16" horizontal="center" paddingX="l">
        <Heading variant="display-strong-s" align="center">
          Used by people who don't have time to design
        </Heading>
        <Text align="center" wrap="balance" variant="heading-default-l" onBackground="brand-medium">
          Build momentum without debt
        </Text>
      </Column>
      <AutoScroll fillWidth marginTop="48">
        {testimonials.slice(0, Math.ceil(testimonials.length / 2)).map((testimonial, index) => (
          <Column
            key={index}
            background="surface"
            radius="l"
            border="neutral-medium"
            vertical="between"
            marginRight="12"
            minWidth={20}
            fillWidth
          >
            <Flex padding="32" fillWidth>
              <Text wrap="balance" variant="heading-default-m">
                {testimonial.content}
              </Text>
            </Flex>
            <Flex borderTop="neutral-medium" fillWidth paddingY="24" paddingX="32">
              {(testimonial.role || testimonial.company) && (
                <User
                  avatarProps={{ src: testimonial.avatar }}
                  name={testimonial.name}
                  subline={
                    <>
                      {testimonial.role}{" "}
                      {testimonial.link && testimonial.company && (
                        <SmartLink unstyled href={testimonial.link}>
                          {testimonial.company}
                        </SmartLink>
                      )}
                    </>
                  }
                />
              )}
            </Flex>
          </Column>
        ))}
      </AutoScroll>
      <AutoScroll fillWidth reverse>
        {testimonials.slice(Math.ceil(testimonials.length / 2)).map((testimonial, index) => (
          <Column
            key={index}
            background="surface"
            radius="l"
            border="neutral-medium"
            vertical="between"
            marginRight="12"
            minWidth={20}
            fillWidth
          >
            <Flex padding="32" fillWidth>
              <Text wrap="balance" variant="heading-default-m">
                {testimonial.content}
              </Text>
            </Flex>
            <Flex borderTop="neutral-medium" fillWidth paddingY="24" paddingX="32">
              {(testimonial.role || testimonial.company) && (
                <User
                  avatarProps={{ src: testimonial.avatar }}
                  name={testimonial.name}
                  subline={
                    <>
                      {testimonial.role}{" "}
                      {testimonial.link && testimonial.company && (
                        <SmartLink unstyled href={testimonial.link}>
                          {testimonial.company}
                        </SmartLink>
                      )}
                    </>
                  }
                />
              )}
            </Flex>
          </Column>
        ))}
      </AutoScroll>
      <Fade pointerEvents="none" fillHeight width={24} s={{hide: true}} top="0" to="right" position="absolute" left="0" leftRadius="xl"/>
      <Fade pointerEvents="none" fillHeight width={24} s={{hide: true}} top="0" to="left" position="absolute" right="0" rightRadius="xl"/>
    </Column>
  </Column>
);