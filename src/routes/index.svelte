<script src="../ugly.ts" lang="ts"></script>

<title>My website</title>
<link rel="icon" href="trashCan.svg" type="image/svg+xml" />

<slot />
<main class="bg-white dark:bg-slate-800 selection:text-white selection:bg-black dark:selection:text-black dark:selection:bg-white">
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
	<div id="fw-container" class="bg-white dark:bg-slate-800 mb-5">
		<div id="info-container">
			<img id="pfp" class="rounded-full mx-auto" width="100px" height="100px" src="pfp.webp" alt="Picture" />
			<div id="text-thingy" class="bg-white dark:bg-slate-800 text-center">
				<div id="moretextthing" class="bg-white dark:bg-slate-800" style="position: relative; top: calc(var(--imgheight) / 2);">
					<h1 class="text-2xl text-black dark:text-white">Garbg</h1>
					<h2 class="text-lg text-black dark:text-white">The dude who created this site</h2>
					<svg onclick="location.href = 'https://github.com/CloudyWhale';" class="mx-auto mt-2 fill-black dark:fill-white cursor-pointer" xmlns="http://www.w3.org/2000/svg" height="2rem" viewBox="0 0 496 512"><!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z" /></svg>
				</div>
			</div>
		</div>
	</div>
</main>

