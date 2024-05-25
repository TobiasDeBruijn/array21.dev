export interface Page {
    name: string,
    path: string,
    external?: boolean,
}

export const PAGES: Page[] = [
    {
        name: "Home",
        path: "/"
    },
    {
        name: "Projects",
        path: "/projects"
    },
    {
        name: "Files",
        path: "https://files.array21.dev",
        external: true,
    },
    {
        name: "GitHub",
        path: "https://github.com/TobiasDeBruijn",
        external: true,
    }
]