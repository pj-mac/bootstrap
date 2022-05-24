export default `
<div class="spacer-sm">
    <h2>Customizing Theme</h2>

    <h3>Example of Overriding Styles</h3>

    <p>Start by creating a custom style sheet. To reduce the size of the h1 element, you can do the
        following.</p>

    <pre>
    h1, .h1 {
        font-size: 3.25rem;
    }

    @media (max-width: 767.98px) {
        h1, .h1 {
            font-size: 1.75rem;
        }
    }
            </pre>

    <hr>

    <h3>Changing Base Font Size</h3>

    <p>The default font size of this theme is 16px. Adjust the font size by specifying the new size in pixels
        or a relative value.</p>

    <pre>
    html {
        font-size: 14px;
        // or
        font-size: 0.875rem;
    }
            </pre>

    <hr>

    <h3>Changing Layout Max Width</h3>

    <p>The max width of this theme is 1440px. The width can be changed as follows.</p>

    <pre>
    .site-layout {
        max-width: 1080px;
    }
    </pre>
</div>
`;