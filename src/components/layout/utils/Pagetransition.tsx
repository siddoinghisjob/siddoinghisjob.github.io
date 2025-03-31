import { component$, Slot, useSignal, useVisibleTask$ } from "@builder.io/qwik";

export const PageTransition = component$(() => {
  const isVisible = useSignal(false);

  useVisibleTask$(({ track }) => {
    track(() => isVisible.value);
    
    // Set to visible after component mounts
    if (!isVisible.value) {
      setTimeout(() => {
        isVisible.value = true;
      }, 50);
    }
  });

  return (
    <div
      class={{
        "opacity-0 transform translate-y-4": !isVisible.value,
        "opacity-100 transform translate-y-0": isVisible.value,
        "transition-all duration-500 ease-in-out": true,
      }}
    >
      <Slot />
    </div>
  );
});