<script setup lang="ts">
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose
} from "@/components/ui/dialog";
import { Trash2, Loader } from "lucide-vue-next";
import { defineProps, defineEmits } from "vue";
defineProps({
    isLoading: Boolean,
    isOpen: Boolean
})  
const emit = defineEmits(["onConfirm", "onOpenChange"])

</script>

<template>
  <Dialog @update:open="emit('onOpenChange', $event)" :open="isOpen">
    <DialogContent class="sm:max-w-[425px]">
      <DialogHeader>
        <DialogTitle>O'chirish</DialogTitle>     
        <DialogDescription>
          <p>Haqiqatdan ham ushbu o'chirishni qilmoqchimisiz?</p>
        </DialogDescription>
      </DialogHeader>

      <DialogFooter class="sm:justify-start">
        <DialogClose as-child>
          <Button type="button" variant="outline" class="bg-slate-300"> Bekor qilish </Button>
          <Button variant="destructive" @click="emit('onConfirm')">       
            <template v-if="isLoading">
                <Loader class="size-4 animate-spin" /> O'chirilmoqda...
            </template>
            <template v-else><Trash2 /> O'chirish</template>
          </Button>
        </DialogClose>
      </DialogFooter>
    </DialogContent>
  </Dialog>
</template>
