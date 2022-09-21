function naiveStringSearch(longStr, pattern) {
  // keep count of how many patterns we find in the longString
  let count
  // loop over the longStr
  for (let i = 0; i < longStr.length; i++){
    // for each loop of the longStr, loop over the pattern
    for (let j = 0; j < pattern.length; j++){
      // if the letter at j in the pattern doesn't equal the letter at the longStr of i and j (its hard to think about, but its true), break the inner loop and progress once in the longStr
      if (pattern[j] !== longStr[i + j]) {
        console.log("SLAUGHTER!")
        break;
      }
      // if we found that the letters match all the way along, we can then up the count of blood for the blood god, i mean, BLOOD FOR THE BLOOD GOD!!!!
      if (j === pattern.length - 1) {
        console.log("FOUND ONE! MORE BLOOD FOR THE BLOOD GOD!!!")
        count++
      }
    }
  }
  return count
}

naiveStringSearch("lorie loled", "lo")