<script>
	import Button from '$lib/components/Button.svelte';
	import InputFormField from '$lib/components/InputFormField.svelte';
	import RadioField from '$lib/components/RadioField.svelte';
</script>

<div class="flex flex-col space-y-4 p-10 bg-[#fafada] border border-dashed">
	<h2 class="border border-dashed px-4 py-2">Buttons</h2>
	<Button btnText="Primary Button" />
	<Button btnText="Primary Button" isDisabled={true} />
	<Button variant="secondary" btnText="Secondary Button" />
	<Button variant="secondary" btnText="Secondary Button" isDisabled={true} />
	<Button variant="ghost" btnText="Ghost Button" />
	<Button variant="ghost" btnText="Ghost Button" isDisabled={true} />
</div>
<div class="flex flex-col space-y-4 p-10 border border-dashed">
	<h2 class="border border-dashed px-4 py-2">Form Field</h2>
	<InputFormField isRequired={true} labelText="Text field" />
	<InputFormField inputType="password" labelText="Password field" />
	<InputFormField isRequired={true} errorMsg="Error msg" labelText="Error text field" />
	<InputFormField isDisabled={true} labelText="Disabled text field" />
	<InputFormField inputType="number" isRequired={true} labelText="Number field" />
	<InputFormField inputType="textarea" labelText="Textarea" />
	<InputFormField inputType="textarea" errorMsg="Error msg" labelText="Error textarea" />
	<InputFormField inputType="textarea" isDisabled={true} labelText="Disabled textarea" />
</div>

<div class="flex flex-col space-y-4 p-10 border border-dashed">
	<h2 class="border border-dashed px-4 py-2">Other Form Fields</h2>
	<RadioField />
</div>
