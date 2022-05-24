export default `
<footer class="site-footer">
    <div class="site-footer__main">
        <div class="row">
            <div class="col-md-3 site-footer--small">
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.

                <div>
                    <a class="btn btn-primary" href="#">Search</a>
                </div>
            </div>

            <div class="col-md-3">
                <h3>Section 1</h3>

                <ul>
                    <li><a href="#">Section 1 Link 1</a></li>
                    <li><a href="#">Section 1 Link 2</a></li>
                    <li><a href="#">Section 1 Link 3</a></li>
                </ul>
            </div>

            <div class="col-md-3">
                <h3>Section 2</h3>

                <ul>
                    <li><a href="#">Section 2 Link 1</a></li>
                    <li><a href="#">Section 2 Link 2</a></li>
                    <li><a href="#">Section 2 Link 3</a></li>
                </ul>
            </div>

            <div class="col-md-3">
                <h3>Section 3</h3>

                <ul>
                    <li><a href="#">Section 3 Link 1</a></li>
                    <li><a href="#">Section 3 Link 2</a></li>
                    <li><a href="#">Section 3 Link 3</a></li>
                </ul>
            </div>
        </div>
    </div>

    <div class="site-footer__main site-footer--mobile">
        <h3><a href="#">Section 1</a></h3>
        <h3><a href="#">Section 2</a></h3>
        <h3><a href="#">Section 3</a></h3>
        <ul>
            <li><a href="#">Link 1</a></li>
            <li><a href="#">Link 2</a></li>
            <li><a href="#">Link 3</a></li>
        </ul>
    </div>

    <div class="site-footer__legal">
        <div class="row">
            <div class="col-lg-6">
                <ul>
                    <li>
                        <a href="#">Privacy Statement</a>
                    </li>
                    <li>
                        <a href="#">Terms &amp; Conditions</a>
                    </li>
                    <li>
                        <a href="#">Sitemap</a>
                    </li>
                </ul>
            </div>
            <div class="col-lg-6 site-footer__copyright">
                <p class="site-footer__copyright-text">Copyright © 1996-${new Date().getFullYear().toString()} Company Name</p>
            </div>
        </div>
    </div>
</footer>
`;