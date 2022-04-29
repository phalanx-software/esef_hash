<script>
    import _digest from "./Digest";
    import Facet from "./Facet.svelte";

    export let report;

    let buffer = report.arrayBuffer();
    const digest = buffer.then(data => _digest(data))
</script>

<h3>Singular Report Hash</h3>

<Facet code title="Filename">
    {report.name}
</Facet>

{#await digest}
    <Facet title="Report Hash (SHA-256)">
        Computing...
    </Facet>
{:then result}
    <Facet code copyable={result} title="Report Hash (SHA-256)">
        {result}
    </Facet>
{:catch error}
    <Facet code title="Report Hash (SHA-256)">
        An error occurred while computing the report's hash.
    </Facet>
{/await}

<style>
    .reportFiles {
        margin-top: 1em;
        padding-top: 1em;
        border-top: 1px solid black;
    }
</style>