import { Heading } from "@once-ui-system/core";
import { Schema, Meta } from "@once-ui-system/core";
import { baseURL, landing } from "@/resources";

export async function generateMetadata() {
  return Meta.generate({
    title: landing.landing.title,
    description: landing.landing.description,
    baseURL: baseURL,
    path: landing.landing.path,
    canonical: landing.landing.canonical,
    image: landing.landing.image,
    robots: landing.landing.robots,
    alternates: landing.landing.alternates,
  });
}

export default function Landing() {
  return (
    <>
      <Schema
        as="webPage"
        baseURL={baseURL}
        title={landing.landing.title}
        description={landing.landing.description}
        path={landing.landing.path}
      />
      <Heading variant="display-strong-s">
        Product page
      </Heading>
    </>
  );
}