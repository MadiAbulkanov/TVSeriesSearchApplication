import { client } from "./client";

export interface ShowsName {
    score: number;
    show: {
        name: string;
        id: string;
    }
}

interface Show {
    image: {
        medium: string;
    };
    name: string;
    type: string;
    language: string;
    premiered: string;
    summary: string;
}

export const getShowsName = async (value: string) => {
    const response = await client.get<ShowsName[]>(`/search/shows?q=${value}`);

    return response.data;
};

export const getShow = async (id: string) => {
    const response = await client.get<Show>(`/shows/${id}`);

    return response.data;
};