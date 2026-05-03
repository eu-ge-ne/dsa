export function insertionSort<T>(arr: T[]): void {
  const l = arr.length;

  for (let i = 1; i < l; i += 1) {
    const key = arr[i]!;

    let j = i - 1;
    while ((j >= 0) && (arr[j]! > key)) {
      arr[j + 1] = arr[j]!;
      j = j - 1;
    }

    arr[j + 1] = key;
  }
}
