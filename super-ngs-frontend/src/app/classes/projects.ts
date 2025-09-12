export interface Projects {
    id: number;
    name: string;
    type: "personal" | "work" | "client";
    description: string;
    image?: string;
    link?: string;
}
