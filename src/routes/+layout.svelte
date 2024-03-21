<script lang="ts">
  import AutoWatch from '$lib/components/AutoWatch.svelte';
  import CopyRight from '$lib/components/CopyRight.svelte';
  import { AppBar, AppShell, LightSwitch } from '@skeletonlabs/skeleton';
  import { fly } from 'svelte/transition';
  import '../app.postcss';
  import Navigation from './Navigation.svelte';

  export let data;
</script>

<AutoWatch />

<!-- App Shell -->
<AppShell>
  <svelte:fragment slot="header">
    <!-- App Bar -->
    <AppBar>
      <svelte:fragment slot="lead">
        <h1 class="text-xl font-bold uppercase">
          <a href="/about">Sam Peterson</a>
        </h1>
      </svelte:fragment>
      <svelte:fragment slot="trail">
        <a
          class="btn btn-sm variant-ghost-surface"
          href="https://twitter.com/llmaboi"
          target="_blank"
          rel="noreferrer"
        >
          X
        </a>
        <a
          class="btn btn-sm variant-ghost-surface"
          href="https://linkedin.com/in/sam-n-peterson"
          target="_blank"
          rel="noreferrer"
        >
          Linkedin
        </a>
        <a
          class="btn btn-sm variant-ghost-surface"
          href="https://github.com/llmaboi"
          target="_blank"
          rel="noreferrer"
        >
          GitHub
        </a>
        <LightSwitch />
      </svelte:fragment>
    </AppBar>
  </svelte:fragment>

  <svelte:fragment slot="sidebarLeft">
    <Navigation />
  </svelte:fragment>

  {#key data.url}
    <div in:fly={{ y: -200, duration: 300, delay: 300 }} out:fly={{ y: 200, duration: 300 }}>
      <!-- Page Route Content -->
      <slot />
    </div>
  {/key}

  <svelte:fragment slot="pageFooter">
    <footer class="grid gap-4 grid-cols-1 justify-items-center text-center mb-4">
      <CopyRight />
    </footer>
  </svelte:fragment>
</AppShell>
