<script>
    import CopyToClipboard from "svelte-copy-to-clipboard";
    import {Col, Icon, Row, Tooltip} from "sveltestrap";
    import _digest from "./Digest";

    export let report;

    const digest = _digest(report.data)
    let tooltipOpen = false;
</script>

<div class="item">
    <Row>
        <Col lg="6">
            <div class="title">Filename</div>
            <div class="value code">{report.name}</div>
        </Col>

        <Col lg="6">
            <div class="title">Hash (SHA-256)</div>
            {#await digest}
                <div class="value">
                    Computing...
                </div>
            {:then result}
                <div class="value code">
                    <CopyToClipboard text={result} let:copy>
                        <a on:click|preventDefault={copy} href="#" id="copy_{result}">
                            <Icon name="files"/>
                        </a>
                    </CopyToClipboard>
                    <Tooltip bind:isOpen={tooltipOpen} placement="top" target="copy_{result}">
                        Copy to clipboard
                    </Tooltip>
                    {result}
                </div>
            {:catch error}
                <div class="value">
                    Error
                </div>
            {/await}
        </Col>
    </Row>
</div>

<style>
    .item {
        background-color: #eeeeee;
        margin: 0.6em 0 0.6em 0;
    }

    .title {
        padding: 0.2em;
        font-size: 10pt;
        color: #666666;
    }

    .value {
        padding: 0.2em;
    }

    .code {
        font-family: monospace;
        overflow-wrap: anywhere;
    }
</style>