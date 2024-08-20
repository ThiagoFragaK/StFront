<template>
    <b-card 
        border-variant="primary" 
        header="Login" 
        class="text-center"
    >
        <b-card-text>
            <div class="form-group">
                <label for="username" class="form-label mt-1">Username</label>
                <input disabled class="form-control" id="username" placeholder="Username">
            </div>
            <div class="form-group">
                <label for="password" class="form-label mt-1">Password</label>
                <b-input-group>
                    <input disabled type="password" class="form-control" id="password" placeholder="Password">
                </b-input-group>
            </div>
            <b-row>
                <b-col>
                    <div>
                        <b-button disabled variant="outline-primary">Login</b-button>
                    </div>
                </b-col>
                <b-col>
                    <div>
                        <b-button disabled variant="outline-success">Register</b-button>
                    </div>
                </b-col>
            </b-row>
        </b-card-text>
    </b-card>
</template>