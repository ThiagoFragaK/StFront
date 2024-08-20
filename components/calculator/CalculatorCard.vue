<template>
    <b-container>
        <b-row
            align-v="top"
            class="justify-content-md-center"
        >
            <b-col cols="5" class="mt-3">
                <achievements-table 
                />
            </b-col>
            <b-col cols="7">
                <calculator-panel-card 
                />
            </b-col>
        </b-row>
    </b-container>
</template>

<script>
import CalculatorPanelCard from './CalculatorPanelCard.vue';
import AchievementsTable from './AchievementsTable.vue';

export default {
    props: {
    },
    components: {
        CalculatorPanelCard,
        AchievementsTable
    },
    data() {
        return {
            config: {
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