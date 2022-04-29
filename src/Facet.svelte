<script>
    import CopyToClipboard from "svelte-copy-to-clipboard";
    import {Icon, Tooltip} from "sveltestrap";

    export let title;
    export let code = false;
    export let copyable = false;

    let tooltipOpen = false;
</script>

<div class="facet">
    <div class="title">{title}</div>
    <div class:hash="{code}" class="content">
        {#if copyable}
            <CopyToClipboard text={copyable} let:copy>
                <a on:click|preventDefault={copy} href="#" id="copy_{code}">
                    <Icon name="files"/>
                </a>
            </CopyToClipboard>
            <Tooltip bind:isOpen={tooltipOpen} placement="top" target="copy_{code}">
                Copy to clipboard
            </Tooltip>
        {/if}
        <slot></slot>
    </div>
</div>

<style>
    .facet {
        margin: 0.6em 0 0.6em 0;
    }

    .title {
        color: #666666;
    }

    .content {
        font-weight: bold;
    }

    .hash {
        font-family: monospace;
        overflow-wrap: anywhere;
    }
</style>