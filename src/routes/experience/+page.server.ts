export const load = () => {
  /**
   * Grouped and organized by favorites.
   */
  const icons: { name: string; url: string; src: string }[] = [
    // Major technologies
    {
      name: 'Typescript',
      src: 'icons/typescript.svg',
      url: 'https://www.typescriptlang.org',
    },
    {
      name: 'Svelte',
      src: 'icons/svelte.svg',
      url: 'https://sveltejs.org',
    },
    {
      name: 'HTML',
      src: 'icons/html-5.svg',
      url: 'https://developer.mozilla.org/en-US/docs/Web/HTML',
    },
    {
      name: 'React',
      src: 'icons/react.svg',
      url: 'https://react.dev',
    },
    {
      name: 'Javascript',
      src: 'icons/javascript.svg',
      url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
    },
    {
      name: 'Css',
      src: 'icons/css-3.svg',
      url: 'https://developer.mozilla.org/en-US/docs/Web/CSS',
    },
    {
      name: 'Angular',
      src: 'icons/angular.svg',
      url: 'https://angular.io',
    },
    {
      name: 'Java',
      src: 'icons/java.svg',
      url: 'https://www.java.com',
    },
    {
      name: 'Maven',
      src: 'icons/maven.svg',
      url: 'https://maven.apache.org',
    },
    {
      name: 'Spring',
      src: 'icons/spring.svg',
      url: 'https://spring.io',
    },

    // DB
    {
      name: 'MySQL',
      src: 'icons/mysql.svg',
      url: 'https://dev.mysql.com',
    },
    {
      name: 'Redis',
      src: 'icons/redis.svg',
      url: 'https://redis.io',
    },

    // Web stuff
    {
      name: 'Tailwind',
      src: 'icons/tailwind.svg',
      url: 'https://tailwindcss.com',
    },
    {
      name: 'Material UI',
      src: 'icons/material-ui.svg',
      url: 'https://mui.com/',
    },
    {
      name: 'SASS',
      src: 'icons/sass.svg',
      url: 'https://sass-lang.com',
    },
    {
      name: 'Bootstrap',
      src: 'icons/bootstrap.svg',
      url: 'https://getbootstrap.com',
    },

    // Assistant technologies
    {
      name: 'Atlassian',
      src: 'icons/atlassian.svg',
      url: 'https://www.atlassian.com',
    },
    {
      name: 'GitHub',
      src: 'icons/github.svg',
      url: 'https://github.com',
    },

    // Misc
    {
      name: 'Linux',
      src: 'icons/linux.svg',
      url: 'https://www.linux.org',
    },
    {
      name: 'Mac',
      src: 'icons/mac.svg',
      url: 'https://www.apple.com/mac',
    },
    {
      name: 'Windows',
      src: 'icons/windows.svg',
      url: 'https://www.microsoft.com/en-us/windows',
    },
    {
      name: 'Progress',
      src: 'icons/progress.svg',
      url: 'https://www.progress.com',
    },
  ];

  const now = new Date().getFullYear();
  const startingYear = new Date('2018-11-01').getFullYear();
  const yearsExperience = now - startingYear;

  return { icons, yearsExperience };
};
