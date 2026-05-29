/** @type {import('next').NextConfig} */
const nextConfig = {
  trailingSlash: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
  async redirects() {
    return [
      {
        source: "/about-us",
        destination: "/about-us/",
        permanent: true,
      },
      {
        source: "/our-tutors",
        destination: "/our-tutors/",
        permanent: true,
      },
      {
        source: "/schedule",
        destination: "/schedule/",
        permanent: true,
      },
      {
        source: "/secondary-math-tuition",
        destination: "/secondary-math-tuition/",
        permanent: true,
      },
      {
        source: "/secondary-e-math-tuition-o-level",
        destination: "/secondary-e-math-tuition-o-level/",
        permanent: true,
      },
      {
        source: "/upper-secondary-a-math",
        destination: "/upper-secondary-a-math/",
        permanent: true,
      },
      {
        source: "/secondary-ip-math-tuition",
        destination: "/secondary-ip-math-tuition/",
        permanent: true,
      },
      {
        source: "/junior-college-h2-math-tuition",
        destination: "/junior-college-h2-math-tuition/",
        permanent: true,
      },
      {
        source: "/testimonials",
        destination: "/testimonials/",
        permanent: true,
      },
      {
        source: "/contact-us",
        destination: "/contact-us/",
        permanent: true,
      },
      {
        source: "/free-math-trial",
        destination: "/free-math-trial/",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
