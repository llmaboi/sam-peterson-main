<script lang="ts">
  export let data;
</script>

<div class="container h-full mx-auto p-4">
  <div class="text-center flex flex-col gap-8">
    <h2 class="h2">Experience</h2>
    <p class="mx-auto">
      Professional Web developer for {data.yearsExperience} years. Continually learning and honing my
      skills through books, conferences, talks, meetups, videos, courses, and many more.
    </p>

    <div class="card p-4">
      <h4 class="h4 mb-4">Some technologies I've worked with:</h4>
      <div class="grid grid-cols-6 gap-4 m-4">
        {#each data.icons as icon}
          <a href={icon.url} target="_blank" rel="noreferrer">
            <img
              class="h-full w-full grayscale transition-all duration-300 ease-in-out hover:grayscale-0"
              src={icon.src}
              alt={icon.name}
            />
          </a>
        {/each}
      </div>
    </div>
  </div>
</div>
