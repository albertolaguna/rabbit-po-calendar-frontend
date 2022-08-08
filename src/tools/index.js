export default {
    getColumnDates(data) {
        const columnDates = [];
        data.forEach(element => {
            Object.entries(element).forEach(att => {
                if (/[0-9]{2}[/][0-9]{2}[/][0-9]{4}$/.test(att[0]) && !columnDates.find(col => col.field === att[0])) {
                    columnDates.push({ field: att[0], header: att[0] });
                    console.log(att[0]);
                }
            })
        });
        console.log(columnDates);
        return columnDates
    },

    getOplList(data) {
        const oplList = [];
        data.forEach(element => {
            if (!oplList.find(opl => opl.value === element.opl)) {
                oplList.push({ opl: element.opl, value: element.opl });
            }
        });
        console.log(oplList);
        return oplList
    }
}