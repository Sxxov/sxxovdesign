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

	let button: Button;
	let matter: Matter;

	export let isButtonActive = true;
	export let buttonIcon = 'done';
	export let buttonText = 'buy ident';
	export let toastText = 'thanks! redirecting to paypal...';
	export let buttonURL = 'https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=N38QJE62JSAJY';
	export let heading = '';
	export let string = '';
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