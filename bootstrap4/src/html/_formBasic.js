export default `
<div class="spacer-sm">
    <h2>Form - Basic</h2>
    <form>
        <div class="form-group">
            <label for="exampleInputEmail1">Email address</label>
            <input class="form-control" type="email" id="exampleInputEmail1" placeholder="Enter email">
            <small class="form-text text-muted" id="emailHelp">We'll never share your email with anyone else.</small>
        </div>
        <div class="form-group">
            <label for="exampleInputPassword1">Password</label>
            <input class="form-control" type="password" id="exampleInputPassword1" placeholder="Password">
        </div>
        <div class="form-group">
            <label for="exampleFormControlSelect">Example select</label>
            <select class="form-control" id="exampleFormControlSelect">
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
            </select>
        </div>

        <div class="mb-3">
            <label class="form-label" for="comments">Example textarea</label>
            <textarea class="form-control" rows="3" id="comments"></textarea>
        </div>

        <div class="form-group form-check">
            <input class="form-check-input" type="checkbox" id="exampleCheck1">
            <label class="form-check-label" for="exampleCheck1">Check me out</label>
        </div>

        <button class="btn btn-primary" type="submit">Submit</button>
    </form>
</div>
`;