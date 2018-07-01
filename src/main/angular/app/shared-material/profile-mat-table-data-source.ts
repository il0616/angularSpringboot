import { MatTableDataSource } from "@angular/material";

export class ProfileMatTableDataSource<T> extends MatTableDataSource<T> {
    filteringColumn: string;

    private profileFilterPredicate(data: T, filter: string, filteringColumn: string): boolean {
        const columnData = data[filteringColumn].toLowerCase();
        const transformedFilter = filter.toLowerCase();
    
        return columnData.indexOf(transformedFilter) != -1;
    }

    _filterData(data: T[]) {
        this.filteredData =
            !this.filter ? data : data.filter(obj => this.profileFilterPredicate(obj, this.filter, this.filteringColumn));
    
        if (this.paginator) { this._updatePaginator(this.filteredData.length); }
    
        return this.filteredData;
    }
}
