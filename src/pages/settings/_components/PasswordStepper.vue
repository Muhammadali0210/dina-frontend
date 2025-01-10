<script setup lang="ts">
import { Button } from '@/components/ui/button'
import Card from '@/components/ui/card/Card.vue'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Stepper, StepperDescription, StepperItem, StepperSeparator, StepperTitle, StepperTrigger } from '@/components/ui/stepper'
import { toast } from '@/components/ui/toast'
import { toTypedSchema } from '@vee-validate/zod'
import { Check, Circle, Dot } from 'lucide-vue-next'
import { h, ref } from 'vue'
import * as z from 'zod'
import { CardContent } from '@/components/ui/card';






const formSchema = [
    z.object({
        fullName: z.string(),
        email: z.string().email(),
    }),
    z.object({
        password: z.string().min(2).max(50),
        confirmPassword: z.string(),
    }).refine(
        (values) => {
            return values.password === values.confirmPassword
        },
        {
            message: 'Passwords must match!',
            path: ['confirmPassword'],
        },
    ),
    z.object({
        favoriteDrink: z.union([z.literal('coffee'), z.literal('tea'), z.literal('soda')]),
    }),
]

const stepIndex = ref(1)
const setStateIndex = () => {
    stepIndex.value = 1;
};
const steps = [
    {
        step: 1,
        title: " Ma'lumotlaringiz",
        description: 'Joriy Login va Parolingizni yozing',
    },
    {
        step: 2,
        title: 'Yangi parol',
        description: 'Yangi parol yarating',
    },
    {
        step: 3,
        title: "Joriy ma'lumot",
        description: 'Yangilagan Parolingiz',
    },
]

function onSubmit(values: any) {
    toast({
        title: 'Parol mufaqiyatli almashtrildi !',
        description: h('pre', { class: 'mt-2 w-[340px] rounded-md bg-slate-950 p-4' }, h('code', { class: 'text-white' }, JSON.stringify(values, null, 2))),
    })
}
</script>

<template>
    <Card class="w-[100%] sm:w-[50%] ">
        <CardContent class="pt-5 min-h-[40vh] relative">
            <div class=" h-12 right-0 w-[60%]  absolute z-40">

            </div>
            <Form v-slot="{ meta, values, validate }" as="" keep-values
                :validation-schema="toTypedSchema(formSchema[stepIndex - 1])">
                <Stepper v-slot="{ isNextDisabled, isPrevDisabled, nextStep, prevStep }" v-model="stepIndex"
                    class="block w-full">
                    <form @submit="(e) => {
                        e.preventDefault()
                        validate()

                        if (stepIndex === steps.length && meta.valid) {
                            onSubmit(values)
                        }
                    }">
                        <div class="flex w-full flex-start  gap-2">
                            <StepperItem v-for="step in steps" :key="step.step" v-slot="{ state }"
                                class="relative flex w-full flex-col items-center justify-center" :step="step.step">
                                <StepperSeparator v-if="step.step !== steps[steps.length - 1].step"
                                    class="absolute left-[calc(50%+20px)] right-[calc(-50%+10px)] top-5 block h-0.5 shrink-0 rounded-full bg-muted group-data-[state=completed]:bg-primary" />

                                <StepperTrigger as-child>
                                    <Button
                                        :variant="state === 'completed' || state === 'active' ? 'default' : 'outline'"
                                        size="icon" class="z-10  rounded-full shrink-0"
                                        :class="[state === 'active' && 'ring-2  ring-ring ring-offset-2 ring-offset-background']"
                                        :disabled="(state !== 'completed' && !meta.valid)">
                                        <Check v-if="state === 'completed'" class="size-5" />
                                        <Circle v-if="state === 'active'" />
                                        <Dot v-if="state === 'inactive'" />
                                    </Button>
                                </StepperTrigger>

                                <div class="mt-5 flex flex-col items-center text-center">
                                    <StepperTitle :class="[state === 'active' && 'text-primary']"
                                        class="sm:text-sm text-[14px]  font-semibold transition lg:text-base">
                                        {{ step.title }}
                                    </StepperTitle>
                                    <StepperDescription :class="[state === 'active' && 'text-primary']"
                                        class="sr-only text-xs text-muted-foreground transition md:not-sr-only lg:text-sm">
                                        {{ step.description }}
                                    </StepperDescription>
                                </div>
                            </StepperItem>
                        </div>

                        <div class="flex flex-col gap-4 mt-4">
                            <template v-if="stepIndex === 1">
                                <FormField v-slot="{ componentField }" name="fullName">
                                    <FormItem>
                                        <FormLabel>Login</FormLabel>
                                        <FormControl>
                                            <Input type="text" v-bind="componentField" />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                </FormField>

                                <FormField v-slot="{ componentField }" name="email">
                                    <FormItem>
                                        <FormLabel>Parol</FormLabel>
                                        <FormControl>
                                            <Input type="email " v-bind="componentField" />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                </FormField>
                            </template>

                            <template v-if="stepIndex === 2">
                                <FormField v-slot="{ componentField }" name="password">
                                    <FormItem>
                                        <FormLabel>Yangi parol</FormLabel>
                                        <FormControl>
                                            <Input type="password" v-bind="componentField" />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                </FormField>

                                <FormField v-slot="{ componentField }" name="confirmPassword">
                                    <FormItem>
                                        <FormLabel>Parolni tasdiqlang</FormLabel>
                                        <FormControl>
                                            <Input type="password" v-bind="componentField" />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                </FormField>
                            </template>

                            <template v-if="stepIndex === 3">
                                <div class="flex gap-4 justify-between rounded-md p-3 border-t">
                                    <div class="text-lg dark:text-gray-300 font-medium">Abubakir Sobitov</div>
                                    <div class="text-md dark:text-gray-400">Joriy Login:
                                        <span class="font-semibold text-lg">bigbosdev</span>
                                    </div>
                                    <div class="text-md dark:text-gray-400">Joriy Parol:
                                        <span class="font-semibold text-lg">123456</span>
                                    </div>
                                </div>
                                <Button class="w-20 right-0" onSubmit() @click="setStateIndex">Saqlash</Button>
                            </template>
                        </div>

                        <div class="flex items-center justify-between mt-4" v-if="stepIndex !== 3">
                            <Button :disabled=" isPrevDisabled" variant="outline" size="sm" @click="prevStep()">
                                Back
                            </Button>
                            <div class="flex items-center gap-3">
                                <Button v-if="stepIndex !== 3" :type="meta.valid ? 'button' : 'submit'"
                                    :disabled="isNextDisabled" size="sm" @click="meta.valid && nextStep()">
                                    Next
                                </Button>
                                <Button v-if="stepIndex === 3" size="sm" type="submit">
                                    Submit
                                </Button>
                            </div>
                        </div>
                    </form>
                </Stepper>
            </Form>
        </CardContent>
    </Card>
</template>