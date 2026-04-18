<header class="header">
  <a href="/" class="brand">Pablo Longueira Failde</a>

  <nav class="nav">
    <a href="/work">Work</a>
    <a href="/about">About</a>
  </nav>
</header>

<style>
  .header {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;

    display: flex;
    justify-content: space-between;
    align-items: center;

    max-width: 1100px;
    margin: 0 auto;

    padding: 1.5rem 2rem;

    background: rgba(11, 11, 11, 0.7);
    backdrop-filter: blur(10px);

    z-index: 1000;
  }

  .brand {
    font-weight: 500;
    letter-spacing: -0.02em;
    text-decoration: none;
    color: white;
  }

  .nav {
    display: flex;
    gap: 2rem;
  }

  .nav a {
    text-decoration: none;
    color: white;
    opacity: 0.6;
    transition: opacity 0.2s ease;
  }

  .nav a:hover {
    opacity: 1;
  }
</style>