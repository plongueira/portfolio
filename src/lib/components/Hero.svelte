<script>
  let { title, description, status } = $props();
</script>

<section class="hero">
  <div class="marker"></div>

  <h1>{title}</h1>

  <p class="subtitle">{description}</p>

  <div class="status">{status}</div>
</section>

<style>
  .hero {
    padding: 8rem 0;
    max-width: 750px;
  }

  .marker {
    width: 40px;
    height: 2px;
    background: white;
    opacity: 0.2;
    margin-bottom: 2rem;
  }

  h1 {
    font-size: 4.4rem;
    line-height: 1.02;
    letter-spacing: -0.055em;
    font-weight: 600;
    margin: 0;
  }

  .subtitle {
    margin-top: 2.2rem;
    font-size: 1.3rem;
    line-height: 1.6;
    opacity: 0.72;
  }

  .status {
    margin-top: 4rem;
    font-size: 0.9rem;
    opacity: 0.45;
  }
</style>