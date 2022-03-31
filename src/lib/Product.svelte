<script>
  export let product

  let stock = product.rating.count

  $: disabled = stock < 0 ? true : false

  let showBtns = false

  let btnHandler = () => {
    showBtns = !showBtns
  }
  let increaseQuantity = () => {
    stock++
  }
  let decreaseQuantity = () => {
      stock--
  }

  let submitHandler = ()=> {
    btnHandler()
    fetch(`http://localhost:3004/products/${product.id}`, {
      headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
      },
      method: "PATCH",
      body: JSON.stringify({rating:{count: stock}})
    })
  }

</script>

<tr>
  <td>{product.title}</td>
  <td style="border: none">
  {#if !showBtns}    
    {stock}
    <button style="margin-left:10px" on:click= {btnHandler}>🖊️</button>    
    {:else}
    <button on:click= {increaseQuantity}>+</button>    
    <input style="width:30px" type="number" min="0" bind:value = {stock}>
    <button on:click= {decreaseQuantity}>-</button>    
    <button on:click= {submitHandler} {disabled}>✔</button>    
  {/if}
</td>
  <td>{product.price}</td>
  <td><a href="/product/{product.id}">Edit</a></td>
</tr>