"use client";

import { kbar } from "@/content";
import {
  Avatar,
  Background,
  Button,
  Column,
  Icon,
  Kbar,
  Line,
  Logo,
  NavIcon,
  Option,
  Row,
  SmartLink,
  Text,
  UserMenu,
} from "@once-ui-system/core";
import React, { useState } from "react";
import { Sidebar } from "./Sidebar";

interface HeaderProps {
  avatar?: string;
}

const Header: React.FC<HeaderProps> = ({ avatar }) => {
  const [isActive, setIsActive] = useState(false);
  const [isMac, setIsMac] = useState(false);

  React.useEffect(() => {
    // Only run on the client side after hydration
    setIsMac(/Mac/i.test(navigator.platform));
  }, []);
  
  const handleClick = () => {
    setIsActive(!isActive);
  };

  const closeOverlay = () => {
    setTimeout(() => {
      const event = new MouseEvent('mousedown', {
        bubbles: true,
        cancelable: true,
        view: window
      });
      document.dispatchEvent(event);
    }, 0);
  };

  return (
    <Row
      as="header"
      fillWidth
      minHeight="56"
      position="sticky"
      top="0"
      background="page"
      vertical="center"
      zIndex={1}
    >
      <Row gap="4" vertical="center" minWidth={18} paddingX="24">
        <NavIcon
          hide
          m={{hide: false}}
          isActive={isActive} 
          onClick={handleClick} 
          aria-label="Toggle navigation menu"
          aria-expanded={isActive} />
        <Logo dark icon="/trademarks/icon-dark.svg" wordmark="/trademarks/wordmark-dark.svg" size="s" href="/dashboard" />
        <Logo light icon="/trademarks/icon-light.svg" wordmark="/trademarks/wordmark-light.svg" size="s" href="/dashboard" />
      </Row>
      <Row fillWidth horizontal="center" paddingX="l">
        <Row maxWidth="xl" horizontal="center">
          <Kbar s={{hide: true}} data-border="rounded" radius="full" background="neutral-alpha-weak"
            items={kbar}
          >
            <Button size="s" variant="tertiary" weight="default">
              <Row vertical="center" gap="16" onBackground="neutral-medium" style={{ marginLeft: "-0.5rem" }} paddingRight="8">
                <Row
                  background="neutral-alpha-medium"
                  paddingX="8"
                  paddingY="4"
                  radius="full"
                  textVariant="body-default-xs"
                  onBackground="neutral-medium"
                >
                  {isMac ? "Cmd" : "Ctrl"} + k
                </Row>
                Search in Convert
              </Row>
            </Button>
          </Kbar>
        </Row>
      </Row>
      <Row position="absolute" right="20" vertical="center" gap="12">
        <SmartLink prefixIcon="book" href="https://docs.once.com/magic-convert/quick-start">
          <Text variant="label-default-s">
            Docs
          </Text>
        </SmartLink>
        <UserMenu
          avatarProps={{
            empty: !avatar,
            src: avatar,
          }}
          dropdown={
            <Column paddingTop="24" minWidth={14}>
              <Background
                position="absolute"
                left="0"
                right="0"
                top="0"
                bottom="0"
                gradient={{
                  display: true,
                  x: 0,
                  y: -50,
                  colorStart: "brand-background-strong",
                  colorEnd: "static-transparent",
                }}/>
                <Background
                  position="absolute"
                  left="0"
                  right="0"
                  top="0"
                  bottom="0"
                  gradient={{
                    display: true,
                    x: 100,
                    y: -50,
                    colorStart: "accent-background-strong",
                    colorEnd: "static-transparent",
                  }}/>
              <Column fillWidth horizontal="center" gap="2">
                <Avatar size={4} src={avatar} marginBottom="16"/>
                <Text variant="heading-strong-s">
                  Lorant One
                </Text>
                <Text marginBottom="12" variant="label-default-s" onBackground="neutral-weak">
                  Once UI
                </Text>
              </Column>
              <Column fillWidth padding="4" gap="2">
                <Option hasPrefix={<Icon onBackground="neutral-weak" size="s" name="settings" />} label="Settings" value="settings" href="/settings" onClick={closeOverlay} />
              </Column>
              <Line />
              <Column fillWidth padding="4" gap="2">
                <Option hasPrefix={<Icon onBackground="neutral-weak" size="s" name="logout" />} label="Log out" value="logout" href="/auth?login" onClick={closeOverlay} />
              </Column>
            </Column>
          }
        />
      </Row>
      {isActive && (
        <Column
          top="48"
          left="0"
          position="absolute"
          padding="8"
          fillWidth
          overflowY="auto"
          zIndex={1}
          style={{ maxHeight: "calc(100vh - var(--static-space-56))" }}
        >
          <Column
            background="surface"
            border="neutral-alpha-medium"
            radius="l"
            gap="4"
          >
            <Sidebar />
          </Column>
        </Column>
      )}
    </Row>
  );
};

export { Header };
