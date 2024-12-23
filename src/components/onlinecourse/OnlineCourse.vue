<template lang="html">
    <div class="custom-container">
        <div @click="courseHandler" class="w-full grid md:grid-cols-3 gap-4 sm:grid-cols-2 grid-cols-1">
            <CourseInfoSkeleton v-if="!isTime" />
            <CourseCard v-if="isTime" :courseData="courseData" />
            <CourseInfoSkeleton v-if="!isTime" />
        </div>
    </div>
</template>

<script>
import CourseCard from '@/components/onlinecourse/ui/CourseCard.vue';
import CourseInfoSkeleton from '@/components/onlinecourse/_shared/CourseInfoSkeleton.vue';

export default {
    components: {
        CourseCard,
        CourseInfoSkeleton
    },
    data() {
        return {
            isTime: false, 
            courseData: [
                {
                    id: 1,
                    name: 'Topik 1',
                    status: 'Bepul',
                    price: 250000,
                    image: 'https://www.sammi.ac/_next/image?url=https%3A%2F%2Futfs.io%2Ff%2FmMbSyFqocdYGuy6elWw32ShZLOavzytcQulCmd8ogs7R0e4K&w=1200&q=75'
                },
                {
                    id: 2,
                    name: 'Topik 2',
                    status: 'Bepul',
                    price: 250000,
                    image: 'https://www.sammi.ac/_next/image?url=https%3A%2F%2Futfs.io%2Ff%2FmMbSyFqocdYGuy6elWw32ShZLOavzytcQulCmd8ogs7R0e4K&w=1200&q=75'
                }
            ]
        };
    },
    methods: {
        courseHandler() {
            this.$router.push('/courseinfo');
        }
    },
    mounted() {
        setTimeout(() => {
            this.isTime = true;
        }, 1000);
    }
};
</script>

<style lang="css">
/* Kerakli uslublar */
</style>
