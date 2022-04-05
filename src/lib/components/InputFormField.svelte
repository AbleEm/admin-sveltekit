<script>
	export let inputType = 'text',
		isDisabled = false,
		labelText = 'Label Text',
		errorMsg = null,
		isRequired = false;

	let className = 'primary';

	if (errorMsg) {
		className = 'error';
	}
</script>

<label class="text-left text-grey-700" for=""
	>{labelText}
	{#if isRequired}
		<span class="text-red-400">*</span>
	{/if}
</label>

{#if inputType !== 'textarea'}
	<input
		class="input-state input-state-{className}"
		type={inputType}
		placeholder={inputType}
		disabled={isDisabled}
		required={isRequired}
	/>
{:else}
	<textarea
		class="input-state input-state-{className}"
		placeholder={inputType}
		disabled={isDisabled}
	/>
{/if}
{#if errorMsg}
	<span class="text-red-400 text-xs">{errorMsg}</span>
{/if}
