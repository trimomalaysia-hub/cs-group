/* ============================================================================
   SITE CONFIG  —  edit this ONE file to change site-wide details.
   No coding needed: change the text between the quotes "like this".
   ========================================================================== */

export const site = {
  /* Company identity */
  name: "Nexxatech",
  tagline: "Technology that moves your business forward",
  description:
    "Nexxatech builds reliable software, cloud, and AI solutions that help companies work smarter and grow faster.",

  /* The public address of the website (used for SEO + social previews).
     Update this once you have your real domain. */
  url: "https://www.nexxatech.com",

  /* Contact details (shown in footer + contact page) */
  email: "hello@nexxatech.com",
  phone: "+60 12-345 6789",
  address: "Kuala Lumpur, Malaysia",

  /* Top navigation links. Add/remove items here and the menu updates. */
  nav: [
    { label: "Home", href: "/" },
    { label: "Services", href: "/services" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ],

  /* Social links. Delete a line to hide that icon. */
  social: {
    linkedin: "https://www.linkedin.com/company/nexxatech",
    twitter: "https://twitter.com/nexxatech",
    github: "https://github.com/nexxatech",
  },

  /* Default image shown when the site is shared on social media.
     Put a 1200x630 image in /public and reference it here, e.g. "/og-image.png" */
  ogImage: "/og-image.png",
} as const;

export type Site = typeof site;
