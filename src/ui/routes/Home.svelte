<script lang='ts'>
	import { writable } from 'svelte/store';
	import type { Writable } from 'svelte/store';
	import { navigate } from 'svelte-routing';

	import Button from '../blocks/Button.svelte';
	import Toast, { ToastItem } from '../blocks/Toast.svelte';
	import Matter from '../components/Matter.svelte';
	import Logo from '../blocks/Logo.svelte';
	import Youtube from '../components/Youtube.svelte';

	const toastsW: Writable<ToastItem[]> = writable([]);
	const BODY_ADDER_EASTER_EGG = {
		20: 'i feel like you\'d like cookie clicker',
		50: 'to make myself clear, i do not have cookies',
		69: 'hehe nice, 69th click',
		100: 'bro, instead of clicking on me, you needa be clicking with some bitches...',
		200: 'okay at this point you\'re probably digging for the treasure, that i may or may not have...',
		300: 'i could give you a coupon code or something if you keep clicking, it\'s only your fingers that you\'re sacrificing!',
		400: 'what the fuck why are you still going, i didn\'t even know my shitty code could handle so many!',
		500: 'bro, stop, seriously, i\'ve run out of quirky lines!',
		1000: 'fuck you.',
		6969: 'hey you! yeah you, the one that\'s looking through my code! you\'re lucky i couldn\'t be arsed to obfuscate my easter eggs... or could i?',
		6970: 'unless you\'re on github... in that case follow me lmao',
	};

	let button: Button;
	let matter: Matter;

	export let isButtonActive = true;
	export let buttonIcon = 'done';
	export let buttonText = 'buy ident';
	export let toastText = 'thanks! redirecting to paypal...';
	export let buttonURL = 'https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=N38QJE62JSAJY';
	export let heading = '';
	export let string = '';

	let bodiesAdded = 0;
</script>


<component>
	{#if button}
		<Matter
			bind:this={matter}
			{button}
		/>
	{/if}
	{#if isButtonActive}
		<Button
			bind:this={button}
			icon={buttonIcon}
			on:click={() => {
				$toastsW.push(ToastItem.from({
					text: toastText,
				}));

				$toastsW = $toastsW;

				navigate(buttonURL);
			}}
		>
			{buttonText}
		</Button>
	{/if}
	<Toast
		{toastsW}
	/>
	<container
		class='all'
	>
		<container
			class='logo'
		>
			<Logo
				on:click={() => {
					matter.addNewBody();

					++bodiesAdded;

					// @ts-expect-error
					if (BODY_ADDER_EASTER_EGG[bodiesAdded] != null) {
						// @ts-expect-error
						// eslint-disable-next-line no-alert
						alert(BODY_ADDER_EASTER_EGG[bodiesAdded]);
					}
				}}
			/>
		</container>
		<container
			class='text'
		>
			<heading>
				{heading}
			</heading>
			<string>
				{string}
			</string>
		</container>
	</container>
	<Youtube
		playlistUrl='PLVxe6MjYOfpzmX8qxSt4Qxx0yurA1CP0z'
	/>
</component>

<style>
	component {
		height: 100%;
		width: 100vw;

		position: absolute;

		overflow: hidden;
		overflow: clip;

		z-index: 0;
	}

	container.all {
		position: absolute;
		top: 0;
		left: 0;

		padding: var(--padding);
		box-sizing: border-box;

		height: 100%;
		width: 100vw;

		pointer-events: none;

		display: grid;
    	grid-template-rows: min-content auto;
	}

	container.logo {
		width: min-content;
		pointer-events: all;
	}

	container.text {
		display: flex;
		justify-content: flex-end;
		flex-direction: column;
	}

	container.text > * {
		white-space: pre-line;

		text-shadow: 6.66667px 6.66667px 20px rgb(0 0 0 / 10%);
	}

	container.text > heading {
		font-size: 10rem;
		letter-spacing: -0.12em;
    	line-height: 0.6em;

		padding-bottom: 0.1em;

		word-break: break-word;

		color: var(--colour-accent-primary);
	}

	container.text > string {
		/* pointer-events: all; */

		padding-left: 0.6rem;
		padding-bottom: 0.1rem;

		mix-blend-mode: difference;
	}
</style>