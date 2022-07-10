<script src="../app.ts" lang="ts"></script>

<title>My website</title>
<link rel="icon" href="trashCan.svg" type="image/svg+xml" />

<slot />
<main class="bg-white dark:bg-slate-800">
	<div id="gridthing" class="grid grid-cols-2 dark:bg-slate-800">
		<script src="https://kit.fontawesome.com/b56f87a59a.js" crossorigin="anonymous"></script>
		<div class="h-full flex justify-center align-items-center flex-col transition-colors duration-300">
			<h1 class="text-black dark:text-white text-5xl font-bold">Hi, I'm Garbg</h1>
			<p class="text-black text-xl dark:text-white">Frontend web developer</p>
		</div>
		<div class="bg-primary h-full flex justify-center align-items-center flex-col">
			<img id="trash" src="trashCan.svg" alt="Trash can" />
		</div>
	</div>
	<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="dark-toggle" on:click={darkToggle} height="2rem" style="fill: white;"><!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M32 256c0-123.8 100.3-224 223.8-224c11.36 0 29.7 1.668 40.9 3.746c9.616 1.777 11.75 14.63 3.279 19.44C245 86.5 211.2 144.6 211.2 207.8c0 109.7 99.71 193 208.3 172.3c9.561-1.805 16.28 9.324 10.11 16.95C387.9 448.6 324.8 480 255.8 480C132.1 480 32 379.6 32 256z" /></svg>
</main>
