import type { FC, SVGProps } from "react";
import { Email, Password } from "./modules/auth";

// This allows both Lucide icons and your own custom React SVG components
export type IconType = FC<SVGProps<SVGSVGElement>>;

export const IconComponentMap: Record<string, IconType> = {
  email: Email,
  password: Password,
};