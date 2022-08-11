<template>
  <div class="filters">
    <MultiSelect v-model="selectedOpl" :options="oplList" optionLabel="opl" placeholder="Filter by OPL"
      class="filter-item" @change="filterByOpl" />
    <MultiSelect v-model="selectedSupplier" :options="supplierList" optionLabel="supplier"
      placeholder="Filter by Supplier" class="filter-item" />
    <Calendar v-model="date" selectionMode="range" dateFormat="dd/mm/yy" icon="pi pi-calendar" :showIcon="true"
      :showButtonBar="true" class="filter-item" />
  </div>

  <!-- <DataTable :value="tableData" :paginator="true" :rows="10" class="p-datatable-sm"
    paginatorTemplate="CurrentPageReport FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink RowsPerPageDropdown"
    :rowsPerPageOptions="[10, 20, 50]" responsiveLayout="scroll"
    currentPageReportTemplate="Showing {first} to {last} of {totalRecords}"> -->
  <div class="card" style="height: calc(100vh - 143px)">
    <DataTable :value="tableData" :scrollable="true" scrollHeight="flex" class="p-datatable-sm">
      <Column field="opl" header="OPL" :sortable="true" frozen style="width:160px">
      </Column>
      <!-- <Column field="date" header="date" sortable="true" filterField="true"></Column> -->
      <Column v-for="col of columnDates" :field="col.field" :header="col.header" :key="col.field" :sortable="true">
        <template #body="{ data }">
          <a href="#" v-if="data[col.field] !== undefined">{{ data[col.field].po }}</a>
        </template>
      </Column>
    </DataTable>
  </div>
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
      supplierList: [],
      selectedSupplier: [],
      tableData: [
        { opl: 'GUADALAJARA', "20/10/2022": { po: 'PO620', supplier: 'Propimex S. de R.L. de C.V.' }, "23/10/2022": { po: 'PO624', supplier: 'Kimberly Clark de Mexico S.A.B. de C.V.' } },
        { opl: 'GUADALAJARA', "20/10/2022": { po: 'PO621', supplier: 'Laboratorios Pisa S.A. de C.V.' } },
        { opl: 'GUADALAJARA', "22/10/2022": { po: 'PO625', supplier: 'Laboratorios Pisa S.A. de C.V.' } },
        { opl: 'GUADALAJARA', "24/10/2022": { po: 'PO626', supplier: 'Laboratorios Pisa S.A. de C.V.' } },
        { opl: 'GUADALAJARA', "25/10/2022": { po: 'PO627', supplier: 'Laboratorios Pisa S.A. de C.V.' } },
        { opl: 'GUADALAJARA', "26/10/2022": { po: 'PO628', supplier: 'Laboratorios Pisa S.A. de C.V.' } },
        { opl: 'GUADALAJARA', "27/10/2022": { po: 'PO629', supplier: 'Laboratorios Pisa S.A. de C.V.' } },
        { opl: 'GUADALAJARA', "28/10/2022": { po: 'PO630', supplier: 'Laboratorios Pisa S.A. de C.V.' } },
        { opl: 'GUADALAJARA', "29/10/2022": { po: 'PO631', supplier: 'Laboratorios Pisa S.A. de C.V.' } },
        { opl: 'GUADALAJARA', "30/10/2022": { po: 'PO632', supplier: 'Laboratorios Pisa S.A. de C.V.' } },
        { opl: 'GUADALAJARA', "01/11/2022": { po: 'PO633', supplier: 'Laboratorios Pisa S.A. de C.V.' } },
        { opl: 'GUADALAJARA', "02/11/2022": { po: 'PO634', supplier: 'Laboratorios Pisa S.A. de C.V.' } },
        { opl: 'GUADALAJARA', "03/11/2022": { po: 'PO635', supplier: 'Laboratorios Pisa S.A. de C.V.' } },
        { opl: 'GUADALAJARA', "04/11/2022": { po: 'PO635', supplier: 'Laboratorios Pisa S.A. de C.V.' } },
        { opl: 'GUADALAJARA', "03/11/2022": { po: 'PO635', supplier: 'Laboratorios Pisa S.A. de C.V.' } },
        { opl: 'GUADALAJARA', "03/11/2022": { po: 'PO635', supplier: 'Laboratorios Pisa S.A. de C.V.' } },
        { opl: 'GUADALAJARA', "03/11/2022": { po: 'PO635', supplier: 'Laboratorios Pisa S.A. de C.V.' } },
        { opl: 'LEON', "21/10/2022": { po: 'PO622', supplier: 'Conservas La Costeña, S.A. de C.V.' }, "23/10/2022": { po: 'PO623', supplier: 'Conservas La Costeña, S.A. de C.V.' } }
      ],
      columnDates: []
    }
  },
  mounted() {
    this.updateColumns()
    this.oplList = tools.getOplList(this.tableData)
    this.supplierList = tools.getSupplierList(this.tableData)
  },
  methods: {
    updateColumns() {
      this.columnDates = tools.getColumnDates(this.tableData)
    },
    filterByOpl() {
      this.tableData = this.tableData.filter(item => {
        const opls = this.selectedOpl.map(item => item.opl)
        return opls.includes(item.opl)
      })
      this.updateColumns()
    },
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
