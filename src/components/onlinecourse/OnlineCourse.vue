<template lang="html">
    <div class="custom-container">
        <div class="w-full grid md:grid-cols-3 gap-4 sm:grid-cols-2 grid-cols-1">
            <CourseCard :courseData="courseData" />
        </div>
    </div>
</template>

<script>
import CourseCard from '@/components/onlinecourse/ui/CourseCard.vue'

export default {
    components: {
        CourseCard
    },
    data() {
        return {
            courseData: [
                {
                    id: 1,
                    name: "Topik 1",
                    status: "Bepul",
                    price: 250000,
                    image: "https://www.sammi.ac/_next/image?url=https%3A%2F%2Futfs.io%2Ff%2FmMbSyFqocdYGuy6elWw32ShZLOavzytcQulCmd8ogs7R0e4K&w=1200&q=75"
                },
                {
                    id: 2,
                    name: "Topik 2",
                    status: "Bepul",
                    price: 300000,
                    image: "https://www.sammi.ac/_next/image?url=https%3A%2F%2Futfs.io%2Ff%2FmMbSyFqocdYGuy6elWw32ShZLOavzytcQulCmd8ogs7R0e4K&w=1200&q=75"
                },
                {
                    id: 2,
                    name: "Topik 2",
                    status: "Bepul",
                    price: 300000,
                    image: "https://www.sammi.ac/_next/image?url=https%3A%2F%2Futfs.io%2Ff%2FmMbSyFqocdYGuy6elWw32ShZLOavzytcQulCmd8ogs7R0e4K&w=1200&q=75"
                },
                {
                    id: 2,
                    name: "Topik 2",
                    status: "Bepul",
                    price: 300000,
                    image: "https://www.sammi.ac/_next/image?url=https%3A%2F%2Futfs.io%2Ff%2FmMbSyFqocdYGuy6elWw32ShZLOavzytcQulCmd8ogs7R0e4K&w=1200&q=75"
                },
                // boshqa kurslar
            ]
        }
    }
}
</script>

<style lang="css">
/* Kerakli uslublar */
</style>
