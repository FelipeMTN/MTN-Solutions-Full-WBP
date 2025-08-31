import { Column, Row } from "@once-ui-system/core";
import { Header, Sidebar } from './components';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Column fill horizontal="center" flex={1}>
      <Header avatar="/images/lorant.jpg"/>
      <Row fill paddingX="8">
        <Sidebar s={{hide: true}} maxWidth={18} fitHeight position="sticky" top="56" />
        <Row
          fill
          horizontal="center"
          topRadius="l"
          overflow="hidden">
          <Row
            style={{height: "calc(100vh - var(--static-space-56))"}}
            overflowY="auto"
            horizontal="center"
            borderTop="neutral-alpha-medium"
            borderLeft="neutral-alpha-medium"
            borderRight="neutral-alpha-medium"
            topRadius="l"
            paddingX="l"
            fillWidth
            background="surface">
            <Column maxWidth="xl" gap="m" paddingY="32" fitHeight>
              {children}
            </Column>
          </Row>
        </Row>
      </Row>
    </Column>
  );
}