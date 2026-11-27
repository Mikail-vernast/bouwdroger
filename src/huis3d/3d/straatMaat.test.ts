import { describe, expect, it } from "vitest";
import { straatMaat } from "./bestanden";

describe("which street picture replaces the mini one", () => {
  it("keeps the mini street on data saver and 2G", () => {
    expect(straatMaat("zuinig", false)).toBe("mini");
    expect(straatMaat("zuinig", true)).toBe("mini");
  });
  it("gives a phone the 1750 px picture", () => {
    expect(straatMaat("meteen", true)).toBe("klein");
    expect(straatMaat("later", true)).toBe("klein");
  });
  it("gives a large screen the 2800 px picture only on a fast line", () => {
    expect(straatMaat("meteen", false)).toBe("groot");
    expect(straatMaat("later", false)).toBe("klein");
  });
});
