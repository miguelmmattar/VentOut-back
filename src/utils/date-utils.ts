import { DateFilter } from "@/protocols";

const filters = {
    day: 'day',
    week: 'week',
    month: 'month',
    year: 'year',
    allTime: 'all time',
};

function filterByDay(date: string | Date) {
    const day = new Date(date).getDate();
    const month = new Date(date).getMonth() + 1;
    const year = new Date(date).getFullYear();

    return `${year}-${month}-${day}`;
}

function filterByWeek(date: string | Date) {
    const weekDay = new Date(date).getDay()
    const day = new Date(date).getDate() - weekDay;
    const month = new Date(date).getMonth() + 1;
    const year = new Date(date).getFullYear();

    return `${year}-${month}-${day}`;
}

function filterByMonth(date: string | Date) {
    const month = new Date(date).getMonth() + 1;
    const year = new Date(date).getFullYear();

    return `${year}-${month}-1`;
}

function filterByYear(date: string | Date) {
    const year = new Date(date).getFullYear();

    return `${year}-1-1`;
}

function callFilter(filter: DateFilter) {
    let result: string;

    if(filter.param === filters.day) result = filterByDay(filter.date);
    if(filter.param === filters.week) result = filterByWeek(filter.date);
    if(filter.param === filters.month) result = filterByMonth(filter.date);
    if(filter.param === filters.year) result = filterByYear(filter.date);
    if(filter.param === filters.allTime) result = (new Date(0)).toString();

    return result;
}

function getWeekDay(date: Date | string) {
    return new Date(date).getDay();
}

export {
    filters,
    callFilter,
    getWeekDay,
}