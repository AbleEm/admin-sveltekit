<script>
  export let isDisabled, className
</script>
<input class=" px-[12px] py-[16px] rounded-xl border bg-grey-200 text-grey-700 border-grey-400 placeholder:text-grey-500 hover:border-blue-400 focus:outline-none focus:border-blue-400 focus:shadow focus:shadow-[#4262DF1A] disabled:bg-grey-300 {className}" type="text" placeholder="Text" disabled="{isDisabled}">