<script setup lang="ts">
import { ref, defineProps, onMounted } from 'vue';

const props = defineProps({
	course: {
		type: Object
	}
})

</script>
<template>
	<div class="rounded-md bg-white shadow-md dark:bg-secondary/50 p-4 lg:p-6">
		<h1 class="text-2xl font-semibold">{{ course?.title }}</h1>
		<p>{{ course?.description }}</p>
		<div className='relative h-96 max-md:h-[200px] w-full mt-3'>
			<img :src="course?.previewImage" :alt="course?.title" class="object-cover h-full w-full"> 
		</div>
	</div>
</template>


