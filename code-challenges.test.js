// UNIT 4 ASSESSMENT: Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------1) Prompt: Create a function that takes in a number (greater than 2) and returns an array containing the Fibonacci sequence. The length of the array is determined by the argument of the function.

// a) Create a test with expect statements for each of the variables provided.
// describe("functionName", () => {
//     it("short description of what fxn should do", () => {
//       expect(functionName(input)).toEqual(output)
//     })
//   } )

describe("fibonacciSequencer", () => {
  const fibonacciLength1 = 6
  // Expected output: [1, 1, 2, 3, 5, 8]
  const fibonacciLength2 = 10
  // Expected output: [1, 1, 2, 3, 5, 8, 13, 21, 34, 55]

  it("takes num (>2) and returns arr of the fibonacci sequence with num many values", () => {
    expect(fibonacciSequencer(fibonacciLength1)).toEqual([1, 1, 2, 3, 5, 8])
    expect(fibonacciSequencer(fibonacciLength2)).toEqual([1, 1, 2, 3, 5, 8, 13, 21, 34, 55])
  })
})
// ReferenceError: fibonacciSequencer is not defined

// b) Create the function that makes the test pass.
const fibonacciSequencer = (arrLength) => {
  // validating value is greater than 2
  if (arrLength < 2) {
    return
  }
  // what the arr would look like if arrLength was 2
  let babyFib = [ 1, 1 ]
  // i = 2 bc those values were accounted for in babyFib
  // i < arrLength bc that param is basically holding the value of arrThatWillUltimatelyBeReturned.length
  // i++ bc each index of the arr needs to be built out
  for (let i = 2; i < arrLength; i++) {
    // this is where each index of the babyFib arr is being built out with each iteration
    // bracket notation to extract the previous 2 values
    // adding those two values together to create the next value in the sequence
    // pushing the value into the babyFib arr
    const previousVal = babyFib[i - 1]
    const previousPreviousVal = babyFib[i - 2]
    const nextFibVal = previousVal + previousPreviousVal
    babyFib.push(nextFibVal)
  }
  return babyFib
}
// Pseudo code:

// --------------------2) Create a function that takes in an object that contains up votes and down votes and returns the end tally.

// a) Create a test with expect statements for each of the variables provided.
// describe("functionName", () => {
//     it("short description of what fxn should do", () => {
//       expect(functionName(input)).toEqual(output)
//     })
//   } )

describe("netTally", () => {
  const votes1 = { upVotes: 13, downVotes: 2 }
  // Expected output: 11
  const votes2 = { upVotes: 2, downVotes: 33 }
  // Expected output: -31

  it("takes obj and returns combined vote properties", () => {
    expect(netTally(votes1)).toEqual(11)
    expect(netTally(votes2)).toEqual(-31)
  })
})
// ReferenceError: netTally is not defined

// b) Create the function that makes the test pass.
// obj destructuring like what we did with props in react
const netTally = ({ obj }) => {
  // subtract to get net value
  return upVotes - downVotes
}

// Pseudo code:
