<script context="module">
  export async function load({fetch}){
    let products = []
    const url = "http://localhost:3004/products"
    const response = await fetch(url)
    if (response.ok){
      products = await response.json()
    }

    return {
      status: response.status,
      props: {
        products : products
      }
    }
  }
</script>

<script>
  import Product from "$lib/Product.svelte"

  export let products
</script>

<table>
  <tr>
    <th>Product</th>
    <th>Stock</th>
    <th>Selling Price</th>
    <th>Action</th>
  </tr>
  {#each products as product}
    <Product {product}/>
  {/each}
</table>
