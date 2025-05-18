<script>
    export let heading;
    export let buttontext;
    export let url;
    export let icon;
    export let url2;
    export let icon2;

    </script>
<section id="contact" class="flex3">
    <div>
      <h1>{heading}</h1>
      <a href="https://www.linkedin.com/in/oliviermarcotte/" class="button"
        >{buttontext}</a>

         <div class="social-icons">
        <a href="{url}" class="{icon}"></a>
        <a href="{url2}" class="{icon2}"></a>
         </div>
         </div>
        </section>


        
        <style>
          .social-icons {
  scale: 1.3;
  margin-top: 1rem;
  transition: color 0.3s ease;
  cursor: pointer;
}
.social-icons a:hover {
  color: var(--coloraccent) !important;
  transform: scale(1.3);
  transition: 0.3s ease-in-out;
}
        </style>
        
