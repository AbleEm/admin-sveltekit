<script context="module">

  export async function load({params,fetch}){
    let product = null
    const id = params.id
    const url = `http://localhost:3004/products/${id}`
    const response = await fetch(url)
    if(response.ok){
      product = await response.json()
    }

    return {
      props: {
        product
      }
    }
  } 
</script>

<script>
  export let product

  let title = product.title
  let price = product.price
  let description = product.description
  let category = product.category
  let stock = product.rating.count
  let showToaster = false
  let message = ""

  const toaster = (state) => {
    showToaster = true

    if (state === "success"){
      message = "Data changed successfully!"
    } else {
      message = "Error while changing the data"
    }

    setTimeout(()=> {showToaster = false}, 3000)
  }

  const formHandler = async() => {
    const url = `http://localhost:3004/products/${product.id}`

    const requestParams = {
      headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
      },
      method: "PATCH",
      body: JSON.stringify({
        title, price, description, category, rating: {count: stock}
      })
    }
    const response = await fetch(url,requestParams)
    if(response.ok){
      toaster("success")
    } else {
      toaster("failure")
    }
  }
</script>
<a href="/products">Go back to Products page</a>
<form on:submit|preventDefault={formHandler}>
  <div class="flex">
    <label for="title">
      Name:
    </label>
    <textarea type="text" name="title" id="title" rows="2" cols="50" bind:value={title}></textarea>
  </div>
  <div class="flex">
    <label for="price">
      Price:
    </label>
    <input type="number" name="price" id="price" step= "any" bind:value={price}>
  </div>
  <div class="flex">
    <label for="description">
      Description:
    </label>
    <textarea name="description" id="description" rows="4" cols="50" bind:value={description}></textarea>
  </div>
  <div class="flex">
    <label for="category">
      Category:
    </label>
    <input type="text" name="category" id="category" bind:value={category}>
  </div>
  <div class="flex">
    <label for="stock">
      Stock:
    </label>
    <input type="number" name="stock" id="stock" bind:value={stock}>
  </div>
  <button style="height: 25px"type="submit">Submit</button>
</form>

{#if showToaster}
  <div class="center toaster">{message}</div>
{/if}

<style>
  form{
    margin: auto;
    margin-top: 20px;
    width: max-content;
    display: flex;
    flex-direction: column;
    border: 2px dotted;
    padding: 25px;
  }
  .flex{
    display: flex;
    flex-direction: column;
    margin: 10px 0;
    gap: 10px;
  }
  .toaster{
    background-color: darkgreen;
    color: white;
    padding: 5px;
    margin-top:10px;
  }
</style>