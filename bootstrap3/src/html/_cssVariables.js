export default `
<div class="spacer-sm">
    <h2>CSS Variables</h2>

    <style>
        .brand-digital-red {
            color: var(--brand-digital-red);
        }

        .brand-sans-serif {
            font-family: var(--font-family-sans-serif);
        }
    </style>

    <pre>
&lt;style&gt; .brand-digital-red { color: var(--brand-digital-red); } &lt;/style&gt;

&lt;h5 class="brand-digital-red"&gt;This is a --brand-digital-red CSS variable.&lt;/h5&gt;
    </pre>

    <h5 class="brand-digital-red">This is a --brand-digital-red CSS variable.</h5>

    <pre>
&lt;style&gt; .brand-sans-serif { font-family: var(--font-family-sans-serif); } &lt;/style&gt;

&lt;h5 class="brand-sans-serif"&gt;This is a --font-family-sans-serif CSS variable.&lt;/h5&gt;
    </pre>

    <h5 class="brand-sans-serif">This is a --font-family-sans-serif CSS variable.</h5>

    <em>
        Reference:
        <a href="https://getbootstrap.com/docs/5.0/customize/css-variables" style="word-wrap: break-word;">
            https://getbootstrap.com/docs/5.0/customize/css-variables
        </a>
    </em>

    <h4 style="margin-top: 1.5rem;">Theme variables:</h4>

    <pre>
--brand-dark-blue:     #0f2144;
--brand-navy-blue:     #1a3875;
--brand-dark-steel:    #5b7785;
--brand-steel-blue:    #8aa3b0;
--brand-light-blue:    #c4d1d7;
--brand-pale-blue:     #d6dfe4;
--brand-plum:          #492436;
--brand-light-plum:    #765C69;
--brand-pale-plum:     #ecc8c8;
--brand-pale-gold:     #fef6e4;
--brand-dark-red:      #b62b26;
--brand-highlight-red: #f5290a;
--brand-digital-red:   #e91f00;
--brand-black:         #000000;
--brand-white:         #ffffff;
--brand-carbon:        #303030;
--brand-steel:         #555555;
--brand-silver:        #b1b1b1;
--brand-veil:          #9c9c9c;
--brand-cloud:         #e3e3e3;
--brand-fog:           #f3f6f7;
--primary:           #0f2144;
--secondary:         #e3e3e3;
--success:           #00892f;
--info:              #555555;
--warning:           #ffa800;
--danger:            #e91f00;
--light:             #e3e3e3;
--dark:              #555555;
--font-family-sans-serif: "Open Sans", sans-serif;
</pre>
</div>
`;