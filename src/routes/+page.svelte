<script>
    import { onMount } from 'svelte';
    import { swipe } from 'svelte-gestures';
    import Hero from "../components/Hero.svelte"
    // import * as allIcons from "@icons-pack/svelte-simple-icons"
    import {_, isLoading, locale} from "svelte-i18n";
    import {Column, Grid, Row, SideNav, SideNavItems, SideNavLink} from "carbon-components-svelte";
    import Carousel from 'svelte-carousel';

    import CarouselImage from "../components/CarouselImage.svelte";

    import LabWeek2023LibP2P01 from "$lib/assets/2023-labweek-libp2p-01.png"
    import Vienna2023Svelte from "$lib/assets/2023-vienna-svelte-02.png"
    import Thailand2022OrbitDB from "$lib/assets/2022-thailand-orbitdb-04.png"

    import BitcoinCore01 from "$lib/assets/bitcoin-core-01.png"
    import CoworkingLeipzig01 from "$lib/assets/coworking-leipzig-01.png";

    import KarakorumWorking01 from "$lib/assets/karakorum-working-01.png";
    import Mallorca2012Loft38Portixol01 from "$lib/assets/2012-LOFT38-01.png"
    import VsaJump07 from "$lib/assets/vsa-jump-07.png";

    let currentPage = 0
    let carousel
    let showImage = true

    function handleKeydown(event) {
        switch (event.key) {
            case 'ArrowRight':
                if (currentPage < timeline.length - 1) {
                    currentPage++;
                    carousel.goTo(currentPage);
                }
                break;
            case 'ArrowLeft':
                if (currentPage > 0) {
                    currentPage--;
                    carousel.goTo(currentPage);
                }
                break;
            case 'Escape':
                hideBackground();
                break;
            case ' ':
                showImage = !showImage
                showImage?hideBackground():showBackground()
                break;
        }
    }

    function showBackground() {
        const bg = document.getElementById('fullscreen-bg');
        bg.style.backgroundImage = `url(${timeline[currentPage].image}})`; // Set to current carousel image
        bg.classList.remove('hidden');
        bg.classList.add('visible');

        const c = document.getElementById('carousel');
        c.classList.remove('visible');
        c.classList.add('hidden');
    }

    function hideBackground() {
        const bg = document.getElementById('fullscreen-bg');
        bg.classList.remove('visible');
        bg.classList.add('hidden');

        const c = document.getElementById('carousel');
        c.classList.remove('hidden');
        c.classList.add('visible');
    }
    function doSwipe(e){
        console.log("doSwipe stuff",e)
    }

    onMount(() => {
        window.addEventListener('keydown', handleKeydown);
        return () => {
            window.removeEventListener('keydown', handleKeydown);
        };
    });

    /**
     * Icons from: https://simpleicons.org/?q=ipfs
     */
    const timeline = [
        { image: LabWeek2023LibP2P01, year: "2023", headline: "Local First Software & Peer-To-Peer", industry:"Blockchain / Crypto Currency", location: "Istanbul, Republic of Türkiye", projects: 'Attending Labweek23 Conference, LibP2P day, IPFSConnect', technologies: 'P2PLib, IPFS, Helia', icons:[{icon:"libp2p"},{icon:"helia.png"},{icon:"ipfs"},{icon:"svelte"},{icon:"typescript"}]},
        { image: Vienna2023Svelte, year: "2023", headline: "Svelte/SvelteKit Development", industry:"Pharmaceutical Industry",  location: "Vienna, Republic of Austria", projects: 'Svelte-UI web app for a scientific platform', technologies: 'Svelte/SvelteKit 4.0, JavaScript, Cypress, Playwright, JSDoc',  icons:[{icon: "javascript"}, {icon:"svelte"}, {icon:"cypress"}, {icon:"coffeescript"}]},
        { image: Thailand2022OrbitDB, year: "2022", headline: "OrbitDB, LibP2P, JS-IPFS / Helia",  industry:"Software Development / IT / Media",  location: "Kingdom of Thailand, Malaysia, Lao People's Democratic Republic", projects: 'Decentralized Peer-to-Peer Blog', technologies: 'ReactJS, JavaScript, Cypress, OrbitDB, libp2p, js-ipfs, NodeJS,',  icons:[{icon:"ipfs"}, {icon:"libp2p"}, {icon:"react"}, {icon:"javascript"}, {icon:"nodedotjs"}, {icon:"docker"}]},
        { image: Mallorca2012Loft38Portixol01 , year:"2012", headline: "Java Swing & Google WebToolkit Development", industry:"Health / Medical", location: "Palma de Mallorca, Spain", projects:"Porting a Java Swing Application to Google WebToolkit", technologies: "Google Web Toolkit, Java Swing, Eclipse", icons:[{icon:"eclipseide"}]},
/*        { image: KarakorumWorking01, year: "2011", headline: "Silk Road Inspirations", location: "Islamic Republic of Pakistan", projects: '-', technologies: 'Cultural Competence'},*/
        { image: BitcoinCore01, year: "2011", headline: "Bitcoin Principles / Groovy & Grails", industry:"IT administration", location: "Rishikesh, Republic of India", projects: 'Bitcoin evaluation, Implementing a activity report web app', technologies: 'The Bitcoin Principles, Bitcoin Core, Groovy & Grails, SQL, MongoDB',icons:[{icon:"bitcoin"}, {icon:"apachegroovy"},{icon:"mongodb"} ]},
        { image: CoworkingLeipzig01, year: "2009", headline: "Opening Le Space (beta) Coworking zu Leipzig", industry:"real estate", location: "Leipzig, Germany", projects: 'Launching a Coworking Space, Co-Organizing Coworking Week Germany (2010), Joining 1st Coworking Europe Conference (2010)', technologies: 'Coworking, Bar Camps, Events'},
        { image: VsaJump07, year: "2006", headline: "Java/J2EE & Java Swing Development", industry:"health / medical", location: "Munich/Gefrees, Germany", projects: 'Jump CRM/ERP for Pharmacies', technologies: 'Java/J2EE, Java Swing, SQL, Oracle DB',  icons:[{icon:"oracle"},{icon:"eclipseide"}]},
    ];

