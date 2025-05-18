<script>
    export let heading1;
    export let symbol1;
    export let content1;
    export let heading2;
    export let symbol2;
    export let content2;
    export let heading3;
    export let symbol3;
    export let content3;
    export let heading4;
    export let symbol4;
    export let content4;

    </script>

<section id="about" class="flex2">
    <div>
      <h2>{heading1}</h2>
      <p>{symbol1}</p>
      <p>{content1}</p>
      </div>

    <div>
      <h2>{heading2}</h2>
      <p>{symbol2}</p>
      <p>{content2}</p>
      </div>

      <div>
      <h2>{heading3}</h2>
      <p>{symbol3}</p>
      {#each content3.split('\n') as line}
  <p>{line}</p>
{/each}
      </div>

      <div>
      <h2>{heading4}</h2>
      <p>{symbol4}</p>
      {#each content4.split('\n') as line}
  <p>{line}</p>
{/each}
      </div>
</section>