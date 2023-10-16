<script>
    import Hero from "../components/Hero.svelte"
</script>
<div class="container">
    <div class="logo-container">

    </div>
    <div class="content">
        <Hero/>
<!--        <p>&nbsp;</p>
        <p>
            In an ever-evolving digital landscape, the way we work and collaborate has transformed significantly.
            Le Space has been at the forefront of this transformation since its inception.
        </p>-->
        <!--<p>&nbsp;</p>-->

        <p>&nbsp;</p>
        <ul>
            <li><strong>IT- and Technology Consulting:</strong> <br><br>With deep-rooted expertise in a diverse range of technologies, we provide bespoke solutions to businesses and individuals.
                Whether you're exploring new tech endeavors or refining existing systems, our team is equipped to guide you through the intricacies of the IT world. (more...)</li>
            <p>&nbsp;</p>
            <li><strong>Peer Programming Sessions:</strong><br><br>
                Beyond traditional IT-consulting, we're proud to introduce our virtual Peer Programming Sessions.
                These are specially designed for programmers and IT professionals, to ensure code quality, and foster a culture of shared expertise. (more...)</li>
            <p>&nbsp;</p>
<!--           <li><strong>Remote Work Consulting:</strong>
               As remote work becomes a global norm, the challenges it brings to the forefront are equally universal.
               At Le Space, we offer strategies to manage, motivate, and coordinate distributed teams, ensuring seamless communication, workflow optimization, and work-life balance for remote employees.</li>
            <p>&nbsp;</p>
            <li><strong>Coworking Consultation:</strong>
                Drawing from our rich history, we offer expert guidance to businesses and individuals on creating efficient and vibrant coworking spaces.
                We understand the nuances of space design, community building, and logistical management, ensuring a harmonious blend of productivity and collaboration.</li>
            <p>&nbsp;</p>-->
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
     /*   font-family: "IBM Plex Sans", "Helvetica Neue", Arial, sans-serif;*/
        font-family: "Segoe UI", "Helvetica Neue", sans-serif;
        margin: 0;
        padding: 0;
        /*background-color: #f4f4f4;*/
    }
    .logo-container {
        text-align: center;
        margin-bottom: 40px;
    }

    .logo {
        width: 35px;
        display: inline-block;
    }
    .container {
        max-width: 800px;
        margin: 50px auto;
   /*     padding: 15px;*/
        /*background-color: #fff;*/
        box-shadow: 0 2px 20px rgba(0, 0, 0, 0.1);
        border-radius: 8px;
    }

    .content {
        padding: 0 20px;
    }


</style>
