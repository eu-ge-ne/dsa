export function insertionSort<T>(arr: T[]): void {
  const l = arr.length;

  for (let i = 1; i < l; i += 1) {
    const key = arr[i]!;

    let j;
    for (j = i - 1; j >= 0; j -= 1) {
      if (arr[j]! <= key) {
        break;
      }

      arr[j + 1] = arr[j]!;
    }

    arr[j + 1] = key;
  }
}
