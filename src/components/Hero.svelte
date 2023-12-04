<script>
    import { Column, Row, Grid } from "carbon-components-svelte"
    export let headline = "Global Working Environments"
</script>

<section class="banner" id="home">
    <Grid>
        <Row>
<!--            <Column>

            </Column>-->
            <Column class="title-text">
<!--                <div class="title-text">-->
<!--                    <img src="/le-space-ug.png" alt="Le Space Logo" class="logo" />-->
                        <h1>{headline} </h1>
<!--                </div>-->
            </Column>
        </Row>
    </Grid>


</section>

<style>
    .logo-container {
        text-align: center;
        margin-top: 40px;
    }

    .logo {
        width: 90px;

        display: inline-block;
    }

    .banner {
        height: 120px;
        text-align: center;
        margin: 1rem;
       /* background: white;!**!*/
        /*background: linear-gradient(90deg, #00c9ff 0%, #92fe9d 100%);*/
        background-size: cover;
    }
    :global(.title-text) {
        min-height: auto;
        min-height: auto;
        font-family: "Segoe UI", "Helvetica Neue", sans-serif;
    }
    h1 {
        padding-top: 2rem;
        min-height: auto;
        margin-bottom: 0.2rem;
    }
    p {
        margin: 0;
    }
</style>