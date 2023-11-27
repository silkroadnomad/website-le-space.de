<script>
    import { Column, Row, Grid } from "carbon-components-svelte"
    export let headline = "Global Working Environments"
</script>

<section class="banner" id="home">
    <Grid>
        <Row>
<!--            <Column>

            </Column>-->
            <Column>
                <div class="title-text">
                    <img src="/le-space-ug.png" alt="Le Space Logo" class="logo" />
                        <h4>{headline} </h4>
                </div>
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
        margin: 0.5rem;
        display: inline-block;
    }

    .banner {
        height: 160px;
        text-align: center;
       /* background: white;!**!*/
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