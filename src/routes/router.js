import { readable, writable } from 'svelte/store'
import { browser } from '$app/environment';

export const helia = writable();
export const currentImage = writable('');
function getHash () {
    if(browser){
        const hashWithQueryParam = location.hash.replace(/^#/, '')
        return hashWithQueryParam.indexOf('?')!==-1?hashWithQueryParam.substring(0,hashWithQueryParam.indexOf('?')):hashWithQueryParam
    }
}

function getQuery(){
    if(browser) {
        const hashWithQueryParam = location.hash.replace(/^#/, '')
        return hashWithQueryParam.indexOf('?') !== -1 ? hashWithQueryParam.substring(hashWithQueryParam.indexOf('?') + 1, hashWithQueryParam.length) : undefined
    }
}

export const hash = new readable(getHash(), set => {
    function setHash () {
        set(getHash())
    }

    window.addEventListener('hashchange', setHash)
    return () => window.removeEventListener('hashchange', setHash)
})

export const query = new readable(getQuery(), set => {
    function setQuery () {
        set(getQuery())
    }

    window.addEventListener('hashchange', setQuery)
    return () => window.removeEventListener('hashchange', setQuery)
})

