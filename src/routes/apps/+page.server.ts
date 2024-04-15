export const load = () => {
  const apps: { link: string; iconClass: string; name: string }[] = [
    {
      link: 'https://github.com/s-petey/planning-poker-app',
      iconClass: 'iconoir-github',
      name: 'Planning Poker React + Firebase',
    },
    {
      link: 'https://github.com/s-petey/planning-poker-turborepo',
      iconClass: 'iconoir-github',
      name: 'Planning Poker React + Fastify',
    },
    {
      link: 'https://github.com/s-petey/planning-poker-turbo-sveltekit-fastify',
      iconClass: 'iconoir-github',
      name: 'Planning Poker Sveltekit + Fastify',
    },
    {
      link: 'https://github.com/s-petey/planning-poker-bun',
      iconClass: 'iconoir-github',
      name: 'Planning Poker Sveltekit + Bun',
    },
  ];

  return { apps };
};
