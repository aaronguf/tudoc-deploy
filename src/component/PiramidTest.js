import React from 'react'

const PiramidTest = () => {
    const piramid = []
const findPiramidLevel = (levelToFind) =>{
    for(let i = 0; i < 30; i++){
        const level = []
        if(i === 0){
            level.push(1)
        }else{
            const prevLevel = piramid[i - 1]
            level.push(1)
            for(let j = 1; j < i; j++){
                const sum = prevLevel[j - 1] + prevLevel[j]
                level.push(sum)
            }
            level.push(1)
        }
        piramid.push(level)
    }
    const requestedLevel = piramid[levelToFind];
  
    return requestedLevel;
}

console.log(findPiramidLevel(0))
console.log(findPiramidLevel(1))
console.log(findPiramidLevel(2))
console.log(findPiramidLevel(3))
console.log(findPiramidLevel(4))
console.log(findPiramidLevel(5))
console.log(findPiramidLevel(6))
  return (
    <div>
    8226994
    </div>
  )
}

export default PiramidTest