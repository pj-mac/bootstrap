export default `
<div class="spacer-sm">
    <h2>Form - Horizontal</h2>

    <form>
        <div class="row mb-3">
            <label class="col-sm-2 col-form-label" for="inputEmail3">Email</label>
            <div class="col-sm-10">
                <input class="form-control" type="email" id="inputEmail3" placeholder="Email">
            </div>
        </div>
        <div class="row mb-3">
            <label class="col-sm-2 for="inputPassword3" col-form-label">Password</label>
            <div class="col-sm-10">
                <input class="form-control" type="password" id="inputPassword3" placeholder="Password">
            </div>
        </div>
        <fieldset class="row mb-3">
            <div class="row">
                <div class="col-form-label col-sm-2 pt-0">Radios</div>
                <div class="col-sm-10">
                    <div class="form-check">
                        <input class="form-check-input" type="radio" name="gridRadios" id="gridRadios1"
                               value="option1" checked>
                        <label class="form-check-label" for="gridRadios1">
                            First radio
                        </label>
                    </div>
                    <div class="form-check">
                        <input class="form-check-input" type="radio" name="gridRadios" id="gridRadios2"
                               value="option2">
                        <label class="form-check-label" for="gridRadios2">
                            Second radio
                        </label>
                    </div>
                    <div class="form-check disabled">
                        <input class="form-check-input" type="radio" name="gridRadios" id="gridRadios3"
                               value="option3" disabled>
                        <label class="form-check-label" for="gridRadios3">
                            Third disabled radio
                        </label>
                    </div>
                </div>
            </div>
        </fieldset>
        <div class="row mb-2">
            <div class="col-sm-10 offset-sm-2">
                <div class="form-check form-check-inline">
                    <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1"
                           value="option1">
                    <label class="form-check-label" for="inlineRadio1">Yes</label>
                </div>
                <div class="form-check form-check-inline">
                    <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2"
                           value="option2">
                    <label class="form-check-label" for="inlineRadio2">No</label>
                </div>
            </div>
        </div>
        <div class="row mb-3">
            <div class="col-sm-2">Checkbox</div>
            <div class="col-sm-10">
                <div class="form-check">
                    <input class="form-check-input" type="checkbox" id="gridCheck1">
                    <label class="form-check-label" for="gridCheck1">
                        Example checkbox
                    </label>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-sm-10">
                <button type="submit" class="btn btn-primary">Sign in</button>
            </div>
        </div>
    </form>
</div>
`;