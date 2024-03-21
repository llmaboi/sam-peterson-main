<script lang="ts">
  export let data;
</script>

<div class="container h-full mx-auto p-4 text-center">
  <section class="mb-8">
    <h2 class="h2 mb-2">Contact</h2>
    <p>You can find me in many places, feel free to say hi!</p>
  </section>

  <nav class="flex gap-2 justify-evenly">
    {#each data.socials as social}
      {#if social.iconClass !== null}
        <a
          class={`btn btn-icon ${social.iconClass} text-2xl variant-filled-secondary`}
          href={social.link}
          target="_blank"
          rel="noreferrer"
          aria-label={social.name}
        />
      {:else}
        <a
          class="btn btn-icon text-2xl variant-filled-secondary"
          href={social.link}
          target="_blank"
          rel="noreferrer"
          aria-label={social.name}
        >
          <img class="w-8 h-8" src={social.iconLink} alt={social.name} />
        </a>
      {/if}
    {/each}
  </nav>
</div>
