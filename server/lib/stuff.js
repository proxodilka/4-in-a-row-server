const MultiEqual = (...values)=>{
    for(let i=0; i<values.length; i++){
        for(let j=i+1; j<values.length; j++){
            if (values[i]!==values[j])
                return false;
        }
    }
    return true;
}

const generateIndexes = (stat, start, end)=>{
    const res = [];
    for(let i=start; i<end; i++){
        res.push([stat, i]);
    }
    return res;
}

const getDiagonals = (x, y, direction, arr)=>{
    const res = {
        arr: [],
        ind: [],
        role: `${direction} diagonal`
    }

    switch (direction){
        case 'left': direction=0; break;
        case 'right': direction=1; break;
        default: direction=-1;
    }

    const lowerBound = {
        i: direction?0:Math.max(x-4, 0),
        j: 0,
    }

    const upperBound = {
        i: Math.min(x+4, arr.length),
        j: Math.min(y+4, arr[0].length)
    }

    

    let j=y;
    for(let i=x; i>=lowerBound.i && i<upperBound.i && j<upperBound.j; direction?i++:i--, j++){
        res.arr.push(arr[i][j]);
        res.ind.push([i,j]);
    }

    return res;
}

const checkWin = (src, winLen, justCheckWin=1)=>{
    let draw=true;
    const inRow = [];
    for(let [i, arr] of src.entries()){
        for(let [j, x] of arr.entries()){
            if (x<=0)
                draw=false;
            const cellsToCheck = [
                {arr: arr.slice(j, j+winLen), ind: generateIndexes(i, j, j+winLen), role: 'column'}, //столбцы
                {arr: src.slice(i, i+winLen).map((arr)=>arr[j]), ind: generateIndexes(j, i, i+winLen).map((x)=>x.reverse()), role: 'row'}, //строки
                getDiagonals(i,j, 'right', src),
                getDiagonals(i,j, 'left', src)
            ];

            for(let values of cellsToCheck){
                if (values.arr.findIndex((x)=>x<=0)===-1 && values.arr.length===winLen && MultiEqual(...values.arr)){
                    inRow.push({
                        isWin: true,
                        winner: values.arr[0],
                        indexes: values.ind
                    });
                    if (justCheckWin){
                        return inRow[0];
                    }
                }
            }
        }
    }

    if (draw)
        return {
            isWin: 'draw',
            winner: 0,
            indexes: generateIndexes(0, 0, src.length).map((x)=>x.reverse())
        };

    if (justCheckWin)
        return {
            isWin: false
        }
    
    return inRow;
}

const updArr = (arr, colId)=>{
    arr = changeArrayElem(arr, {x: colId, y: getInsertPosition(arr[colId])}, curePlayer);
    return arr;
}

const eraseFromArr = (arr, val)=>{
    const ind = arr.findIndex(x=>x==val);
    if (ind>=0)
        players.splice(ind,1);
}

const norm = (x)=>{
    return x<0?0:x;
}


const getEmptyField = (N,M)=>{
    return Array(M).fill(Array(N).fill(0));
}

const getInsertPosition = (array)=>{
    const ind = array.findIndex((a)=>a>0);
    return (ind===-1?array.length:ind)-1;
}

const changeArrayElem = (array, pos, value)=>{
    return array.map((arr, i)=>{
        return arr.map((x, j)=>{
            return i===pos.x && j===pos.y?value:norm(x);
        });
    })
}

module.exports.checkWin = checkWin;
module.exports.updArr = updArr;
module.exports.eraseFromArr = eraseFromArr;
module.exports.norm = norm;
module.exports.getEmptyField = getEmptyField;
module.exports.changeArrayElem = changeArrayElem;
module.exports.getInsertPosition = getInsertPosition;
