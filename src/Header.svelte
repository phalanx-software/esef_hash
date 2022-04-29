<script>
    import {Col} from "sveltestrap";
</script>

<Col xs="12">
    <header class="Header">
        <img alt="Phalanx Software Nameplate" src="/nameplate.svg"/>
        <h1>ESEF Hashing Application</h1>
    </header>
</Col>

<style>
    .Header {
        font-size: 18pt;
        padding: 1em 0 1em 0;
        border-bottom: 1px solid black;
        margin: 0 0 1em 0;
    }

    .Header img {
        max-height: 4em;
        margin-right: 2em;
    }

    .Header h1 {
        font-size: 24pt;
        vertical-align: bottom;
    }

    .Header img, .Header h1 {
        display: inline;
    }
</style>