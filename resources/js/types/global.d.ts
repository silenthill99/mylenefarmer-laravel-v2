import type { Auth } from '@/types/auth';
import type { Album } from '@/types/index';

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
