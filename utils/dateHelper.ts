export const humanReadableDate = (timestamp: number | undefined) => {
    if (timestamp == null) return '';

    const dateTime = new Date(timestamp)
    const date = dateTime.toLocaleDateString()
    const time = dateTime.toLocaleTimeString()
    return date + ' ' + time
}


export const publishedDateFrom = (timestamp: number | undefined) => {
    if (timestamp == null) return '';

    const currentTime = new Date().getTime();
    const timeDifference = currentTime - timestamp;

    const seconds = Math.floor(timeDifference / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);
    const weeks = Math.floor(days / 7);
    const months = Math.floor(days / 30);
    const years = Math.floor(days / 365);

    if (years > 0) {
        return `${years} ${years === 1 ? 'year' : 'years'}`;
    } else if (months > 0) {
        return `${months} ${months === 1 ? 'month' : 'months'}`;
    } else if (weeks > 0) {
        return `${weeks} ${weeks === 1 ? 'week' : 'weeks'}`;
    } else if (days > 0) {
        return `${days} ${days === 1 ? 'day' : 'days'}`;
    } else if (hours > 0) {
        return `${hours} ${hours === 1 ? 'hour' : 'hours'}`;
    } else if (minutes > 0) {
        return `${minutes} ${minutes === 1 ? 'minute' : 'minutes'}`;
    } else {
        return `${seconds} ${seconds === 1 ? 'second' : 'seconds'}`;
    }

}