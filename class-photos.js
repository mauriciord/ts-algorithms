// red shirts = [5, 8, 1, 3, 4]
// blue shirts = [6, 9, 2, 4, 5]

/*
    time = O(n log n)
    space = O(1)
 */
function classPhotos(redShirtHeights, blueShirtHeights) {
    const tallest = (a, b) => b - a
    const sortedRedShirtHeights = redShirtHeights.sort(tallest);
    const sortedBlueShirtHeights = blueShirtHeights.sort(tallest);

    const colorOfTheRowBack = sortedRedShirtHeights[0] > sortedBlueShirtHeights[0] ? 'RED' : 'BLUE';

    for (let i = 0; i < sortedRedShirtHeights.length ; i++) {
        const currentRedShirtHeight = sortedRedShirtHeights[i];
        const currentBlueShirtHeight = sortedBlueShirtHeights[i];

        if (colorOfTheRowBack === 'RED') {
            if (currentRedShirtHeight <= currentBlueShirtHeight) {
                return false
            }
        } else if (currentBlueShirtHeight <= currentRedShirtHeight) {
            return false;
        }

    }

    return true;
}

// Do not edit the line below.
exports.classPhotos = classPhotos;


// Do not edit the line below.
exports.classPhotos = classPhotos;