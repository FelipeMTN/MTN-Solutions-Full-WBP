"use client";

import { useState } from "react";
import { Column, Heading, Row, IconButton, Particle, Background, Button } from "@once-ui-system/core";
import { PostsClient } from "@/app/(landing)/components";
import { social } from "@/resources";
import { Newsletter } from "../components/Newsletter";

export function BlogClient({ totalPosts, posts }: { totalPosts: number, posts: any[] }) {
  const [postsToShow, setPostsToShow] = useState(10);
  
  const handleShowMore = () => {
    setPostsToShow(prev => Math.min(prev + 10, totalPosts));
  };

  return (
    <Column fillWidth horizontal="center" paddingX="l">
      <Row fillWidth horizontal="center" paddingX="12">
        <Row maxWidth="m" paddingX="l" paddingY="16" horizontal="between" vertical="center"
          borderTop="neutral-alpha-medium"
          borderLeft="neutral-alpha-medium"
          borderRight="neutral-alpha-medium"
          topRadius="xl"
          >
          <Heading variant="heading-strong-l">
            Blog
          </Heading>
          <Row gap="8">
          {social.map((item) => (
            <IconButton
              key={item.name}
              href={item.link}
              icon={item.icon}
              size="s"
              variant="secondary"
            />
          ))}
          </Row>
        </Row>
      </Row>
      <Column fillWidth horizontal="center">
        <Row maxWidth="xl" horizontal="center" radius="l" overflow="hidden">
          <Particle opacity={70} position="absolute" top="0" left="0" fill interactive speed={4} size="2" density={100} interactionRadius={40} pointerEvents="none"/>
          <Background
            position="absolute"
            top="0"
            left="0"
            gradient={{
              display: true,
              x: 0,
              y: 100,
              colorStart: "accent-solid-strong",
              colorEnd: "static-transparent",
            }}
          />
          <Background
            position="absolute"
            top="0"
            left="0"
            gradient={{
              display: true,
              x: 75,
              y: 100,
              width: 150,
              height: 150,
              colorStart: "brand-background-strong",
              colorEnd: "static-transparent",
            }}
          />
          <PostsClient posts={posts} range={[1,1]} thumbnail direction="row" minHeight={24}/>
        </Row>
        <Row fillWidth horizontal="center" paddingX="12">
          <Column maxWidth="m" padding="l" gap="24"
            horizontal="center"
            borderBottom="neutral-alpha-medium"
            borderLeft="neutral-alpha-medium"
            borderRight="neutral-alpha-medium"
            bottomRadius="xl"
            >
            <PostsClient posts={posts} range={[2, 3]} thumbnail/>
            <Newsletter/>
            <PostsClient posts={posts} range={[4, Math.min(postsToShow, totalPosts)]} thumbnail/>
            {postsToShow < totalPosts && (
              <Row maxWidth="xs">
                <Button 
                  fillWidth 
                  variant="secondary" 
                  data-border="rounded"
                  onClick={handleShowMore}
                >
                  Show more
                </Button>
              </Row>
            )}
          </Column>
        </Row>
      </Column>
    </Column>
  );
}
