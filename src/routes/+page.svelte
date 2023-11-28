<script>
    import { onMount } from 'svelte';
    import { swipe } from 'svelte-gestures';
    import Hero from "../components/Hero.svelte"
    import * as allIcons from "@icons-pack/svelte-simple-icons"
    import {_, isLoading, locale} from "svelte-i18n";
    import {Column, Grid, Row, SideNav, SideNavItems, SideNavLink} from "carbon-components-svelte";
    import Carousel from 'svelte-carousel';
    import {
        Ipfs,
        Oracle,
        Svelte,
        Javascript,
        Cypress,
        Python,
        C,
        React,
        Eclipseide, Bitcoin, Docker
    } from '@icons-pack/svelte-simple-icons';
    import CarouselImage from "../components/CarouselImage.svelte";

    import LabWeek2023LibP2P01 from "$lib/assets/2023-labweek-libp2p-01.png"
    import Vienna2023Svelte from "$lib/assets/2023-vienna-svelte-02.png"
    import Thailand2022OrbitDB from "$lib/assets/2022-thailand-orbitdb-04.png"

    import BitcoinCore01 from "$lib/assets/bitcoin-core-01.png"
    import CoworkingLeipzig01 from "$lib/assets/coworking-leipzig-01.png";

    import KarakorumWorking01 from "$lib/assets/karakorum-working-01.png";
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
        { image: LabWeek2023LibP2P01, year: "2023", headline: "Local First Software & Peer-To-Peer", location: "Istanbul, Republic of Türkiye", projects: 'Labweek23 Conference', technologies: 'P2PLib, IPFS, Helia', icons:[{icon:Ipfs,color:"#65C2CB"},{icon:Svelte,color:"#FF3E00"}]},
        { image: Vienna2023Svelte, year: "2023", headline: "Svelte/SvelteKit Development", location: "Vienna, Republic of Austria", projects: 'Svelte-UI Frontend for a Scientific Pharmaceutical Platform', technologies: 'Svelte/SvelteKit 4.0, JavaScript, Cypress, Playwright, JSDoc',  icons:[{icon: Javascript,color:"##F7DF1E"},{icon:Svelte, color:"#FF3E00"}, {icon:Cypress, color:"#17202C"}]},
        { image: Thailand2022OrbitDB, year: "2022", headline: "OrbitDB, LibP2P, JS-IPFS / Helia", location: "Kingdom of Thailand, Malaysia, Lao People's Democratic Republic", projects: 'Decentralized Peer-to-Peer Blog', technologies: 'ReactJS, JavaScript, Cypress, OrbitDB, libp2p, js-ipfs',  icons:[{icon:Ipfs,color:"#65C2CB"},{icon:React,color:"#61DAFB"}, {icon:Javascript, color:"#F7DF1E"}, {icon:Docker, color:"#2496ED"}]},
        { image: BitcoinCore01, year: "2011", headline: "Bitcoin Principles", location: "Rishikesh, Republic of India", projects: 'Bitcoin evaluation', technologies: 'The Bitcoin Principles, Bitcoin Core',icons:[{icon:Bitcoin,color:"#F7931A"}]},
        { image: KarakorumWorking01, year: "2011", headline: "Silk Road Inspirations", location: "Islamic Republic of Pakistan", projects: '-', technologies: 'Cultural Competence'},
        { image: CoworkingLeipzig01, year: "2009", headline: "Opening Le Space (beta) Coworking zu Leipzig", location: "Leipzig, Germany", projects: 'Launching a Coworking Space, Co-Organizing Coworking Week Germany (2010), Joining 1st Coworking Europe Conference (2010)', technologies: 'Coworking, Bar Camps, Events'},
        { image: VsaJump07, year: "2006", headline: "Java/J2EE Development", location: "Munich/Gefrees, Germany", projects: 'Jump CRM/ERP for Pharmacies', technologies: 'Java/J2EE, Java Swing, Oracle DB',  icons:[{icon:Oracle,color:"#F80000"},{icon:Eclipseide,color:"#2C2255"}]},
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
                    <CarouselImage css="object-position: 50% 30px;" alt="BitcoinCore01" src={BitcoinCore01} />
                    <CarouselImage css="object-position: 50% 30px; " alt="KarakorumWorking01" src={KarakorumWorking01} />
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
                <p>Location: {timeline[currentPage].location}</p>
                <p>Projects: {timeline[currentPage].projects}</p>
                <p>Tech:  {timeline[currentPage].technologies}</p>
            </div>
        </Column>
        <Column>
            <div class="icon-panel">
              {#if timeline[currentPage]?.icons && timeline[currentPage]?.icons.length>0}
                      { #each timeline[currentPage].icons as icon }
                             {#if icon && icon?.icon && icon?.color}
                                 <svelte:component this={icon?.icon || ''}
                                                   color={icon?.color || ''}
                                                   style={'margin:10px'}/>
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



