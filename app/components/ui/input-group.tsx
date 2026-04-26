"use client";

import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { Slot } from "@radix-ui/react-slot";
import { cn } from "~/lib/utils";
import { Button } from "./button";
import { Input } from "./input";
import { SelectTrigger } from "./select";

function InputGroup({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="input-group"
      role="group"
      className={cn(
        "overflow-hidden border-input bg-input/20 has-[[data-slot=input-group-control]:focus-visible]:border-ring has-[[data-slot=input-group-control]:focus-visible]:ring-ring/30 has-[[data-slot][aria-invalid=true]]:ring-destructive/20 has-[[data-slot][aria-invalid=true]]:border-destructive dark:has-[[data-slot][aria-invalid=true]]:ring-destructive/40 has-disabled:bg-muted/50 dark:has-disabled:bg-muted/80 rounded-lg border transition in-data-[slot=combobox-content]:focus-within:border-inherit in-data-[slot=combobox-content]:focus-within:ring-0 has-disabled:opacity-50 has-[[data-slot=input-group-control]:focus-visible]:ring-2 has-[[data-slot][aria-invalid=true]]:ring-2 has-[>[data-align=block-end]]:h-auto has-[>[data-align=block-end]]:flex-col has-[>[data-align=block-start]]:h-auto has-[>[data-align=block-start]]:flex-col has-[>[data-align=block-end]]:[&>input]:pt-3 has-[>[data-align=block-start]]:[&>input]:pb-3 has-[>[data-align=inline-end]]:[&>input]:pr-1.5 has-[>[data-align=inline-start]]:[&>input]:pl-1.5 group/input-group relative flex w-full min-w-0 items-stretch outline-none has-[>textarea]:h-auto dark:bg-input/30",
        "**:[button]:rounded-none **:[button]:border-0 **:[button]:shadow-none **:[button]:ring-0",
        "[&>*:not(:last-child)]:border-e [&>*:not(:last-child)]:border-input",
        "[&>*]:rounded-none [&>*]:border-0",
        className,
      )}
      {...props}
    />
  );
}

const inputGroupAddonVariants = cva(
  "text-muted-foreground h-auto gap-2 text-sm font-medium group-data-[disabled=true]/input-group:opacity-50 [&>kbd]:rounded-[calc(var(--radius)-5px)] [&>svg:not([class*='size-'])]:size-4 flex cursor-text items-center justify-center select-none focus-within:relative focus-within:z-10",
  {
    variants: {
      align: {
        "inline-start": "order-first",
        "inline-end": "order-last",
        "block-start": "pt-2 order-first w-full justify-start",
        "block-end": "pb-2 order-last w-full justify-start",
      },
    },
    defaultVariants: {
      align: "inline-start",
    },
  },
);

function InputGroupAddon({
  className,
  align = "inline-start",
  ...props
}: React.ComponentProps<"div"> & VariantProps<typeof inputGroupAddonVariants>) {
  return (
    <div
      role="group"
      data-slot="input-group-addon"
      data-align={align}
      className={cn(inputGroupAddonVariants({ align }), className)}
      onClick={(e) => {
        if ((e.target as HTMLElement).closest("button")) {
          return;
        }
        const parent = e.currentTarget.parentElement;
        const input =
          parent?.querySelector("input") ||
          parent?.querySelector("textarea") ||
          parent?.querySelector("button[data-slot=input-group-control]");
        (input as HTMLElement)?.focus();
      }}
      {...props}
    />
  );
}

const inputGroupButtonVariants = cva(
  "gap-2 text-sm flex items-center shadow-none",
  {
    variants: {
      size: {
        xs: "h-6 gap-1 px-1.5 [&>svg:not([class*='size-'])]:size-3.5",
        sm: "",
        "icon-xs": "size-6 p-0 has-[>svg]:p-0",
        "icon-sm": "size-8 p-0 has-[>svg]:p-0",
      },
    },
    defaultVariants: {
      size: "xs",
    },
  },
);

function InputGroupButton({
  className,
  type = "button",
  variant = "ghost",
  size = "xs",
  ...props
}: Omit<React.ComponentProps<typeof Button>, "size"> &
  VariantProps<typeof inputGroupButtonVariants>) {
  return (
    <Button
      type={type}
      data-size={size}
      variant={variant}
      className={cn(inputGroupButtonVariants({ size }), className)}
      {...props}
    />
  );
}

function InputGroupText({ className, ...props }: React.ComponentProps<"span">) {
  return (
    <span
      className={cn(
        "text-muted-foreground gap-2 text-sm [&_svg:not([class*='size-'])]:size-4 flex items-center [&_svg]:pointer-events-none",
        className,
      )}
      {...props}
    />
  );
}

interface InputGroupControlProps {
  asChild?: boolean;
}

function InputGroupControl({
  className,
  asChild,
  ...props
}: React.ComponentProps<"input"> & InputGroupControlProps) {
  const Comp = asChild ? Slot : "input";
  return (
    <Comp
      data-slot="input-group-control"
      className={cn(
        "rounded-none border-0 shadow-none ring-0 focus-visible:ring-0 flex-1 min-w-0",
        className,
      )}
      {...props}
    />
  );
}

function InputGroupInput({
  className,
  ...props
}: React.ComponentProps<"input">) {
  return (
    <InputGroupControl asChild className={className}>
      <Input {...props} />
    </InputGroupControl>
  );
}

function InputGroupSelect({
  className,
  ...props
}: React.ComponentProps<typeof SelectTrigger>) {
  return (
    <InputGroupControl asChild className={cn("flex-none w-fit", className)}>
      <SelectTrigger {...props} />
    </InputGroupControl>
  );
}

export {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupText,
  InputGroupControl,
  InputGroupInput,
  InputGroupSelect,
};
