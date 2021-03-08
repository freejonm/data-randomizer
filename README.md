# Data Randomizer  
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Description
This is a simple app that uses node.js and MySQL to write a set number of random samples from a .csv file into a new .csv file. I created it to handle an analysis of the accuracy of 31,000 rows of search results.  

## Table of Contents
* [Installation](#Installation)
* [Usage](#Usage)
* [Contributing](#Contributing)
* [Tests](#Tests)
* [License](#License)
* [Questions](#Questions)

## Installation
To install, run the following command:  
```
node script.js
```
## Usage
1. The app current functions within a VSCode editor, so open it in that program. 
2. Check the package.json file to ensure you have installed both "mysql" and "fast-csv" from npm. 
3. In seed.sql, edit the information on lines 10-14 to reflect the layout of the original .csv file, then edit line line 19 so the text within the quotation marks matches to local path to the original .csv file. 
4. In script.js, redefine const limit on line 8 to match the number of random samples you would like to select from the original .csv file. 
5. Ensure that line 18 reflects your root password for MySQL. 
6. Copy all text in seed.sql, paste it as a query in MySQL Workbench, and run. 
7. Now the app is ready to run, type node script.js in the integrated terminal and watch the magic happen!

## Contributing
Do you really want to contribute to this project? Hey, that's cool, I guess. Send me an email at the address below and we'll discuss what you'd like to do. Adding browser-based UI is a natural next step . . . just sayin. 

## Tests
To test, run the following command:  
```
no testing
```

  ## License  
  This application is covered under the **MIT** license. More info can be found here: [MIT](https://opensource.org/licenses/MIT)
  
## Questions
Questions about the project? You can contact me at freejonm@gmail.com or check out my GitHub profile at [freejonm](https://github.com/freejonm)
