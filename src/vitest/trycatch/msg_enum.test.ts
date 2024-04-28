import { expect, test } from "vitest";
import { happen, ErrorMsg } from "./msg_enum";

test("confirm error", () => {
    expect(() => {
        happen();
    }).toThrow(ErrorMsg.SOMETHING_HAPPENED);
});
