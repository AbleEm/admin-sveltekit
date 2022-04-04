<script>
  import Button from "$lib/components/Button.svelte"
  import FormField from "$lib/components/FormField.svelte"
</script> 
<div class="flex flex-col space-y-4 p-10 items-center bg-[#fafada]">
  Buttons
  <Button className="btn-primary" btnText="Button Text" isDisabled={false}/>
  <Button className="btn-primary" btnText="Button Text" isDisabled={true}/>
  <Button className="btn-secondary" btnText="Button Text" isDisabled={false}/>
  <Button className="btn-secondary" btnText="Button Text" isDisabled={true}/>
</div>
<div class="flex flex-col space-y-4 p-10 items-center">
  Form Field
  <FormField isDisabled={false} className=""/>
  <FormField isDisabled={false} className="error"/>
  <FormField isDisabled={true} className=""/>
</div>