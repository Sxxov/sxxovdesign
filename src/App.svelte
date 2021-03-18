<script lang='ts'>
	import { Router, Route } from 'svelte-routing';
	import { GoogleAnalytics } from '@beyonk/svelte-google-analytics';
	import Failure from './ui/routes/Failure.svelte';
	import Home from './ui/routes/Home.svelte';
	import Success from './ui/routes/Success.svelte';
</script>
  
<main>
	<Router>
		<Route
			path='/'
			component={Home}
		/>
		<Route
			path='/success'
			component={Success}
		/>
		<Route
			path='/failure'
			component={Failure}
		/>
	</Router>
</main>

<GoogleAnalytics properties={['G-K194LSP00P']} />

<style>
	main {
		height: 100%;
		background: var(--colour-background-primary);
	}
</style>
  