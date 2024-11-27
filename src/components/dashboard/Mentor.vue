<template>
    <h1 class="text-gray-700 dark:text-white font-bold text-lg mb-4">Your Mentor</h1>
    <!-- <img src="" alt="mentor image" class="w-full h-auto rounded-lg mb-4"> -->
    <div class="bg-[#e0f4f97a] rounded-2xl">
        <div v-for="(mentorData, index) in mentorData" :key="index" class="collapse collapse-arrow  ">
            <input type="radio" name="my-accordion-2" />
            <div class="collapse-title text-xl font-medium">
                <div>
                    <div class="  p-4  dark:bg-gray-800 flex justify-between items-center border-b-2">
                        <img class="w-[60px] h-[60px] rounded-full" src="../../assets/icons/user-avatar.png"
                            alt="user avatar">
                        <div class="leading-tight">
                            <h1 class="text-gray-700 font-bold text-base">{{ mentorData.name }}</h1>
                            <p class="text-gray-500 text-sm">{{ mentorData.role }}</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="collapse-content">
                
            </div>
        </div>
    </div>
</template>

<script>
export default {
    
    data() {
        return {
            mentorData: [
                {
                    name: "Abubakir Sobitov",
                    role: "Mentor",
                    image: "../../assets/icons/user-avatar.png"
                },
                {
                    name: "John Doe",
                    role: "Assistant Mentor",
                    image: "../../assets/icons/user-avatar.png"
                },
            ],
        };
    }

}
</script>
<style >
    .box{
        color:#c6e8e3d4;
    }
</style>