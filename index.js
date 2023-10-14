//Happy coding !

const mineSweeper = [
    [0, 1, 0, 0],
    [0, 0, 1, 0],
    [0, 1, 0, 1],
    [1, 1, 0, 0],
  ]


function neighbouringMines(matrix){
    const board = []
    for(let x=0; x< matrix.length; x++){
        board.push([])
        for(let y=0; y< matrix[x].length; y++){
            board[x][y] = 0
            if(matrix[x][y]){
                board[x][y] =  9
            }
            
            // Above 
            if(matrix[x-1] !== undefined){
                if(matrix[x-1][y]){ 
                  if(matrix[x][y] !== 1){                 
                    board[x][y]++;   
                  }
                 
            }
            }
            // Below 
            if(matrix[x+1] !== undefined){
                if(matrix[x+1][y]){
                    if(matrix[x][y] !== 1){                 
                        board[x][y]++;   
                      }
                    
                }
                
            }
            // Left
            if(matrix[x][y-1] !== undefined){
                if(matrix[x][y-1]){
                    if(matrix[x][y] !== 1){                 
                        board[x][y]++;   
                      }
                   
                }
                
            }
            // Right
            if(matrix[x][y+1] !== undefined){
                if(matrix[x][y+1]){
                    if(matrix[x][y] !== 1){                 
                        board[x][y]++;   
                      }
                    
                }

            }
            // Top Left
            if(matrix[x-1] !== undefined){
                if(matrix[x-1][y-1]){
                    if(matrix[x][y] !== 1){                 
                        board[x][y]++;   
                      }
                   
                }
            }
             // Top Right
             if(matrix[x-1] !== undefined){
                if(matrix[x-1][y+1]){
                    if(matrix[x][y] !== 1){                 
                        board[x][y]++;   
                      }
                   
                }
            }
                // Bottom Left
                if(matrix[x+1] !== undefined){
                    if(matrix[x+1][y-1]){
                        if(matrix[x][y] !== 1){                 
                            board[x][y]++;   
                          }
                       
                    }
                }
                // Bottom Right
                if(matrix[x+1] !== undefined){
                    if(matrix[x+1][y+1]){
                        if(matrix[x][y] !== 1){                 
                            board[x][y]++;   
                          }
                       
                    }
                }


        }

    }
    return board
}

console.log("The new minSweeper: \n" ,neighbouringMines(mineSweeper))






/*
make a function that takes a matrix that contains 0 and 1 values, 
the 1 values should become 9 representing the mine, while the 0, if there is any mine Neighbour even in edges, s
hould be counted and replaced 0 with the counts

*/


