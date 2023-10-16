<script>
    import "carbon-components-svelte/css/all.css";
    import { Theme } from "carbon-components-svelte";
    import {browser} from "$app/environment";
</script>
<svelte:head>
    {#if browser}
        <script async src="https://cozycal.com/embed/v1/9375.js"></script>
    {/if}
</svelte:head>
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
        <h1>Datenschutzerklärung</h1>

        <h2>1. Verantwortlicher</h2>
        <p>
            Le Space UG (haftungsbeschränkt),<br>
            Nico Krause
            Lichtenberg 44,<br>
            84307 Eggenfelden<br>
            <br>
            <a href="mailto:[E-Mail-Adresse]">datenschutz@le-space.de</a>,<br>
            +49 8721 1289600-0
        </p>

        <h2>2. Allgemeine Informationen</h2>
        <p>
            Beim Besuch unserer Webseite und bei der Nutzung unseres Buchungssystems erheben wir bestimmte personenbezogene Daten von Ihnen.
        </p>

        <h2>3. Datenverarbeitung durch CozyCal</h2>
        <p>
            Für die Terminvereinbarung nutzen wir den Dienst CozyCal. Wenn Sie einen Termin über unsere Webseite buchen, werden Ihr Vorname, Nachname, E-Mail-Adresse, Buchungstag und Ihre IP-Adresse erfasst und von CozyCal verarbeitet. CozyCal verwendet auch Cookies, um eine reibungslose Funktionalität des Buchungssystems sicherzustellen.
        </p>
        <p>
            Weitere Informationen zur Datenverarbeitung durch CozyCal können Sie der Datenschutzerklärung von CozyCal entnehmen: <a href="[Link zur Datenschutzerklärung von CozyCal]" target="_blank" rel="noopener noreferrer">Datenschutzerklärung von CozyCal</a>
        </p>

        <h2>4. Zweck der Datenverarbeitung</h2>
        <p>
            Die genannten Daten werden ausschließlich zum Zweck der Terminvereinbarung und -bestätigung verwendet.
        </p>

        <h2>5. Ihre Rechte</h2>
        <p>
            Sie haben das Recht, jederzeit Auskunft über die zu Ihrer Person gespeicherten Daten, deren Herkunft, deren Empfänger und den Zweck der Speicherung zu verlangen. Sie haben außerdem das Recht auf Berichtigung, Löschung oder Einschränkung der Verarbeitung Ihrer personenbezogenen Daten. Kontaktieren Sie uns bitte, wenn Sie eines dieser Rechte ausüben möchten oder wenn Sie Fragen oder Bedenken zum Datenschutz haben.
        </p>
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
