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

        if (isFile == true) {
            let fileCategory = getCategory(childNames[i])
            console.log(childNames[i] + ' blongs to ' + fileCategory)

            sendFiles(childAdress, dest, fileCategory)
        }
    }
}

function getCategory(name) {
    let ext = path.extname(name) // we will take out the extension names of the files 
    ext = ext.slice(1)
    //console.log(ext)

    for (let type in types) {
        let cTypeArr = types[type]
        for (let i = 0; i < cTypeArr.length; i++) {
            // we matched the extensions with the values presnet in ctypeArr
            if (ext == cTypeArr[i])
                return type
        }
    }
    return 'others'
}

function sendFiles(srcFilePath, dest, fileCategory) {
    let catPath = path.join(dest, fileCategory)


    if (fs.existsSync(catPath) == false) { // checking for category folder path 
        fs.mkdirSync(catPath)
    }


    let fileName = path.basename(srcFilePath) /// we took out the names of the files
    let destFilePath = path.join(catPath, fileName) // here we created a path for the files in category folders


    fs.copyFileSync(srcFilePath, destFilePath) // copied files from src to dest

    fs.unlinkSync(srcFilePath) // deleted the files from src


    console.log(fileName + "is copied to" + fileCategory)
}

module.exports={
    organizeKey:organizeFn
}

