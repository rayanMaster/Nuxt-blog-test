import {type User} from "~/types";
export const authorFullName = (user?: User) => {
    const firstName = user?.firstName || '';
    const lastName = user?.lastName || '';

    if (firstName && lastName) {
        return `${firstName} ${lastName}`;
    } else if (firstName) {
        return firstName;
    } else if (lastName) {
        return lastName;
    } else {
        return '';
    }
};
export const isFirst = (index: number) => {
    return index % 2 == 0;
}
