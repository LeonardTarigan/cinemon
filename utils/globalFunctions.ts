export function formatDate(dateString: string): string {
    const options: Intl.DateTimeFormatOptions = {
        month: 'long',
        day: 'numeric',
        year: 'numeric',
    };
    const date: Date = new Date(dateString);
    const formattedDate: string = date.toLocaleDateString(undefined, options);
    const day: number = date.getDate();
    const suffix: string = getNumberSuffix(day);
    return formattedDate.replace(/\d+/, day + suffix);
}

export function getNumberSuffix(day: number): string {
    if (day >= 11 && day <= 13) {
        return 'th';
    }
    switch (day % 10) {
        case 1:
            return 'st';
        case 2:
            return 'nd';
        case 3:
            return 'rd';
        default:
            return 'th';
    }
}
