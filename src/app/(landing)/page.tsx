import {
  Hero,
  Services,
  Portfolio,
  ContactCTA,
  Faq,
  Customization,
  Testimonial,
  Testimonials,
  Effects,
  Blog,
} from "@/app/(landing)/components";
import { faq, featuredTestimonials, testimonials } from "@/content";
import { Column, Row, Grid, Meta, Schema } from "@once-ui-system/core";
import { baseURL, landing } from "@/resources";

export async function generateMetadata() {
  return Meta.generate({
    title: landing.home.title,
    description: landing.home.description,
    baseURL: baseURL,
    path: landing.home.path,
    canonical: landing.home.canonical,
    image: landing.home.image,
    robots: landing.home.robots,
    alternates: landing.home.alternates,
  });
}

export default function Home() {
  return (
    <Column fillWidth horizontal="center" gap="xl">
      <Schema
        as="webPage"
        baseURL={baseURL}
        title={landing.home.title}
        description={landing.home.description}
        path={landing.home.path}
      />
      <Effects />
      <Hero maxWidth="xl" paddingX="l" />
      <Services maxWidth="l" paddingX="l" />
      <Portfolio maxWidth="xl" paddingX="l" />
      <Row fillWidth horizontal="center" paddingX="xl">
        <Grid maxWidth="m" gap="l" columns={2} s={{ columns: 1 }}>
          {featuredTestimonials.map((testimonial, index) => (
            <Testimonial key={index} testimonial={testimonial} />
          ))}
        </Grid>
      </Row>
      <Customization maxWidth="xl" paddingX="l" paddingY="xl" marginTop="xl" />
      <Blog maxWidth="l" paddingX="l" marginY="xl" />
      <Testimonials paddingY="xl" testimonials={testimonials} />
      <Faq maxWidth="l" paddingX="l" marginY="xl" items={faq} />
      <ContactCTA />
    </Column>
  );
}
