'strict mode'
const book = {
  title: "Brave New World",
  author: "Aldous Huxley",
}
function summary() {
  console.log(`${this.title} was written by ${this.author}.`)
}

summary.call(book)
/*call and apply is that call requires the arguments to be passed in one-by-one,
 and apply takes the arguments as an array. */
function longerSummary(genre, year) {
  console.log(
    `${this.title} was written by ${this.author}. It is a ${genre} novel written in ${year}.`
  )
}
longerSummary.call(book, "dystopian", 1932)
longerSummary.apply(book, ["dystopian", 1932])

/*
Bind
Both call and apply are one-time use methods—if
 you call the method with the this context it will have it, 
 but the original function will remain unchanged.

Sometimes, you might need to use a method over and over with 
the this context
 of another object, and in that case you could use the bind method to create a brand new function with an explicitly bound this.
*/
const braveNewWorldSummary = summary.bind(book)

braveNewWorldSummary()

const book2 = {
  title: '1984',
  author: 'George Orwell',
}

braveNewWorldSummary.bind(book2)

braveNewWorldSummary() // Brave New World was written by Aldous Huxley.