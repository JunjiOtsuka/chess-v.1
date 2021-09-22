import './App.css';
import { useState, useEffect, useRef } from "react"
import blackBishop from './black bishop.png'
import blackKing from './black king.png'
import blackKnight from './black knight.png'
import blackPawn from './black pawn.png'
import blackQueen from './black queen.png'
import blackRook from './black rook.png'
import whiteBishop from './white bishop.png'
import whiteKing from './white king.png'
import whiteKnight from './white knight.png'
import whitePawn from './white pawn.png'
import whiteQueen from './white queen.png'
import whiteRook from './white rook.png'

function App() {
  let [boardState, setBoardState] = useState([])
  let [currPieceLoca, setCurrPieceLoca] = useState([])
  let [initialPieceState, setInitialPieceState] = useState([
    {
      id: 1,
      name: "rook",
      color: "white",
      location: [1, 1],
      image: whiteRook
    },
    {
      id: 2,
      name: "knight",
      color: "white",
      location: [1, 2],
      image: whiteKnight
    },
    {
      id: 3,
      name: "bishop",
      color: "white",
      location: [1, 3],
      image: whiteBishop
    },
    {
      id: 4,
      name: "king",
      color: "white",
      location: [1, 4],
      image: whiteKing
    },
    {
      id: 5,
      name: "queen",
      color: "white",
      location: [1, 5],
      image: whiteQueen
    },
    {
      id: 6,
      name: "bishop",
      color: "white",
      location: [1, 6],
      image: whiteBishop
    },
    {
      id: 7,
      name: "knight",
      color: "white",
      location: [1, 7],
      image: whiteKnight
    },
    {
      id: 8,
      name: "rook",
      color: "white",
      location: [1, 8],
      image: whiteRook
    },
    {
      id: 9,
      name: "whitePawn",
      color: "white",
      location: [2, 1],
      firstMove: true,
      image: whitePawn
    },
    {
      id: 10,
      name: "whitePawn",
      color: "white",
      location: [2, 2],
      firstMove: true,
      image: whitePawn
    },
    {
      id: 11,
      name: "whitePawn",
      color: "white",
      location: [2, 3],
      firstMove: true,
      image: whitePawn
    },
    {
      id: 12,
      name: "whitePawn",
      color: "white",
      location: [2, 4],
      firstMove: true,
      image: whitePawn
    },
    {
      id: 13,
      name: "whitePawn",
      color: "white",
      location: [2, 5],
      firstMove: true,
      image: whitePawn
    },
    {
      id: 14,
      name: "whitePawn",
      color: "white",
      location: [2, 6],
      firstMove: true,
      image: whitePawn
    },
    {
      id: 15,
      name: "whitePawn",
      color: "white",
      location: [2, 7],
      firstMove: true,
      image: whitePawn
    },
    {
      id: 16,
      name: "whitePawn",
      color: "white",
      location: [2, 8],
      firstMove: true,
      image: whitePawn
    },
    {
      id: 17,
      name: "blackPawn",
      color: "black",
      location: [7, 1],
      firstMove: true,
      image: blackPawn
    },
    {
      id: 18,
      name: "blackPawn",
      color: "black",
      location: [7, 2],
      firstMove: true,
      image: blackPawn
    },
    {
      id: 19,
      name: "blackPawn",
      color: "black",
      location: [7, 3],
      firstMove: true,
      image: blackPawn
    },
    {
      id: 20,
      name: "blackPawn",
      color: "black",
      location: [7, 4],
      firstMove: true,
      image: blackPawn
    },
    {
      id: 21,
      name: "blackPawn",
      color: "black",
      location: [7, 5],
      firstMove: true,
      image: blackPawn
    },
    {
      id: 22,
      name: "blackPawn",
      color: "black",
      location: [7, 6],
      firstMove: true,
      image: blackPawn
    },
    {
      id: 23,
      name: "blackPawn",
      color: "black",
      location: [7, 7],
      firstMove: true,
      image: blackPawn
    },
    {
      id: 24,
      name: "blackPawn",
      color: "black",
      location: [7, 8],
      firstMove: true,
      image: blackPawn
    },
    {
      id: 25,
      name: "rook",
      color: "black",
      location: [8, 1],
      image: blackRook
    },
    {
      id: 26,
      name: "knight",
      color: "black",
      location: [8, 2],
      image: blackKnight
    },
    {
      id: 27,
      name: "bishop",
      color: "black",
      location: [8, 3],
      image: blackBishop
    },
    {
      id: 28,
      name: "king",
      color: "black",
      location: [8, 4],
      image: blackKing
    },
    {
      id: 29,
      name: "queen",
      color: "black",
      location: [8, 5],
      image: blackQueen
    },
    {
      id: 30,
      name: "bishop",
      color: "black",
      location: [8, 6],
      image: blackBishop
    },
    {
      id: 31,
      name: "knight",
      color: "black",
      location: [8, 7],
      image: blackKnight
    },
    {
      id: 32,
      name: "rook",
      color: "black",
      location: [8, 8],
      image: blackRook
    },
  ])
  let [pieceState, setPieceState] = useState([
    {
      id: 1,
      name: "rook",
      color: "white",
      location: [1, 1],
      image: whiteRook
    },
    {
      id: 2,
      name: "knight",
      color: "white",
      location: [1, 2],
      image: whiteKnight
    },
    {
      id: 3,
      name: "bishop",
      color: "white",
      location: [1, 3],
      image: whiteBishop
    },
    {
      id: 4,
      name: "king",
      color: "white",
      location: [4, 4],
      image: whiteKing
    },
    {
      id: 5,
      name: "queen",
      color: "white",
      location: [1, 5],
      image: whiteQueen
    },
    {
      id: 6,
      name: "bishop",
      color: "white",
      location: [1, 6],
      image: whiteBishop
    },
    {
      id: 7,
      name: "knight",
      color: "white",
      location: [1, 7],
      image: whiteKnight
    },
    {
      id: 8,
      name: "rook",
      color: "white",
      location: [1, 8],
      image: whiteRook
    },
    {
      id: 9,
      name: "whitePawn",
      color: "white",
      location: [2, 1],
      firstMove: true,
      image: whitePawn
    },
    {
      id: 10,
      name: "whitePawn",
      color: "white",
      location: [2, 2],
      firstMove: true,
      image: whitePawn
    },
    {
      id: 11,
      name: "whitePawn",
      color: "white",
      location: [2, 3],
      firstMove: true,
      image: whitePawn
    },
    {
      id: 12,
      name: "whitePawn",
      color: "white",
      location: [2, 4],
      firstMove: true,
      image: whitePawn
    },
    {
      id: 13,
      name: "whitePawn",
      color: "white",
      location: [2, 5],
      firstMove: true,
      image: whitePawn
    },
    {
      id: 14,
      name: "whitePawn",
      color: "white",
      location: [2, 6],
      firstMove: true,
      image: whitePawn
    },
    {
      id: 15,
      name: "whitePawn",
      color: "white",
      location: [2, 7],
      firstMove: true,
      image: whitePawn
    },
    {
      id: 16,
      name: "whitePawn",
      color: "white",
      location: [2, 8],
      firstMove: true,
      image: whitePawn
    },
    {
      id: 17,
      name: "blackPawn",
      color: "black",
      location: [7, 1],
      firstMove: true,
      image: blackPawn
    },
    {
      id: 18,
      name: "blackPawn",
      color: "black",
      location: [7, 2],
      firstMove: true,
      image: blackPawn
    },
    {
      id: 19,
      name: "blackPawn",
      color: "black",
      location: [3, 3],
      firstMove: true,
      image: blackPawn
    },
    {
      id: 20,
      name: "blackPawn",
      color: "black",
      location: [3, 4],
      firstMove: true,
      image: blackPawn
    },
    {
      id: 21,
      name: "blackPawn",
      color: "black",
      location: [3, 5],
      firstMove: true,
      image: blackPawn
    },
    {
      id: 22,
      name: "blackPawn",
      color: "black",
      location: [7, 6],
      firstMove: true,
      image: blackPawn
    },
    {
      id: 23,
      name: "blackPawn",
      color: "black",
      location: [7, 7],
      firstMove: true,
      image: blackPawn
    },
    {
      id: 24,
      name: "blackPawn",
      color: "black",
      location: [7, 8],
      firstMove: true,
      image: blackPawn
    },
    {
      id: 25,
      name: "rook",
      color: "black",
      location: [8, 1],
      image: blackRook
    },
    {
      id: 26,
      name: "knight",
      color: "black",
      location: [8, 2],
      image: blackKnight
    },
    {
      id: 27,
      name: "bishop",
      color: "black",
      location: [8, 3],
      image: blackBishop
    },
    {
      id: 28,
      name: "king",
      color: "black",
      location: [8, 4],
      image: blackKing
    },
    {
      id: 29,
      name: "queen",
      color: "black",
      location: [8, 5],
      image: blackQueen
    },
    {
      id: 30,
      name: "bishop",
      color: "black",
      location: [8, 6],
      image: blackBishop
    },
    {
      id: 31,
      name: "knight",
      color: "black",
      location: [8, 7],
      image: blackKnight
    },
    {
      id: 32,
      name: "rook",
      color: "black",
      location: [8, 8],
      image: blackRook
    },
  ])
  let [moveState, setMoveState] = useState([])
  let [highlightMovement, setHighlightMovement] = useState(false)
  let [whiteTurn, setWhiteTurn] = useState(true)
  let inputEl = useRef([]);
  const size = 8;

  function makeBoard(num) {
    let arr = [];
    for (let x = 1; x < num + 1; x++) {
      for (let y = 1; y < num + 1; y++) {
        arr.push([x, y]);
      }
    }
    return arr;
  }


  useEffect(() => {
    if (!boardState) return
    setBoardState(boardState = makeBoard(size))
  }, [])

  useEffect(() => {
    setPieceState(
      pieceState = JSON.parse(JSON.stringify(initialPieceState))
    )
  }, [])

  function resetBoard() {
    setPieceState(
      pieceState = JSON.parse(JSON.stringify(initialPieceState))
    )
  }

  //white piece always move firstPiece
  function playerTurn(inputEl, axis) {
    if (whiteTurn) {
      console.log(inputEl, axis, currPieceLoca)

      if (currPieceLoca.length > 0 && currPieceLoca.location.join('').toString() === axis.join('').toString()) {
        if (currPieceLoca.color === "white") {
          showMoveableArea(inputEl, axis);
        }
      }
    } else if (!whiteTurn) {
      console.log(currPieceLoca)

      if (currPieceLoca.length > 0 && currPieceLoca.location.join('').toString() === axis.join('').toString()) {
        if (currPieceLoca.color === "black") {
          showMoveableArea(inputEl, axis);
        }
      }
    }
    setWhiteTurn(whiteTurn = !whiteTurn);
  }

  function restrictRange(range, currPiece) {
    let tempArr = [];
    let firstPiece = true;

    range.map((findIndex) => {
      findIndex.map((getIndex, idx) => {
        if (firstPiece) {
          pieceState.map((piece) => {
            if (getIndex.join('').toString() === piece.location.join('').toString()) {
              if (currPiece.color === piece.color) {
                findIndex = findIndex.slice(0, idx)
                firstPiece = false;
              } else if (currPiece.color !== piece.color) {
                findIndex = findIndex.slice(0, idx + 1)
                firstPiece = false;
              }
            }
            if (findIndex.length - 1 === idx) {
              findIndex = findIndex.slice(0)
              firstPiece = false;
            }
          })
        }
      })
      firstPiece = true;
      tempArr.push(findIndex);
    })
    return tempArr;
  }

  function restrictKingKnightRange(range, currPiece) {
    let tempArr = [];

    range.map((findIndex) => {
      findIndex.map((getIndex, idx) => {
        pieceState.map((piece) => {
          if (getIndex.join('').toString() === piece.location.join('').toString()) {
            if (currPiece.color === piece.color) {
              findIndex[idx] = [];
            }
          }
        })
      })
      tempArr.push(findIndex);
    })
    return tempArr;
  }

  function restrictPawnRange(range, currPiece) {
    let tempArr = [];
    let noPieceRight = true;
    let noPieceLeft = true;
    let noPieceBlackRight = true;
    let noPieceBlackLeft = true;

    range.map((findIndex) => {
      findIndex.map((getIndex, idx) => {
        pieceState.map((piece) => {
          if (currPiece.color === "white") {
            //see if theres any piece in attackable range
            if (getIndex.join('').toString() === piece.location.join('').toString()) {
              if (getIndex.join('').toString() === [currPiece.location[0] + 1, currPiece.location[1]].join('').toString()) {
                if (!currPiece.firstMove) {
                  if (piece.location.join('').toString() === [currPiece.location[0] + 1, currPiece.location[1]].join('').toString()) {
                    findIndex[idx] = [];
                  }
                } else if (currPiece.firstMove) {
                  // if there is piece(s) in front of the pawn restirct movement
                  if (piece.location.join('').toString() === [currPiece.location[0] + 1, currPiece.location[1]].join('').toString()) {
                    findIndex = findIndex.slice(0, idx)
                  } else if (piece.location.join('').toString() === [currPiece.location[0] + 2, currPiece.location[1]].join('').toString()) {
                    findIndex[idx] = [];
                  }
                }
              }
              if (currPiece.color === piece.color) {
                if (piece.location.join('').toString() === [currPiece.location[0] + 1, currPiece.location[1] + 1].join('').toString()) {
                  findIndex[idx] = [];
                }
                if (piece.location.join('').toString() === [currPiece.location[0] + 1, currPiece.location[1] - 1].join('').toString()) {
                  findIndex[idx] = [];
                }
              }
            }
            if (getIndex.join('').toString() === [currPiece.location[0] + 1, currPiece.location[1] + 1].join('').toString()) {
              if (getIndex.join('').toString() === piece.location.join('').toString()) {
                noPieceRight = false;
              }
              if (getIndex.join('').toString() !== piece.location.join('').toString()) {
                if (piece.location.join('').toString() === [8, 8].join('').toString()) {
                  if (noPieceRight) {
                    findIndex[idx] = [];
                  }
                }
              }
            }
            if (getIndex.join('').toString() === [currPiece.location[0] + 1, currPiece.location[1] - 1].join('').toString()) {
              if (getIndex.join('').toString() === piece.location.join('').toString()) {
                noPieceLeft = false;
              }
              if (getIndex.join('').toString() !== piece.location.join('').toString()) {
                if (piece.location.join('').toString() === [8, 8].join('').toString()) {
                  if (noPieceLeft) {
                    findIndex[idx] = [];
                  }
                }
              }
            }
          } else if (currPiece.color === "black") {
            //see if theres any piece in attackable range
            if (getIndex.join('').toString() === piece.location.join('').toString()) {
              if (getIndex.join('').toString() === [currPiece.location[0] - 1, currPiece.location[1]].join('').toString()) {
                if (!currPiece.firstMove) {
                  if (piece.location.join('').toString() === [currPiece.location[0] - 1, currPiece.location[1]].join('').toString()) {
                    findIndex[idx] = [];
                  }
                } else if (currPiece.firstMove) {
                  // if there is piece(s) in front of the pawn restirct movement
                  if (piece.location.join('').toString() === [currPiece.location[0] - 1, currPiece.location[1]].join('').toString()) {
                    findIndex = findIndex.slice(0, idx)
                  } else if (piece.location.join('').toString() === [currPiece.location[0] - 2, currPiece.location[1]].join('').toString()) {
                    findIndex[idx] = [];
                  }
                }
              }
              if (currPiece.color === piece.color) {
                if (piece.location.join('').toString() === [currPiece.location[0] - 1, currPiece.location[1] + 1].join('').toString()) {
                  findIndex[idx] = [];
                }
                if (piece.location.join('').toString() === [currPiece.location[0] - 1, currPiece.location[1] - 1].join('').toString()) {
                  findIndex[idx] = [];
                }
              }
            }
            if (getIndex.join('').toString() === [currPiece.location[0] - 1, currPiece.location[1] + 1].join('').toString()) {
              if (getIndex.join('').toString() === piece.location.join('').toString()) {
                noPieceBlackRight = false;
              }
              if (getIndex.join('').toString() !== piece.location.join('').toString()) {
                if (piece.location.join('').toString() === [8, 8].join('').toString()) {
                  if (noPieceBlackRight) {
                    findIndex[idx] = [];
                  }
                }
              }
            }
            if (getIndex.join('').toString() === [currPiece.location[0] - 1, currPiece.location[1] - 1].join('').toString()) {
              if (getIndex.join('').toString() === piece.location.join('').toString()) {
                noPieceBlackLeft = false;
              }
              if (getIndex.join('').toString() !== piece.location.join('').toString()) {
                if (piece.location.join('').toString() === [8, 8].join('').toString()) {
                  if (noPieceBlackLeft) {
                    findIndex[idx] = [];
                  }
                }
              }
            }
          }
        })
      })
      tempArr.push(findIndex);
    })
    return tempArr;
  }

  function reduceToAnArray(arr) {
    let tempArr = [];

    for (var i = 0; i < arr.length; i++) {
      tempArr = tempArr.concat(arr[i])
    }

    return tempArr;
  }

  function attackRange(pieceLocation, piece) {
    var x = pieceLocation[0];
    var y = pieceLocation[1];

    var allIntercept = [];

    switch (piece.name) {
      case 'king':
        allIntercept = reduceToAnArray(restrictKingKnightRange(kingAttackDirection(size, x, y), piece));
        break;
      case 'queen':
        allIntercept = reduceToAnArray(restrictRange(bishopAttackDirection(size, x, y), piece)).concat(reduceToAnArray(restrictRange(rookAttackDirection(size, x, y), piece)));
        break;
      case 'knight':
        allIntercept = reduceToAnArray(restrictKingKnightRange(knightAttackDirection(size, x, y), piece));
        break;
      case 'bishop':
        allIntercept = reduceToAnArray(restrictRange(bishopAttackDirection(size, x, y), piece));
        break;
      case 'rook':
        allIntercept = reduceToAnArray(restrictRange(rookAttackDirection(size, x, y), piece));
        break;
      case 'whitePawn':
        allIntercept = reduceToAnArray(restrictPawnRange(whitePawnAttackDirection(size, x, y), piece));
        break;
      case 'blackPawn':
        allIntercept = reduceToAnArray(restrictPawnRange(blackPawnAttackDirection(size, x, y), piece));
        break;
      default:
        allIntercept = [];
    }

    return allIntercept;
  }

  function whitePawnAttackDirection(num, x, y) {
    let container = [];
    let tempArr = [];

    var whitePawnX = [1, 1, 1, 2];
    var whitePawnY = [-1, 1, 0, 0];

    if (!currPieceLoca.firstMove) {
      if (whitePawnX.length === 4) {
        whitePawnX.pop();
        whitePawnY.pop();
      }
    }

    var whitePawnAxis = [x, y]

    let nextWhitePawnX = whitePawnAxis[0];
    let nextWhitePawnY = whitePawnAxis[1];

    for (var i = 0; i < whitePawnX.length; i++) {
      if (nextWhitePawnY + whitePawnY[i] < num + 1 && nextWhitePawnY + whitePawnY[i] > 0 && nextWhitePawnX + whitePawnX[i] < num + 1 && nextWhitePawnX + whitePawnX[i] > 0) {
        tempArr.push([nextWhitePawnX + whitePawnX[i], nextWhitePawnY + whitePawnY[i]]);
      }
    }

    container.push(tempArr)

    return container;
  }

  function blackPawnAttackDirection(num, x, y) {
    let container = [];
    let tempArr = [];

    var blackPawnX = [-1, -1, -1, -2];
    var blackPawnY = [-1, 1, 0, 0];

    if (!currPieceLoca.firstMove) {
      if (blackPawnX.length === 4) {
        blackPawnX.pop();
        blackPawnY.pop();
      }
    }

    var blackPawnAxis = [x, y]

    let nextBlackPawnX = blackPawnAxis[0];
    let nextBlackPawnY = blackPawnAxis[1];

    for (var i = 0; i < blackPawnX.length; i++) {
      if (nextBlackPawnY + blackPawnY[i] < num + 1 && nextBlackPawnY + blackPawnY[i] > 0 && nextBlackPawnX + blackPawnX[i] < num + 1 && nextBlackPawnX + blackPawnX[i] > 0) {
        tempArr.push([nextBlackPawnX + blackPawnX[i], nextBlackPawnY + blackPawnY[i]]);
      }
    }

    container.push(tempArr)

    return container;
  }

  function bishopAttackDirection(num, x, y) {
    let container = [];
    let tempArr = [];

    var posSlope = 1 / 1;
    var posIntercept = [x, y];

    let nextX = posIntercept[0];
    let nextY = posIntercept[1];

    for (var i = nextX; i < num + 1; i += posSlope) {

      if (nextX < num + 1 && nextY < num + 1 && nextY > 0 && x !== nextX) {
        tempArr.push([nextX, nextY]);
      }
      nextX++;
      nextY++;
    }

    container.push(tempArr);
    tempArr = [];

    posSlope = -1 / -1;
    posIntercept = [x, y];

    nextX = posIntercept[0];
    nextY = posIntercept[1];

    for (var k = nextX; k > 0; k -= posSlope) {

      if (nextX < num + 1 && nextY < num + 1 && nextY > 0 && x !== nextX) {
        tempArr.push([nextX, nextY]);
      }
      nextX--;
      nextY--;
    }

    container.push(tempArr);
    tempArr = [];

    var negSlope = -1 / 1;
    var negIntercept = [x, y];

    let nextNegX = negIntercept[0];
    let nextNegY = negIntercept[1];

    for (var l = nextNegX; l < num + 1; l -= negSlope) {
      if (nextNegY < num + 1 && nextNegY > 0 && x !== nextNegX) {
        tempArr.push([nextNegX, nextNegY]);
      }
      nextNegX++;
      nextNegY--;
    }

    container.push(tempArr);
    tempArr = [];

    negSlope = -1 / 1;
    negIntercept = [x, y];

    nextNegX = negIntercept[0];
    nextNegY = negIntercept[1];

    for (var j = nextNegX; j > 0; j += negSlope) {
      if (nextNegY < num + 1 && nextNegY > 0 && x !== nextNegX) {
        tempArr.push([nextNegX, nextNegY]);
      }
      nextNegX--;
      nextNegY++;
    }

    container.push(tempArr);
    tempArr = [];

    return container;
  }

  function rookAttackDirection(num, x, y) {
    let container = [];
    let tempArr = [];

    var horiIntercept = [x, y];

    let nextHoriX = horiIntercept[0];
    let nextHoriY = horiIntercept[1];

    for (let i = nextHoriX; i < num + 1; i++) {
      if (nextHoriY < num + 1 && x !== nextHoriX) {
        tempArr.push([nextHoriX, nextHoriY]);
      }
      nextHoriX++;
    }

    container.push(tempArr);
    tempArr = [];

    horiIntercept = [x, y];

    nextHoriX = horiIntercept[0];
    nextHoriY = horiIntercept[1];

    for (let j = nextHoriX; j > 0; j--) {
      if (nextHoriY < num + 1 && x !== nextHoriX) {
        tempArr.push([nextHoriX, nextHoriY]);
      }
      nextHoriX--;
    }

    container.push(tempArr);
    tempArr = [];

    var vertIntercept = [x, y];

    let nextVertX = vertIntercept[0];
    let nextVertY = vertIntercept[1];

    for (let k = nextVertY; k < num + 1; k++) {
      if (nextVertY < num + 1 && y !== nextVertY) {
        tempArr.push([nextVertX, nextVertY]);
      }
      nextVertY++;
    }

    container.push(tempArr);
    tempArr = [];

    vertIntercept = [x, y];

    nextVertX = vertIntercept[0];
    nextVertY = vertIntercept[1];

    for (let l = nextVertY; l > 0; l--) {
      if (nextVertY > 0 && y !== nextVertY) {
        tempArr.push([nextVertX, nextVertY]);
      }
      nextVertY--;
    }

    container.push(tempArr);

    return container;
  }

  function knightAttackDirection(num, x, y) {
    let container = [];
    let tempArr = [];

    var knightX = [2, 1, -2, -1, 2, 1, -2, -1];
    var knightY = [1, 2, 1, 2, -1, -2, -1, -2];

    var knightAxis = [x, y]

    let nextKnightX = knightAxis[0];
    let nextKnightY = knightAxis[1];

    for (var i = 0; i < knightX.length; i++) {
      if (nextKnightY + knightY[i] < num + 1 && nextKnightY + knightY[i] > 0 && nextKnightX + knightX[i] < num + 1 && nextKnightX + knightX[i] > 0) {
        tempArr.push([nextKnightX + knightX[i], nextKnightY + knightY[i]]);
      }
    }

    container.push(tempArr)

    return container;
  }

  function kingAttackDirection(num, x, y) {
    let container = [];
    let tempArr = [];

    var kingX = [0, 1, 1, 1, 0, -1, -1, -1];
    var kingY = [1, 1, 0, -1, -1, -1, -0, 1];

    var kingAxis = [x, y]

    let nextKingX = kingAxis[0];
    let nextKingY = kingAxis[1];

    for (var i = 0; i < kingX.length; i++) {
      if (nextKingY + kingY[i] < num + 1 && nextKingY + kingY[i] > 0 && nextKingX + kingX[i] < num + 1 && nextKingX + kingX[i] > 0) {
        tempArr.push([nextKingX + kingX[i], nextKingY + kingY[i]]);
      }
    }

    container.push(tempArr)

    return container;
  }

  function getPiece(axis) {
    let targetPiece = {};
    pieceState.map((piece) => {
      if (axis.join("").toString() === piece.location.join("").toString()) {
        targetPiece = piece;
      }
    })
    return targetPiece;
  }

  function replacePieceLocation(axis, pieceAtAxis) {
    pieceState.map((piece) => {
      if (piece.id === currPieceLoca.id) {
        piece.location = axis;
        setCurrPieceLoca(currPieceLoca = [])
        setWhiteTurn(whiteTurn = !whiteTurn);
      }
      if (piece.color !== pieceAtAxis.color) {
        if (piece.color === "black") {
          pieceAtAxis.location = [0, 0];
        } else if (piece.color === "white") {
          pieceAtAxis.location = [0, 0];
        }
      }
      if (currPieceLoca.name === "whitePawn") {
        if (currPieceLoca.firstMove === true) {
          currPieceLoca.firstMove = !currPieceLoca.firstMove;
        }
      }
      if (currPieceLoca.name === "blackPawn") {
        if (currPieceLoca.firstMove === true) {
          currPieceLoca.firstMove = !currPieceLoca.firstMove;
        }
      }
    })
  }

  function showMoveableArea(inputEl, axis) {
    let piece = getPiece(axis);

    if (currPieceLoca.length === 0) {
      setCurrPieceLoca(currPieceLoca = piece)
    }

    if (!piece) return

    if (highlightMovement) {
      moveState.map(moveableArea => {
        if (moveableArea.length < 1) return;
        if (moveableArea && moveableArea !== undefined) {
          if (moveableArea.join('').toString() === axis.join('').toString()
            && currPieceLoca.location.join('').toString() !== axis.join('').toString()) {
            replacePieceLocation(axis, piece)
          }
          if (inputEl.current[moveableArea]) {
            inputEl.current[moveableArea].style.backgroundColor = "";
          }
        }
      })

      setHighlightMovement(highlightMovement = !highlightMovement)
      setCurrPieceLoca(currPieceLoca = [])

    } else if (!highlightMovement) {

      if (whiteTurn) {
        if (moveState) {
          if (currPieceLoca.color === "black") {
            setMoveState(moveState = []);
            setHighlightMovement(highlightMovement = false);
            setCurrPieceLoca(currPieceLoca = piece);
          }
          if (currPieceLoca.color === "white") {
            setMoveState(moveState = attackRange(axis, piece));
            setHighlightMovement(highlightMovement = true);
          }
        }
      } else if (!whiteTurn) {
        if (moveState) {
          if (currPieceLoca.color === "white") {
            setMoveState(moveState = []);
            setHighlightMovement(highlightMovement = false);
            setCurrPieceLoca(currPieceLoca = piece);
          }
          if (currPieceLoca.color === "black") {
            setMoveState(moveState = attackRange(axis, piece));
            setHighlightMovement(highlightMovement = true);
          }
        }
      }

      moveState.map(moveableArea => {
        if (moveableArea.length <= 0) return;
        if (inputEl.current[moveableArea]) {
          inputEl.current[moveableArea].style.backgroundColor = "grey";
        }
      })
    }
  }

  return (
    <div className="container">
      <div className="board">
        {boardState.map((axis) =>
          <>
            <div
              className={(axis[0] + axis[1]) % 2 === 0 ? "even" : "odd"}
              ref={ref => { if (inputEl.current.length < 89 && ref !== null) inputEl.current[axis] = ref }}
              onClick={(() => { showMoveableArea(inputEl, axis) }
              )}>

              {
                pieceState.map((piece) =>
                  axis.join("").toString() === piece.location.join("").toString()
                    ?
                    <img src={piece.image}></img>
                    :
                    <div></div>
                )
              }

            </div>
          </>
        )}
        <button
          type="button"
          onClick={(() => { resetBoard() })}> Reset </button>
      </div>
    </div>
  );
}

export default App;
