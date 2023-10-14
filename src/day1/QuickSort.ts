function partition(arr: number[], start: number, end: number): number {
    const pivot = arr[end];
    let idx = start - 1;

    for (let i = start; i < end; i++) {
        if (arr[i] < pivot) {
            idx += 1;
            const temp = arr[i];
            arr[i] =  arr[idx];
            arr[idx] = temp;
        }
    }

    idx += 1;
    arr[end] =  arr[idx];
    arr[idx] = pivot;

    return idx;
}

export default function quick_sort(arr: number[]): void {
    const pivotIdx = partition(arr, 0, arr.length - 1);
    partition(arr, 0, pivotIdx - 1);
    partition(arr, pivotIdx + 1, arr.length - 1);
}