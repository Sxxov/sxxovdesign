<script lang='ts'>
	import { createEventDispatcher } from 'svelte';
	import { navigate } from 'svelte-routing';
	import SvgButton from './buttons/SvgButton.svelte';
	import { CSSUtility } from '../../resources/utilities/css.utility';

	export let colour = '--colour-accent-primary';

	const dispatch = createEventDispatcher();
</script>

<component>
	<SvgButton
		height='56px'
		width='56px'
		on:click={() => {
			dispatch('click');

			if (window.location.pathname !== '/') {
				navigate('/');
			}

			window.scrollTo({
				top: 0,
				left: 0,
				behavior: 'smooth',
			});
		}}
		svg='
		<svg version="1.1" id="xx" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
			viewBox="0 0 40 40" style="enable-background:new 0 0 40 40;" xml:space="preserve">
			<path style="fill:{CSSUtility.getVariable(colour)};" d="M14.2,20l5.8,5.8L35.8,10H40v4.2L34.2,20l5.8,5.8V30h-4.2L30,24.2L24.4,30h-8.6L10,24.2L4.2,30H0v-4.2
				c0,0,5.9-5.8,5.9-5.8l-5.8-5.8V10h4.2l5.8,5.8l5.8-5.8h8.3l2.5,2.5l-4.2,4.2L20,14.2L14.2,20z"/>
		</svg>
		'
	>
	</SvgButton>
</component>

<style>
	component {
		height: 50px;
		width: 50px;
	}
</style>