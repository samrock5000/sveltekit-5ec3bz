<script>
//import GetBalance from "./GetBalance.svelte";
 
 const handleClick = (walldata)=>{
    return walldata
  }

</script>

<div class='btn-container'>
  <button class='btn' on:click={handleClick}>
      create bch wallet
  </button>
</div>


<style>

.btn-container{
  margin-left: 100;
  
}

.btn {
  background-color:rgb(133, 94, 167); /* Green */
  position: relative;

  color: white;
  padding: 15px 32px;
  text-align: center;
  justify-content: center;
  font-size: 16px;
}

</style>