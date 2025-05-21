<script>
    /**
     * @param {string} line
     * @returns {boolean}
     */
    const isNotEmptyLine = (line) => line.trim() !== '';
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
    export let listStyle = 'no-padding'; // 'default' or 'no-padding'
    export let id = ''; // Add a default empty string

    </script>

<section {id} class="flex2">
    <div>
      <h2>{heading1}</h2>
      <h3>{symbol1}</h3>
      <p class="content">{content1}</p>
      </div>

    <div>
      <h2>{heading2}</h2>
      <h3>{symbol2}</h3>
      <p class="content">{content2}</p>
      </div>

     <div>
  <h2>{heading3}</h2>
  <h3>{symbol3}</h3>
   <div class="skills-wrapper">
        {#each content3 as section}
            <h2 class="section-title">{section.title}</h2>
            <ul class={`section-list ${listStyle === 'no-padding' ? 'no-padding' : ''}`}>
                {#each section.items as item}
                    <li>{item}</li>
                {/each}
            </ul>
        {/each}
    </div>
</div>

      <div>
      <h2>{heading4}</h2>
      <h3>{symbol4}</h3>
  <div class="about-me-wrapper">
             {#each content4.split('\n').filter(isNotEmptyLine) as line}
                <p class="about-me-content">{line.trim()}</p>
            {/each}
        </div>
      </div>
</section>

<style>
  .flex2 h2 {
  color: var(--coloraccent);

}
.section-title {
margin-top: 0;
}
.section-list {

  padding-left: 2.5rem;
  list-style-type: disc;
}
   .section-list.no-padding {
        padding-left: 0;
        list-style-type: none;
    }

.section-list li {

  margin-bottom: 0.1rem;
}

</style>