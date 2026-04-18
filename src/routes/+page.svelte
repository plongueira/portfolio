<script>
  import Header from "$lib/components/Header.svelte";
  import Hero from "$lib/components/Hero.svelte";
</script>

<div class="page">
  <Header />

  <main class="content">
    <Hero
      title="I design and build backend systems that scale in production."
      description="Focused on APIs, system architecture, and performance-critical applications."
      status="Currently working on backend systems and distributed infrastructure."
    />

    <section class="meta">
      <p>Backend  · Distributed systems · Spain</p>
    </section>
  </main>
</div>

<style>
  .page {
    max-width: 1100px;
    margin: 0 auto;
    padding: 0 2rem;
  }

  .content {
    padding-top: 6rem;
  }

  .meta {
    margin-top: 5rem;
    font-size: 0.9rem;
    opacity: 0.45;
  }
</style>