<script setup lang="ts">
import Logo from '@/ui/Logo.vue'
import DarkMode from '@/ui/DarkMode.vue'
import UserMenue from '@/ui/UserMenue.vue'
import Hamburger from '@/ui/Hamburger.vue'
</script>
<template>
    <nav class="bg-white/55 backdrop-blur-md border-b border-gray-200 sm:px-4 max-sm:px-1 py-2.5   dark:bg-gray-800 dark:border-gray-700 fixed left-0 lg:left-80 right-0 top-0 z-50">
        <div class="flex flex-wrap justify-between items-center">
          <div class="flex justify-start items-center">
            <Hamburger/>
            <Logo />  
          </div>
  
          <div class="flex items-center gap-1 lg:order-2">
            <DarkMode />
            <UserMenue />
          </div>
        </div>
      </nav>
  </template>
