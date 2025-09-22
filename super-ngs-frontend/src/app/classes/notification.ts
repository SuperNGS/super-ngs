export interface Notification {
    id: number;
    type: "success" | "warning" | "error" | "info";
    title: string;
    message: string;
    timeout: number;
}
