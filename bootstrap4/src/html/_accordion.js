export default `
<div class="spacer-sm">
    <h2>Accordion</h2>

    <div class="accordion" id="accordionExample">
        <div class="card">
            <div class="card-header" id="headingOne">
                <h5 class="mb-0">
                    <button class="btn btn-lg btn-link text-left w-100" data-toggle="collapse" data-target="#collapseOne">
                        Collapsible Group Item #1
                    </button>
                </h5>
            </div>
            <div class="collapse show" id="collapseOne" data-parent="#accordionExample">
                <div class="card-body">
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.
                    Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur
                    ridiculus mus.
                    Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa
                    quis enim.
                    Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus
                    ut, imperdiet a,
                    venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium.
                </div>
            </div>
        </div>
        <div class="card">
            <div class="card-header" id="headingTwo">
                <h5 class="mb-0">
                    <button class="btn btn-lg btn-link collapsed text-left w-100" data-toggle="collapse" data-target="#collapseTwo">
                        Collapsible Group Item #2
                    </button>
                </h5>
            </div>
            <div class="collapse" id="collapseTwo" data-parent="#accordionExample">
                <div class="card-body">
                    Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend
                    tellus.
                    Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante,
                    dapibus in,
                    viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque
                    rutrum.
                    Aenean imperdiet.
                </div>
            </div>
        </div>
        <div class="card">
            <div class="card-header" id="headingThree">
                <h5 class="mb-0">
                    <button class="btn btn-lg btn-link collapsed text-left w-100" data-toggle="collapse" data-target="#collapseThree">
                        Collapsible Group Item #3
                    </button>
                </h5>
            </div>
            <div class="collapse" id="collapseThree" data-parent="#accordionExample">
                <div class="card-body">
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.
                    Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur
                    ridiculus mus.
                    Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa
                    quis enim.
                    Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus
                    ut, imperdiet a,
                    venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium.
                </div>
            </div>
        </div>
    </div>
</div>
`;