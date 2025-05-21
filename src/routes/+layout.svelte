<script>
    import "../app.css";
    import { page } from '$app/stores';
  import { fade } from 'svelte/transition';
</script>

{#key $page.url.pathname}
  <div 
    in:fade="{{ duration: 200, delay: 200 }}" 
  >
    <slot />
  </div>
{/key}