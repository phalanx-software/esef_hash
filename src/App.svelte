<script>
    import {Button, Container, Icon, Row} from "sveltestrap";
    import AboutTheApp from "./AboutTheApp.svelte";
    import Archive from "./Archive.svelte";
    import FileSelector from "./FileSelector.svelte";
    import Header from "./Header.svelte";
    import SingleReport from "./SingleReport.svelte";

    let uploaded = null;
</script>

<svelte:head>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.0/dist/css/bootstrap.min.css">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.5.0/font/bootstrap-icons.css">
</svelte:head>

<Container>
    <Row>
        <Header/>
    </Row>
    <Row>
        {#if (!uploaded)}
            <FileSelector on:uploaded={event => uploaded = event.detail}/>
        {:else if (uploaded.type === "application/zip")}
            <Archive archive={uploaded}/>
        {:else}
            <SingleReport report={uploaded}/>
        {/if}
        {#if uploaded}
            <Button block color="primary" on:click={() => uploaded = null}>
                <Icon name="arrow-counterclockwise"/>
                Back
            </Button>
        {/if}
    </Row>
    <Row class="m-3">
        <AboutTheApp/>
    </Row>
</Container>