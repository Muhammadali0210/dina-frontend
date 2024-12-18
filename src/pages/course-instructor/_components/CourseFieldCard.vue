<script setup lang="ts">
import { ref } from "vue";
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'
import { Edit2, X } from "lucide-vue-next";
import useToggleEdit from '@/hooks/use-toggle-edit'
const {state, onToggle} = useToggleEdit()

const props = defineProps({
    name: String
})

</script>
<template>
    <Card>
        <CardHeader class="pb-2">
            <div class="flex items-center justify-between">
                <CardTitle>{{ name }}</CardTitle>
                <Button variant="ghost" @click="onToggle()">
                    <Edit2 v-if="!state" />
                    <X v-else />
                </Button>
            </div>
        </CardHeader>
        <CardContent>
            <Separator class="mb-2" />
            <slot :state="state"></slot>
        </CardContent>
    </Card>
</template>