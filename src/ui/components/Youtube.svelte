<script lang='ts'>
	import { onDestroy, onMount } from 'svelte';

	import youtubeOnLoadPromise from '../../resources/raw/libs/youtube';
	import { WindowUtility } from '../../resources/utilities/window.utility';
	
	let placeholder: HTMLDivElement;
	let component: HTMLDivElement;
	let player: YT.Player;

	export let playlistUrl: string;
	let isActive = false;
	let i = 0;
	let playlist: string[];

	onMount(async () => {
		await youtubeOnLoadPromise;
		await new Promise<void>((resolve) => {
			// eslint-disable-next-line no-new
			new YT.Player(placeholder, {
				events: {
					onReady(event: YT.PlayerEvent) {
						onPlayerReady(event);
						resolve();
					},
					onStateChange: onPlayerStateChange,
				},
				playerVars: {
					loop: 1,
					autoplay: 1,
					autohide: 1,
					modestbranding: 1,
					rel: 0,
					showinfo: 0,
					controls: 0,
					disablekb: 1,
					enablejsapi: 1,
				},
			});
		});

		onResize();
	});

	function onPlayerStateChange(event: YT.OnStateChangeEvent) {
		switch (event.data) {
			case YT.PlayerState.PLAYING:
				isActive = true;
				if (!playlist) {
					playlist = event.target.getPlaylist();
				}
	
				break;
			case YT.PlayerState.ENDED:
				isActive = false;

				event.target.playVideoAt(++i % (playlist.length ?? 0));
				break;
			default:
		}
	}

	function onPlayerReady(event: YT.PlayerEvent) {
		const {
			target,
		} = event;

		target.loadPlaylist({
			list: playlistUrl,
			// @types/youtube says 'player'
			// yt official docs says 'playlist'
			// so `as any` let's go
			listType: 'playlist',
		} as any);
	
		target.mute();
	}

	function onResize() {
		if (!component) {
			return;
		}
	
		if (WindowUtility.inner.width > WindowUtility.inner.height * 16 / 9) {
			component.style.width = `${WindowUtility.inner.width}px`;
			component.style.height = `${WindowUtility.inner.width * 9 / 16}px`;
			component.style.left = '0';
			component.style.top = `-${((WindowUtility.inner.width * 9 / 16) - (WindowUtility.inner.height)) / 2}px`;
		} else {
			component.style.width = `${WindowUtility.inner.height * 16 / 9}px`;
			component.style.height = `${WindowUtility.inner.height}px`;
			component.style.left = `-${((WindowUtility.inner.height * 16 / 9) - (WindowUtility.inner.width)) / 2}px`;
			component.style.top = '0';
		}
	}
</script>

<svelte:window on:resize={onResize} />

<component
	bind:this={component}
	class:inactive={!isActive}
>
	<placeholder
		class='iframe'
		bind:this={placeholder}
	/>
</component>

<style>
	component {
		position: absolute;
		top: 0;

		z-index: -2;

		pointer-events: none;

		opacity: 1;
		transition: opacity 0.3s var(--ease-slow-slow);
	}

	component.inactive {
		opacity: 0;
	}

	.iframe {
		height: 100%;
		width: 100%;
	}
</style>