<template>
    <div>
        <b-table 
            hover 
            striped 
            outlined
            :fields="table.columns"
            :items="table.items"
        >
            <template #cell(action)="data">
                +
            </template>
        </b-table>
    </div>
</template>

<script>
let tableColumns = [
  { key: "game", label: "Name", class: "text-center" },
  { key: "percentage", label: "Porcentagem", class: "text-center" },
  { key: "quantity", label: "N° achievements", class: "text-center" },
  { key: "action", label: "", class: "text-center" },
];

export default {
    props: {
    },
    data() {
        return {
            config: {
            },
            table: {
                columns: tableColumns,
                items: [
                    { game: "Age of Mythology", percentage: "100%", quantity: 70 },
                    { game: "Age of Empires II DE", percentage: "49%", quantity: 139 },
                    { game: "Age of Empires III DE", percentage: "100%", quantity: 88 },
                    { game: "Age of Empires IV", percentage: "24%", quantity: 14 },
                ]
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