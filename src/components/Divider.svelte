<!-- Divider.svelte -->
<script>
    export let width = '95%';  // Default width
    export let color = 'var(--coloraccent)';  // Default color
    export let height = '1px';  // Default height
    export let margin = '2rem 0';  // Default margin
</script>

<div class="divider-container">
    <div 
        class="divider" 
        style="
            width: {width};
            height: {height};
            background-color: {color};
            margin: {margin};
        "
    ></div>
</div>

<style>
    .divider-container {
        width: 100%;
        display: flex;
        justify-content: center;
    }
</style>