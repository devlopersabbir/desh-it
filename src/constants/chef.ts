export const socialProvider = ["facebook", "x", "linkedin", "youtube"] as const;
export type SocialProvider = (typeof socialProvider)[number];
export type Chef = {
  image: string;
  name: string;
  socials: {
    provider: SocialProvider;
    url: string;
  }[];
};
export const chef: Chef[] = [
  {
    image: "/chef_1.jpg",
    name: "Margaret Loe Chef",
    socials: [
      {
        provider: "facebook",
        url: "facebook.com/margaretchef",
      },
      {
        provider: "x",
        url: "x.com/margaretchef",
      },
      {
        provider: "linkedin",
        url: "https://www.linkedin.com/in/margaretloechef/",
      },
      {
        provider: "youtube",
        url: "youtube.com/@margaretchefs",
      },
    ],
  },
  {
    image: "/chef_2.jpg",
    name: "John Smith Chef",
    socials: [
      {
        provider: "facebook",
        url: "facebook.com/johnsmithchef",
      },
      {
        provider: "x",
        url: "x.com/johnsmithchef",
      },
      {
        provider: "linkedin",
        url: "https://www.linkedin.com/in/johnsmithchef/",
      },
      {
        provider: "youtube",
        url: "youtube.com/@johnsmithcooks",
      },
    ],
  },
  {
    image: "/chef_3.jpg",
    name: "Emily Wang Chef",
    socials: [
      {
        provider: "facebook",
        url: "facebook.com/emilywangchef",
      },
      {
        provider: "x",
        url: "x.com/emilywangchef",
      },
      {
        provider: "linkedin",
        url: "https://www.linkedin.com/in/emilywangchef/",
      },
      {
        provider: "youtube",
        url: "youtube.com/@emilywangcooks",
      },
    ],
  },
  {
    image: "/chef_1.jpg",
    name: "Margaret Loe Chef",
    socials: [
      {
        provider: "facebook",
        url: "facebook.com/margaretchef",
      },
      {
        provider: "x",
        url: "x.com/margaretchef",
      },
      {
        provider: "linkedin",
        url: "https://www.linkedin.com/in/margaretloechef/",
      },
      {
        provider: "youtube",
        url: "youtube.com/@margaretchefs",
      },
    ],
  },
  {
    image: "/chef_2.jpg",
    name: "John Smith Chef",
    socials: [
      {
        provider: "facebook",
        url: "facebook.com/johnsmithchef",
      },
      {
        provider: "x",
        url: "x.com/johnsmithchef",
      },
      {
        provider: "linkedin",
        url: "https://www.linkedin.com/in/johnsmithchef/",
      },
      {
        provider: "youtube",
        url: "youtube.com/@johnsmithcooks",
      },
    ],
  },
  {
    image: "/chef_3.jpg",
    name: "Emily Wang Chef",
    socials: [
      {
        provider: "facebook",
        url: "facebook.com/emilywangchef",
      },
      {
        provider: "x",
        url: "x.com/emilywangchef",
      },
      {
        provider: "linkedin",
        url: "https://www.linkedin.com/in/emilywangchef/",
      },
      {
        provider: "youtube",
        url: "youtube.com/@emilywangcooks",
      },
    ],
  },
];
