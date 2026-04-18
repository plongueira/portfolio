<script>
  import Header from "$lib/components/Header.svelte";
</script>

<div class="page">
  <Header />

  <main class="content">
    <h1>About</h1>

    <div class="text">
      <p>
        I’m a backend developer focused on building scalable systems, APIs and reliable infrastructure.
      </p>

      <p>
        I enjoy designing systems that are simple, maintainable and performant under real-world load.
      </p>

      <p>
        My focus is on backend architecture, distributed systems and production-grade software.
      </p>
    </div>
  </main>
</div>

<style>
  .page {
    max-width: 900px;
    margin: 0 auto;
    padding: 0 2rem;
  }

  .content {
    padding-top: 6rem;
  }

  h1 {
    font-size: 2.8rem;
    letter-spacing: -0.04em;
    margin-bottom: 3rem;
  }

  .text p {
    font-size: 1.15rem;
    line-height: 1.7;
    opacity: 0.75;
    margin-bottom: 1.5rem;
  }
</style>