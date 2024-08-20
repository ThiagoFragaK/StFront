<template>
    <b-card 
        border-variant="primary" 
        header="Visitor" 
        class="text-center"
    >
        <b-card-text>
            <div class="form-group mt-2">
                <label class="form-label mt-4">Your SteamID</label>
                <input 
                    type="text"
                    v-model="steam_id" 
                    class="form-control"
                    id="steam_id" 
                />
                <small 
                    class="form-text text-muted"
                > 
                    We'll check if the SteamID exists and then bring your information.
                </small>
            </div>
            <div class="form-group mt-4">            
                <b-button 
                    v-if="config.isLoading" 
                    variant="primary" 
                    disabled
                >
                    <b-spinner small type="grow"></b-spinner>
                    Authenticating..
                </b-button>
                <b-button
                    v-else
                    @click="authenticateKey()" 
                    variant="outline-primary"
                >
                    Authenticate ID
                </b-button>
            </div>            
        </b-card-text>
    </b-card> 
</template>
  
<script>
export default {
    data(){
        return {
            steam_id: undefined,
            config: {
                isLoading: false,
            }
        };
    },
    methods: {
        authenticateKey(){
            if(this.steam_id === undefined || this.steam_id.length < 10) return this.$toast.error("The written Key isn't valid");
            this.config.isLoading = true;
            
            this.$axios.$post(`visitor/auth`, { key: this.steam_id })
                .then((response) => {
                    if(response.status) {
                        this.$toast.success(response.message);
                        this.$store.commit('auth/SET_STEAM_ID', this.steam_id);
                        this.$router.push({ name: "user" });
                        return;
                    }
                    this.$toast.error(response.error)
                }).finally(() => {
                    this.config.isLoading = false;
                });
        },
    },
}
</script>