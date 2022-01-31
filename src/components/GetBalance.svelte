<script>
import { onMount } from 'svelte';
// Configure this constant for your infrastructure.
const RESTURL = 'https://free-bch.fullstack.cash'
// const RESTURL = 'http://localhost:5005'
console.log(`Using this REST URL for bch-consumer: ${RESTURL}`)
// Instantiate bch-consumer
const BchConsumer = require('bch-consumer')
const bchConsumer = new BchConsumer({ restURL: RESTURL })

export let walletData = [];

	onMount(async () => {
    //function createWallet () {
      try {
        // Instantiate the wallet library.
        //const bchWallet = new BchWallet()
	     
        // Wait for the wallet to be created.
       const res =  await bchConsumer.walletInfoPromise;
        walletData =  res.json()

        // Print out the wallet information.
        console.log(
          `Wallet information: ${JSON.stringify(bchWallet.walletInfo, null, 2)}`
        )
      } catch (err) {
        console.error('Error: ', err)
      }
   // }
  })
   </script>




<h1>BCH Wallet</h1>

	{#each walletData as wallet}
		<figure>
	  	<p>{wallet}</p>
		</figure>
	{:else}
		<!-- this block renders when walletData.length === 0 -->
		<p>loading...</p>
	{/each}