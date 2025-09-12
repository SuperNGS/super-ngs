export interface Projects {
    id: number;
    name: string;
    type: "personal" | "work" | "client";
    description: string;
    start_date: number;
    end_date?: number;
    image?: string;
    link?: string;
}
