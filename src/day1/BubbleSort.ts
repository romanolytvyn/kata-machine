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