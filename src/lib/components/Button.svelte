<script>
  import RoundedPlaceholder from "./RoundedPlaceholder.svelte";
  
  export let className, btnText, isDisabled

  let ringColor = "border-black"

  if (className==="btn-primary"){
    ringColor = "border-white"
  }


</script>
<button class="btn {className}" disabled="{isDisabled}">
    <RoundedPlaceholder customAttributes={ringColor}/>
    <span>{btnText}</span>
    <RoundedPlaceholder customAttributes={ringColor}/>
</button>