import { redirect } from '@sveltejs/kit';
import type { LayoutServerLoad } from './$types';

export const load: LayoutServerLoad = ({ url }) => {
  // The root of my pages is the about page.
  if (typeof url === 'object' && url.pathname === '/') {
    throw redirect(307, '/about');
  }

  return {
    url: url.pathname,
  };
};
