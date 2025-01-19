<script setup lang="ts">
import { ref, computed } from 'vue';
import { sidebarData } from '@/constants/index';
import { useUserStore } from '@/stores/userStore';
import { useSidebarStore } from '@/stores/sidebarStore';
import { useRouter } from 'vue-router';
import { Button } from '../ui/button';
import Application from './_components/Application.vue';

const userStore = useUserStore();
const sidebarStore = useSidebarStore();
const router = useRouter();

const role = ref<string>(localStorage.getItem('role') || '');
const currentPage = ref<number>(0);

const filteredSidebarData = computed(() => {
  return sidebarData.filter(item => item.role.includes(userStore.currentRole));
});

const changePage = (index: number, path: string) => {
  currentPage.value = index;
  sidebarStore.isOpen = false;
  if (path == '/profile') {
    localStorage.setItem('userId', '');
  }
  router.push(path);
};

const getSvgIcon = (icon: string, isActive: boolean) => {
  const activeClass = isActive ? 'text-white dark:text-white  group-hover:text-white' : 'dark:text-white text-gray-700 group-hover:text-gray-800 dark:group-hover:text-white';
  return icon.replace('class="w-6 h-6 text-green-500 transition duration-75"', `class="w-6 h-6 text-gray-700 transition duration-75 ${activeClass}"`);
};
</script>
<template >
    <aside
      class="fixed top-0 left-0 z-40 w-64 h-screen pt-14 transition-transform -translate-x-full bg-white border-r border-gray-200 lg:translate-x-0 dark:bg-gray-800 dark:border-gray-700"
      :class="{ 'translate-x-0': sidebarStore.isOpen }"
    >
      <div class="overflow-y-auto my-scroll-0 py-5 px-3 h-full bg-white dark:bg-gray-800">
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
        <ul class="space-y-2 pb-[140px]">
          <template v-for="(item, index) in filteredSidebarData" :key="index">
            <li 
              class="cursor-pointer flex items-center py-2 px-3 text-base font-medium border-spacing-0 rounded-lg group"
              :class="[currentPage == index ? 'bg-opacity-100 text-white bg-green-500' : 'bg-opacity-0  text-gray-700 rounded-lg dark:text-white hover:bg-opacity-15 dark:hover:bg-opacity-25']"
              @click="changePage(index, item.path)"
            >
              <span v-html="getSvgIcon(item.icon, currentPage === index)"></span>
              
              <span class="ml-3">{{ item.title }}</span>
            </li>
          </template>
        </ul>
      </div>

      <div
        class="absolute bottom-0 left-0 z-20"
      >
        <Application />
      </div>
          <!-- bottom 3 buttons  -->
    </aside>

</template>
