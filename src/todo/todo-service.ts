import axios from "axios";

export type Todo = {
    id: number | null;
    description: string;
    assigned: string
}

export const fetchTodos = async () => {
    try {
        const r = await axios.get<Todo[]>('/api/todo');
        return r.data;
    } catch (e) {
        return Promise.reject(e);
    }
}