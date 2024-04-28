import { createErr, createOk, Result } from "option-t/PlainResult";

export enum ErrorMsg {
    SOMETHING_HAPPENED = "something happened.",
}

export function returnOk(value: number): Result<number, string> {
    return createOk(value);
}

export function returnErr(): Result<number, string> {
    return createErr(ErrorMsg.SOMETHING_HAPPENED);
}
