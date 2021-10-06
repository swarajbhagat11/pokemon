import { Sort } from "../enums/sort";

export interface StoreData {
    search: string,
    sort: {
        name: Sort,
        height: Sort,
        weight: Sort,
    },
    url: string,
    recordCount: string
}