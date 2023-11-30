<script>
    import { onMount } from 'svelte';
    import { fly } from 'svelte/transition';
    import Hero from "../components/Hero.svelte"
    import { swipe } from 'svelte-gestures';
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
    let direction;
    function doSwipe(e){
        direction = e.detail.direction;
        console.log("doSwipe direction",direction)
        hideBackground()
    }

    onMount(() => {
        window.addEventListener('keydown', handleKeydown);
        return () => {
            window.removeEventListener('keydown', handleKeydown);
        };
    });

    function getIconDetails(icon) {
        console.log("icon",icon)
        const [name, extension = 'svg'] = icon.split('.');
        console.log("name",name)
        console.log("extension",extension   )
        return { name, extension };
    }

    /**
     * Icons from: https://simpleicons.org/?q=ipfs
     */
    const timeline = [
        { image: LabWeek2023LibP2P01, year: "2023", headline: "Local First Software & Peer-To-Peer", industry:"Blockchain / Crypto Currency", location: "Istanbul, Republic of Türkiye", projects: 'Attending Labweek23 Conference, LibP2P day, IPFSConnect', technologies: 'P2PLib, IPFS, Helia', icons:[{icon:"libp2p", url: "https://libp2p.io/"}, {icon:"helia.png", url: "https://helia.io/"}, {icon:"ipfs", url: "https://ipfs.io/"}, {icon:"svelte", url: "https://svelte.dev/"},{icon:"typescript", url: "https://www.typescriptlang.org/"}]},
        { image: Vienna2023Svelte, year: "2023", headline: "Svelte/SvelteKit Development", industry:"Pharmaceutical Industry",  location: "Vienna, Republic of Austria", projects: 'Svelte-UI web app for a scientific platform', technologies: 'Svelte/SvelteKit 4.0, JavaScript, Cypress, Playwright, JSDoc',  icons:[{icon: "javascript", url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript"}, {icon:"svelte", url: "https://svelte.dev/"}, {icon:"cypress", url: "https://www.cypress.io/"}, {icon:"coffeescript", url: "https://coffeescript.org/"}, {icon:"intellijidea", url: "https://www.jetbrains.com/idea/"}]},
        { image: Thailand2022OrbitDB, year: "2022", headline: "OrbitDB, LibP2P, JS-IPFS / Helia",  industry:"Software Development / IT / Media",  location: "Kingdom of Thailand, Malaysia, Lao People's Democratic Republic", projects: 'Decentralized Peer-to-Peer Blog', technologies: 'ReactJS, JavaScript, Cypress, OrbitDB, libp2p, js-ipfs, NodeJS,',  icons:[{icon:"ipfs", url: "https://ipfs.io/"}, {icon:"libp2p", url: "https://libp2p.io/"}, {icon:"react", url: "https://reactjs.org/"}, {icon:"javascript", url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript"},{icon:"nginx", url: "https://docs.nginx.com/"}, {icon:"nodedotjs", url: "https://nodejs.org/en/"}, {icon:"metamask.png",url:"https://metamask.io"}, {icon:"docker", url: "https://www.docker.com/"}, {icon:"web3dotjs", url: "https://web3js.org/"}, {icon:"letsencrypt", url: "https://www.letsencrypt.org/"} , {icon:"openssl", url: "https://www.openssl.org/"}  ]},
        { image: Mallorca2012Loft38Portixol01 , year:"2012", headline: "Java Swing & Google WebToolkit Development", industry:"Health / Medical", location: "Palma de Mallorca, Spain", projects:"Porting a Java Swing Application to Google WebToolkit", technologies: "Google Web Toolkit, Java Swing, Eclipse", icons:[{icon:"gwt.png", url: "https://www.gwtproject.org/"},{icon:"java", url: "https://www.java.com/"},{icon:"oracle", url: "https://www.oracle.com/index.html"},{icon:"eclipseide", url: "https://www.eclipse.org/ide/"}]},
        { image: BitcoinCore01, year: "2011", headline: "Bitcoin Principles / Groovy & Grails", industry:"IT administration", location: "Rishikesh, Republic of India", projects: 'Bitcoin evaluation, Implementing a activity report web app', technologies: 'The Bitcoin Principles, Bitcoin Core, Groovy & Grails, SQL, MongoDB',icons:[{icon:"bitcoin", url: "https://bitcoin.org/"}, {icon:"grails", url: "https://grails.org/"}, {icon:"apachegroovy", url: "https://groovy-lang.org/"},{icon:"mongodb", url: "https://www.mongodb.com/"},{icon:"selenium", url:"https://www.selenium.dev/"} ]},
        { image: KarakorumWorking01, year: "2011", headline: "travelling to world", industry:"Sabbatical Industry",  location: "Islamic Republic of Pakistan", projects: 'Studies of world history, Gaining Cultural Competence', technologies: 'humility & openness' ,icons: [{ icon: "nusrat-fateh-ali-khan.jpg", url: "https://youtu.be/d7AqPH-LgmI"}]},
        { image: CoworkingLeipzig01, year: "2009", headline: "Opening Le Space (beta) Coworking zu Leipzig", industry:"real estate", location: "Leipzig, Germany", projects: 'Launching a Coworking Space, Co-Organizing Coworking Week Germany (2010), Joining 1st Coworking Europe Conference (2010)', technologies: 'Coworking, Bar Camps, Events', icons:[{icon:"mdr.png",url:"https://www.mdr.de/tv/"},{icon:"mdr-info",url:"https://www.mdr.de/mdr-aktuell-nachrichtenradio"},{icon:"kreuzer-leipzig.jpg",url:"https://kreuzer-leipzig.de/"},{icon:"lvz.jpg",url:"https://www.lvz.de"},{icon:"dnn.jpg",url:"https://www.dnn.de/"}]},
        { image: VsaJump07, year: "2006", headline: "Java/J2EE & Java Swing Development", industry:"health / medical", location: "Munich/Gefrees, Germany", projects: 'Jump CRM/ERP for Pharmacies', technologies: 'Java/J2EE, Java Swing, SQL, Oracle DB',  icons:[{icon:"java", url: "https://www.java.com/"},{icon:"oracle", url: "https://www.oracle.com/index.html"},{icon:"eclipseide", url: "https://www.eclipse.org/ide/"}]},
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
            <div id="carousel" class="visible" on:dblclick={showBackground}>
                <Carousel bind:this={carousel} on:pageChange={event => currentPage = event.detail} >
                    <CarouselImage css="object-position: 50% 70px" alt="LabWeek2023LibP2P01" src={LabWeek2023LibP2P01}>
                        <button class="buy-nft" on:click={() => window.open('https://opensea.io/assets/your-nft-link', '_blank')} transition:fly={{ y: 800, duration: 500 }}>Buy as NFT</button>
                    </CarouselImage>
                    <CarouselImage css="object-position: 50% 70px" alt="Vienna2023Svelte" src={Vienna2023Svelte}>
                        <button class="buy-nft" on:click={() => window.open('https://opensea.io/assets/your-nft-link', '_blank')} transition:fly={{ y: 200, duration: 500 }}>Buy as NFT</button>
                    </CarouselImage>
                    <CarouselImage css="object-position: 50% 70px" alt="Thailand2022OrbitDB" src={Thailand2022OrbitDB}>
                        <button class="buy-nft" on:click={() => window.open('https://opensea.io/assets/your-nft-link', '_blank')} transition:fly={{ y: 200, duration: 500 }}>Buy as NFT</button>
                    </CarouselImage>
                    <CarouselImage css="object-position: 50% 30px;" alt="Mallorca2012Loft38Portixol01" src={Mallorca2012Loft38Portixol01}>
                        <button class="buy-nft" on:click={() => window.open('https://opensea.io/assets/your-nft-link', '_blank')} transition:fly={{ y: 200, duration: 500 }}>Buy as NFT</button>
                    </CarouselImage>
                    <CarouselImage css="object-position: 50% 30px;" alt="BitcoinCore01" src={BitcoinCore01}>
                        <button class="buy-nft" on:click={() => window.open('https://opensea.io/assets/your-nft-link', '_blank')} transition:fly={{ y: 200, duration: 500 }}>Buy as NFT</button>
                    </CarouselImage>
                    <CarouselImage css="object-position: 50% 30px; " alt="KarakorumWorking01" src={KarakorumWorking01}>
                        <button class="buy-nft" on:click={() => window.open('https://opensea.io/assets/your-nft-link', '_blank')} transition:fly={{ y: 200, duration: 500 }}>Buy as NFT</button>
                    </CarouselImage>
                    <CarouselImage css="object-position: 50% 30px" alt="CoworkingLeipzig01" src={CoworkingLeipzig01}>
                        <button class="buy-nft" on:click={() => window.open('https://opensea.io/assets/your-nft-link', '_blank')} transition:fly={{ y: 200, duration: 500 }}>Buy as NFT</button>
                    </CarouselImage>
                    <CarouselImage css="object-position: 50% 150px" alt="VsaJump02" src={VsaJump07}>
                        <button class="buy-nft" on:click={() => window.open('https://opensea.io/assets/your-nft-link', '_blank')} transition:fly={{ y: 200, duration: 500 }}>Buy as NFT</button>
                    </CarouselImage>
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
                              <a href={icon.url} target="_blank">
                                  <img title={getIconDetails(icon.icon).name}
                                       src={`/simple-icons/${getIconDetails(icon.icon).name}.${getIconDetails(icon.icon).extension}`}
                                       style="margin: 0.3rem"
                                       height="42"  />
                              </a>
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

    .buy-nft {
        position: absolute;
        margin: 100px;
        padding: 10px;
        width: 100px;
        transform: translateX(-50%);
        background-color: #0070f3;
        color: #fff;
        border: none;
        border-radius: 5px;
        cursor: pointer;
        opacity: 0;
        transition: opacity 0.3s;
        z-index: 2;

    }
    /** enable when going live with NFT*/
    :global(.carousel-image:hover .buy-nft) {
        opacity: 0;
    }
</style>


<!--{#if $locale==="de"}-->
<!--    <iframe title="cosyCal" src="https://cozycal.com/it-consulting-de" style="width:100%;min-height:500px;border:none;"></iframe>-->
<!--{:else}-->
<!--    <iframe title="cosyCal" src="https://cozycal.com/le-space?show_embed_modal=1" style="width:100%;min-height:500px;border:none;"></iframe>-->
<!--{/if}-->



