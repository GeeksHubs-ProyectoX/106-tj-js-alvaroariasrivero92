function saltoCanguro(inputs){
  if(inputs === null){
    return -1
  }else if(inputs.length === 0){
    return -1
  }else{
    const multiplyPair = inputs.filter((e, i) => {
    if(i % 2 === 0){
      return e
    }
  }).reduce((prev, post) => prev*post)
    return multiplyPair
  }
}

module.exports = saltoCanguro;
