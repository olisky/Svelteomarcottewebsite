<script>
  export let project;
  export let link;
  export let project2;
  export let link2;
  export let href;
  export let href2;

  // @ts-ignore
const isVideo = (url) => {
  return url.endsWith('.mp4') || url.endsWith('.webm') || url.endsWith('.ogg');
};
</script>

<section class="flex two-col">
  <div>
    <a href={href}>
      {#if isVideo(link)}
      <video src="{link}" autoplay muted loop></video>
      {:else}
      <img src={link} alt={project} />
      {/if}
      <div class="overlay">{project}</div>
    </a>
  </div>

  <div>
    <a href={href2}>
      {#if isVideo(link2)}
      <video src="{link2}" autoplay muted loop></video>
       {:else}
       <img src={link2} alt={project2} />
      {/if}
      <div class="overlay">{project2}</div>
    </a>
  </div>
</section>