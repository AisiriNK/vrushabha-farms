import { useToast } from "@/hooks/use-toast";
import { Toast, ToastClose, ToastDescription, ToastProvider, ToastTitle, ToastViewport } from "@/components/ui/toast";

export function Toaster() {
  const { toasts } = useToast();

  return (
    <ToastProvider>
      {toasts.map(function ({ id, title, description, action, ...props }) {
        return (
          <Toast key={id} {...props} className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-lg md:max-w-2xl z-[100] flex flex-col items-start gap-3 p-6 md:p-8">
            <div className="grid gap-2 w-full">
              {title && <ToastTitle className="text-lg md:text-xl font-bold">{title}</ToastTitle>}
              {description && <ToastDescription className="text-base md:text-lg">{description}</ToastDescription>}
            </div>
            {action}
            <ToastClose className="absolute right-4 top-4 md:right-6 md:top-6" />
          </Toast>
        );
      })}
      <ToastViewport className="fixed top-0 left-0 flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-2xl" />
    </ToastProvider>
  );
}
