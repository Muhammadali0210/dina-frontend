<script setup lang="ts">
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  LifeBuoy,
  LogOut,
  Mail,
  MessageSquare,
  PlusCircle,
  Settings,
  User,
  UserPlus,
  Users,
} from "lucide-vue-next";
import { Button } from "@/components/ui/button";
import { useUserStore } from "@/stores/userStore";
import { useRouter } from "vue-router";
import { ref } from "vue";

const router = useRouter();
const userStore = useUserStore();

const token = ref<string>(localStorage.getItem("token") || "");
const logOut = () => {
  router.push("/");
  token.value = "";
  localStorage.setItem("token", "");
  localStorage.setItem("role", "");
  userStore.currentRole = "general";
  console.log("Loged out");
};
</script>
<template>
  <DropdownMenu>
    <DropdownMenuTrigger as-child class="ml-3" v-if="token.length > 0" >
      <Avatar>
        <AvatarImage src="https://github.com/radix-vue.png" alt="@radix-vue" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
    </DropdownMenuTrigger>

    <Button v-else class="ml-3 rounded-[100px] cursor-pointer bg-transparent dark:bg-transparent border-gray-300  dark:border-gray-600" @click="router.push('/login')" variant="outline">
      <span class="mr-2">Kirish</span>
    </Button>

    <DropdownMenuContent class="w-56 mr-3 bg-white dark:bg-slate-900">
      <DropdownMenuLabel>My Account</DropdownMenuLabel>
      <DropdownMenuSeparator />
      <DropdownMenuGroup>
        <DropdownMenuItem>
          <User class="mr-2 h-4 w-4" />
          <span>Profil</span>
          <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Settings class="mr-2 h-4 w-4" />
          <span>Sozlamalar</span>
          <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
        </DropdownMenuItem>
      </DropdownMenuGroup>
      <DropdownMenuSeparator />
      <DropdownMenuGroup>
        <DropdownMenuItem>
          <Users class="mr-2 h-4 w-4" />
          <span>Guruh</span>
        </DropdownMenuItem>
        <DropdownMenuSub>
          <DropdownMenuSubTrigger>
            <UserPlus class="mr-2 h-4 w-4" />
            <span>Invite users</span>
          </DropdownMenuSubTrigger>
          <DropdownMenuPortal>
            <DropdownMenuSubContent>
              <DropdownMenuItem>
                <Mail class="mr-2 h-4 w-4" />
                <span>Email</span>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <MessageSquare class="mr-2 h-4 w-4" />
                <span>Message</span>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <PlusCircle class="mr-2 h-4 w-4" />
                <span>More...</span>
              </DropdownMenuItem>
            </DropdownMenuSubContent>
          </DropdownMenuPortal>
        </DropdownMenuSub>
      </DropdownMenuGroup>
      <DropdownMenuSeparator />
      <DropdownMenuItem>
        <LifeBuoy class="mr-2 h-4 w-4" />
        <span>Support</span>
      </DropdownMenuItem>

      <DropdownMenuSeparator />
      <DropdownMenuItem @click="logOut">
        <LogOut class="mr-2 h-4 w-4" />
        <span>Chiqish</span>
        <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
      </DropdownMenuItem>
    </DropdownMenuContent>
  </DropdownMenu>
</template>
<style></style>
