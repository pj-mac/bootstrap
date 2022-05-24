export default `
<div class="spacer-sm">
    <h2>Media Query Breakpoints</h2>

    <p>When writing your own style sheet, use these breakpoints as a reference. The main "mobile" breakpoint used in
        this theme is <strong>767.98px</strong></p>

    <pre>
    /* Extra small devices (portrait phones, less than 576px) */
    @media (max-width: 575.98px) { ... }

    /* Small devices (landscape phones, less than 768px) */
    @media (max-width: 767.98px) { ... }

    /* Medium devices (tablets, less than 992px) */
    @media (max-width: 991.98px) { ... }

    /* Large devices (desktops, less than 1200px) */
    @media (max-width: 1199.98px) { ... }

    /* Extra large devices (large desktops) */
    @media (max-width: 1399.98px) { ... }
            </pre>

    <p style="font-style: italic;">
        Why subtract .02px? Browsers don’t currently support range context queries, so we work around the
        limitations of min- and max- prefixes and viewports with fractional widths (which can occur under certain
        conditions on high-dpi devices, for instance) by using values with higher precision.<br/>
        - <a href="https://getbootstrap.com/docs/5.1/layout/breakpoints/#media-queries" class="text-break">
              https://getbootstrap.com/docs/5.1/layout/breakpoints/#media-queries
          </a>
    </p>
</div>
`;