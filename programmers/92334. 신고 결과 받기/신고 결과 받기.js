function solution(id_list, report, k) {
    let reportSet = new Set(report);
    let newReport = [...reportSet];
    let count = new Array(id_list.length).fill(0);
    let user = Array.from({ length: id_list.length }, (i) => []);
    for (let i = 0; i < newReport.length; i++) {
        newReport[i] = newReport[i].split(" ");
        count[id_list.indexOf(newReport[i][1])]++;
        user[id_list.indexOf(newReport[i][1])].push(newReport[i][0]);
    }

    let result = new Array(id_list.length).fill(0);
    for (let i = 0; i < count.length; i++) {
        if (count[i] >= k) {
            for (let j = 0; j < user[i].length; j++) {
                result[id_list.indexOf(user[i][j])]++;
            }
        }
    }
    return result;
}
