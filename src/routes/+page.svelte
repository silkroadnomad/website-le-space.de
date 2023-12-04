<script>
    import { onMount } from 'svelte';
    import { fly } from 'svelte/transition';
    import Hero from "../components/Hero.svelte"
    import { swipe } from 'svelte-gestures';
    import {_, isLoading, locale} from "svelte-i18n";
    import {Column, Grid, Row, SideNav, SideNavItems, SideNavLink} from "carbon-components-svelte";
    import Carousel from 'svelte-carousel';
    import {timeline_en, timeline_de} from "../timelines.js"
    import CarouselImage from "../components/CarouselImage.svelte";

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
    $:$locale==="de"?timeline=timeline_de:timeline=timeline_en
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
            <div id="carousel" class="visible" on:dblclick={showBackground}  use:swipe={{ timeframe: 300, minSwipeDistance: 100}} on:swipe={doSwipe}>
                <Carousel bind:this={carousel} on:pageChange={event => currentPage = event.detail} autoplay={true} autoplayDuration={6000} duration={1000}>
                    {#each timeline as item, index}
                        <CarouselImage css="object-position: 50% 70px" alt={item.image} src={item.image}>
                            <button class="buy-nft" on:click={() => window.open('https://opensea.io/assets/your-nft-link', '_blank')} transition:fly={{ y: 800, duration: 500 }}>Buy as NFT</button>
                        </CarouselImage>
                    {/each}
                </Carousel>
            </div>
        </Column>
    </Row>
    <Row>
        <Column sm={4} md={4} lg={8}>
            <div class="info-panel">
                <table>
                    <tr><td>{$_('page.info-panel.year')}</td><td>:</td><td>{timeline[currentPage].year}</td></tr>
                    <tr><td>{$_('page.info-panel.projects')}</td><td>:</td><td>{timeline[currentPage].projects}</td></tr>
                    <tr><td>{$_('page.info-panel.tech')}</td><td>:</td><td>{timeline[currentPage].technologies}</td></tr>
                    <tr><td>{$_('page.info-panel.industry')}</td><td>:</td><td>{timeline[currentPage].industry}</td></tr>
                    <tr><td>{$_('page.info-panel.location')}</td><td>:</td><td>{timeline[currentPage].location}</td></tr>
                </table>
            </div>
        </Column>
        <Column sm={4} md={4} lg={8}>
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
        height: 50rem;
    }
    :global(.carusel) {
        margin-top: 2rem;
    }
    :global(.grid) {
        margin-top: 2rem;
    }
    .info-panel {
        margin-top: 1rem;
        background-color: black;
        color: #0F0;
        text-shadow: 0 0 10px #0F0;
        font-family: 'Courier New', monospace;
        width: 100%;
        align-content: center;
        padding: 1rem;
        margin-left: 25px;
        height: 100%;
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
    /* Adjust styles for screens smaller than 600px */
    @media (max-width: 600px) {
        :global(.sc-carousel__pages-window) {
            height: 30vh;
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
            margin: 0.1rem; /* Adjust as needed */
            margin-bottom: 0rem;
            padding: 1rem; /* Adjust as needed */
        }
    }
</style>


<!--{#if $locale==="de"}-->
<!--    <iframe title="cosyCal" src="https://cozycal.com/it-consulting-de" style="width:100%;min-height:500px;border:none;"></iframe>-->
<!--{:else}-->
<!--    <iframe title="cosyCal" src="https://cozycal.com/le-space?show_embed_modal=1" style="width:100%;min-height:500px;border:none;"></iframe>-->
<!--{/if}-->



