const fs = require('fs')
const pathFile = './build/docs/assets/index.710b7391.js'

function openJsDocbytest() {
    const textFile = fs.readFileSync(pathFile, 'utf-8')
    return textFile.toString()
}

function replaceRequestDocsToGhDocs(textFile) {
    return textFile.replace('${a}/docs-json', '${a}/docbytest-ui-example/docs-json')
}

function saveJsDocbytest(textFile) {
    fs.writeFileSync(pathFile, textFile)
}


textFile = openJsDocbytest()
textFile = replaceRequestDocsToGhDocs(textFile)
saveJsDocbytest(textFile)

