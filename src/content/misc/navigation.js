const megaMenu = [
  {
    id: "services",
    label: "Services",
    suffixIcon: "chevronDown",
    sections: [
      {
        title: "Digital Solutions",
        links: [
          {
            label: "Web Development",
            href: "/services/web-development",
            icon: "code",
            description: "Custom websites and web applications",
          },
          {
            label: "Mobile Apps",
            href: "/services/mobile-development",
            icon: "apps",
            description: "iOS and Android app development",
          },
          {
            label: "UI/UX Design",
            href: "/services/design",
            icon: "style",
            description: "User experience and interface design",
          },
        ],
      },
      {
        title: "Business Growth",
        links: [
          {
            label: "Translation Services",
            href: "/services/translation",
            icon: "globe",
            description: "Professional translation and localization",
          },
          {
            label: "Digital Marketing",
            href: "/services/marketing",
            icon: "trend",
            description: "SEO, social media, and growth strategies",
          },
          {
            label: "Business Consulting",
            href: "/services/consulting",
            icon: "people",
            description: "Strategic planning and optimization",
          },
        ],
      },
    ],
  },
  {
    id: "portfolio",
    label: "Portfolio",
    href: "/portfolio",
  },
  {
    id: "resources",
    label: "Resources",
    suffixIcon: "chevronDown",
    sections: [
      {
        title: "Learn",
        links: [
          {
            label: "Blog",
            href: "/blog",
            icon: "book",
            description: "Business insights and industry expertise",
          },
          {
            label: "About Us",
            href: "/about",
            icon: "people",
            description: "Our story and team",
          },
          {
            label: "Case Studies",
            href: "/case-studies",
            icon: "document",
            description: "Detailed project breakdowns",
          },
        ],
      },
      {
        title: "Support",
        links: [
          {
            label: "Contact",
            href: "/contact",
            icon: "email",
            description: "Get in touch with our team",
          },
        ],
      },
    ],
  },
];

const kbar = [
  {
    id: "dashboard",
    name: "Client Dashboard",
    icon: "home",
    shortcut: [],
    section: "Navigation",
    keywords: "dashboard home client portal",
    href: "/dashboard",
  },
  {
    id: "analytics",
    name: "Project Analytics",
    icon: "trend",
    shortcut: [],
    section: "Navigation",
    keywords: "analytics metrics progress",
    href: "/analytics",
  },
  {
    id: "services",
    name: "Our Services",
    icon: "apps",
    shortcut: [],
    section: "Services",
    keywords: "services development design translation",
    href: "#services",
  },
  {
    id: "portfolio",
    name: "Portfolio",
    icon: "document",
    shortcut: [],
    section: "Company",
    keywords: "portfolio work projects case studies",
    href: "/portfolio",
  },
  {
    id: "contact",
    name: "Contact Us",
    icon: "email",
    shortcut: [],
    section: "Support",
    keywords: "contact email support help",
    href: "/contact",
  },
];

export { megaMenu, kbar };
