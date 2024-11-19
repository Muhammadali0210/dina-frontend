<template>
    <template v-if="!groups">
        <Loader />
    </template>
    <div v-else class="grid lg:grid-cols-2 xl:grid-cols-3  md:grid-cols-2 max-sm:grid-cols-1 gap-5 w-full">
        <div
         v-for="(item, index) in groups" 
         :key="index" 
         @click="goToAttendance(item._id)"
         :class="[
            {'bg-orange-400': item.degree == 'c1'},
            {'bg-orange-400': item.degree == 'c2'},
            {'bg-blue-400': item.degree == 'a1'},
            {'bg-blue-400': item.degree == 'a2'},
            {'bg-green-400': item.degree == 'b1'},
            {'bg-green-400': item.degree == 'b2'},
         ]"
         class="my-shadow text-black rounded-xl h-[140px] p-5 relative cursor-pointer md:hover:scale-105 transition-all duration-300 ease-in-out"
        >
            <div class="text-[28px] font-bold text-gray-100">
                {{item.name}}
            </div>
            <div class="absolute my-shadow2 right-5 top-[50%] translate-y-[-50%] w-[90px] h-[90px] bg-[#3d5a80] rounded-[100%] flex justify-center items-center">
                <span class="text-[#fca311] text-[50px] items-center" style="line-height: 0; font-weight: 900; text-shadow: 5px 5px 10px 10px rgba(0, 0, 0, 1);">{{ item.studentCount }}</span>
            </div>
            <h1 class="text-[20px] font-bold text-[#003566]">O'quvchilar soni</h1>
        </div>
    </div>
</template>
<script>
import { ApiService } from '@/services/apiServices';
import { useCurrentIdStore } from '@/stores/currentId';
import Loader from '@/ui/Loader.vue';
export default {
    components: {
        Loader
    },
    data(){
        return {
            groups: null,
            token: localStorage.getItem('token')
        }
    },
    methods: {
        async getgroups(){
            try {
                const response = await ApiService.getByIdToken("/group/teacher", this.token);
                this.groups = response
            } catch (error) {
                console.log(error);
                
            }
        },
        goToAttendance(id){
            const currentStore = useCurrentIdStore();
            currentStore.setCurrentId(id);
            this.$router.push('/attendance/group');
        }
    },
    mounted(){
        this.getgroups()
    }
}
</script>
<style>
.my-shadow{
    box-shadow: 0px 0px 10px 6px #97979775;
    /* border: 6px solid #55575856; */
}
.dark .my-shadow{
    /* box-shadow: 0px 0px 10px 20px #0b172000; */
    /* box-shadow: 3px 3px 2px 1px #a4c2dba2, inset -3px -3px 1px 1px #282c30a2; */
    box-shadow: 4px 3px 1px 1px #bac4cea2;
    border:1px solid #333538a2;
}
.my-shadow2{
    box-shadow: inset 0px 0px 10px 10px #1c2a3b75;
}
</style>