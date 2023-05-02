function solution(wallpaper) {
    const numRows = wallpaper.length;
    const numCols = wallpaper[0].length;
    let minX = numCols,
        minY = numRows,
        maxX = 0,
        maxY = 0;

    for (let i = 0; i < numRows; i++) {
        for (let j = 0; j < numCols; j++) {
            if (wallpaper[i][j] === "#") {
                minX = Math.min(minX, j);
                minY = Math.min(minY, i);
                maxX = Math.max(maxX, j);
                maxY = Math.max(maxY, i);
            }
        }
    }

    const dragStartX = minX;
    const dragStartY = minY;
    const dragEndX = maxX + 1;
    const dragEndY = maxY + 1;

    return [dragStartY, dragStartX, dragEndY, dragEndX];
}
