<script>
    export let project;
    export let link;
    export let href; // New prop for the URL
    export let id = ''; // Add a default empty string

      // Simple function to detect if link is a video (check extension)
  const isVideo = () => {
    return link.endsWith('.mp4') || link.endsWith('.webm') || link.endsWith('.ogg');
  };
</script>

<section {id}>
  <div>
      <a href={href}>
      {#if isVideo()}
        <video src={link} autoplay muted loop></video>
         {:else}
        <img src={link} alt={project} />
        {/if}
        <div class="overlay">{project}</div>
        </a>
        </div>
        
</section>