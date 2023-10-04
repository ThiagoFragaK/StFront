<template>
    <b-row
        align-v="center"
        class="justify-content-md-center mt-3"
    >
        <b-col>
            <b-card sub-title="Calculate average by changing games percentages">
                <div>
                    <b-input-group class="mb-1" size="sm">
                        <template #prepend>
                            <b-input-group-text >Age of Mythology</b-input-group-text>
                        </template>
                        <b-form-input disabled placeholder="100"></b-form-input>
                        <b-form-input placeholder="70"></b-form-input>
                    </b-input-group>
                    <b-input-group class="mb-1" size="sm">
                        <template #prepend>
                            <b-input-group-text >Age of Empires IV</b-input-group-text>
                        </template>
                        <b-form-input disabled placeholder="24"></b-form-input>
                        <b-form-input placeholder="14"></b-form-input>
                    </b-input-group>
                </div>

                <hr/>

                <div v-if="!config.isLoading">
                    <b-row align="center">
                        <h3>95%</h3>
                        <scan>+ 4% increase from previous 91%</scan>
                    </b-row>
                    <hr/>
                    <b-row align="center">
                        <b-col cols="6">
                            <h6>"0.23" per achievements earned</h6>
                            <h6>Supassed goal of 93% average</h6>
                        </b-col>
                        <b-col cols="6">
                            <h6>"0.23" per achievements earned</h6>
                            <h6>Supassed goal of 93% average</h6>
                        </b-col>
                    </b-row>
                </div>
                <div v-else>
                    <b-row 
                        align-v="center" 
                        class="justify-content-md-center mt-3"
                    >
                        <b-spinner 
                        variant="primary">
                        </b-spinner>
                    </b-row>
                </div>
            </b-card>
        </b-col>
    </b-row>
</template>

<script>
export default {
    props: {
    },
    data() {
        return {
            config: {
                isLoading: false,
            },
        };
    },
    methods: {
    },
    computed: {
    },
    created() {
    },
};
</script>