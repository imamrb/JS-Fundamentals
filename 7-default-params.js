let greater = (name = '', age = 0) => {
    console.log('Hello ' + name, '\t You are ' + age + ' years old')
}

greater('Imam')

greater()
greater( '', 24)

greater('Imam ', 24 , 'extra')