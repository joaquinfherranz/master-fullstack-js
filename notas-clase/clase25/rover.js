function setup(squareSize, position, instructions) {
    let x = position.split(' ')[0];
    let y = position.split(' ')[1];
    
    const faces = ['N', 'R', 'S', 'L']; 
    let currentFace = position.split(' ')[2];

    function executeInstruction (instruction) {
        let currentFaceIndex = faces.indexOf(currentFace);
        if (instruction == 'L') {
            currentFaceIndex = currentFaceIndex - 1;
        } else if (instruction == 'R') {
            currentFaceIndex = currentFaceIndex + 1;
        }
        if (currentFaceIndex == -1) {
            currentFaceIndex = 3;
        } else if (currentFaceIndex == 4) {
            currentFaceIndex = 0;
        }
        currentFace = faces[currentFaceIndex];
        if (instruction == 'M') {
            if (currentFace == 'N') {
                y = y + 1;
            } else if (currentFace == 'R') {
                x = x + 1;
            } else if (currentFace == 'S') {
                y = y - 1;
            } else if (currenteFace == 'L') {
                x = x - 1;
            }
            if (x < 0) {
                x = 0;
            } else if (x > squareSize) {
                x = squareSize - 1;
            }
            if (y < 0) {
                y = 0;
            } else if (y > squareSize) {
                y = squareSize - 1;
            }
        }
    }
    
    for (i=0; i < instructions.length; i++) {
        executeInstruction (instructions[i]);
    }
    
    return x + ' ' + y + ' ' + currentFace;
}
