  exports.pathModule=()=>{
    const path=require('path')
    console.log(`Current directory:${path.sep}`);
    const pathName=path.join('nagaraj','mernFullStack','express')
    console.log(`Joinig Operation:${pathName}`);
    const baseName=path.basename(pathName)
    console.log(`BaseName of the PATH:${baseName}`);
    console.log(`Origin Direcotry:${path.resolve(__filename)}`);
}