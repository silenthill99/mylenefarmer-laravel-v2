import { usePage } from '@inertiajs/react';
import React from 'react';
import AlbumController from '@/actions/App/Http/Controllers/AlbumController';
import { home } from '@/routes';
import clips from '@/routes/clips';
import type { MenuNav } from '@/types';

const PageLayout = () => {
    const { albums } = usePage().props;

    const NavItemButton: MenuNav[] = [
        { name: "Page d'accueil", link: home.url() },
        { name: 'Clips', link: clips.index.url() },
        {
            name: 'Albums',
            isDropdown: true,
            children: albums.map((album) => ({
                name: album.title,
                link: AlbumController.show.url({ album: album }),
            })),
        },
    ];

    return (
        <div>

        </div>
    );
};

export default PageLayout;
