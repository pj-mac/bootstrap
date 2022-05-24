export default `
<!-- If not using links in the navbar, add .site-header--no-navbar-links to header. -->
<header class="site-header">
    <!-- HEADER MAIN SECTION -->
    <div class="site-header__main">
        <img src="images/logo.jpg" alt="Logo"/>

        <div class="profile">
            <!-- if (!isAuthenticated) { -->
            <!--     <a class="btn btn-secondary" href="#">Log In</a>  -->
            <!-- } else { -->
            <!-- DROPDOWN BUTTON -->
            <div class="dropdown">
                <button class="btn btn-link dropdown-toggle" type="button" data-toggle="dropdown">
                    John Doe <span class="caret"></span>
                </button>
                <ul class="dropdown-menu">
                    <li>
                        <a class="dropdown-item" href="#">
                            My Profile
                        </a>
                    </li>
                    <li>
                        <a class="dropdown-item" href="#">
                            Log Out
                        </a>
                    </li>
                </ul>
            </div>
            <!-- / DROPDOWN BUTTON -->
            <!-- } -->
        </div>
    </div>
    <!-- / HEADER MAIN SECTION -->

    <!-- NAVBAR SECTION -->
    <div class="site-header__navbar">
        <nav class="navbar">
            <!-- LINKS - REMOVE IF NOT NEEDED -->
            <div class="navbar-header">
                <button class="navbar-toggle collapsed" type="button" data-toggle="collapse" data-target="#site-header-links">
                    <span class="sr-only">Toggle navigation</span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                </button>
            </div>

            <!-- For a multi-row navbar, add multiple ul tags, one for each row. -->
            <div class="collapse navbar-collapse" id="site-header-links">
                <ul class="nav navbar-nav">
                    <li>
                        <a href="#">Link 1</a>
                    </li>
                    <li>
                        <a class="active" href="#">Link 2</a>
                    </li>
                    <li>
                        <a href="#">Link 3</a>
                    </li>
                </ul>
            </div>
            <!-- / LINKS - REMOVE IF NOT NEEDED -->
        </nav>
    </div>
    <!-- / NAVBAR SECTION -->
</header>
`;