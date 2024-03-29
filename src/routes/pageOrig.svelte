<script>
    import { onMount } from 'svelte';
    import { swipe } from 'svelte-gestures';
    import { fly } from 'svelte/transition';
    import {_, locale} from "svelte-i18n";
    import Carousel from 'svelte-carousel';
    import MarqueeTextWidget from "svelte-marquee-text-widget";
    import { Column, Grid, Row } from "carbon-components-svelte";
    import Hero from "../components/Hero.svelte"
    import CarouselImage from "../components/CarouselImage.svelte";
    import { helia,currentImage } from '../routes/router.js';
    import { timeline_en, timeline_de} from "../timelines.js"
    import { loadNFTs } from "../loadNfts.js";

    let carousel
    let nftsMapped;

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

    /**
     * We load the currently minted NFTs from the contract. For the minted one's we display the BUY-NFT button
     */
    $:{
        if($helia){
            nftLoader($helia)
        }
    }
    async function nftLoader(_helia){
        const nfts = await loadNFTs(_helia)
        nftsMapped = nfts.map(nft => {
            const slugTrait = nft.attributes.find(at => at.trait_type === 'slug');
            return {...nft, slug: slugTrait ? slugTrait.value : null};
        });
    }
    function getIconDetails(icon) {
        const [name, extension = 'svg'] = icon.split('.');
        return { name, extension };
    }

    let showImage = true

    /**
     * Icons from: https://simpleicons.org/?q=ipfs
     */
    let timeline = [];
    $:$locale==="de"?timeline=timeline_de:timeline=timeline_en
    let currentPage = window?.location.hash?timeline_de.findIndex(item => item.slug === window?.location.hash.substring(1)):0;

    $: {
        if (currentPage === -1) currentPage = 0
        if (timeline[currentPage] && window?.location.hash !== timeline[currentPage]?.slug) {
            flicker=true
            window.location.hash = timeline[currentPage]?.slug;
            currentImage.set(timeline[currentPage].image);
        }
    }

    let buttonVisible = false;

    function toggleBuyNFTButton() {
        buttonVisible = !buttonVisible;
    }

    let infoData = [
        {label: 'page.info-panel.year', value: () => timeline[currentPage].year},
        {label: 'page.info-panel.projects', value: () => timeline[currentPage].projects},
        {label: 'page.info-panel.tech', value: () => timeline[currentPage].technologies},
        {label: 'page.info-panel.industry', value: () => timeline[currentPage].industry},
        {label: 'page.info-panel.location', value: () => timeline[currentPage].location}
    ];
    let currentIndex = 0;
    let displayData = [infoData[currentIndex]];
    let flicker = false;
    currentIndex++;
    setInterval(() => {
        displayData = [...displayData, infoData[currentIndex]];
        currentIndex = (currentIndex + 1) % (infoData.length+1);
        if (currentIndex === 0) {
            displayData = [];
        }
        else flicker=false
    }, 1000);

</script>
<div id="fullscreen-bg" class="hidden" on:dblclick={hideBackground} use:swipe={{ timeframe: 300, minSwipeDistance: 100}} on:swipe={doSwipe}>
     <img src={timeline[currentPage].image} />
