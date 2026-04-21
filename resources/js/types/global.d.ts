import type { Auth } from '@/types/auth';
import type { Album } from '@/types/index';
import "@inertiajs/core"

declare module '@inertiajs/core' {
    export interface InertiaConfig {
        sharedPageProps: {
            name: string;
            auth: Auth;
            sidebarOpen: boolean;
            [key: string]: unknown;
            albums: Album[];
        };
    }
}
