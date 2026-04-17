<header class="header">
	<div class="brand">Pablo</div>

	<nav>
		<a href="#">About</a>
		<a href="#">Work</a>
		<a href="#">Contact</a>
	</nav>
</header>

<style>
	.header {
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 2rem 0;
	}

	.brand {
		font-weight: 600;
	}

	nav {
		display: flex;
		gap: 1.5rem;
	}

	a {
		color: white;
		opacity: 0.6;
		text-decoration: none;
		transition: 0.2s;
	}

	a:hover {
		opacity: 1;
	}
</style>