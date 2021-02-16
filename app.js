window.addEventListener("DOMContentLoaded", () => {
    columnDivs();
    createElements();
    rearangeColumns();
});
window.addEventListener("resize", () => {
    rearangeColumns();
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
    // console.log(divLength);
    for (let i = 0; i < divLength; i++) {
        const note = document.createElement("div");
        note.setAttribute("class", "note");
        note.setAttribute("key", i);
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

    const newArraySixCols = {
        col1: [],
        col2: [],
        col3: [],
        col4: [],
        col5: [],
        col6: [],
    };

    numArrayKeys.map((num) => {
        if (sixCols.includes(num + 5)) {
            newArraySixCols.col1.push(num);
        } else if (sixCols.includes(num + 4)) {
            newArraySixCols.col2.push(num);
        } else if (sixCols.includes(num + 3)) {
            newArraySixCols.col3.push(num);
        } else if (sixCols.includes(num + 2)) {
            newArraySixCols.col4.push(num);
        } else if (sixCols.includes(num + 1)) {
            newArraySixCols.col5.push(num);
        } else if (sixCols.includes(num)) {
            newArraySixCols.col6.push(num);
        }
    });

    return newArraySixCols;
};

const fiveColumnLayout = () => {
    let fiveColsCounter = -1;
    const fiveCols = numArrayKeys.map(() => {
        return (fiveColsCounter += 5);
    });

    const newArrayFiveCols = {
        col1: [],
        col2: [],
        col3: [],
        col4: [],
        col5: [],
    };

    numArrayKeys.map((num) => {
        if (fiveCols.includes(num + 4)) {
            newArrayFiveCols.col1.push(num);
        } else if (fiveCols.includes(num + 3)) {
            newArrayFiveCols.col2.push(num);
        } else if (fiveCols.includes(num + 2)) {
            newArrayFiveCols.col3.push(num);
        } else if (fiveCols.includes(num + 1)) {
            newArrayFiveCols.col4.push(num);
        } else if (fiveCols.includes(num)) {
            newArrayFiveCols.col5.push(num);
        }
    });

    return newArrayFiveCols;
};

const fourColumnLayout = () => {
    let fourColsCounter = -1;
    const fourCols = numArrayKeys.map(() => {
        return (fourColsCounter += 4);
    });

    const newArrayFourCols = { col1: [], col2: [], col3: [], col4: [] };

    numArrayKeys.map((num) => {
        if (fourCols.includes(num + 3)) {
            newArrayFourCols.col1.push(num);
        } else if (fourCols.includes(num + 2)) {
            newArrayFourCols.col2.push(num);
        } else if (fourCols.includes(num + 1)) {
            newArrayFourCols.col3.push(num);
        } else if (fourCols.includes(num)) {
            newArrayFourCols.col4.push(num);
        }
    });

    return newArrayFourCols;
};

const threeColumnLayout = () => {
    let threeColsCounter = -1;
    const threeCols = numArrayKeys.map(() => {
        return (threeColsCounter += 3);
    });

    const newArrayThreeCols = { col1: [], col2: [], col3: [] };

    numArrayKeys.map((num) => {
        if (threeCols.includes(num + 2)) {
            newArrayThreeCols.col1.push(num);
        } else if (threeCols.includes(num + 1)) {
            newArrayThreeCols.col2.push(num);
        } else if (threeCols.includes(num)) {
            newArrayThreeCols.col3.push(num);
        }
    });

    return newArrayThreeCols;
};

const twoColumnLayout = () => {
    let twoColsCounter = -1;
    const twoCols = numArrayKeys.map(() => {
        return (twoColsCounter += 2);
    });

    const newArrayTwoCols = { col1: [], col2: [] };

    numArrayKeys.map((num) => {
        if (twoCols.includes(num + 1)) {
            newArrayTwoCols.col1.push(num);
        } else if (twoCols.includes(num)) {
            newArrayTwoCols.col2.push(num);
        }
    });

    return newArrayTwoCols;
};

const rearangeColumns = () => {
    const notesWrapper = document.getElementById("notesWrapper");
    const columnsCalc = Math.floor(notesWrapper.clientWidth / 248);

    switch (columnsCalc) {
        case 6:
            columnDivs(6);
            sixColumnLayout();
            console.log("I have 6 columns!");
            break;
        case 5:
            columnDivs(5);
            fiveColumnLayout();
            console.log("I have 5 columns!");
            break;
        case 4:
            columnDivs(4);
            fourColumnLayout();
            console.log("I have 4 columns!");
            break;
        case 3:
            columnDivs(3);
            threeColumnLayout();
            console.log("I have 3 columns!");
            break;
        case 2:
            columnDivs(2);
            twoColumnLayout();
            console.log("I have 2 columns!");
            break;
        case 1:
            columnDivs(1);
            console.log("I have 1 column!");
            break;
    }
};
