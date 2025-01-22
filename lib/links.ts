export type Link = {
    ref: string;
    label: string;
}

export const links: Link[] = [
    { ref: "/", label: "Home" },
    {ref: "/about", label: "About"},
    {ref:"/login", label: "Login"},
    {ref:"/signup", label: "Signup"}
];