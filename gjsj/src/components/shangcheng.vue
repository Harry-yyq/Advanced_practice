<template>
	<div>
		<div class="Body-map">
			<backimg src="../assets/yinhe1.jpg" />
			<div class="All-map-picture">
				<div class="polygon-6-1">
					<img src="../assets/1.png" class="polygon-image" />
				</div>
				<div class="polygon-6-2">
					<img src="../assets/2.png" class="polygon-image"/>
				</div>
				<div class="polygon-6-3">
					<img src="../assets/3.png" class="polygon-image" />
				</div>
				<div class="polygon-6-4">
					<img src="../assets/4.png" class="polygon-image"/>
				</div>
				<div class="polygon-6-5">
					<img src="../assets/5.png" class="polygon-image" />
				</div>
				 <div class="polygon-6-6">
					<img src="../assets/6.png" class="polygon-image" />
				</div>
				<div class="polygon-6-7">
					<img src="../assets/7.png" class="polygon-image" />
				</div>
				<div class="polygon-6-8">
					<img src="../assets/8.png" class="polygon-image" />
				</div>
			</div>
			
		</div>
		
		
	</div>
	
	
	
</template>

<script>
</script>

<style>
	.Body-map{
		width: 100%;
		height: 550px;
		/* background-color: #020642; */
		display: flex;
		justify-content: center;
	}
	
	.All-map-picture{
		margin-top: 10px;
		width: 800px;
		z-index: 2;
	}
	.polygon-image{
		width: 200px;
		height: 200px;
		
	}
	.polygon-6-1 {
	    position: absolute;
	    -webkit-clip-path: polygon(25% 0,75% 0,100% 50%,75% 100%,25% 100%,0 50%);
	    clip-path: polygon(25% 0,75% 0,100% 50%,75% 100%,25% 100%,0 50%);
	    width: 200px;
	    height: 200px;
	    overflow: hidden;
		transition: 0.2s;
		z-index: 2;
	}
	.polygon-6-1:hover{
		/* border: 2px solid blue; */
		transform: scale(1.1,1.1);
		z-index: 2;
	}
	.polygon-6-2 {
	    position: absolute;
	    -webkit-clip-path: polygon(25% 0,75% 0,100% 50%,75% 100%,25% 100%,0 50%);
	    clip-path: polygon(25% 0,75% 0,100% 50%,75% 100%,25% 100%,0 50%);
	    width: 200px;
	    height: 200px;
	    overflow: hidden;
		margin-left: 300px;
		transition: 0.2s;
	}
	.polygon-6-2:hover{
		/* border: 2px solid blue; */
		transform: scale(1.1,1.1);
		z-index: 2;
	}
	.polygon-6-3 {
	    position: absolute;
	    -webkit-clip-path: polygon(25% 0,75% 0,100% 50%,75% 100%,25% 100%,0 50%);
	    clip-path: polygon(25% 0,75% 0,100% 50%,75% 100%,25% 100%,0 50%);
	    width: 200px;
	    height: 200px;
	    overflow: hidden;
		margin-left: 600px;
		transition: 0.2s;
	}
	.polygon-6-3:hover{
		/* border: 2px solid blue; */
		transform: scale(1.1,1.1);
		z-index: 2;
	}
	.polygon-6-4 {
	    position: absolute;
	    -webkit-clip-path: polygon(25% 0,75% 0,100% 50%,75% 100%,25% 100%,0 50%);
	    clip-path: polygon(25% 0,75% 0,100% 50%,75% 100%,25% 100%,0 50%);
	    width: 200px;
	    height: 200px;
	    overflow: hidden;
		margin-top: 100px;
		margin-left: 150px;
		transition: 0.2s;
	}
	.polygon-6-4:hover{
		/* border: 2px solid blue; */
		transform: scale(1.1,1.1);
		z-index: 2;
	}
	.polygon-6-5 {
	    position: absolute;
	    -webkit-clip-path: polygon(25% 0,75% 0,100% 50%,75% 100%,25% 100%,0 50%);
	    clip-path: polygon(25% 0,75% 0,100% 50%,75% 100%,25% 100%,0 50%);
	    width: 200px;
	    height: 200px;
	    overflow: hidden;
		margin-top: 100px;
		margin-left: 450px;
		transition: 0.2s;
	}
	.polygon-6-5:hover{
		/* border: 2px solid blue; */
		transform: scale(1.1,1.1);
		z-index: 2;
	}
	.polygon-6-6 {
	    position: absolute;
	    -webkit-clip-path: polygon(25% 0,75% 0,100% 50%,75% 100%,25% 100%,0 50%);
	    clip-path: polygon(25% 0,75% 0,100% 50%,75% 100%,25% 100%,0 50%);
	    width: 200px;
	    height: 200px;
	    overflow: hidden;
		margin-top: 200px;
		margin-left: 300px;
		transition: 0.2s;
	}
	.polygon-6-6:hover{
		/* border: 2px solid blue; */
		transform: scale(1.1,1.1);
		z-index: 2;
	}
	.polygon-6-7 {
	    position: absolute;
	    -webkit-clip-path: polygon(25% 0,75% 0,100% 50%,75% 100%,25% 100%,0 50%);
	    clip-path: polygon(25% 0,75% 0,100% 50%,75% 100%,25% 100%,0 50%);
	    width: 200px;
	    height: 200px;
	    overflow: hidden;
		margin-left: 150px;
		margin-top: 300px;
		transition: 0.2s;
	}
	.polygon-6-7:hover{
		/* border: 2px solid blue; */
		transform: scale(1.1,1.1);
		z-index: 2;
	}
	.polygon-6-8 {
	    position: absolute;
	    -webkit-clip-path: polygon(25% 0,75% 0,100% 50%,75% 100%,25% 100%,0 50%);
	    clip-path: polygon(25% 0,75% 0,100% 50%,75% 100%,25% 100%,0 50%);
	    width: 200px;
	    height: 200px;
	    overflow: hidden;
		margin-top: 300px;
		margin-left: 450px;
		transition: 0.2s;
	}
	.polygon-6-8:hover{
		/* border: 2px solid blue; */
		transform: scale(1.1,1.1);
		z-index: 2;
	}
</style>
