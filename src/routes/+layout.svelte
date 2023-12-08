<script>
    import { browser } from '$app/environment'
    import {PUBLIC_WEB_URL} from "$env/static/public";
    import { locale, isLoading, waitLocale, _ } from 'svelte-i18n'
    import { currentImage } from './router.js';
    import { De,Gb } from 'svelte-flag-icons';
    import {timeline_en, timeline_de} from "../timelines.js"
    import {
        Theme, Header,
        HeaderNav,
        SideNav,
        SideNavItems,
        SideNavLink, HeaderUtilities, HeaderGlobalAction,
    } from "carbon-components-svelte";
    import '$lib/i18n' //locales
    import "carbon-components-svelte/css/all.css";
    import '@beyonk/gdpr-cookie-consent-banner/banner.css' // optional, you can also define your own styles
    let title = '';
    $:$locale==='de'?title = timeline_de[0].headline:title = timeline_en[0].headline;
    let description = "";
    timeline_de.forEach(item => {
        description += item.headline + " ";
    });
    timeline_en.forEach(item => {
        description += item.headline + " ";
    });
    const url = "https://le-space.de"
    let image = PUBLIC_WEB_URL+"/le-space-ug.png"
    const favicon = "./favicon.ico"

    $:image = PUBLIC_WEB_URL+"/"+currentImage

    let isSideNavOpen = false;

    export const load = async () => {
        if (browser) {
            locale.set(window.navigator.language.substring(0,2))
        }
        await waitLocale()
    }
    const initAnalytics = () => { }
    let theme = "g80";
</script>

<svelte:head>
    <title>{title}</title>
    <link rel="icon" type="image/svg" href={favicon} />
    <meta property="og:type" content="article" />
    <meta property="og:title" content={title} />
    <meta property="og:description" content={description} />
    <meta property="og:image" content={image} />
    <meta property="og:url" content={url} />
    <meta name="description" content={description}/>
    <meta name="twitter:card" content={description} />
    <meta name="twitter:title" content={title} />
    <meta name="twitter:description" content={description} />
    <meta name="twitter:image" content={image} />

    {#if browser}
        <script src="https://cozycal.com/embed/iframe/9375.js"></script>
        <script src="https://cozycal.com/embed/iframe/9380.js"></script>
<!--        <script async src="https://cozycal.com/embed/v1/9375.js"></scrip>-->
    {/if}

</svelte:head>

<!--<GdprBanner bind:this={gdprBanner} cookieName="le-space" description="Our booking calender still uses cookies...  " on:analytics={initAnalytics} />-->
<Header
        class="header-title"
        persistentHamburgerMenu={true}
        bind:isSideNavOpen
        company="Le Space"
        platformName={title}
        href="#/">

    <HeaderNav>
    </HeaderNav>
    <HeaderUtilities>
        <div class="flags">
            <De style="margin-right: 10px" on:click={()=>$locale="de"}/>
            <Gb style="margin-right: 10px"  on:click={()=>$locale="en"}/>
        </div>
        <HeaderGlobalAction aria-label="dark-mode">
        <Theme
                bind:theme
                render="toggle"
                toggle={{
                            themes: ["g10", "g80"],
                            labelA: "",
                            labelB: "",
                            hideLabel: true,
                            size: "sm",
              }}/>
        </HeaderGlobalAction>

    </HeaderUtilities>
</Header>
{#if $isLoading}
    Please wait...
{:else}
    <SideNav bind:isOpen={isSideNavOpen}>
        <SideNavItems>
            <SideNavLink href={"/"+$locale+"/gdpr"} text={$_('page.home.data_protection')} />
            <SideNavLink href={"/"+$locale+"/imprint"} text={$_('page.home.imprint')} />
        </SideNavItems>
    </SideNav>
<slot></slot>
{/if}
<style>
    .flags {
        margin: 10px;
        display: flex;
        justify-content: space-between;
    }
    :global(.bx--list-box__menu-item, .bx--list-box__menu-item__option) {
        height: auto;
        background: black;
    }
    @media (max-width: 600px) {
        :global(a.bx--header__name, a.bx--header__name:hover) {
            font-size: 8px;
        }
    }
</style>