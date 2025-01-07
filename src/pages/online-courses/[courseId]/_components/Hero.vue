<script setup lang="ts">
import { ref, defineProps, onMounted } from 'vue';
import { Skeleton } from '@/components/ui/skeleton';
import { useOnlineCourseStore } from '../../store'
const courseStore = useOnlineCourseStore();

const props = defineProps({
	course: {
		type: Object
	}
})

</script>
<template>
	<div class="rounded-md bg-white shadow-md dark:bg-secondary/50 p-4 lg:p-6">
		<template v-if="courseStore.detailLoader">
			<Skeleton class="h-6 max-w-[200px] w-full" />
			<Skeleton class="h-4 w-full mt-4" />
			<Skeleton class="h-4 max-w-[94%] w-full mt-2" />
			<Skeleton class="h-4 max-w-[200px] w-full mt-2" />
			<div class="relative h-96 max-md:h-[200px] w-full mt-3">
				<Skeleton class="h-full w-full" />
			</div>
		</template>
		<template v-else>
			<h1 class="text-2xl font-semibold">{{ course?.title }}</h1>
			<p>{{ course?.description }}</p>
			<div className='relative h-96 max-md:h-[200px] w-full mt-3'>
				<img :src="course?.previewImage" :alt="course?.title" class="object-cover h-full w-full"> 
			</div>
		</template>
	</div>
</template>


