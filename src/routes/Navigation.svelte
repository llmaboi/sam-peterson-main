<script lang="ts">
  import { page } from '$app/stores';
  import { AppRail, AppRailAnchor } from '@skeletonlabs/skeleton';
</script>

<AppRail>
  <!-- class="grid-rows-2 grid-cols-2" -->
  <AppRailAnchor href="/apps" title="Apps" selected={$page.url.pathname === '/apps'}>
    <svelte:fragment slot="lead"><i class="iconoir-collage-frame text-2xl" /></svelte:fragment>
    <span>Apps</span>
  </AppRailAnchor>
  <AppRailAnchor
    href="/experience"
    title="Experience"
    selected={$page.url.pathname === '/experience'}
  >
    <svelte:fragment slot="lead"><i class="iconoir-brain text-2xl" /></svelte:fragment>
    <span>Experience</span>
  </AppRailAnchor>
  <AppRailAnchor href="/passion" title="Passion" selected={$page.url.pathname === '/passion'}>
    <svelte:fragment slot="lead"><i class="iconoir-heart-solid text-2xl" /></svelte:fragment>
    <span>Passion</span>
  </AppRailAnchor>
  <AppRailAnchor href="/contact" title="Contact" selected={$page.url.pathname === '/contact'}>
    <svelte:fragment slot="lead"><i class="iconoir-mail text-2xl" /></svelte:fragment>
    <span>Contact</span>
  </AppRailAnchor>
</AppRail>
