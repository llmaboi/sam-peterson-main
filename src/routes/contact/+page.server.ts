export const load = () => {
  const socials: (
    | { iconClass: string; name: string; link: string; iconLink: null }
    | { iconClass: null; name: string; link: string; iconLink: string }
  )[] = [
    {
      name: 'Linkedin',
      link: 'http://www.linkedin.com/in/sam-n-peterson',
      iconClass: 'iconoir-linkedin',
      iconLink: null,
    },
    {
      name: 'Github',
      link: 'http://www.github.com/s-petey',
      iconClass: 'iconoir-github',
      iconLink: null,
    },
    {
      name: 'Bluesky',
      link: 'https://bsky.app/profile/s-pete.bsky.social',
      iconClass: null,
      iconLink: 'icons/bsky-favicon.png',
    },
    {
      name: 'X',
      link: 'http://www.twitter.com/s-petey',
      iconClass: 'iconoir-x',
      iconLink: null,
    },
  ];

  // TODO: add an email or form

  return {
    socials,
  };
};
