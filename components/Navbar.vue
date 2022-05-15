<template>
    <div>
        <b-navbar toggleable="lg" type="dark" variant="dark">
            <b-navbar-brand to="/">NavBar</b-navbar-brand>

            <b-collapse id="nav-collapse" is-nav>
                <!-- Right aligned nav items -->
                <b-navbar-nav class="ml-auto">
                    <b-navbar-nav>
                        <b-nav-item to="/games">Games</b-nav-item>
                    </b-navbar-nav>
                    <b-nav-item-dropdown right>
                        <template #button-content>
                            <em>User</em>
                        </template>
                        <b-dropdown-item to="/user">Profile</b-dropdown-item>
                        <b-dropdown-item to="/user/myGames">My Games</b-dropdown-item>
                        <b-dropdown-item >Sign Out</b-dropdown-item>
                    </b-nav-item-dropdown>
                </b-navbar-nav>
            </b-collapse>
        </b-navbar>
    </div>
</template>