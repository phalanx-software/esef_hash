<script>
    import {createEventDispatcher} from "svelte";
    import Dropzone from "svelte-file-dropzone";

    const dispatch = createEventDispatcher();

    function handleAccepted(acceptedFiles, event) {
        dispatch("uploaded", acceptedFiles.detail.acceptedFiles[0]);
    }
</script>

<div class="fileselector">
    <h3>File Upload</h3>
    <div class="instructions">
        Upload a ZIP file containing either XBRL-tagged consolidated financial statements or
        an unconsolidated financial statements file either in ZIP or XHTML format:
    </div>
    <div class="dropzone">
        <Dropzone accept=".zip,.xhtml,.html,.htm" multiple="false"
                  on:dropaccepted={handleAccepted}>
        </Dropzone>
    </div>
</div>

<style>
    .dropzone {
        padding: 2em 2em 2em 2em;
        border-bottom: 1px solid black;
        margin-bottom: 2em;
    }
</style>