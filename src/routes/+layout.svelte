<script>
    import { browser } from '$app/environment'
    import { locale, isLoading, waitLocale } from 'svelte-i18n'
    import '$lib/i18n' //locales
    import { Dropdown } from "carbon-components-svelte";
    import { De,Gb } from 'svelte-flag-icons';
    import {PUBLIC_WEB_URL} from "$env/static/public";
    import GdprBanner from '@beyonk/gdpr-cookie-consent-banner'
    import '@beyonk/gdpr-cookie-consent-banner/banner.css' // optional, you can also define your own styles
    import "carbon-components-svelte/css/all.css";
    import {
        Theme, Header,
        HeaderNav,
        HeaderNavItem, Column, Row, Grid,
        SideNav,
        SideNavItems,
        SideNavLink,
        SideNavMenu,
        SideNavMenuItem, HeaderUtilities, HeaderGlobalAction,
    } from "carbon-components-svelte";
    import { _ } from 'svelte-i18n'

    const title = "Le Space - IT & Software Consulting"
    const description = "General IT- and Technology Consulting, Virtual Coworking, Peer Programming Sessions, Remote Work Consulting, Coworking Consultationn"
    const url = "https://le-space.de"
    const image = PUBLIC_WEB_URL+"le-space-ug.png"
    const favicon = "./favicon.ico"

    let isSideNavOpen = false;

    let gdprBanner

    // gdprBanner.show()

    export const load = async () => {
        if (browser) {
            console.log("setting lang:",window.navigator.language)
            locale.set(window.navigator.language.substring(0,2))
        }
        await waitLocale()
    }
    const initAnalytics = () => {console.log("test")}
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
<GdprBanner bind:this={gdprBanner} cookieName="le-space" description="Our booking calender still uses cookies... (sorry for that) " on:analytics={initAnalytics} />
<Header
        persistentHamburgerMenu={true}
        bind:isSideNavOpen
        company="Le Space"
        platformName="IT-Consulting"
        href="/">

    <HeaderNav>
    </HeaderNav>
    <HeaderUtilities>

        <HeaderGlobalAction aria-label="dark-mode">
        <Theme
                render="toggle"
                toggle={{
                            themes: ["g10", "g80"],
                            labelA: "",
                            labelB: "",
                            hideLabel: true,
                            size: "sm",
              }}/>
        </HeaderGlobalAction>

<!--        <HeaderGlobalAction aria-label="language" >
                <Dropdown
                    class="flags"
                    size="sm"
                    bind:selectedId={$locale}
                    items={[
                        { id: "de", text: "DE" },
                        { id: "en", text: "EN" }
                      ]}
                    let:item
                    >
                        {#if item.id==="de"}<De />{/if}
                        {#if item.id==="en"}<Gb />{/if}
                </Dropdown>
        </HeaderGlobalAction>-->

    </HeaderUtilities>
</Header>
{#if $isLoading}
    Please wait...
{:else}
    <SideNav bind:isOpen={isSideNavOpen}>
        <SideNavItems>
            <SideNavLink href={"/"+$locale+"/gdpr"} text={$_('page.home.data_protection')} />
            <SideNavLink href={"/"+$locale+"/imprint"} text={$_('page.home.imprint')} />
    <!--        <SideNavLink text="Link 3" />
            <SideNavMenu text="Menu">
                <SideNavMenuItem href="/" text="Link 1" />
                <SideNavMenuItem href="/" text="Link 2" />
                <SideNavMenuItem href="/" text="Link 3" />
            </SideNavMenu> _-->
        </SideNavItems>
    </SideNav>
<slot></slot>
{/if}
<style>
    :global(.flags) {
       background: black !important; /*padding: 15px;*/
        /*margin-top: 15px;*/

    }
    :global(.bx--list-box__menu-item, .bx--list-box__menu-item__option) {
        height: auto;
        background: black;
        /*padding:10px*/
    }
</style>