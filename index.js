#! /usr/bin/env node

var fs = require('fs')
var copy = function(src,dst){
    var paths = fs.readdirSync(src)
    paths.forEach(function(path){
        var _src = src + '/' + path
        var _dst = dst + '/' + path
        fs.stat(_src,function(err,stats){
            if(err){
                throw err
            }
            if(stats.isFile()){
                var readable = fs.createReadStream(_src)
                var writable = fs.createWriteStream(_dst)
                readable.pipe(writable)
            }else if(stats.isDirectory()){
                checkDirectory(_src,_dst,copy);
            }
        })
    })
}

var checkDirectory = function(src,dst,callback){
    fs.access(dst,fs.constants.F_OK,(err) => {
        if(err){
            fs.mkdirSync(dst)
            callback(src,dst)
        }else{
            callback(src,dst)
        }
    })
}
 
const SOURCES_DIRECTORY = __dirname + '\\project'
checkDirectory(SOURCES_DIRECTORY,'./project',copy)