import { assertEquals } from "@std/assert";

import { insertionSort } from "./index.ts";

Deno.test("sort non-empty array", () => {
  const arr = [3, 2, 1];

  insertionSort(arr);

  assertEquals(arr, [1, 2, 3]);
});

Deno.test("sort empty array", () => {
  const arr: number[] = [];

  insertionSort(arr);

  assertEquals(arr, []);
});

Deno.test("sort array with 1 elemnt", () => {
  const arr = [1];

  insertionSort(arr);

  assertEquals(arr, [1]);
});

Deno.test("sort array with 2 elemnts", () => {
  const arr = [2, 1];

  insertionSort(arr);

  assertEquals(arr, [1, 2]);
});
