export default `
<div class="spacer-sm">
    <h2>Form - Horizontal</h2>

    <form>
        <div class="form-group row">
            <label class="col-sm-2 col-form-label" for="inputEmail3">Email</label>
            <div class="col-sm-10">
                <input class="form-control" type="email" id="inputEmail3" placeholder="Email">
            </div>
        </div>
        <div class="form-group row">
            <label class="col-sm-2 col-form-label" for="inputPassword3">Password</label>
            <div class="col-sm-10">
                <input class="form-control" type="password" id="inputPassword3" placeholder="Password">
            </div>
        </div>
        <fieldset class="form-group">
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
        <div class="form-group row">
            <div class="col-sm-10 col-sm-offset-2">
                <label class="radio-inline">
                    <input type="radio" name="inlineRadioOptions" id="inlineRadio1" value="yes"> Yes
                </label>
                <label class="radio-inline">
                    <input type="radio" name="inlineRadioOptions" id="inlineRadio2" value="no"> No
                </label>
            </div>
        </div>
        <div class="form-group row">
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
        <div class="form-group row">
            <div class="col-sm-10">
                <button class="btn btn-primary" type="submit">Sign in</button>
            </div>
        </div>
    </form>
</div>
`;