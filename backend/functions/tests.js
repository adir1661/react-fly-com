function getAverageRating(issues) {
    return issues.reduce((sum, issue) => Number(sum.rating) + Number(issue.rating)) / issues.length;
}

console.log(getAverageRating([{rating:30}]))