<script>
    import {
        Column, Row, Grid,
    } from "carbon-components-svelte";
</script>

<section class="banner" id="home">
    <Grid>
        <Row>
<!--            <Column>

            </Column>-->
            <Column>
                <div class="title-text">
                    <h1>Welcome
                        <img src="/le-space-ug.png" alt="Le Space Logo" class="logo" /> Le Space</h1>
                        <p>Local First Software In Global Working & Living Environments</p>
                </div>
            </Column>
        </Row>
    </Grid>


</section>

<style>
    .logo-container {
        text-align: center;
        margin-bottom: 40px;
    }

    .logo {
        width: 70px;
        display: inline-block;
    }
    .banner {
        height: 160px;
        text-align: center;
        /*background: linear-gradient(90deg, #00c9ff 0%, #92fe9d 100%);*/
        background-size: cover;
    }
    .title-text {
        padding-top: 1rem;
        font-family: "Segoe UI", "Helvetica Neue", sans-serif;
    }
    h1 {
        padding-top: 1rem;
        margin-bottom: 0.5rem;
    }
    p {
        margin: 0;
    }
</style>