 <script>
  import { onMount } from 'svelte';
  let hamOpen = false;
  let isTransparent = false;
  let isHidden = false;

  function toggleMenu() {
    hamOpen = !hamOpen;
  }

  function closeMenu() {
    hamOpen = false;
  }

  let lastScrollY = 0;

  onMount(() => {
    function handleScroll() {
      if (window.innerWidth <= 800) return;

      const currentScrollY = window.scrollY;

      isTransparent = currentScrollY > 20;
      isHidden = currentScrollY > lastScrollY;

      lastScrollY = currentScrollY;
    }

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  });
</script>



<header class="{isTransparent ? 'transparent-header' : ''} {isHidden ? 'hide-header' : 'show-header'}">
  <a href="https://www.oliviermarcotte.com/" class="name">OLIVIER MARCOTTE</a>
  <img src="/img/ham-open.svg" alt="Menu" class="ham" on:click={toggleMenu} />

  <nav class:show={hamOpen}>
    <a href="#projects" on:click={closeMenu}>WORK</a>
    <a href="#about" on:click={closeMenu}>ABOUT</a>
    <a href="#contact" on:click={closeMenu}>CONTACT</a>
  </nav>
</header>

<!-- Header -->
 <style>
header {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  padding: 2rem;

}

nav {
    display: flex;
    align-items: center;
    gap: var(--spacing3)
}

.ham {
    display: none;
    width: 30px;
    height: 30px;
    cursor: pointer;
    z-index: 0;
     opacity: 1;
     filter: none;
  background: none;
}

nav a:hover,
.name:hover {
  color: var(--coloraccent);
  cursor: pointer;
}

a.name {
  font: var(--h2);
  letter-spacing: 0.2rem;
}

nav a {
font: var(--h3);
  letter-spacing: 0.2rem;
}

@media (max-width: 800px) {
    header {
    padding: 1rem; /* smaller padding for mobile */
    align-items: center;
    position: relative
  }
      .ham {
    display: block;
    z-index: 20;
  }
    nav {
        display: none;
    position: fixed;
    top: 0;
    left: 0;
    height: 100vh;
    width: 100vw;
    background: rgba(0, 0, 0, 0.7); /* semi-transparent black */
    backdrop-filter: blur(8px);     /* apply the blur */
    -webkit-backdrop-filter: blur(8px); /* for Safari */
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 2rem;
    z-index: 15;
    }
    nav.show {
        display: flex;
    }
    nav a {
    font: var(--h2);
    color: white;
    text-decoration: none;
  }
}
@media (min-width: 801px) {
  header {
    position: sticky;
    top: 0;
    z-index: 1000;
    transition: transform 0.3s ease, background-color 0.3s ease, backdrop-filter 0.3s ease;
    background-color: var(--colorprimary); /* fallback color */
    backdrop-filter: none;
  }

  .transparent-header {
    background-color: rgba(0, 0, 0, 0.3); /* semi-transparent */
    backdrop-filter: blur(5px);
  }

  .hide-header {
    transform: translateY(-100%);
  }

  .show-header {
    transform: translateY(0);
  }
}


</style>

