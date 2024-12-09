<template >
    <aside
      class="fixed top-0 left-0 z-40 w-64 h-screen pt-14 transition-transform -translate-x-full bg-white border-r border-gray-200 lg:translate-x-0 dark:bg-gray-800 dark:border-gray-700"
      :class="{ 'translate-x-0': sidebarStore.isOpen }"
    >
      <div class="overflow-y-auto py-5 px-3 h-full bg-white dark:bg-gray-800">
        <!-- search input -->
        <form action="#" method="GET" class="md:hidden mb-2">
          <label for="sidebar-search" class="sr-only">Search</label>
          <div class="relative">
            <div
              class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none"
            >
              <svg
                class="w-5 h-5 text-gray-500 dark:text-gray-400"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                ></path>
              </svg>
            </div>
            <input
              type="text"
              name="search"
              id="sidebar-search"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full pl-10 p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
              placeholder="Search"
            />
          </div>
        </form>

        <!-- menu -->
        <ul class="space-y-2">
          <template v-for="(item, index) in sidebarData" :key="index">
            <li 
              class="cursor-pointer flex items-center py-2 px-3 text-base font-medium bg-green-500 border-spacing-0 rounded-lg group"
              :class="[currentPage == index ? 'bg-opacity-100 text-white ' : 'bg-opacity-0  text-gray-700 rounded-lg dark:text-white hover:bg-opacity-15 dark:hover:bg-opacity-25']"
              @click="changePage(index, item.path)"
              v-if="item.role.includes(userStore.currentRole)"
            >
              <span v-html="getSvgIcon(item.icon, currentPage === index)"></span>
              
              <span class="ml-3">{{ item.title }}</span>
            </li>
          </template>
        </ul>
      </div>

      <!-- bottom 3 buttons  -->
      <div
        class="hidden absolute bottom-0 left-0 justify-center p-4 space-x-4 w-full lg:flex bg-white dark:bg-gray-800 z-20"
      >
        <span>Settings </span>
      </div>
    </aside>
</template>
<script>
import { sidebarData } from '@/constants/index';
import { useUserStore } from '@/stores/userStore';
import { useSidebarStore } from '@/stores/sidebarStore';
export default {
    setup() {
        const userStore = useUserStore();
        const sidebarStore = useSidebarStore();
        return {
            userStore,
            sidebarStore
        }
    },
    data() {
      return {
        token: localStorage.getItem('token'),
        currentPage: 0,
        sidebarData: sidebarData
      }
    },
    methods: {  
      changePage(index, path) {
        this.currentPage = index;
        this.$router.push(path);
        this.sidebarStore.isOpen = false;
        if(path == '/profile') {
          localStorage.setItem('userId', '');
        }
      },
      getSvgIcon(icon, isActive) {
        const activeClass = isActive ? 'text-white dark:text-white  group-hover:text-white' : 'dark:text-white text-gray-700 group-hover:text-gray-800 dark:group-hover:text-white';
        return icon.replace('class="w-6 h-6 text-green-500 transition duration-75"', `class="w-6 h-6 text-gray-700 transition duration-75 ${activeClass}"`);
      },
    },
    mounted(){
         
    }
}
</script>
<style setup>
.my-shadow{
  box-shadow: 0 0 15px 0 #0000001e;
  /* box-shadow:  0 0 10px 0 rgba(0, 0, 0, 0.1); */
}
</style>