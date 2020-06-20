let taskArr = (() => {
  let arr = []
  for (let i = 1; i <= 5; i++) {
    arr.push({
      name: "Task-1" + i,
      completed: i % 2 === 0,
    })
  }
  return arr
})()

console.log(taskArr)
