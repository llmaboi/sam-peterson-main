export const load = () => {
  const apps: { link: string; iconClass: string; name: string }[] = [
    {
      link: 'https://github.com/llmaboi/planning-poker-app',
      iconClass: 'iconoir-github',
      name: 'Planning Poker React + Firebase',
    },
    {
      link: 'https://github.com/llmaboi/planning-poker-turborepo',
      iconClass: 'iconoir-github',
      name: 'Planning Poker React + Fastify',
    },
    {
      link: 'https://github.com/llmaboi/planning-poker-turbo-sveltekit-fastify',
      iconClass: 'iconoir-github',
      name: 'Planning Poker Sveltekit + Fastify',
    },
    {
      link: 'https://github.com/llmaboi/planning-poker-bun',
      iconClass: 'iconoir-github',
      name: 'Planning Poker Sveltekit + Bun',
    },
  ];

  return { apps };
};