</div>
<Grid class="grid" fullWidth>
    <Row>
        <Column sm={4}>
            <div on:dblclick={showBackground} role="button" tabindex="0">
                <Hero headline={timeline[currentPage].headline}/>
            </div>
        </Column>
    </Row>
    <Row>
        <Column class="carousel" sm={4}>
            <div id="carousel" class="visible"
                 on:mouseenter={toggleBuyNFTButton} on:mouseleave={toggleBuyNFTButton}
                 on:dblclick={showBackground}  use:swipe={{ timeframe: 300, minSwipeDistance: 100}} on:swipe={doSwipe}>
                <Carousel bind:this={carousel} pauseOnFocus={true} initialPageIndex={currentPage}  on:pageChange={event => currentPage = event.detail} autoplay={true} autoplayDuration={5000} duration={500}>
                    {#each timeline as item}
                        <CarouselImage css="object-position: 50% 70px" alt={item.image} src={item.image}>
                            {#if buttonVisible && (nftsMapped?.length>1 && nftsMapped?.findIndex(it=>it.slug===item.slug)!==-1)}
                             <button class="buy-nft"
                                     on:click={() => window.open(`https://testnets.opensea.io/assets/mumbai/0x779eadd5a956a1b71ddbdf2a245cbe2ea5f59048/${nftsMapped.findIndex(it=>it.slug===item.slug)}`, '_blank')}
                                     transition:fly={{ y: 800, duration: 500 }}
                             >{$_('page.nft-button.label')}</button>
                            {/if}
                        </CarouselImage>
                    {/each}
                </Carousel>
            </div>
        </Column>
    </Row>
    <Row>
        <Column sm={4} md={4} lg={8}>
            <div class="info-panel {flicker ? 'flicker' : ''}">
                <table>
                    {#each displayData as item, i (item.label)}
                        <tr>
                            <td>{$_(item.label)}</td><td>:</td><td>{item.value()}</td>
                        </tr>
                    {/each}
                </table>
            </div>
        </Column>
        <Column sm={4} md={4} lg={8}>
            <MarqueeTextWidget duration="{30}">
                {#if timeline[currentPage]?.icons && timeline[currentPage]?.icons.length>0}
                    { #each timeline[currentPage].icons as icon }
                        {#if icon}
                            <a href={icon.url} target="_blank" style="margin-left: 2rem;">
                                <img title={getIconDetails(icon.icon).name}
                                     src={`/simple-icons/${getIconDetails(icon.icon).name}.${getIconDetails(icon.icon).extension}`}
                                     style="margin: 0.3rem"
                                     height="42"  />
                            </a>
                        {/if}
                    {/each}
                {/if}
            </MarqueeTextWidget>
        </Column>
    </Row>
</Grid>
<style>
    @keyframes flicker {
        0%, 100% { opacity: 1; background-color: inherit; }
        33% { opacity: 0.5; background-color: yellow; }
        66% { opacity: 1; background-color: inherit; }
    }

    .flicker {
        animation: flicker 1.5s linear;
    }
    td {
        padding: 0 10px;
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
        transition: opacity 0.5s;
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
    :global(.sc-carousel__pages-window) {
        height: 30rem;
    }
    :global(.carusel) {
        margin-top: 2rem;
    }
    :global(.grid) {
        margin-top: 2rem;
    }
    .info-panel {
        height: 120px;
        overflow: auto;
        margin-top: 1rem;
        background-color: black;
        color: #0F0;
        text-shadow: 0 0 10px #0F0;
        font-family: 'Courier New', monospace;
        width: 100%;
        align-content: center;
        padding: 1rem;
        margin-left: 25px;
    }

    .icon-panel {
        height: 100%;
        margin-right: 1.5rem;
        margin-top: 1rem;
        background-color: lightgray;
    }

    .buy-nft {
        position: absolute;
        margin: 100px;
        padding: 10px;
        width: 200px;
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
        opacity: 1;
    }

    @media (max-width: 800px) {
        :global(.title-text h1) {
           font-size: 30px;
        }
        :global(.sc-carousel__pages-window) {
            height: 30vh;
        }
        :global(.info-panel){
            font-size: 9px;
            height: 100px;
            padding-bottom: 0.2rem;
        }
        :global(.sc-carousel__content-container img) {
            width: 100%;
            height: 100%;
            object-fit: contain;
        }
        .icon-panel {
            width: 100%;
            margin-top: 0rem;
        }
        .info-panel  {
            margin: 0.1rem;
            margin-bottom: 0rem;
            padding: 1rem;
        }
    }
</style>
