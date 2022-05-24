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
                <button class="btn btn-link dropdown-toggle" type="button" data-bs-toggle="dropdown">
                    John Doe
                </button>
                <div class="dropdown-menu">
                    <a class="dropdown-item" href="#">
                        My Profile
                    </a>
                    <a class="dropdown-item" href="#">
                        Log Out
                    </a>
                </div>
            </div>
            <!-- / DROPDOWN BUTTON -->
            <!-- } -->
        </div>
    </div>
    <!-- / HEADER MAIN SECTION -->

    <!-- NAVBAR SECTION -->
    <div class="site-header__navbar">
        <nav class="navbar navbar-expand-lg">
            <!-- LINKS - REMOVE IF NOT NEEDED -->
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#site-header-links">
                <span class="navbar-toggler-icon"></span>
            </button>

            <!-- For a multi-row navbar, add "flex-column" to the following div, then add a separate ul for each row. -->
            <div class="collapse navbar-collapse flex-column" id="site-header-links">
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <a class="nav-link" href="#">Link 1</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link active" href="#">Link 2</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Link 3</a>
                    </li>
                </ul>
            </div>
            <!-- / LINKS - REMOVE IF NOT NEEDED -->
        </nav>
    </div>
    <!-- / NAVBAR SECTION -->
</header>
`;