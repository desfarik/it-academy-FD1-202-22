function getAverage(marks) {
    let sum = 0;

    for (const mark of marks) {
        sum += mark;
    }
    return Math.floor(sum / marks.length)
}
