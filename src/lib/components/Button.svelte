<script>
	import RoundedPlaceholder from './RoundedPlaceholder.svelte';

	export let variant = 'primary',
		btnText = 'Button Text',
		isDisabled = false;

	let ringColor = 'border-black';
	let className = variant;

	switch (variant) {
		case 'primary':
			ringColor = 'border-white';
			break;
		case 'secondary':
			ringColor = 'border-black';
			break;
		case 'ghost':
			ringColor = 'hidden';
			break;

		default:
			break;
	}
</script>

<button class="btn btn-{className}" disabled={isDisabled}>
	<RoundedPlaceholder customAttributes={ringColor} />
	<span class="px-2">{btnText}</span>
	<RoundedPlaceholder customAttributes={ringColor} />
</button>
