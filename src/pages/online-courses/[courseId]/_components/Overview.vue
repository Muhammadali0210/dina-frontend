<script setup lang="ts">
import {ref, defineProps } from "vue"
import { ListOrdered, MonitorPlay, CalendarRange, Dot, BadgeCheck } from "lucide-vue-next";
import { Separator } from "@/components/ui/separator";
import {Accordion} from '@/components/ui/accordion';
import SectionList from "./SectionList.vue";

const isLoading = ref(false)

const props = defineProps({
	course: {
		type: Object
	}
})


</script>
<template>
	<div>
		<div class="shadow-md rounded-md bg-gradient-to-b from-slate-100 to-white dark:from-[#0b0f1a] dark:to-secondary p-4 lg:p-6">
			<h2 class='text-3xl font-bold'>
				Nimalarni o'rganasiz ?
			</h2>

			<div class='mt-5 grid grid-cols-1 gap-4 md:grid-cols-2'>
				<div v-for="item in course?.learning.split(', ')" class="flex gap-2" :key="item">
					<BadgeCheck class='size-5 text-blue-500' />
					<p class='flex-1'>{{item}}</p>
				</div>
			</div>

			<h2 class="mt-2 font-space-grotesk text-3xl font-bold">Kurs malumotlari</h2>
			<div class="mt-2 flex flex-row flex-wrap gap-8">
				<div class="flex flex-col">
					<ListOrdered class="size-10" />
					<p class="font-space-grotesk text-xl font-bold">Mo'dullar</p>
					<div class="text-2xl font-medium">{{ course?.totalSections }} ta</div>
				</div>

				<div class="flex flex-col">
					<MonitorPlay class="size-10" />
					<p class="font-space-grotesk text-xl font-bold">Video darslar</p>
					<div class="text-2xl font-medium">{{ course?.totalLessons }} ta</div>
				</div>

				<div class="flex flex-col">
					<CalendarRange class="size-10" />
					<p class="font-space-grotesk text-xl font-bold">Davomiyligi</p>
					<div class="text-2xl font-medium">
					   {{ course?.totalDuration.split('.')[0] }}:{{ course?.totalDuration.split('.')[1] }}
					</div>
				</div>
			</div>

			<Separator class="my-3" />
			<div v-if="isLoading" class="mt-4 flex flex-col gap-1">
				Section Loading....
				<!-- <SectionLoading v-for="i in course.totalSections" :key="i" /> -->
			</div>
			<Accordion v-else type="single" collapsible>
				<SectionList v-for="section in course?.sections" :key="section._id" :section="section" />
			</Accordion>
		</div>

		<div class="mt-4 rounded-md bg-secondary p-4 lg:p-6">
			<h2 class="font-space-grotesk text-3xl font-bold">Talablar</h2>
			<div class="mt-2">
				<div class="mt-1 flex items-center" v-for="item in course?.requirements.split(', ')" :key="item">
					<Dot />
					<p class="flex-1 dark:text-slate-400">{{ item }}</p>
				</div>
			</div>
		</div>
	</div>
</template>

