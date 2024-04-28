export enum ErrorMsg {
    SOMETHING_HAPPENED = "something happened.",
}

export function happen(): void {
    throw new Error(ErrorMsg.SOMETHING_HAPPENED);
}
