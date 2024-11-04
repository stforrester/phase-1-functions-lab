// Code your solution in this file!

function distanceFromHqInBlocks(destinationBlock) {
    return Math.abs(destinationBlock - 42);
}

function distanceFromHqInFeet(destinationBlock) {
    return distanceFromHqInBlocks(destinationBlock) * 264;
}

function distanceTravelledInFeet(startingBlock, destinationBlock) {
    return Math.abs(destinationBlock - startingBlock) * 264;
}

function calculatesFarePrice(start, destination) {
    if (distanceTravelledInFeet(start, destination) <= 400) {
        return 0;
    }
    else if ((distanceTravelledInFeet(start, destination) > 400) && (distanceTravelledInFeet(start, destination) <= 2000)) {
        return (distanceTravelledInFeet(start, destination) - 400) * .02;
    }
    else if ((distanceTravelledInFeet(start, destination) > 2000) && (distanceTravelledInFeet(start, destination) <= 2500)) {
        return 25;
    }
    else {
        return 'cannot travel that far';
    }
}
