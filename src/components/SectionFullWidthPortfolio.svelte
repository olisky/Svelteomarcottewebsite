<script>
    export let project;
    export let link;

      // Simple function to detect if link is a video (check extension)
  const isVideo = () => {
    return link.endsWith('.mp4') || link.endsWith('.webm') || link.endsWith('.ogg');
  };
</script>

<section id="projects" class="flex">
  <div>
      <a href="{project}">
      {#if isVideo()}
        <video src={link} autoplay muted loop></video>
         {:else}
        <img src={link} alt={project} />
        {/if}
        <div class="overlay">{project}</div>
        </a>
        </div>
        
</section>