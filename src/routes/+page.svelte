<script>
  import Header from "$lib/components/Header.svelte";
</script>

<div class="page">
  <Header />

  <main class="content">
    <section class="hero">
      <h1>Pablo</h1>
      <p>Backend developer especializado en sistemas y APIs</p>
    </section>
  </main>
</div>

<style>
  .page {
    max-width: 1000px;
    margin: 0 auto;
    padding: 0 2rem;
  }

  .content {
    padding-top: 2rem;
  }

  .hero {
    padding: 5rem 0;
  }

  h1 {
    font-size: 3rem;
    letter-spacing: -0.03em;
    margin: 0;
  }

  p {
    opacity: 0.7;
    margin-top: 1rem;
  }
</style>