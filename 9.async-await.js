const add = (a, b) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (a < 0 || b < 0) reject(new Error('Negative number not supported'))
      resolve(a + b)
    }, 1000)
  })
}

const doWork = async () => {
  const sum = await add(1, 2)
  const sum2 = await add(sum, 5)
  const sum3 = await add(sum2, 10)

  return sum3
}
doWork()
  .then((sum) => console.log(sum))
  .catch((e) => console.log(e))

async function some(a) {
  if (a < 10) throw new Error('Less then 10')
  
  return a + 10
}

async function another() {
  try {
    const a = await some(10)

    console.log(a)
  }
  catch {
    console.log(error)
  }
}

 another()