import NoLayout from "./NoLayout";
export const Layouts = {
    No: NoLayout,
};
export type LayoutKeys = keyof typeof Layouts; // "Auth" | "Base"
