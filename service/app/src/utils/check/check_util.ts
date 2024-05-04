
export function isNull(str : object) : boolean {
    return str == null || str == undefined;
}

export function isEmpty(str : string) : boolean {
    return str == "" || str == " ";
}