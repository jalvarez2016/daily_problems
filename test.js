function binarySearch(list, el) {
    let low = 0;
    let high = list.length - 1;
    while (low <= high) {
        let mid = Math.floor((high + low) / 2 );
        let guess = list[mid];
        console.log(guess);
        if (guess === el) {
            return `Found at index ${mid}`;
        } else if (guess > el) {
            high = mid - 1;
        } else {
            low = mid + 1;
        }
    }
    return null;
}
binarySearch(['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z','za', 'zb', 'zc', 'zd', 'ze', 'zf'], 'zf')