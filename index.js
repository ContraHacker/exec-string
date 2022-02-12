function execString(fn) {
    return new Function(`return ${fn}`)();
}

module.exports = execString;