import { expect, test } from "vitest";
import { isOk, isErr, unwrapOk, unwrapErr } from "option-t/PlainResult";
import { ErrorMsg, returnErr, returnOk } from "./result";

test("ok case", () => {
    const result = returnOk(3);
    expect(isOk(result)).toBeTruthy();
    const value = unwrapOk(result);
    expect(value).toEqual(3);
});

test("err case", () => {
    const result = returnErr();
    expect(isErr(result)).toBeTruthy();
    const err_mssage = unwrapErr(result);
    expect(err_mssage).toEqual(ErrorMsg.SOMETHING_HAPPENED);
});
