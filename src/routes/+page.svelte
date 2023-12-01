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
    import CoworkingGoaSunsetMediation01 from "$lib/assets/coworking-goa-sunset-mediation-01.png"
    import KarakorumWorking01 from "$lib/assets/karakorum-working-01.png";
    import Mallorca2012Loft38Portixol01 from "$lib/assets/2012-LOFT38-01.png"
    import VsaJump07 from "$lib/assets/vsa-jump-07.png";

    let currentPage = 0
    let carousel
    let showImage = true

    function goRight() {
        if (currentPage < timeline.length - 1) {
            currentPage++;
            carousel.goTo(currentPage);
        }
    }

    function goLeft() {
        if (currentPage > 0) {
            currentPage--;
            carousel.goTo(currentPage);
        }
    }

    function handleKeydown(event) {
        switch (event.key) {
            case 'ArrowRight':
                goRight();
                break;
            case 'ArrowLeft':
                goLeft();
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
        switch (direction) {
            case 'right':
                goLeft();
                break;
            case 'left':
                goRight();
                break;
            default:
                showImage = !showImage
                    showImage?hideBackground():showBackground()
        }
    }

    onMount(() => {
        window.addEventListener('keydown', handleKeydown);
        return () => {
            window.removeEventListener('keydown', handleKeydown);
        };
    });

    function getIconDetails(icon) {
        const [name, extension = 'svg'] = icon.split('.');
        return { name, extension };
    }

    // <!--{#if $locale==="de"}-->
    // <!--    <iframe title="cosyCal" src="https://cozycal.com/it-consulting-de" style="width:100%;min-height:500px;border:none;"></iframe>-->
    // <!--{:else}-->
    // <!--    <iframe title="cosyCal" src="https://cozycal.com/le-space?show_embed_modal=1" style="width:100%;min-height:500px;border:none;"></iframe>-->
    // <!--{/if}-->
    /**
     * Icons from: https://simpleicons.org/?q=ipfs
     */
    let timeline = [];
    let timeline_en = [
        { image: LabWeek2023LibP2P01, year: "2023", headline: "Local First Software & Peer-To-Peer Development", industry:"Blockchain / Peer-To-Peer", location: "Istanbul, Republic of Türkiye", projects: 'Attending Labweek23 Conference, LibP2P day, IPFSConnect', technologies: 'P2PLib, IPFS, Helia', icons:[{icon:"libp2p", url: "https://libp2p.io/"}, {icon:"helia.png", url: "https://helia.io/"}, {icon:"ipfs", url: "https://ipfs.io/"}, {icon:"svelte", url: "https://svelte.dev/"},{icon:"typescript", url: "https://www.typescriptlang.org/"}]},
        { image: Vienna2023Svelte, year: "2023", headline: "Svelte/SvelteKit Development", industry:"Pharmaceutical Industry",  location: "Vienna, Republic of Austria", projects: 'Svelte web app for a scientific research platform', technologies: 'Svelte/SvelteKit 4.0, JavaScript, Cypress, Playwright, JSDoc',  icons:[{icon: "javascript", url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript"}, {icon:"svelte", url: "https://svelte.dev/"}, {icon:"cypress", url: "https://www.cypress.io/"}, {icon:"coffeescript", url: "https://coffeescript.org/"}, {icon:"intellijidea", url: "https://www.jetbrains.com/idea/"}]},
        { image: Thailand2022OrbitDB, year: "2022", headline: "OrbitDB, LibP2P, JS-IPFS / Helia",  industry:"Blockchain / Peer-To-Peer Development / IT / Media",  location: "Kingdom of Thailand, Malaysia, Lao People's Democratic Republic", projects: 'Decentralized Peer-to-Peer Blog', technologies: 'ReactJS, JavaScript, Cypress, OrbitDB, libp2p, js-ipfs, NodeJS,',  icons:[{icon:"ipfs", url: "https://ipfs.io/"}, {icon:"libp2p", url: "https://libp2p.io/"}, {icon:"react", url: "https://reactjs.org/"}, {icon:"javascript", url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript"},{icon:"nginx", url: "https://docs.nginx.com/"}, {icon:"nodedotjs", url: "https://nodejs.org/en/"}, {icon:"metamask.png",url:"https://metamask.io"}, {icon:"docker", url: "https://www.docker.com/"}, {icon:"web3dotjs", url: "https://web3js.org/"}, {icon:"letsencrypt", url: "https://www.letsencrypt.org/"} , {icon:"openssl", url: "https://www.openssl.org/"}  ]},
        { image: CoworkingGoaSunsetMediation01 , year:"2013-2016", headline: "Remote.Yoga Startup / Akashionata", industry:"Health", location: "Agonda, Goa, Republic Indien", projects:"video & audio educational platform for yoga students and yoga teacher (mobile & web)", technologies: "MeteorJS, WebRTC, Apache-Cordoba, React-Native, Android, iOS", icons:[{icon:"webrtc", url: "https://webrtc.org/"},{icon:"android.png", url:"https://www.android.com/"},{icon:"ios.png", url:"https://www.apple.com/ios"},{icon:"meteor", url: "https://www.meteor.com/"},{icon:"javascript", url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript"},{icon:"apachecordova", url: "https://cordova.apache.org/"},{icon:"intellijidea", url: "https://www.jetbrains.com/idea/"}]},
        { image: Mallorca2012Loft38Portixol01 , year:"2012", headline: "Java Swing & Google WebToolkit Development", industry:"Finance", location: "Palma de Mallorca, Spain", projects:"Porting a Java Swing Application to Google WebToolkit", technologies: "Google Web Toolkit, Java Swing, Eclipse", icons:[{icon:"gwt.png", url: "https://www.gwtproject.org/"},{icon:"java", url: "https://www.java.com/"},{icon:"oracle", url: "https://www.oracle.com/index.html"},{icon:"eclipseide", url: "https://www.eclipse.org/ide/"}]},
        { image: BitcoinCore01, year: "2011", headline: "The Bitcoin Principles / Groovy & Grails Development", industry:"Crypto Currencies, Blockchain, IT administration", location: "Rishikesh, Republic of India", projects: 'Bitcoin evaluation, Implementing a activity report web app', technologies: 'The Bitcoin Principles, Bitcoin Core, Groovy & Grails, SQL, MongoDB',icons:[{icon:"bitcoin", url: "https://bitcoin.org/"}, {icon:"grails", url: "https://grails.org/"}, {icon:"apachegroovy", url: "https://groovy-lang.org/"},{icon:"mongodb", url: "https://www.mongodb.com/"},{icon:"selenium", url:"https://www.selenium.dev/"} ]},
        { image: KarakorumWorking01, year: "2011", headline: "Travelling The Silk Road", industry:"Sabbatical Industry",  location: "Islamic Republic of Pakistan", projects: 'Studies of world history, Gaining Cultural Competence', technologies: 'humility & openness' ,icons: [{ icon: "nusrat-fateh-ali-khan.jpg", url: "https://youtu.be/d7AqPH-LgmI"}]},
        { image: CoworkingLeipzig01, year: "2009", headline: "Launching Le Space (beta) Coworking zu Leipzig", industry:"office rental / marketing / networking / education", location: "Leipzig, Germany", projects: 'Launching a Coworking Space, Co-Organizing Coworking Week Germany (2010), Joining 1st Coworking Europe Conference (2010)', technologies: 'Coworking, Bar Camps, Events', icons:[{icon:"mdr.png",url:"https://www.mdr.de/tv/"},{icon:"mdr-info",url:"https://www.mdr.de/mdr-aktuell-nachrichtenradio"},{icon:"kreuzer-leipzig.jpg",url:"https://kreuzer-leipzig.de/"},{icon:"lvz.jpg",url:"https://www.lvz.de"},{icon:"dnn.jpg",url:"https://www.dnn.de/"}]},
        { image: VsaJump07, year: "2006", headline: "Java/J2EE & Java Swing Development", industry:"health / medical", location: "Munich/Gefrees, Germany", projects: 'Jump CRM/ERP for Pharmacies', technologies: 'Java/J2EE, Java Swing, SQL, Oracle DB',  icons:[{icon:"java", url: "https://www.java.com/"},{icon:"oracle", url: "https://www.oracle.com/index.html"},{icon:"eclipseide", url: "https://www.eclipse.org/ide/"}]},
    ];

    const timeline_de = [
        { image: LabWeek2023LibP2P01, year: "2023", headline: "Local First Software & Peer-To-Peer-Entwicklung", industry:"Blockchain / Peer-To-Peer", location: "Istanbul, Republik Türkei", projects: 'Teilnahme an der Labweek23-Konferenz, LibP2P-Tag, IPFSConnect', technologies: 'P2PLib, IPFS, Helia', icons:[{icon:"libp2p", url: "https://libp2p.io/"}, {icon:"helia.png", url: "https://helia.io/"}, {icon:"ipfs", url: "https://ipfs.io/"}, {icon:"svelte", url: "https://svelte.dev/"},{icon:"typescript", url: "https://www.typescriptlang.org/"}]},
        { image: Vienna2023Svelte, year: "2023", headline: "Svelte/SvelteKit-Entwicklung", industry:"Pharmaindustrie",  location: "Wien, Republik Österreich", projects: 'Svelte Web-App für eine wissenschaftliche Plattform', technologies: 'Svelte/SvelteKit 4.0, JavaScript, Cypress, Playwright, JSDoc',  icons:[{icon: "javascript", url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript"}, {icon:"svelte", url: "https://svelte.dev/"}, {icon:"cypress", url: "https://www.cypress.io/"}, {icon:"coffeescript", url: "https://coffeescript.org/"}, {icon:"intellijidea", url: "https://www.jetbrains.com/idea/"}]},
        { image: Thailand2022OrbitDB, year: "2022", headline: "OrbitDB, LibP2P, JS-IPFS / Helia",  industry:"Blockchain / Peer-To-Peer-Entwicklung / IT / Medien",  location: "Königreich Thailand, Malaysia, Demokratische Volksrepublik Laos", projects: 'Dezentraler Peer-to-Peer-Blog', technologies: 'ReactJS, JavaScript, Cypress, OrbitDB, libp2p, js-ipfs, NodeJS,',  icons:[{icon:"ipfs", url: "https://ipfs.io/"}, {icon:"libp2p", url: "https://libp2p.io/"}, {icon:"react", url: "https://reactjs.org/"}, {icon:"javascript", url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript"},{icon:"nginx", url: "https://docs.nginx.com/"}, {icon:"nodedotjs", url: "https://nodejs.org/en/"}, {icon:"metamask.png",url:"https://metamask.io"}, {icon:"docker", url: "https://www.docker.com/"}, {icon:"web3dotjs", url: "https://web3js.org/"}, {icon:"letsencrypt", url: "https://www.letsencrypt.org/"} , {icon:"openssl", url: "https://www.openssl.org/"}  ]},
        { image: CoworkingGoaSunsetMediation01 , year:"2013-2016", headline: "Remote.Yoga Startup / Akashionata", industry:"Health", location: "Agonda, Goa, Republik Indien", projects:"Video/Audio Bildungsplatform für Yogalehrer und Yogaschüler (Mobile & Web)", technologies: "MeteorJS, WebRTC, Apache-Cordoba, React-Native, Android, iOS", icons:[{icon:"webrtc", url: "https://webrtc.org/"},{icon:"android.png", url:"https://www.android.com/"},{icon:"ios.png", url:"https://www.apple.com/ios"},{icon:"meteor", url: "https://www.meteor.com/"},{icon:"javascript", url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript"},{icon:"apachecordova", url: "https://cordova.apache.org/"},{icon:"intellijidea", url: "https://www.jetbrains.com/idea/"}]},
        { image: Mallorca2012Loft38Portixol01 , year:"2012", headline: "Java Swing & Google WebToolkit-Entwicklung", industry:"Finanzindustrie / Fond management", location: "Palma de Mallorca, Spanien", projects:"Portierung einer Java Swing-Anwendung auf Google WebToolkit", technologies: "Google Web Toolkit, Java Swing, Eclipse", icons:[{icon:"gwt.png", url: "https://www.gwtproject.org/"},{icon:"java", url: "https://www.java.com/"},{icon:"oracle", url: "https://www.oracle.com/index.html"},{icon:"eclipseide", url: "https://www.eclipse.org/ide/"}]},
        { image: BitcoinCore01, year: "2011", headline: "Die Bitcoin-Prinzipien / Groovy & Grails-Entwicklung", industry:"Kryptowährungen, Blockchain, IT-Verwaltung", location: "Rishikesh, Republik Indien", projects: 'Bitcoin-Evaluierung, Implementierung einer Tätigkeitsberichts-Web-Applikation für IT-Techniker', technologies: 'Die Bitcoin-Prinzipien, Bitcoin Core, Groovy & Grails, SQL, MongoDB',icons:[{icon:"bitcoin", url: "https://bitcoin.org/"}, {icon:"grails", url: "https://grails.org/"}, {icon:"apachegroovy", url: "https://groovy-lang.org/"},{icon:"mongodb", url: "https://www.mongodb.com/"},{icon:"selenium", url:"https://www.selenium.dev/"} ]},
        { image: KarakorumWorking01, year: "2011", headline: "Reality-Check Seidenstraße", industry:"Sabbatical Industry",  location: "Islamische Republik Pakistan", projects: 'Studien zur Weltgeschichte, Interkulturelle Kompetenz erwerben', technologies: 'Bescheidenheit & Offenheit' ,icons: [{ icon: "nusrat-fateh-ali-khan.jpg", url: "https://youtu.be/d7AqPH-LgmI"}]},
        { image: CoworkingLeipzig01, year: "2009", headline: "Eröffnung Le Space (beta) Coworking zu Leipzig", industry:"Vermietung / Marketing / Netzwerk / Bildung", location: "Leipzig, Deutschland", projects: 'Gründung eines Coworking Space, Mitorganisation der Coworking Week Germany (2010), Teilnahme an der 1. Coworking Europe Conference in Brüssel (2010)', technologies: 'Coworking, Bar Camps, Events', icons:[{icon:"mdr.png",url:"https://www.mdr.de/tv/"},{icon:"mdr-info",url:"https://www.mdr.de/mdr-aktuell-nachrichtenradio"},{icon:"kreuzer-leipzig.jpg",url:"https://kreuzer-leipzig.de/"},{icon:"lvz.jpg",url:"https://www.lvz.de"},{icon:"dnn.jpg",url:"https://www.dnn.de/"}]},
        { image: VsaJump07, year: "2006", headline: "Java/J2EE & Java Swing Entwicklung", industry:"Gesundheit / Medizin", location: "München/Gefrees, Deutschland", projects: 'Jump CRM/ERP für Apotheken', technologies: 'Java/J2EE, Java Swing, SQL, Oracle DB',  icons:[{icon:"java", url: "https://www.java.com/"},{icon:"oracle", url: "https://www.oracle.com/index.html"},{icon:"eclipseide", url: "https://www.eclipse.org/ide/"}]},
    ];

    $:$locale==="de"?timeline=timeline_de:timeline=timeline_en
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
            <div id="carousel" class="visible" on:dblclick={showBackground}  use:swipe={{ timeframe: 300, minSwipeDistance: 100}} on:swipe={doSwipe}>
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
                    <CarouselImage css="object-position: 50% 30px;" alt="CoworkingGoaSunsetMediation01" src={CoworkingGoaSunsetMediation01}>
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
                <table>
                    <tr><td>{$_('page.info-panel.year')}</td><td>:{timeline[currentPage].year}</td></tr>
                    <tr><td>{$_('page.info-panel.projects')}</td><td>:{timeline[currentPage].projects}</td></tr>
                    <tr><td>{$_('page.info-panel.tech')}</td><td>:{timeline[currentPage].technologies}</td></tr>
                    <tr><td>{$_('page.info-panel.industry')}</td><td>:{timeline[currentPage].industry}</td></tr>
                    <tr><td>{$_('page.info-panel.location')}</td><td>:{timeline[currentPage].location}</td></tr>
                </table>
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
    td {
        padding: 0 10px; /* Adjust as needed */
    }
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
    /* Adjust styles for screens smaller than 600px */
    @media (max-width: 600px) {
        :global(.sc-carousel__content-container) {
            height: 50vh;
        }

        :global(.sc-carousel__content-container img) {
            width: 100%;
            height: 100%;
            object-fit: contain;
        }
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



