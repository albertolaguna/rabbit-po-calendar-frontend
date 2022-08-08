<template>
  <div class="filters">
    <MultiSelect v-model="selectedOpl" :options="oplList" optionLabel="opl" placeholder="Filter by OPL"
      class="filter-item" />
    <MultiSelect v-model="selectedOpl" :options="oplList" optionLabel="opl" placeholder="Filter by Supplier"
      class="filter-item" />
    <Calendar v-model="date" selectionMode="range" dateFormat="dd/mm/yy" icon="pi pi-calendar" showIcon="true"
      showButtonBar="true" class="filter-item" />
  </div>

  <DataTable :value="inputDates" :paginator="true" :rows="10" class="p-datatable-sm"
    paginatorTemplate="CurrentPageReport FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink RowsPerPageDropdown"
    :rowsPerPageOptions="[10, 20, 50]" responsiveLayout="scroll"
    currentPageReportTemplate="Showing {first} to {last} of {totalRecords}">
    <Column field="opl" header="OPL" sortable="true" filterField="true"></Column>
    <Column v-for="col of columnDates" :field="col.field" :header="col.header" :key="col.field" sortable="true">
      <template #body="{ data }">
        <a href="#">{{ data[col.field] }}</a>
      </template>
    </Column>
  </DataTable>
</template>

<script>
import tools from '@/tools'
import DataTable from 'primevue/datatable'
import Column from 'primevue/column'
import MultiSelect from 'primevue/multiselect'
import Calendar from 'primevue/calendar';

export default {
  name: 'MainPOCalendar',
  components: {
    DataTable,
    Column,
    Calendar,
    MultiSelect
  },
  data() {
    return {
      date: undefined,
      selectedOpl: [],
      oplList: [],
      inputDates: [
        {
          "id": 1000,
          "opl": "GUADALAJARA",
          "20/10/2022": "PO620",
        },
        {
          "id": 1000,
          "opl": "LEON",
          "21/10/2022": "PO621",
          "23/10/2022": "PO622",
        },
        {
          "id": 1000,
          "opl": "LEON",
          "23/10/2022": "PO623  ",
        },
        {
          "id": 1000,
          "opl": "GUADALAJARA",
          "20/10/2022": "PO620",
        },
        {
          "id": 1000,
          "opl": "LEON",
          "21/10/2022": "PO621",
          "23/10/2022": "PO622",
        },
        {
          "id": 1000,
          "opl": "LEON",
          "23/10/2022": "PO623  ",
        },
        {
          "id": 1000,
          "opl": "GUADALAJARA",
          "20/10/2022": "PO620",
        },
        {
          "id": 1000,
          "opl": "LEON",
          "21/10/2022": "PO621",
          "23/10/2022": "PO622",
        },
        {
          "id": 1000,
          "opl": "LEON",
          "23/10/2022": "PO623  ",
        },
        {
          "id": 1000,
          "opl": "GUADALAJARA",
          "20/10/2022": "PO620",
        },
        {
          "id": 1000,
          "opl": "LEON",
          "21/10/2022": "PO621",
          "23/10/2022": "PO622",
        },
        {
          "id": 1000,
          "opl": "LEON",
          "23/10/2022": "PO623  ",
        },
        {
          "id": 1000,
          "opl": "GUADALAJARA",
          "20/10/2022": "PO620",
        },
        {
          "id": 1000,
          "opl": "LEON",
          "21/10/2022": "PO621",
          "23/10/2022": "PO622",
        },
        {
          "id": 1000,
          "opl": "LEON",
          "23/10/2022": "PO623  ",
        },
        {
          "id": 1000,
          "opl": "GUADALAJARA",
          "20/10/2022": "PO620",
        },
        {
          "id": 1000,
          "opl": "LEON",
          "21/10/2022": "PO621",
          "23/10/2022": "PO622",
        },
        {
          "id": 1000,
          "opl": "LEON",
          "23/10/2022": "PO623  ",
        }
      ],
      columnDates: []
    }
  },
  mounted() {
    this.columnDates = tools.getColumnDates(this.inputDates)
    this.oplList = tools.getOplList(this.inputDates)
  }
}

</script>

<style>
.p-datatable-sm {
  padding-top: 1rem;
}

.filters {
  display: flex;
  column-gap: 20px;
  justify-content: space-between;
}

.filter-item {
  width: 100%;
}
</style>
