const dirTree = require("directory-tree");
const tree = dirTree('./commands/')
console.log('tree: ', tree)

const commands = tree.children
console.log('commands: ', commands)
let commandString = ''
commands.forEach((command) => {
  const str = `;${command.name}, `
  console.log('command.name/str: ', str)
  commandString = commandString + str
})
console.log('commandString: ', commandString)
