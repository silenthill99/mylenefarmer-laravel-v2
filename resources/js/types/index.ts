export type * from './auth';

export interface Album {
    id: number;
    title: string;
    slug: string;
    image_path: string;
    tracklist: string;
    created_at: string;
    updated_at: string;
    coming_soon: boolean;
    deezer_url?: string;
    spotify_url?: string;
    apple_music_url?: string;
}

export interface MenuNav {
    name: string;
    link?: string;
    isDropdown?: boolean;
    children?: MenuNav[];
}
