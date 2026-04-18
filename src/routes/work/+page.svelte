<script>
  import Header from "$lib/components/Header.svelte";

  const projects = [
    {
      title: "Phishing Detection SaaS",
      desc: "System for detecting malicious emails using NLP and rules engine"
    },
    {
      title: "API Gateway",
      desc: "High-performance gateway for internal microservices"
    }
  ];
</script>

<div class="page">
  <Header />

  <main class="content">
    <h1>Work</h1>

    <div class="grid">
      {#each projects as project}
        <div class="item">
          <h3>{project.title}</h3>
          <p>{project.desc}</p>
        </div>
      {/each}
    </div>
  </main>
</div>

<style>
  .page {
    max-width: 1000px;
    margin: 0 auto;
    padding: 0 2rem;
  }

  .content {
    padding-top: 6rem;
  }

  h1 {
    font-size: 2.8rem;
    margin-bottom: 3rem;
  }

  .grid {
    display: grid;
    gap: 2rem;
  }

  .item {
    padding: 1.5rem 0;
    border-bottom: 1px solid rgba(255,255,255,0.08);
  }

  h3 {
    margin: 0;
    font-size: 1.3rem;
  }

  p {
    opacity: 0.6;
    margin-top: 0.5rem;
  }
</style>