</script>
<div id="fullscreen-bg" class="hidden" on:dblclick={hideBackground}
     use:swipe={{ timeframe: 300, minSwipeDistance: 100}} on:swipe={doSwipe}>
    <img src={timeline[currentPage].image} />
</div>
<Grid class="grid">
    <Row>
        <Column>
            <div on:dblclick={showBackground} role="button" tabindex="0">
                <Hero headline={timeline[currentPage].headline}/>
            </div>
        </Column>
    </Row>
    <Row>
        <Column class="carousel">
            <div id="carousel" class="visible" on:dblclick={showBackground}
                 use:swipe={{ timeframe: 300, minSwipeDistance: 100}} on:swipe={doSwipe}>
                <Carousel bind:this={carousel} on:pageChange={event => currentPage = event.detail} >
                    <CarouselImage css="object-position: 50% 70px" alt="LabWeek2023LibP2P01" src={LabWeek2023LibP2P01} />
                    <CarouselImage css="object-position: 50% 70px" alt="Vienna2023Svelte" src={Vienna2023Svelte} />
                    <CarouselImage css="object-position: 50% 70px" alt="Thailand2022OrbitDB" src={Thailand2022OrbitDB} />
                    <CarouselImage css="object-position: 50% 30px;" alt="Mallorca2012Loft38Portixol01" src={Mallorca2012Loft38Portixol01} />
                    <CarouselImage css="object-position: 50% 30px;" alt="BitcoinCore01" src={BitcoinCore01} />
<!--                    <CarouselImage css="object-position: 50% 30px; " alt="KarakorumWorking01" src={KarakorumWorking01} />-->
                    <CarouselImage css="object-position: 50% 30px" alt="CoworkingLeipzig01" src={CoworkingLeipzig01} />
                    <CarouselImage css="object-position: 50% 150px" alt="VsaJump02" src={VsaJump07} />
                </Carousel>
            </div>
        </Column>
    </Row>
    <Row>
        <Column>
            <div class="info-panel">
                <p>Year: {timeline[currentPage].year}</p>
                <p>Industry: {timeline[currentPage].industry}</p>
                <p>Projects: {timeline[currentPage].projects}</p>
                <p>Tech:  {timeline[currentPage].technologies}</p>
                <p>Location: {timeline[currentPage].location}</p>
            </div>
        </Column>
        <Column>
            <div class="icon-panel">
              {#if timeline[currentPage]?.icons && timeline[currentPage]?.icons.length>0}
                      { #each timeline[currentPage].icons as icon }
                             {#if icon}
                              <img title={icon.icon.indexOf(".")===-1?icon.icon:icon.icon.substring(icon.icon.indexOf(".png"))}
                                   src={icon.icon.indexOf(".")===-1?`/simple-icons/${icon.icon}.svg`:`/simple-icons/${icon.icon}`} style="margin: 0.3rem"
                                                   height="42" width="42" />

                             {/if}
                         {/each}
                {/if}
            </div>
        </Column>
    </Row>
</Grid>
<style>
    #fullscreen-bg img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
    #fullscreen-bg {
        position: fixed;
        top: 0;
        left: 0;
        width: 100vw;
        height: 100vh;
        background-size: cover;
        transition: opacity 0.5s; /* Adjust as needed */
        z-index: 100;
    }
    .hidden {
        opacity: 0;
        display: none;
        pointer-events: none;
    }
    .visible {
        opacity: 1;
        display: block;
        pointer-events: all;
    }
    :global(.sc-carousel__content-container) {
        height: 30rem;
    }
    :global(.carusel) {
        margin-top: 2rem;
    }
    :global(.grid) {
        margin-top: 2rem;
    }
    .info-panel {
        background-color: black;
        color: #0F0; /* Bright green color */
        text-shadow: 0 0 10px #0F0; /* Green glow effect */
        font-family: 'Courier New', monospace; /* Monospaced font for a classic look */
        width: 100%;
        align-content: center;
        margin-left: 2rem;
        margin-right: 10rem;
        padding: 0.5rem;
    }

    .icon-panel {
        margin-left: 2rem;
        margin-right: 10rem;
        padding: 0.5rem;
    }
</style>


<!--{#if $locale==="de"}-->
<!--    <iframe title="cosyCal" src="https://cozycal.com/it-consulting-de" style="width:100%;min-height:500px;border:none;"></iframe>-->
<!--{:else}-->
<!--    <iframe title="cosyCal" src="https://cozycal.com/le-space?show_embed_modal=1" style="width:100%;min-height:500px;border:none;"></iframe>-->
<!--{/if}-->



