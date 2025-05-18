<script>
    let hamOpen = true;
    function toggleMenu () {
        hamOpen = !hamOpen
    }
    
</script>

<header>
      <a href="https://www.oliviermarcotte.com/" class="name"
        >OLIVIER MARCOTTE</a>
        <img src={hamOpen ? "img/ham-open.svg" : "img/ham-open.svg"} class="ham"
        on:click={toggleMenu} />
      <nav class:show ={hamOpen}>
        <a href="#projects">/PROJECTS</a>
        <a href="#about">/ABOUT</a>
        <a href="#contact">/CONTACT</a>
      </nav>
</header>

<!-- Header -->
 <style>
header {
  width: 90%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  padding: 5rem;

}

nav {
    display: flex;
    align-items: center;
    gap: var(--spacing5)
}

.ham {
    display: none;
    width: 20px;

}

@media (max-width: 800px) {
    .ham {
        display: block;
    }
    nav {
        display: none;
    }
    nav.show {
        display: flex;
        flex-direction: column;
        position: absolute;
        top: var(--spacing6);
        right: 0px;
    }
}
</style>