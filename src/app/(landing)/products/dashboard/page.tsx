import { Heading } from "@once-ui-system/core";

import { Schema, Meta } from "@once-ui-system/core";
import { baseURL, landing } from "@/resources";

export async function generateMetadata() {
  return Meta.generate({
    title: landing.dashboard.title,
    description: landing.dashboard.description,
    baseURL: baseURL,
    path: landing.dashboard.path,
    canonical: landing.dashboard.canonical,
    image: landing.dashboard.image,
    robots: landing.dashboard.robots,
    alternates: landing.dashboard.alternates,
  });
}

export default function Dashboard() {
  return (
    <>
      <Schema
        as="webPage"
        baseURL={baseURL}
        title={landing.dashboard.title}
        description={landing.dashboard.description}
        path={landing.dashboard.path}
      />
      <Heading variant="display-strong-s">
        Product page
      </Heading>
    </>
  );
}