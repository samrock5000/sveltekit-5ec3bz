<script>
	import psflogo2 from '../../static/psflogo2.svg';
	import  Button  from "../components/Button.svelte";
	import {walletinfo} from "../components/WalletMake.js"
	
</script>

<div >
	<main>
		<h1 id='title'>Bitcoin Cash Service</h1>	
	</main>
</div>
<div>
</div>
<img id='psf-logo' src={psflogo2} alt="logo" />
	<!-- <WalletMake/> -->
<Button/>

<style>
	:global(body) {		
		display: flex;
		/* justify-content: center; */
		align-items: center;
		flex-direction: column;
	}

	main {
		display: flex;
		position: relative;
		justify-content: center;
		margin: 0;
		min-width: 400px;   	
		max-width: 75%;	
		   
	}	
	#psf-logo{
	justify-content: center;
	display: flex;
	position: relative;
	width: 100%;
	}


 	 #title{
		display: flex; 		
		text-align: center;
    	overflow: hidden;
		flex-direction: column; 
		background-color: rgb(133, 94, 167); 
		color: aliceblue;
		
	}  
	

	h1 {
		color: #201176;
		text-transform: uppercase;
		font-size: 2em;
		font-weight: 50;
		text-size-adjust: 80%;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>