type Walk = {
    curr: Point;
    end: Point;
    path: Point[]
    wall: string;
    maze: string[];
    seen: boolean[][]
}

const directions = [
    [ 0, -1],
    [ 1,  0],
    [ 0,  1],
    [-1,  0],
];

function walk({maze, wall, end, curr, seen, path}: Walk): boolean {
    // leave a maze
    if (
        curr.x < 0 ||
        curr.x >= maze[0].length ||
        curr.y < 0 ||
        curr.y >= maze.length
    ) {
        return false;
    }

    // hit a wall
    if (maze[curr.y][curr.x] === wall) {
        return false;
    }

    // we have been here before
    if (seen[curr.y][curr.x]) {
        return false;
    }

    // found ending
    if (curr.x === end.x && curr.y === end.y) {
        path.push(curr);
        return true;
    }

    seen[curr.y][curr.x] = true;
    path.push(curr);

    for (let i = 0; i < directions.length; i++) {
        const [x, y] = directions[i];

        if (walk({ maze, wall, end, seen, path, curr: {x: curr.x + x, y: curr.y + y} })) {
            return true;
        }
    }

    path.pop();

    return false;
}

export default function solve(maze: string[], wall: string, start: Point, end: Point): Point[] {
    const path: Point[] = [];
    const seen: boolean[][] = [];

    for (let i = 0; i < maze.length; i++) {
        seen.push(new Array(maze[0].length).fill(false));
    }

    walk({ maze, seen, path, wall, end, curr: start});

    return path;
}
