const add =  (a, b) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(a + b)
    }, 1000)
  })
}

const sum = add(1, 2)
  .then((sum) => {
    console.log(sum)
    return add(sum, 5)
  })
  .then((sum) => console.log(sum))
  .catch((err) => console.log(err))
