<script>
    import Hero from "../components/Hero.svelte"
    import {_, isLoading, locale} from "svelte-i18n";
    import {Column, Grid, Row, SideNav, SideNavItems, SideNavLink} from "carbon-components-svelte";
    import Carousel from 'svelte-carousel';
    import CarouselImage from "../components/CarouselImage.svelte";

    import LabWeek2023LibP2P01 from "$lib/assets/2023-labweek-libp2p-01.png"
    import LabWeek2023LibP2P02 from "$lib/assets/2023-labweek-libp2p-02.png"
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

    $:console.log("currentPage",currentPage)
    $:{
      //  document.body.style.backgroundImage = `url(${timeline[currentPage].image})`;
    }
    const timeline = [
        { image: LabWeek2023LibP2P01, year:"2023", headline: "Labweek2023 Istanbul",  location: "Istanbul, Republic of Türkiye", projects: 'Labweek23 Conference', technologies: 'P2PLib, IPFS, Helia'},
        { image: BitcoinCore01, year:"2011", headline: "Rishikesh, India",  location: "Rishikesh, Republic of India", projects: 'Bitcoin evaluation', technologies: 'The Bitcoin Prinziples, Bitcoin Core '},
        { image: KarakorumWorking01, year:"2011", headline: "Silk Road",  location: " Islamic Republic of Pakistan", projects: '-', technologies: 'Cultural competence'},
        { image: CoworkingLeipzig01, year:"2009", headline: "Opening Le Space (beta) Coworking zu Leipzig",  location: "Leipzig, Germany", projects: 'Founding a Coworking Space, Co-Organizing Coworking Week Germany (2010), Joining 1st Coworking Europe Conference (2011), ', technologies: 'Coworking, Bar Camps, Events'},
        { image: VsaJump02, year:"2006", headline: "Java/J2EE development", location: "Munich/Gefrees, Germany", projects: 'Jump CRM/ERP for pharmacies', technologies: 'Java/J2EE, Java Swing, Oracle DB'},
    ]

    function showBackground() {
        console.log("background show")
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
                <Carousel on:pageChange={event => currentPage = event.detail} >
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
    /*:global(.sc-carousel img) {*/
    /*    object-fit: contain; !* or 'cover' depending on your needs *!*/
    /*    height: 100%; !* adjust as needed *!*/
    /*    width: 100%; !* adjust as needed *!*/
    /*}*/
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

<!--<div class="container">-->
<!--    <div class="content">-->
<!--        <Hero/>-->
<!--&lt;!&ndash;        <p>&nbsp;</p>-->
<!--        <p>-->
<!--            In an ever-evolving digital landscape, the way we work and collaborate has transformed significantly.-->
<!--            Le Space has been at the forefront of this transformation since its inception.-->
<!--        </p>&ndash;&gt;-->
<!--        &lt;!&ndash;<p>&nbsp;</p>&ndash;&gt;-->

<!--        <p>&nbsp;</p>-->
<!--        <ul>-->
<!--            <li><strong><span style="color: orange">IT- and Technology Consulting:</span></strong> <br><br>With deep-rooted expertise in a diverse range of technologies, we provide bespoke solutions in the field of software and IT.-->
<!--                Whether you're exploring new tech endeavors or refining existing systems, we are equipped to guide you through the intricacies of the IT world. (more...)</li>-->
<!--            <p>&nbsp;</p>-->
<!--            <li><strong>(New!) <span style="color: orange">Virtual Peer Programming Sessions:</span></strong><br><br>-->
<!--                Beyond traditional IT-consulting, we're proud to introduce our Virtual Peer Programming Sessions <span style="color: orange"><strong> starting in Oktober 2023 with JSDoc and e2e-Tests with Cypress</strong></span>-->
<!--                These are specially designed for programmers and software businesses, to ensure code quality and speed up the project time line. (more...)</li>-->
<!--            <p>&nbsp;</p>-->
<!--&lt;!&ndash;           <li><strong>Remote Work Consulting:</strong>-->
<!--               As remote work becomes a global norm, the challenges it brings to the forefront are equally universal.-->
<!--               At Le Space, we offer strategies to manage, motivate, and coordinate distributed teams, ensuring seamless communication, workflow optimization, and work-life balance for remote employees.</li>-->
<!--            <p>&nbsp;</p>-->
<!--            <li><strong>Coworking Consultation:</strong>-->
<!--                Drawing from our rich history, we offer expert guidance to businesses and individuals on creating efficient and vibrant coworking spaces.-->
<!--                We understand the nuances of space design, community building, and logistical management, ensuring a harmonious blend of productivity and collaboration.</li>-->
<!--            <p>&nbsp;</p>&ndash;&gt;-->
<!--        </ul>-->
<!--    </div>-->
<!--</div>-->
<!--{#if $locale==="de"}-->
<!--    <iframe title="cosyCal" src="https://cozycal.com/it-consulting-de" style="width:100%;min-height:500px;border:none;"></iframe>-->
<!--{:else}-->
<!--    <iframe title="cosyCal" src="https://cozycal.com/le-space?show_embed_modal=1" style="width:100%;min-height:500px;border:none;"></iframe>-->
<!--{/if}-->



