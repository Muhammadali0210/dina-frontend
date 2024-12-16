import type { ToastRootProps } from 'radix-vue'
import type { HTMLAttributes } from 'vue'

export { default as Toast } from './Toast.vue'
export { default as ToastAction } from './ToastAction.vue'
export { default as ToastClose } from './ToastClose.vue'
export { default as ToastDescription } from './ToastDescription.vue'
export { default as Toaster } from './Toaster.vue'
export { default as ToastProvider } from './ToastProvider.vue'
export { default as ToastTitle } from './ToastTitle.vue'
export { default as ToastViewport } from './ToastViewport.vue'
export { toast, useToast } from './use-toast'

import { cva, type VariantProps } from 'class-variance-authority'

export const toastVariants = cva(
  'data-[state=open]:animate-in data-[state=closed]:animate-out data-[swipe=end]:animate-out data-[state=closed]:fade-out-80 data-[state=closed]:slide-out-to-right-full data-[state=open]:slide-in-from-top-full data-[state=open]:sm:slide-in-from-top-full group pointer-events-auto relative flex w-full items-center justify-between space-x-4 overflow-hidden rounded-md border p-6 pr-8 shadow-lg transition-all data-[swipe=cancel]:translate-x-0 data-[swipe=end]:translate-x-[var(--radix-toast-swipe-end-x)] data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=move]:transition-none',
  {
    variants: {
      variant: {
        default: 'bg-white dark:bg-gray-900 text-foreground border',
        success: 'success bg-green-400 text-white border-success group',
        destructive: 'destructive border-destructive bg-destructive text-destructive-foreground group'
      },
      position: {
        default: 'top-0 sm:bottom-0 sm:right-0 sm:top-auto',
        top: 'top-0 right-0 data-[state=closed]:slide-out-to-right-full',
        'top-left': 'top-0 left-0 data-[state=closed]:slide-out-to-left-full',
        'top-right': 'top-0 right-0 data-[state=closed]:slide-out-to-right-full',
        bottom: 'bottom-0 right-0 data-[state=open]:slide-in-from-bottom-full ',
        'bottom-left': 'data-[state=closed]:slide-out-to-left-full bottom-0 left-0',
        center: 'bottom-0 mx-auto w-auto sm:bottom-0'
      }
    },
    defaultVariants: {
      variant: 'default',
      position: 'default'
    }
  }
)

type ToastVariants = VariantProps<typeof toastVariants>

export interface ToastProps extends ToastRootProps {
  class?: HTMLAttributes['class']
  variant?: ToastVariants['variant']
  position?: ToastVariants['position']
  onOpenChange?: ((value: boolean) => void) | undefined
}
