const fs = require('fs')
const path = require('path')

function treeFn(dirpath) {
    let destPath
    if (dirpath == undefined) {
        console.log('Please enter a valid path')
    } else {
        let doesExist = fs.existsSync(dirpath)
        if (doesExist == true) {
            treeHelper(dirpath, " ")
        }
    }

}

function treeHelper(targetPath, indent) {
    let isFile = fs.lstatSync(targetPath).isFile()

    if (isFile == true) {
        let fileName = path.basename(targetPath)
        console.log(indent, "├──", fileName)
    } else {
        dirName = path.basename(targetPath)
        console.log(indent, '└──', dirName)
        let children = fs.readdirSync(targetPath)

        for (let i = 0; i < children.length; i++) {
            let childpath = path.join(targetPath, children[i])
            treeHelper(childpath, indent + "\t")
        }
    }

}

module.exports = {
    treeKey: treeFn
}