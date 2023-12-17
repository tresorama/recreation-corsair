import { VariantProps, cva } from "class-variance-authority";
import { HTMLAttributes } from "react";

const classesDefinition = cva("inline-flex px-6 py-3 text-sm font-medium uppercase", {
  variants: {
    color: {
      primary: "bg-yellow-300 text-black border border-transparent hover:bg-transparent hover:text-white hover:border-current",
    }
  },
  defaultVariants: {
    color: 'primary',
  }
});

type ButtonLinkVariants = VariantProps<typeof classesDefinition>;
type ButtonLinkProps = HTMLAttributes<HTMLAnchorElement> & ButtonLinkVariants;

export const ButtonLink = (props: ButtonLinkProps) => {
  const resolvedClasses = classesDefinition({
    color: props.color,
  });
  return <a className={resolvedClasses}>{props.children}</a>;
};