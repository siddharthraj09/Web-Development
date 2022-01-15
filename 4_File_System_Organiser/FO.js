// We will be creating a File System Organizer//
//Features of the Project -
//If you have numerous Files in a folder and they are not Properly arranged
//So you can use this tool to arrange them in specific directory according to their extension
// like text files will go into text File Folder .exe files will go into application folder and so on
// so at the end you will have a arranged set of files in specific folders

let intputArr=process.argv.slice(2)
let command=intputArr[0]


    switch(command){

        case 'tree':
            console.log( 'Tree Implemented')
            break;
        case 'organize':
            console.log('Organize Implemented')
            break;
        case 'help':
            console.log('Help Implemented')
            break;
        case 'default':
            console.log('Please enter a valid command')
            break
    }
    
    function helpfn(){
        console.log(`List of all the commands
                        1)Tree command - FO.js tree <dirname>
                        2)Organize command - FO.js organize <dirname>
                        3)Help command - FO.js help <dirname>`)
    }
