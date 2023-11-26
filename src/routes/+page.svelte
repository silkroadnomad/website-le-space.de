<script>
    import Hero from "../components/Hero.svelte"
    import {_, isLoading, locale} from "svelte-i18n";
    import {Column, Grid, Row, SideNav, SideNavItems, SideNavLink} from "carbon-components-svelte";
    import Carousel from 'svelte-carousel';

    import AloneWorkingGoaSunsetMediation01 from "$lib/assets/alone-working-goa-sunset-mediation-01.png";
    import AloneWorkingGoaSunsetMediation02 from "$lib/assets/alone-working-goa-sunset-mediation-02.png";
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
    const timeline = [
        { year:"2006", headline: "Java/J2EE development", location: "munich, germany", projects: 'Jump CRM/ERP for pharmacies', technologies: 'Java/J2EE, Java Swing, Oracle DB'},
        { year:"2009", headline: "opening le-space coworking leipzig (beta)",  location: "leipzig, germany", projects: 'coworking week (2010), 1st coworking europe conference (2011)', technologies: 'coworking, bar camps, conferences, events'},
        { year:"2011", headline: "silk road",  location: "Slovenia, Serbia, Romania, Bulgaria, Turkey, Georgia, Aserbaidschan, Kazakhstan, China, Pakistan, India", projects: '-', technologies: '-'},
        // { year:2011, headline: "opening of le-space coworking leipzig (beta)", projects: '', technologies: ''},
        // { year:2011, headline: "opening of le-space coworking leipzig (beta)", projects: '', technologies: ''},
        // { year:2011, headline: "opening of le-space coworking leipzig (beta)", projects: '', technologies: ''},
        // { year:2011, headline: "opening of le-space coworking leipzig (beta)", projects: '', technologies: ''},
        // { year:2011, headline: "opening of le-space coworking leipzig (beta)", projects: '', technologies: ''},
        // { year:2011, headline: "opening of le-space coworking leipzig (beta)", projects: '', technologies: ''},
        // { year:2011, headline: "opening of le-space coworking leipzig (beta)", projects: '', technologies: ''},
        // { year:2011, headline: "opening of le-space coworking leipzig (beta)", projects: '', technologies: ''},
        // { year:2011, headline: "opening of le-space coworking leipzig (beta)", projects: '', technologies: ''},
    ]
</script>

<Grid class="grid">
    <Row>
        <Column><Hero/></Column>
    </Row>
    <Row>
        <Column class="carusel">
            <Carousel
                    on:pageChange={event => console.log(`Current page index: ${event.detail}`)}
                    autoplay
                    particlesToShow={3}
                    particlesToScroll={5}
                    autoplayDuration={5000}
            >
                <img alt="VsaJump01" src={VsaJump02} />
                <img alt="CoworkingLeipzig01" src={CoworkingLeipzig01} />
                <img alt="KarakorumWorking01" src={KarakorumWorking01} />
<!--                <img alt="AloneWorkingGoaSunsetMediation01" src={AloneWorkingGoaSunsetMediation01} />-->
<!--                <img alt="BuenosAiresCoworking01" src={BuenosAiresCoworking01} />-->
<!--                <img alt="CoworkingBali01" src={CoworkingBali01} />-->
                <!--                <img alt="AloneWorkingGoaSunsetMediation02" src={AloneWorkingGoaSunsetMediation02} />-->
                <!--                <img alt="BuenosAiresCoworking02" src={BuenosAiresCoworking02} />-->
<!--                <img alt="CoworkingBali02" src={CoworkingBali02} />-->
<!--                <img alt="CoworkingEkb01" src={CoworkingEkb01} />-->
<!--                <img alt="CoworkingEkb02" src={CoworkingEkb02} />-->
<!--                <img alt="CoworkingGoa01" src={CoworkingGoa01} />-->
<!--                <img alt="CoworkingGoa02" src={CoworkingGoa02} />-->
<!--                <img alt="CoworkingGoaSunsetMediation01" src={CoworkingGoaSunsetMediation01} />-->
<!--                <img alt="CoworkingGoaSunsetMediation02" src={CoworkingGoaSunsetMediation02} />-->
<!--                <img alt="CoworkingLeipzigFuture01" src={CoworkingLeipzigFuture01} />-->
<!--                <img alt="CoworkingLeipzigFuture02" src={CoworkingLeipzigFuture02} />-->
<!--                <img alt="JungleWorking01" src={JungleWorking01} />-->
<!--                <img alt="JungleWorking02" src={JungleWorking02} />-->

<!--                <img alt="KarakorumWorking02" src={KarakorumWorking02} />-->
<!--                <img alt="VsaJump01" src={VsaJump01} />-->
<!--                <img alt="VsaJump02" src={VsaJump02} />-->
<!--                <img alt="VsaJump03" src={VsaJump03} />-->
<!--                <img alt="VsaJump04" src={VsaJump04} />-->
<!--                <img alt="VsaJump05" src={VsaJump05} />-->
<!--                <img alt="VsaJump06" src={VsaJump06} />-->
<!--                <img alt="Webrtc01" src={Webrtc01} />-->
<!--                <img alt="Webrtc02" src={Webrtc02} />-->
<!--                <img alt="Webrtc03" src={Webrtc03} />-->
<!--                <img alt="Webrtc04" src={Webrtc04} />-->
<!--                <img alt="Webrtc05" src={Webrtc05} />-->
<!--                <img alt="Webrtc06" src={Webrtc06} />-->

            </Carousel>
            <div class="info-panel">
                <p>year: {timeline[currentPage].year}</p>
                <p>location: {timeline[currentPage].location}</p>
                <p>projects: {timeline[currentPage].projects}</p>
                <p>tech:  {timeline[currentPage].technologies}</p>
            </div>
        </Column>
    </Row>
</Grid>
<style>
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



