module.exports = function reverse(n) {
    return parseInt(Array.from(n.toString()).reverse().join(''));
}