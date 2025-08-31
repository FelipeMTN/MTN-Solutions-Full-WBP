import {
  Button,
  Column,
  Icon,
  Logo,
  Row,
  SmartLink,
} from "@once-ui-system/core";
import { Newsletter, ContactCTA } from ".";
import { social } from "@/resources";

export const Footer = () => {
  return (
    <Column fillWidth horizontal="center" paddingY="xl" gap="xl">
      <ContactCTA />
      <Row
        fillWidth
        paddingX="l"
        maxWidth="l"
        gap="xl"
        m={{ direction: "column" }}
      >
        <Column fillWidth vertical="center" gap="40" paddingX="20">
          <Row
            gap="12"
            textVariant="label-default-m"
            maxWidth="l"
            vertical="center"
          >
            <Logo
              style={{ marginLeft: "-0.125rem" }}
              dark
              href="/"
              icon="/trademarks/mtn-icon-dark.png"
              size="m"
            />
            <Logo
              style={{ marginLeft: "-0.125rem" }}
              light
              href="/"
              icon="/trademarks/mtn-icon-light.png"
              size="m"
            />
            <Button
              data-border="rounded"
              size="s"
              weight="default"
              variant="tertiary"
              href="/#services"
            >
              <Row gap="12" vertical="center">
                Explore our services
                <Icon
                  size="xs"
                  name="arrowUpRight"
                  onBackground="brand-medium"
                />
              </Row>
            </Button>
          </Row>
          <Row
            horizontal="between"
            gap="xl"
            paddingX="2"
            m={{ direction: "column" }}
            vertical="center"
          >
            <Row fillWidth horizontal="between" wrap gap="32">
              <Column gap="12" textVariant="label-default-m">
                <Row paddingX="2" marginBottom="8">
                  Services
                </Row>
                <Row>
                  <SmartLink href="/#services">Web Development</SmartLink>
                </Row>
                <Row>
                  <SmartLink href="/#services">Design & Branding</SmartLink>
                </Row>
                <Row>
                  <SmartLink href="/#services">Translation Services</SmartLink>
                </Row>
                <Row>
                  <SmartLink href="/#services">Digital Marketing</SmartLink>
                </Row>
              </Column>
              <Column gap="12" textVariant="label-default-m">
                <Row paddingX="2" marginBottom="8">
                  Company
                </Row>
                <Row>
                  <SmartLink href="/portfolio">Portfolio</SmartLink>
                </Row>
                <Row>
                  <SmartLink href="/blog">Blog</SmartLink>
                </Row>
                <Row>
                  <SmartLink href="/about">About Us</SmartLink>
                </Row>
                <Row>
                  <SmartLink href="/#contact">Contact</SmartLink>
                </Row>
              </Column>
              <Column gap="12" textVariant="label-default-m">
                <Row paddingX="2" marginBottom="8">
                  Legal
                </Row>
                <Row>
                  <SmartLink href="/terms-of-use">Terms of Use</SmartLink>
                </Row>
                <Row>
                  <SmartLink href="/privacy-policy">Privacy Policy</SmartLink>
                </Row>
              </Column>
            </Row>
          </Row>
        </Column>
        <Column fillWidth gap="24" horizontal="center">
          <Row data-border="rounded" gap="8">
            {social.map((item) => (
              <Button
                key={item.name}
                href={item.link}
                weight="default"
                prefixIcon={item.icon}
                label={item.name}
                size="s"
                variant="secondary"
              />
            ))}
          </Row>
          <Newsletter fillHeight />
        </Column>
      </Row>
    </Column>
  );
};
