// original implementation
export default function bubble_sort(arr: number[]): void {
    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = 0; j < arr.length - 1 - i; j++) {
            if (arr[j] > arr[j + 1]) {
                const temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
}

// alternative variant (a bit more efficient)
// export default function bubble_sort(arr: number[]): void {
//     const n = arr.length;
//     let swapped;
//
//     do {
//         swapped = false;
//         for (let i = 0; i < n - 1; i++) {
//             if (arr[i] > arr[i + 1]) {
//                 const temp = arr[i];
//                 arr[i] = arr[i + 1];
//                 arr[i + 1] = temp;
//                 swapped = true; // Mark that a swap was made
//             }
//         }
//     } while (swapped);
// }

// my implementation (less efficient)
// export default function bubble_sort(arr: number[]): void {
//     let idx = 0;
//     let lastIdx = arr.length;
//
//     while (lastIdx > 0) {
//         const aIdx = idx;
//         const bIdx = idx + 1;
//         const a = arr[aIdx];
//         const b = arr[bIdx];
//
//         if (a > b) {
//             arr[aIdx] = b;
//             arr[bIdx] = a;
//         }
//
//         if (bIdx === lastIdx) {
//             idx = 0;
//             lastIdx -= 1;
//         } else {
//             idx += 1;
//         }
//     }
// }