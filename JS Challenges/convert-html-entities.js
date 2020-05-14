function convertHTML(str) {
  let char = [/&/g, />/g, /</g, /"/g, /'/g];
  let html = ['&amp;', '&gt;', '&lt;', '&quot;', '&apos;'];

  for(let i=0; i<5; i++){
   str =  str.replace(char[i], html[i]);
  }
  console.log(str);
  return str;
}

convertHTML("Schindler's List");

function convertHTML2(str) {
  // Use Object Lookup to declare as many HTML entities as needed.
  const htmlEntities = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&apos;"
  };
  // Using a regex, replace characters with it's corresponding html entity
  return str.replace(/([&<>\"'])/g, match => htmlEntities[match]);
}

// test here
convertHTML2("Dolce & Gabbana");