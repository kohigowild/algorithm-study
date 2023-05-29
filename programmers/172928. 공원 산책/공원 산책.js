function solution(park, routes) {
    let startX = 0;
    let startY = 0;

    const grid = park.map((row) => row.split(""));

    for (let i = 0; i < park.length; i++) {
        if (park[i].includes("S")) {
            startY = i;
            startX = park[i].indexOf("S");
            break;
        }
    }

    for (let st of routes) {
        const direction = st.split(" ")[0];
        const distance = parseInt(st.split(" ")[1]);

        let currentX = startX;
        let currentY = startY;

        for (let i = 0; i < distance; i++) {
            if (direction === "E") {
                currentX++;
            }
            if (direction === "W") {
                currentX--;
            }
            if (direction === "S") {
                currentY++;
            }
            if (direction === "N") {
                currentY--;
            }
            if (currentX >= 0 && currentY >= 0 && currentY < grid.length && currentX < grid[0].length && grid[currentY][currentX] !== "X") {
                if (i === distance - 1) {
                    startX = currentX;
                    startY = currentY;
                }
            } else {
                break;
            }
        }
    }

    return [startY, startX];
}
