export default `
<div class="spacer-sm">
    <h2>CSS Variables</h2>

    <style>
        .brand-digital-red {
            color: var(--bs-brand-digital-red);
        }

        .brand-sans-serif {
            font-family: var(--bs-font-sans-serif);
        }
    </style>

    <pre>
&lt;style&gt; .brand-digital-red { color: var(--bs-brand-digital-red); } &lt;/style&gt;

&lt;h5 class="brand-digital-red"&gt;This is a --bs-brand-digital-red CSS variable.&lt;/h5&gt;
    </pre>

    <h5 class="brand-digital-red">This is a --bs-brand-digital-red CSS variable.</h5>

    <pre>
&lt;style&gt; .brand-sans-serif { font-family: var(--bs-font-sans-serif); } &lt;/style&gt;

&lt;h5 class="brand-sans-serif"&gt;This is a --bs-font-sans-serif CSS variable.&lt;/h5&gt;
    </pre>

    <h5 class="brand-sans-serif">This is a --bs-font-sans-serif CSS variable.</h5>

    <em>
        Reference:
        <a href="https://getbootstrap.com/docs/5.0/customize/css-variables" class="text-break">
            https://getbootstrap.com/docs/5.0/customize/css-variables
        </a>
    </em>

    <h4 class="mt-4">Theme variables:</h4>

    <pre>
--bs-brand-dark-blue:     #0f2144;
--bs-brand-navy-blue:     #1a3875;
--bs-brand-dark-steel:    #5b7785;
--bs-brand-steel-blue:    #8aa3b0;
--bs-brand-light-blue:    #c4d1d7;
--bs-brand-pale-blue:     #d6dfe4;
--bs-brand-plum:          #492436;
--bs-brand-light-plum:    #765C69;
--bs-brand-pale-plum:     #ecc8c8;
--bs-brand-pale-gold:     #fef6e4;
--bs-brand-dark-red:      #b62b26;
--bs-brand-highlight-red: #f5290a;
--bs-brand-digital-red:   #e91f00;
--bs-brand-black:         #000000;
--bs-brand-white:         #ffffff;
--bs-brand-carbon:        #303030;
--bs-brand-steel:         #555555;
--bs-brand-silver:        #b1b1b1;
--bs-brand-veil:          #9c9c9c;
--bs-brand-cloud:         #e3e3e3;
--bs-brand-fog:           #f3f6f7;
--bs-primary:           #0f2144;
--bs-secondary:         #e3e3e3;
--bs-success:           #00892f;
--bs-info:              #555555;
--bs-warning:           #ffa800;
--bs-danger:            #e91f00;
--bs-light:             #e3e3e3;
--bs-dark:              #555555;
--bs-font-sans-serif: "Open Sans", sans-serif;
--bs-font-monospace: SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
</pre>
</div>
`;