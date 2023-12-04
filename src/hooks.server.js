// import { Handle } from '@sveltejs/kit'
import { locale,isLoading } from 'svelte-i18n'

export const handle = async ({ event, resolve }) => {
    const lang = event.request.headers.get('accept-language')?.split(',')[0]
    if (lang) {
        locale.set(lang)
    }
    const response = await resolve(event);
    response.headers.set('x-ipfs-path', 'ipns://le-space.de');
    return response
}