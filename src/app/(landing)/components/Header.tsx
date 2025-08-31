"use client";

import { megaMenu } from "@/content";
import {
  Button,
  Column,
  Fade,
  Logo,
  MegaMenu,
  MobileMegaMenu,
  NavIcon,
  Row,
} from "@once-ui-system/core";
import React, { useState } from "react";

export const Header: React.FC = () => {
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    setIsActive(!isActive);
  };

  return (
    <>
      <Fade
        height={4}
        fillWidth
        to="bottom"
        position="fixed"
        top="0"
        base="transparent"
        zIndex={2}
        pointerEvents="none"
      />
      <Row
        fillWidth
        horizontal="center"
        paddingTop="8"
        paddingX="m"
        position="sticky"
        top="0"
        zIndex={2}
      >
        <Row
          as="header"
          border="neutral-alpha-medium"
          maxWidth="l"
          radius="xl"
          paddingLeft="20"
          paddingRight="12"
          paddingY="12"
          vertical="center"
          background="page"
        >
          <Row gap="4" vertical="center">
            <NavIcon
              isActive={isActive}
              onClick={handleClick}
              aria-label="Toggle navigation menu"
              aria-expanded={isActive}
              hide
              m={{ hide: false }}
            />
            <Logo
              dark
              icon="/trademarks/mtn-icon-dark.png"
              wordmark="/trademarks/mtn-wordmark-dark.png"
              size="s"
              href="/"
              brand={{ copy: true, url: "/brand" }}
            />
            <Logo
              light
              icon="/trademarks/mtn-icon-light.png"
              wordmark="/trademarks/mtn-wordmark-light.png"
              size="s"
              href="/"
              brand={{ copy: true, url: "/brand" }}
            />
          </Row>

          <Row fillWidth vertical="center" horizontal="end">
            <Row
              m={{ hide: true }}
              textVariant="label-default-s"
              fillWidth
              gap="16"
              paddingX="l"
              vertical="center"
            >
              <MegaMenu menuGroups={megaMenu} />
            </Row>
            <Row fitWidth vertical="center" gap="8">
              <Button
                size="s"
                variant="secondary"
                label="Portfolio"
                href="/portfolio"
              />
              <Button
                size="s"
                variant="primary"
                label="Get Quote"
                href="#contact"
              />
            </Row>
          </Row>
          {isActive && (
            <Column
              top="56"
              left="0"
              position="absolute"
              padding="8"
              fillWidth
              overflowY="auto"
              style={{ maxHeight: "calc(100vh - var(--static-space-56))" }}
            >
              <MobileMegaMenu
                padding="8"
                background="surface"
                border="surface"
                radius="l-4"
                menuGroups={megaMenu}
              />
            </Column>
          )}
        </Row>
      </Row>
    </>
  );
};
