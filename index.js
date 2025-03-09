// index.js

// Function to calculate distance from HQ in blocks
function distanceFromHqInBlocks(block) {
  const hqBlock = 42; // Assuming HQ is at 42nd street
  return Math.abs(block - hqBlock);
}

// Function to calculate distance from HQ in feet
function distanceFromHqInFeet(block) {
  const blocks = distanceFromHqInBlocks(block);
  return blocks * 264; // 1 block = 264 feet
}

// Function to calculate distance travelled in feet
function distanceTravelledInFeet(start, destination) {
  return Math.abs(destination - start) * 264;
}

// Function to calculate fare price
function calculatesFarePrice(start, destination) {
  const distance = distanceTravelledInFeet(start, destination);

  if (distance <= 400) {
    return 0; // Free sample
  } else if (distance > 400 && distance <= 2000) {
    return (distance - 400) * 0.02; // 2 cents per foot after the first 400 feet
  } else if (distance > 2000 && distance <= 2500) {
    return 25; // Flat rate for distances over 2000 feet
  } else {
    return 'cannot travel that far'; // No rides over 2500 feet
  }
}
