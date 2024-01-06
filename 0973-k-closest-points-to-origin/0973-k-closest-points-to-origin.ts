function kClosest(points: number[][], k: number): number[][] {
    points.sort((x, y) => squaredDistance(x) - squaredDistance(y))
    return points.slice(0,k)
};

const squaredDistance = ([x, y]: number[]) => x ** 2 + y ** 2;