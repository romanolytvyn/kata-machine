export default function two_crystal_balls(breaks: boolean[]): number {
    const step = Math.floor(Math.sqrt(breaks.length));
    let breakingPoint = step;

    for (; breaks.length; breakingPoint += step) {
        if (breaks[breakingPoint]) {
            break;
        }
    }

    breakingPoint -= step;

    for (let j = 0; j < step && breakingPoint < breaks.length; ++breakingPoint, ++j) {
        if (breaks[breakingPoint]) {
            return breakingPoint;
        }
    }

    return -1;
}