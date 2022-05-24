export default `
<div class="spacer-sm">
    <h2>Collapse</h2>

    <ul class="list-inline">
        <li class="list-inline-item">
            <a data-bs-toggle="collapse" href="#collapseExample" role="button">
                Link with href
            </a>
        </li>
        <li class="list-inline-item">
            <button class="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample">
                Button with data-bs-target
            </button>
        </li>
    </ul>
    <div class="collapse" id="collapseExample">
        <div class="card card-body">
            Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid.
            Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.
        </div>
    </div>
</div>
`;