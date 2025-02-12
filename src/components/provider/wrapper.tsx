import { cn } from "@/lib/utils";
import type { ClassValue } from "clsx";
import { ReactNode } from "react";

type Props = {
  children: ReactNode;
  classname?: ClassValue;
};
const Wrapper = ({ children, classname }: Props) => {
  return (
    <div className={cn(classname)}>
      <div className={cn("container-6 mx-auto")}>{children}</div>
    </div>
  );
};
export default Wrapper;
