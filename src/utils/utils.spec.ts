import {trimBody, trimTitle} from "@utils/string";

describe('utils string', () => {
  test('util trimBody', () => {
    const body = "Во-первых, строгий режим заменяет исключениями некоторые ошибки, которые интерпретатор JavaScript ранее молча пропускал."
    expect(trimBody(body)).toBe("Во-первых, строгий режим заменяет исключениями нек...");
  });

  test('util trimTitle', () => {
    const body = "Во-первых, строгий режим заменяет исключениями некоторые ошибки, которые интерпретатор JavaScript ранее молча пропускал."
    expect(trimTitle(body)).toBe("Во-первых, строгий р...");
  });
});