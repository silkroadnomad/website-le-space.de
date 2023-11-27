<script>
    export let alt, src, css
</script>

<div class="color-container ">
    <img alt={alt} src={src} style={css}/>
</div>

<style>
    .color-container {
/*        height: 150px;
        width: 100%;*/
        display: flex;
       align-items: center;
        /*justify-content: center;*/

        user-select: none;
    }
</style>
