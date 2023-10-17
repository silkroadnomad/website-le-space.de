<script>
    import Hero from "../components/Hero.svelte"
    import {_, isLoading, locale} from "svelte-i18n";
    import {SideNav, SideNavItems, SideNavLink} from "carbon-components-svelte";
</script>
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
{#if $locale==="de"}
    <iframe title="cosyCal" src="https://cozycal.com/it-consulting-de" style="width:100%;min-height:500px;border:none;"></iframe>
{:else}
    <iframe title="cosyCal" src="https://cozycal.com/le-space?show_embed_modal=1" style="width:100%;min-height:500px;border:none;"></iframe>
{/if}


<style>


</style>
