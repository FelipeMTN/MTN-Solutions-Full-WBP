"use client";

import {
  Column,
  Icon,
  Line,
  Logo,
  NavIcon,
  Option,
  Row,
  SmartLink,
  Text,
  ToggleButton,
  UserMenu,
} from "@once-ui-system/core";
import { usePathname } from "next/navigation";
import React, { useState } from "react";

interface HeaderProps {
  mobile?: boolean;
  avatar?: string;
}

const HeaderPreview: React.FC<HeaderProps> = ({ mobile, avatar }) => {
  const pathname = usePathname() ?? "";
  const [isActive, setIsActive] = useState(false);
  
  const handleClick = () => {
    setIsActive(!isActive);
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
        {mobile && (
          <NavIcon
            isActive={isActive} 
            onClick={handleClick} 
            aria-label="Toggle navigation menu"
            aria-expanded={isActive} />
        )}
        <Logo dark icon="/trademarks/icon-dark.svg" wordmark="/trademarks/wordmark-dark.svg" size="s" href="/" />
        <Logo light icon="/trademarks/icon-light.svg" wordmark="/trademarks/wordmark-light.svg" size="s" href="/" />
      </Row>
      <Row fillWidth horizontal="center" paddingX="l">
        <Row maxWidth="xl">
          {!mobile && (
            <Row s={{hide: true}} fillWidth gap="4">
              <ToggleButton selected label="Dashboard" />
              <ToggleButton selected={pathname === "/apps"} label="Apps" />
              <ToggleButton selected={pathname === "/resources"} label="Resources" />
            </Row>
          )}
        </Row>
      </Row>
      <Row position="absolute" right="20" vertical="center" gap="12">
        {!mobile && (
          <SmartLink prefixIcon="book" href="#">
            <Text variant="label-default-s">
              Docs
            </Text>
          </SmartLink>
        )}
        <UserMenu
          avatarProps={{
            empty: !avatar,
            src: avatar,
          }}
          dropdown={
            <Column padding="4" gap="2" minWidth={10}>
              <Option hasPrefix={<Icon onBackground="neutral-weak" size="s" name="person" />} label="Profile" value="profile" />
              <Option hasPrefix={<Icon onBackground="neutral-weak" size="s" name="settings" />} label="Settings" value="settings" />
              <Line marginY="2" />
              <Option hasPrefix={<Icon onBackground="neutral-weak" size="s" name="logout" />} label="Log out" value="logout" />
            </Column>
          }
        />
      </Row>
      {isActive && (
        <Column
          top="56"
          left="0"
          position="absolute"
          padding="8"
          fillWidth
          overflowY="auto"
          zIndex={1}
          style={{ maxHeight: "calc(100vh - var(--static-space-56))" }}
        >
            <Column
              padding="8"
              background="surface"
              border="surface"
              radius="l-4"
              gap="4"
            >
              <ToggleButton fillWidth size="l" horizontal="start" selected={true} label="Dashboard" />
              <ToggleButton fillWidth size="l" horizontal="start" selected={pathname === "/apps"} label="Apps" />
              <ToggleButton fillWidth size="l" horizontal="start" selected={pathname === "/resources"} label="Resources" />
            </Column>
        </Column>
      )}
    </Row>
  );
};

export { HeaderPreview };
