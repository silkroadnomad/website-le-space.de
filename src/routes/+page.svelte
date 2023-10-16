<script>
    import "carbon-components-svelte/css/all.css";

    import { Theme } from "carbon-components-svelte";

    import {browser} from "$app/environment";
    import {PUBLIC_WEB_URL} from "$env/static/public";

    const title = "Le Space - IT- Consulting"
    const description = "General IT- and Technology Consulting, Peer Programming Sessions, Remote Work Consulting, Coworking Consultationn"
    const url = "https://le-space.de"
    const image = PUBLIC_WEB_URL+"le-space-ug.png"
    const favicon = "./favicon.ico"
</script>
<svelte:head>
    <title>{title}</title>
    <link rel="icon" type="image/svg" href={favicon} />
    <meta property="og:type" content="article" />
    <meta property="og:title" content={title} />
    <meta property="og:description" content={description}>
    <meta property="og:image" content="/le-space-ug.png">
    <meta property="og:url" content={url}>
    <meta name="description" content={description}/>
    <meta name="twitter:card" content={description} />
    <meta name="twitter:title" content={title} />
    <meta name="twitter:description" content={description} />
    <meta name="twitter:image" content={image} />

    {#if browser}
        <script async src="https://cozycal.com/embed/v1/9375.js"></script>
    {/if}
</svelte:head>
<!--<div class="darkmode">-->
<!--    <Asleep />-->
<!--</div>-->
<div class="container">
    <Theme
            render="toggle"
            toggle={{
    themes: ["g10", "g80"],
    labelA: "Enable dark mode",
    labelB: "Enable dark mode",
    hideLabel: true,
    size: "sm",
  }}
    />

    <div class="logo-container">
        <img src="/le-space-ug.png" alt="Le Space Logo" class="logo" />
    </div>
    <div class="content">
        <h1>Welcome @ Le Space</h1>
        <p>&nbsp;</p>
        <p>
            In an ever-evolving digital landscape, the way we work and collaborate has transformed significantly. Established as one of the pioneers in the coworking domain, Le Space has been at the forefront of this transformation since its inception.
        </p>
        <p>&nbsp;</p>
        <p>
            When Le Space (beta) opened its doors in the physical world, it wasn't just a coworking space—it was a vision of the future of work. Over the years, we've witnessed and shaped the rise of remote work and freelance culture, gathering unparalleled insights into the dynamics of collaborative environments, both physical and virtual.
        </p>
        <p>&nbsp;</p>
        <p>
            Today AI is joining our virtual remote coworking spaces around the globe. Again we need to adapt
            and optimize our workflows leveraging the advantages of artificial intelligence.
        </p>
        <p>&nbsp;</p>
        <h2>Our Services:</h2>
        <p>&nbsp;</p>
        <ul>
            <li><strong>General IT- and Technology Consulting:</strong> With deep-rooted expertise in a diverse range of technologies, we provide bespoke solutions to businesses and individuals. Whether you're exploring new tech endeavors or refining existing systems, our team is equipped to guide you through the intricacies of the IT world.</li>
            <p>&nbsp;</p>
            <li><strong>Peer Programming Sessions:</strong>
                Beyond traditional IT-consulting, we're proud to introduce our Peer Programming Sessions.
                These are specially designed for programmers and IT professionals, offering a collaborative platform to enhance skills, ensure code quality, and foster a culture of shared expertise.</li>
            <p>&nbsp;</p>
           <li><strong>Remote Work Consulting:</strong>
               As remote work becomes a global norm, the challenges it brings to the forefront are equally universal.
               At Le Space, we offer strategies to manage, motivate, and coordinate distributed teams, ensuring seamless communication, workflow optimization, and work-life balance for remote employees.</li>
            <p>&nbsp;</p>
            <li><strong>Coworking Consultation:</strong>
                Drawing from our rich history, we offer expert guidance to businesses and individuals on creating efficient and vibrant coworking spaces.
                We understand the nuances of space design, community building, and logistical management, ensuring a harmonious blend of productivity and collaboration.</li>
            <p>&nbsp;</p>
        </ul>
<!--        https://support.cozycal.com/gdpr-data-processing-agreement-->
        <p>&nbsp;</p>
        <h6>Impressum: <br/>Le Space UG (haftungsbeschränkt), Lichtenberg 44, D-84307 Eggenfelden, Germany
            <br/>Tel.: +49 8721 128 9600-0
            <br/>Email: contact @ le-space.de</h6>
    </div>
</div>

<style>
    body {
        font-family: "IBM Plex Sans", "Helvetica Neue", Arial, sans-serif;
        margin: 0;
        padding: 0;
        /*background-color: #f4f4f4;*/
    }

    .darkmode {

    }
    .container {
        max-width: 800px;
        margin: 50px auto;
        padding: 30px;
        /*background-color: #fff;*/
        box-shadow: 0 2px 20px rgba(0, 0, 0, 0.1);
        border-radius: 8px;
    }

    .logo-container {
        text-align: center;
        margin-bottom: 40px;
    }

    .logo {
        width: 150px;
        display: inline-block;
    }

    .content {
        padding: 0 20px;
    }


</style>
