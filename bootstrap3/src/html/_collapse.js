export default `
<div class="spacer-sm">
    <h2>Collapse</h2>

    <a data-toggle="collapse" href="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
        Link with href
    </a>
    <button class="btn btn-primary" type="button" data-toggle="collapse" data-target="#collapseExample"
            aria-expanded="false" aria-controls="collapseExample" style="margin-left: 20px;">
        Button with data-target <span class="caret"></span>
    </button>
    <div class="collapse" id="collapseExample">
        <div class="well">
            ...
        </div>
    </div>
</div>
`;