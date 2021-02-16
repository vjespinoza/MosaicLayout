window.addEventListener("load", () => {
    columnDivs();
    createElements();
    rearangeColumns();
});
window.addEventListener("resize", (e) => {
    const elementWidth = document.getElementById("notesWrapper").clientWidth;
    const fractions = Math.floor(elementWidth / 248);

    if (fractions === 1) {
        rearangeColumns();
        cleanUp();
    } else if (fractions === 2) {
        rearangeColumns();
        cleanUp();
    } else if (fractions === 3) {
        rearangeColumns();
        cleanUp();
    } else if (fractions === 4) {
        rearangeColumns();
        cleanUp();
    } else if (fractions === 5) {
        rearangeColumns();
        cleanUp();
    } else if (fractions === 6) {
        rearangeColumns();
        cleanUp();
    }
});

//Creates columns for the notes
const columnDivs = (col) => {
    for (let i = 0; i < col; i++) {
        const colDiv = document
            .getElementById("notesWrapper")
            .appendChild(document.createElement("div"));
        colDiv.setAttribute("id", `col${i + 1}`);
        colDiv.setAttribute("class", "colDiv");
    }
};

//Creates notes for the first time
const createElements = () => {
    const divLength = 40;
    const notes = [];
    for (let i = 0; i < divLength; i++) {
        const note = document.createElement("div");
        note.setAttribute("class", "note");
        note.setAttribute("id", `note${i + 1}`);
        note.innerHTML = `<span>${i + 1}</span>`;
        notes.push(note);
    }

    return notes;
};

//Create elements - END

const numArray = Array.from(createElements());
const numArrayKeys = [...numArray.keys()];

const sixColumnLayout = () => {
    let sixColsCounter = -1;
    const sixCols = numArrayKeys.map(() => {
        return (sixColsCounter += 6);
    });

    return numArrayKeys.map((num) => {
        if (sixCols.includes(num + 5)) {
            document.getElementById("col1").append(numArray[num]);
        } else if (sixCols.includes(num + 4)) {
            document.getElementById("col2").append(numArray[num]);
        } else if (sixCols.includes(num + 3)) {
            document.getElementById("col3").append(numArray[num]);
        } else if (sixCols.includes(num + 2)) {
            document.getElementById("col4").append(numArray[num]);
        } else if (sixCols.includes(num + 1)) {
            document.getElementById("col5").append(numArray[num]);
        } else if (sixCols.includes(num)) {
            document.getElementById("col6").append(numArray[num]);
        }
    });
};

const fiveColumnLayout = () => {
    let fiveColsCounter = -1;
    const fiveCols = numArrayKeys.map(() => {
        return (fiveColsCounter += 5);
    });

    return numArrayKeys.map((num) => {
        if (fiveCols.includes(num + 4)) {
            document.getElementById("col1").append(numArray[num]);
        } else if (fiveCols.includes(num + 3)) {
            document.getElementById("col2").append(numArray[num]);
        } else if (fiveCols.includes(num + 2)) {
            document.getElementById("col3").append(numArray[num]);
        } else if (fiveCols.includes(num + 1)) {
            document.getElementById("col4").append(numArray[num]);
        } else if (fiveCols.includes(num)) {
            document.getElementById("col5").append(numArray[num]);
        }
    });
};

const fourColumnLayout = () => {
    let fourColsCounter = -1;
    const fourCols = numArrayKeys.map(() => {
        return (fourColsCounter += 4);
    });

    return numArrayKeys.map((num) => {
        if (fourCols.includes(num + 3)) {
            document.getElementById("col1").append(numArray[num]);
        } else if (fourCols.includes(num + 2)) {
            document.getElementById("col2").append(numArray[num]);
        } else if (fourCols.includes(num + 1)) {
            document.getElementById("col3").append(numArray[num]);
        } else if (fourCols.includes(num)) {
            document.getElementById("col4").append(numArray[num]);
        }
    });
};

const threeColumnLayout = () => {
    let threeColsCounter = -1;
    const threeCols = numArrayKeys.map(() => {
        return (threeColsCounter += 3);
    });

    return numArrayKeys.map((num) => {
        if (threeCols.includes(num + 2)) {
            document.getElementById("col1").append(numArray[num]);
        } else if (threeCols.includes(num + 1)) {
            document.getElementById("col2").append(numArray[num]);
        } else if (threeCols.includes(num)) {
            document.getElementById("col3").append(numArray[num]);
        }
    });
};

const twoColumnLayout = () => {
    let twoColsCounter = -1;
    const twoCols = numArrayKeys.map(() => {
        return (twoColsCounter += 2);
    });

    return numArrayKeys.map((num) => {
        if (twoCols.includes(num + 1)) {
            document.getElementById("col1").append(numArray[num]);
        } else if (twoCols.includes(num)) {
            document.getElementById("col2").append(numArray[num]);
        }
    });
};

const oneColumnLayout = () => {
    let oneColsCounter = -1;
    const oneCols = numArrayKeys.map(() => {
        return (oneColsCounter += 1);
    });

    return numArrayKeys.map((num) => {
        if (oneCols.includes(num)) {
            document.getElementById("col1").append(numArray[num]);
        }
    });
};

//Assings a layout to the colDiv's based on the calculated amount of columns.
const rearangeColumns = () => {
    const notesWrapper = document.getElementById("notesWrapper");
    const columnsCalc = Math.floor(notesWrapper.clientWidth / 238);

    switch (columnsCalc) {
        case 6:
            columnDivs(6);
            sixColumnLayout();
            break;
        case 5:
            columnDivs(5);
            fiveColumnLayout();
            break;
        case 4:
            columnDivs(4);
            fourColumnLayout();
            break;
        case 3:
            columnDivs(3);
            threeColumnLayout();
            break;
        case 2:
            columnDivs(2);
            twoColumnLayout();
            break;
        case 1:
            columnDivs(1);
            oneColumnLayout();
            break;
        default:
            columnDivs(6);
            sixColumnLayout();
            break;
    }
};

//Removes empty column div's created by the resize event above
const cleanUp = () => {
    const divList = document.querySelectorAll(".colDiv");

    for (let i = 0; i < divList.length; i++) {
        if (divList[i].hasChildNodes() === false) {
            divList[i].remove();
        }
    }
};
