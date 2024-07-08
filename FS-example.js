// Import the filesystem module
const fs = require('fs');

// Write a new file
fs.writeFile('example.txt', 'Hello, World!', (err) => {
  if (err) throw err;
  console.log('File has been saved!');

  // Read the newly created file
  fs.readFile('example.txt', 'utf8', (err, data) => {
    if (err) throw err;
    console.log('File content:', data);

    // Append to the file
    fs.appendFile('example.txt', '\nAppended content!', (err) => {
      if (err) throw err;
      console.log('Content has been appended!');

      // Delete the file
      fs.unlink('example.txt', (err) => {
        if (err) throw err;
        console.log('File has been deleted!');
      });
    });
  });
});
