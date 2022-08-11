export default {
    getColumnDates(data) {
        var columnDates = [];
        data.forEach(element => {
            Object.entries(element).forEach(att => {
                if (/[0-9]{2}[/][0-9]{2}[/][0-9]{4}$/.test(att[0]) && !columnDates.find(col => col.field === att[0])) {
                    columnDates.push({ field: att[0], header: att[0] });
                }
            })
        });
        columnDates = columnDates.sort((a, b) => this.sortDates(a.field, b.field));
        return columnDates
    },

    sortDates(a, b) {
        var dateSplited = a.split("/")
        a = new Date(dateSplited[2], dateSplited[1] - 1, dateSplited[0]);
        dateSplited = b.split("/")
        b = new Date(dateSplited[2], dateSplited[1] - 1, dateSplited[0])
        if (a.getTime() < b.getTime()) return -1;
        else if (a.getTime() > b.getTime()) return 1;
        else return 0;
    },

    getOplList(data) {
        const oplList = [];
        data.forEach(element => {
            if (!oplList.find(opl => opl.value === element.opl)) {
                oplList.push({ opl: element.opl, value: element.opl });
            }
        });
        return oplList
    },

    getSupplierList(data) {
        const supplierList = [];
        data.forEach(element => {
            Object.entries(element).forEach(att => {
                if (/[0-9]{2}[/][0-9]{2}[/][0-9]{4}$/.test(att[0])) {
                    if (!supplierList.find(supplier => supplier.value === element[att[0]].supplier)) {
                        supplierList.push({ supplier: element[att[0]].supplier, value: element[att[0]].supplier });
                    }
                }
            })
        });
        return supplierList
    }
}