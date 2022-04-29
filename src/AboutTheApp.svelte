<script>
    import {Col} from "sveltestrap";
</script>

<Col md="4">
    <h4>Using this Application</h4>
    <p>Upload an XHTML file or a ZIP package containing XHTML files which contain unconsolidated or
        consolidated financial statements prepared for submission according to the European Union's ESEF standard.</p>
    <p>The application will compute and display a hash string, using the SHA-256 algorithm for any XHTML/HTML files that
        were uploaded.
        If you've uploaded a ZIP archive, the tool will compute a hash string for the entire archive as well.</p>
    <p>
        Please note that this application does not validate any of the XHTML files for compliance with the ESEF
        standard.
    </p>
    <h4>License and Source Code</h4>
    <p>This application is made freely available for anyone to use, copy and modify under the
        <a href="https://www.gnu.org/licenses/gpl-3.0.en.html">GNU General Public License v3</a>. You may view this
        application's source code and license on <a href="https://github.com/phalanx-software/esef-hash">GitHub</a>.</p>
</Col>
<Col md="4">
    <h3>About Hashing</h3>
    <p>
        A hash is useful to quickly determine whether any changes have been made to the contents of a file. This allows
        auditors,
        for example, to take a hash of a set of audited financial statements and ensure that no tampering occurs to
        a file after they have reviewed it.
    </p>
    <p>
        Simple hashing as done here, however, does not prevent repudiation. Nor does it securely prove that a particular
        file existed at a particular time (timestamping). A person could claim that the issuers changed the hash, thus
        repudiating the existence of a particular hash after it has been generated. A malicious actor could even tamper
        with the original hash store (eg. a written letter of intent) to make it look like no modifications to a
        document have been made.
    </p>
    <p>
        A better method of ensuring the authenticity of files is to generate a digital signature for the hash that was
        generated. This ensures that a hash string cannot be tampered with and it even authenticates the issuer of a
        hash string.
        The best kind of digital signature would be a so-called
        <a href="https://ec.europa.eu/digital-building-blocks/wikis/display/ESIGKB/How+can+I+create+an+advanced+or+qualified+electronic+signature">qualified
            digital signature</a>,
        which is legally recognized within the EU as having the same legal value as a handwritten signature.
    </p>
</Col>
<Col md="4">
    <h3>Contact Us</h3>
    <p><a href="https://phalanx.software">Phalanx Software</a> can help you setup a more sophisticated hash management
        solution or arrange for your own
        digital signature solution using qualified digital signatures. We can also assist you with any queries you might
        have about preparing and submitting ESEF-tagged digital financial statements for your company. For more
        information,
        reach out to us on <a href="mailto:contact@phalanx.software">contact@phalanx.software</a>.
    </p>
</Col>