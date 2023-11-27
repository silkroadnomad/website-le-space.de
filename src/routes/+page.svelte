<script>
    import { onMount } from 'svelte';
    import Hero from "../components/Hero.svelte"
    import {_, isLoading, locale} from "svelte-i18n";
    import {Column, Grid, Row, SideNav, SideNavItems, SideNavLink} from "carbon-components-svelte";
    import Carousel from 'svelte-carousel';
    import CarouselImage from "../components/CarouselImage.svelte";

    import LabWeek2023LibP2P01 from "$lib/assets/2023-labweek-libp2p-01.png"
    import Vienna2023Svelte from "$lib/assets/2023-vienna-svelte-02.png"

    import AloneWorkingGoaSunsetMediation01 from "$lib/assets/alone-working-goa-sunset-mediation-01.png";
    import AloneWorkingGoaSunsetMediation02 from "$lib/assets/alone-working-goa-sunset-mediation-02.png";
    import BitcoinCore01 from "$lib/assets/bitcoin-core-01.png"

    import BuenosAiresCoworking01 from "$lib/assets/buenos-aires-coworking-01.png";
    import BuenosAiresCoworking02 from "$lib/assets/buenos-aires-coworking-02.png";
    import CoworkingBali01 from "$lib/assets/coworking-bali-01.png";
    import CoworkingBali02 from "$lib/assets/coworking-bali-02.png";
    import CoworkingEkb01 from "$lib/assets/coworking-ekb-01.png";
    import CoworkingEkb02 from "$lib/assets/coworking-ekb-02.png";
    import CoworkingGoa01 from "$lib/assets/coworking-goa-01.png";
    import CoworkingGoa02 from "$lib/assets/coworking-goa-02.png";
    import CoworkingGoaSunsetMediation01 from "$lib/assets/coworking-goa-sunset-mediation-01.png";
    import CoworkingGoaSunsetMediation02 from "$lib/assets/coworking-goa-sunset-mediation-02.png";
    import CoworkingLeipzig01 from "$lib/assets/coworking-leipzig-01.png";
    import CoworkingLeipzig02 from "$lib/assets/coworking-leipzig-02.png";
    import CoworkingLeipzigFuture01 from "$lib/assets/coworking-leipzig-future-01.png";
    import CoworkingLeipzigFuture02 from "$lib/assets/coworking-leipzig-future-02.png";
    import JungleWorking01 from "$lib/assets/jungle-working-01.png";
    import JungleWorking02 from "$lib/assets/jungle-working-02.png";
    import KarakorumWorking01 from "$lib/assets/karakorum-working-01.png";
    import KarakorumWorking02 from "$lib/assets/karakorum-working-02.png";
    import VsaJump01 from "$lib/assets/vsa-jump-01.png";
    import VsaJump02 from "$lib/assets/vsa-jump-02.png";
    import VsaJump03 from "$lib/assets/vsa-jump-03.png";
    import VsaJump04 from "$lib/assets/vsa-jump-04.png";
    import VsaJump05 from "$lib/assets/vsa-jump-05.png";
    import VsaJump06 from "$lib/assets/vsa-jump-06.png";
    import Webrtc01 from "$lib/assets/webrtc-01.png";
    import Webrtc02 from "$lib/assets/webrtc-02.png";
    import Webrtc03 from "$lib/assets/webrtc-03.png";
    import Webrtc04 from "$lib/assets/webrtc-04.png";
    import Webrtc05 from "$lib/assets/webrtc-05.png";
    import Webrtc06 from "$lib/assets/webrtc-06.png";

    let currentPage = 0
    let carousel
    let showImage
    const timeline = [
        { image: LabWeek2023LibP2P01, year:"2023", headline: "Labweek2023 Istanbul",  location: "Istanbul, Republic of Türkiye", projects: 'Labweek23 Conference', technologies: 'P2PLib, IPFS, Helia'},
        { image: Vienna2023Svelte, year:"2023", headline: "Svelte in Vienna, Austria",  location: "Istanbul, Republic of Türkiye", projects: 'Labweek23 Conference', technologies: 'P2PLib, IPFS, Helia'},

        { image: BitcoinCore01, year:"2011", headline: "Rishikesh, India",  location: "Rishikesh, Republic of India", projects: 'Bitcoin evaluation', technologies: 'The Bitcoin Principles, Bitcoin Core '},
        { image: KarakorumWorking01, year:"2011", headline: "Silk Road",  location: " Islamic Republic of Pakistan", projects: '-', technologies: 'Cultural competence'},
        { image: CoworkingLeipzig01, year:"2009", headline: "Opening Le Space (beta) Coworking zu Leipzig",  location: "Leipzig, Germany", projects: 'Founding a Coworking Space, Co-Organizing Coworking Week Germany (2010), Joining 1st Coworking Europe Conference (2010), ', technologies: 'Coworking, Bar Camps, Events'},
        { image: VsaJump02, year:"2006", headline: "Java/J2EE development", location: "Munich/Gefrees, Germany", projects: 'Jump CRM/ERP for pharmacies', technologies: 'Java/J2EE, Java Swing, Oracle DB'},
    ]

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


    onMount(() => {
        window.addEventListener('keydown', handleKeydown);
        return () => {
            window.removeEventListener('keydown', handleKeydown);
        };
    });
</script>
<div id="fullscreen-bg" class="hidden" on:dblclick={hideBackground}>
    <img src={timeline[currentPage].image} />
</div>
<Grid class="grid">
    <Row>
        <Column>
            <div on:dblclick={showBackground}  role="button" tabindex="0">
                <Hero/>
            </div>
        </Column>
    </Row>
    <Row>
        <Column class="carousel">
            <div id="carousel" class="visible" >
                <Carousel bind:this={carousel} on:pageChange={event => currentPage = event.detail} >
                    <CarouselImage css="object-position: 50% 70px" alt="LabWeek2023LibP2P01" src={LabWeek2023LibP2P01} />
                    <CarouselImage css="object-position: 50% 30px;" alt="BitcoinCore01" src={BitcoinCore01} />
                    <CarouselImage css="object-position: 50% 30px; " alt="KarakorumWorking01" src={KarakorumWorking01} />
                    <CarouselImage css="object-position: 50% 30px" alt="CoworkingLeipzig01" src={CoworkingLeipzig01} />
                    <CarouselImage css="object-position: 50% 150px" alt="VsaJump02" src={VsaJump02} />
                </Carousel>
            </div>

            <div class="info-panel">
                <p>Year: {timeline[currentPage].year}</p>
                <p>Location: {timeline[currentPage].location}</p>
                <p>Projects: {timeline[currentPage].projects}</p>
                <p>Tech:  {timeline[currentPage].technologies}</p>
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
        margin-top: 6rem;
    }

    .info-panel {
        background-color: black;
        color: #0F0; /* Bright green color */
        text-shadow: 0 0 10px #0F0; /* Green glow effect */
        font-family: 'Courier New', monospace; /* Monospaced font for a classic look */
        width: 30%;
        align-content: center;
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



