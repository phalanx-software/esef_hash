<script>
    import JSZip from "jszip";
    import _ from "lodash";
    import {Alert} from "sveltestrap";
    import _digest from "./Digest";
    import Facet from "./Facet.svelte";
    import Report from "./Report.svelte";

    export let archive;

    const zip = new JSZip();

    let mode = null;
    let buffer = archive.arrayBuffer();

    $: reports = buffer.then(data => {
        return zip.loadAsync(data)
    }).then((({files}) => {
        const items = _.values(files)
        return Promise.all(_.filter(items, item =>
            item.name.toLowerCase().endsWith(".xhtml") || item.name.toLowerCase().endsWith(".html")
        ).map(item => zip.file(item.name).async("arraybuffer").then(buffer => ({name: item.name, data: buffer}))))
    })).catch(error => {
        console.error(error);
        mode = "invalid";
        throw error;
    });

    const digest = buffer.then(data => _digest(data))
</script>

<h3>Archive Hash</h3>

<Facet code title="Filename">
    {archive.name}
</Facet>

{#await digest}
    <Facet title="Archive Hash (SHA-256)">
        Computing...
    </Facet>
{:then result}
    <Facet code copyable={result} title="Archive Hash (SHA-256)">
        {result}
    </Facet>
{:catch error}
    <Facet code title="Archive Hash (SHA-256)">
        An error occurred while computing the archive's hash.
    </Facet>
{/await}

<h3 class="reportFiles">Report Files</h3>

<p>A list of detected report files within the uploaded archive and their individual SHA-256 hashes
    is given below.</p>

{#await reports}
{:then reports}
    {#each reports as report}
        <Report report={report}/>
    {:else}
        <Alert color="warning">The system could not detect any report files within the uploaded ZIP package</Alert>
    {/each}
{:catch error}
    An error occurred while searching for report files within the archive.
{/await}

<style>
    .reportFiles {
        margin-top: 1em;
        padding-top: 1em;
        border-top: 1px solid black;
    }
</style>