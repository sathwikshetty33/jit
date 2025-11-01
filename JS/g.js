// 5. Callbacks — concept & basic pattern
// Notes (goal)
// Callback = function passed as argument, called later.
// Common in older APIs (e.g., setTimeout, Node-style callbacks function(err, result))




// function doAfter(ms, cb) {
//   setTimeout(() => cb(`done after ${ms}ms`), ms);
// }
// doAfter(500, result => console.log(result));




// Function that returns a Promise
function fetchData(success) {
  return new Promise((resolve, reject) => {
    console.log("Promise state: pending...");
    setTimeout(() => {
      if (success) {
        resolve("✅ Promise fulfilled: Data fetched successfully!");
      } else {
        reject("❌ Promise rejected: Failed to fetch data.");
      }
    }, 10000); // Simulate 10 seconds delay
  });
}

// Async function to handle Promise states
async function handlePromise() {
  try {
    const result = await fetchData(true); // Change true → false to see rejection
    console.log(result);
  } catch (error) {
    console.log(error);
  }
}

handlePromise();
