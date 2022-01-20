// We will be creating a File System Organizer//
//Features of the Project -
//If you have numerous Files in a folder and they are not Properly arranged
//So you can use this tool to arrange them in specific directory according to their extension
// like text files will go into text File Folder .exe files will go into application folder and so on
// so at the end you will have a arranged set of files in specific folders



const fs = require('fs')
const path = require('path')

let types = {
    media: ["mp4", "mkv", "mp3"],
    archives: ["zip", "7z", "rar", "tar", "gz", "ar", "iso", "xz"],
    documents: [
        "docx",
        "doc",
        "pdf",
        "xlsx",
        "xls",
        "odt",
        "ods",
        "odp",
        "odg",
        "odf",
        "txt",
        "ps",
        "tex",
    ],
    app: ["exe", "dmg", "pkg", "deb"],
};


let inputArr = process.argv.slice(2)
let command = inputArr[0]


switch (command) {

    case 'tree':
        console.log('Tree Implemented')
        break;
    case 'organize':
        organizeFn(inputArr[1])
        break;
    case 'help':
        console.log('Help Implemented')
        break;
    case 'default':
        console.log('Please enter a valid command')
        break
}

function helpfn() {
    console.log(`List of all the commands
                        1)Tree command - FO.js tree <dirname>
                        2)Organize command - FO.js organize <dirname>
                        3)Help command - FO.js help <dirname>`)
}

function organizeFn(dirpath) {
    let destPath
    if (dirpath == undefined) {
        console.log('Please enter a valid path')
        return
    } else {
        let doesExist = fs.existsSync(dirpath)
        // console.log(doesExist)
        if (doesExist == true) {
            destPath = path.join(dirpath, "organized_files")

            if (fs.existsSync(destPath) == false) {
                fs.mkdirSync(destPath)
            } else {
                console.log('Folder already exsist')
            }
        } else {
            console.log('Please enter a valid path')
        }

    }
    organizeHelper(dirpath, destPath)
}

function organizeHelper(src, dest) {
    let childNames = fs.readdirSync(src)
    // console.log(childNames)
    for (let i = 0; i < childNames.length; i++) {
        let childAdress = path.join(src, childNames[i])
        let isFile = fs.lstatSync(childAdress).isFile()
        //console.log(childAdress + " " + isFile)

         if(isFile==true){
             let fileCategory=getCategory(childNames[i])
             console.log(childNames[i]+' blongs to '+ fileCategory)

             sendFiles(childAdress,dest,fileCategory)
         }
    }
}

function getCategory(name){
    let ext=path.extname(name)
    ext=ext.slice(1)
    //console.log(ext)

    for(let type in types){
        let cTypeArr=types[type]
        for(let i =0;i<cTypeArr.length;i++){
            if(ext==cTypeArr[i])
            return type
        }
    }
    return 'others'
}

function sendFiles()