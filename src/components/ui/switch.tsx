import * as React from "react"
import * as SwitchPrimitives from "@radix-ui/react-switch"
// import { useEffect } from "react"

import { cn } from "@/lib/utils"

const ToggleDarkLightBtn = React.forwardRef<
  React.ElementRef<typeof SwitchPrimitives.Root>,
  React.ComponentPropsWithoutRef<typeof SwitchPrimitives.Root> & {
    label?: string;
  }
>(({ className, label, ...props }, ref) => {

  const [isChecked, setIsChecked] = React.useState(false);

  React.useEffect(() => {
    if (isChecked) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isChecked]);

  const handleToggle = (checked: boolean) => {
    setIsChecked(checked);
  };

  return (
    <div className="flex items-center space-x-2">  
      <SwitchPrimitives.Root
        className={cn(
          "peer inline-flex h-6 w-11 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-green-300 data-[state=unchecked]:bg-input",
          className
        )}
        {...props}
        ref={ref}
        checked={isChecked}
        onCheckedChange={handleToggle}
      >
        <SwitchPrimitives.Thumb
          className={cn(
            "pointer-events-none block h-5 w-5 rounded-full bg-background shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-5 data-[state=unchecked]:translate-x-0"
          )}
        />
      </SwitchPrimitives.Root>
      {label && (
        <span className="ml-2 text-base tracking-tight">{label}</span>
      )}
    </div>
  )
})
ToggleDarkLightBtn.displayName = SwitchPrimitives.Root.displayName

export { ToggleDarkLightBtn }
