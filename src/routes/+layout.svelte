<script>
    import "carbon-components-svelte/css/all.css";
    import {
        Theme, Header,
        HeaderNav,
        HeaderNavItem, Column, Row, Grid,
    } from "carbon-components-svelte";

    import {browser} from "$app/environment";
    import {PUBLIC_WEB_URL} from "$env/static/public";

    const title = "Le Space - IT & Software Consulting"
    const description = "General IT- and Technology Consulting, Peer Programming Sessions, Remote Work Consulting, Coworking Consultationn"
    const url = "https://le-space.de"
    const image = PUBLIC_WEB_URL+"le-space-ug.png"
    const favicon = "./favicon.ico"
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
<!--        <script async src="https://cozycal.com/embed/v1/9375.js"></script>-->
    {/if}
</svelte:head>

<Header company="Le Space" platformName="IT-Consulting">
    <HeaderNav>
<!--        <HeaderNavItem href="/" text="About" />
        <HeaderNavItem href="/" text="References" />
        <HeaderNavItem href="/" text="Impressum" />-->
    </HeaderNav>
    <HeaderNav>
        <Grid fullWidth>
            <Row>
                <Column>&nbsp;</Column>
                <Column>&nbsp;</Column>
                <Column>&nbsp;</Column>
                <Column></Column>
                <Column>
                    <div style="padding: 15px;">
                        <Theme
                            render="toggle"
                            toggle={{
                            themes: ["g10", "g80"],
                            labelA: "dark mode",
                            labelB: "light mode",
                            hideLabel: true,
                            size: "sm",
                      }}/>
                    </div>
                </Column>
            </Row>
        </Grid>
    </HeaderNav>
</Header>

<slot></slot>
<style>
    .body {
        font-family: "Segoe UI", "Helvetica Neue", sans-serif;
    }
</style>