// Complete the compareTriplets function below.
function compareTriplets(a, b) {
    const award = [0, 0];
    for (let i = 0; i < a.length; i++) {
        if (a[i] > b[i]) {
            award[0] += 1;
        }
        if (a[i] < b[i]) {
            award[1] += 1;
        }
    }
    return award;

}