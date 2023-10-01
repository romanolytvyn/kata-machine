export default function bs_list(haystack: number[], needle: number): boolean {
    let l = 0;
    let h = haystack.length;

    do {
        const middle = Math.floor(l + (h - l) / 2);
        const val = haystack[middle];

        if (val === needle) {
            return true;
        } else if (needle > val) {
            l = middle + 1;
        } else {
            h = middle;
        }
    } while (l < h);

    return false;
}