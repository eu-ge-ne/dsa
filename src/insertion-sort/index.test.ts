import { assertEquals } from "@std/assert";

import { insertionSort } from "./index.ts";

Deno.test("insertionSort", () => {
  const arr = [3, 2, 1];
  insertionSort(arr);
  assertEquals(arr, [1, 2, 3]);
});
