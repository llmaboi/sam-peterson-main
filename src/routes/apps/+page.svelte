<script lang="ts">
  export let data;
</script>

<div class="p-4 flex flex-col gap-4">
  <h2 class="h2 text-center">What I've been (continually) working on</h2>

  <!-- TODO: Add images or short videos -->
  <div class="flex flex-col gap-4 text-center">
    <div class="grid grid-cols-3 gap-4">
      {#each data.apps as app}
        <span
          class="chip text-lg text-secondary-500 hover:bg-secondary-800 hover:text-secondary-100"
        >
          <i class={`${app.iconClass} text-xl`} />
          <a href={app.link} target="_blank" rel="noreferrer">
            {app.name}
          </a>
        </span>
      {/each}
    </div>
  </div>
</div>
