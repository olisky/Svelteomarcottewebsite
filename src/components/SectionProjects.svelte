<script>
   import Header from "./Header.svelte";
   import Divider from "./Divider.svelte";
   import Section4RowDescription from "./Section4RowDescription.svelte";
   
   // Use direct default assignments instead of nullish coalescing
   export let heading1 = 'Project';
   export let symbol1 = '-';
   export let content1 = 'TBD';
   export let heading2 = 'Year';
   export let symbol2 = '-';
   export let content2 = 'TBD';
   export let heading3 = 'Category';
   export let symbol3 = '-';
   export let content3 = [{ 
       items: ['Skill 1', 'Skill 2']
   }];
   export let heading4 = 'Synopsis';
   export let symbol4 = '-';
   export let content4 = 'Project description goes here';
   
   // Optional: Divider customization props
   export let dividerWidth = '92%';
   export let dividerColor = 'var(--coloraccent)';
   
   // Video:
   export let link;
   export let project;

   // Video play state
   let videoElement;
   let isPlaying = false;

   // Simple function to detect if link is a video (check extension)
   const isVideo = () => {
     return link.endsWith('.mp4') || link.endsWith('.webm') || link.endsWith('.ogg');
   };

   function togglePlay() {
     if (videoElement.paused) {
       videoElement.play();
       isPlaying = true;
     } else {
       videoElement.pause();
       isPlaying = false;
     }
   }
</script>

<Header />
<Section4RowDescription 
    {heading1}
    {symbol1}
    {content1}
    {heading2}
    {symbol2}
    {content2}
    {heading3}
    {symbol3}
    {content3}
    {heading4}
    {symbol4}
    {content4}
/>
<Divider 
    width={dividerWidth}
    color={dividerColor}
/>
<section>
  <div class="media-container">
    <div class="media-wrapper">
      {#if isVideo()}
        <video 
          bind:this={videoElement}
          src={link}  
          controls 
          class="project-video"
          on:play={() => isPlaying = true}
          on:pause={() => isPlaying = false}
        ></video>
        
        {#if !isPlaying}
          <button class="play-btn" on:click={togglePlay}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z"/>
            </svg>
          </button>
        {/if}
      {:else}
        <img src={link} alt={project} class="project-image" />
      {/if}
    </div>
  </div>
</section>

<style>
.media-container {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 0;
  margin: 0;
}

.media-wrapper {
  width: 90%;
  max-width: 1920px;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
}

.project-video {
  width: 100%;
  height: auto; /* Allow height to adjust automatically */
  max-height: 100vh; /* Limit maximum height */
  aspect-ratio: 16 / 9;
  object-fit: contain; /* Ensures entire video is visible */
}

.play-btn {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: rgba(255, 255, 255, 0.274); /* Transparent white background */
  border-radius: 50%;
  width: 100px;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: all 0.3s ease;
}

.play-btn:hover {
  background: rgba(255, 255, 255, 0); /* Slightly more opaque on hover */
}

.play-btn svg {
  fill: rgb(0, 0, 0); /* Keep play icon white */
  width: 100px;
  height: 100px;
}
</style>