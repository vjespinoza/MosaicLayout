const notesQty = 40;

//Create elements for the first time
const createElements = () => {
    const divLength = notesQty;
    // console.log(divLength);
    for (let i = 0; i < divLength; i++) {
        const createDiv = document
            .getElementById("notesWrapper")
            .appendChild(document.createElement("div"));
        createDiv.setAttribute("class", "note");
        createDiv.setAttribute("key", i);
        createDiv.innerHTML = `<span>${i + 1}</span>`;
    }
};
createElements();

//Create elements - END

//Sort array of notes
const sortDivs = (sortParam) => {
    const noteLength = notesQty;
    console.log(sortParam);
    //Reset elements
    document.getElementById("notesWrapper").innerHTML = "";

    for (let i = 0; i < noteLength; i++) {
        const createDiv = document
            .getElementById("notesWrapper")
            .appendChild(document.createElement("div"));

        createDiv.setAttribute("class", "note");
        createDiv.setAttribute("key", sortParam[i]);
        createDiv.innerHTML = `<span>${sortParam[i] + 1}</span>`;
    }
};
//Sort array of notes - END

const numArray = Array.from(document.querySelectorAll(".note"));
const numArrayKeys = [...numArray.keys()];

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

    const sortParam = newArrayFourCols.col1.concat(
        newArrayFourCols.col2.concat(
            newArrayFourCols.col3.concat(newArrayFourCols.col4)
        )
    );

    return sortParam;
};

fourColumnLayout();

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

    const sortParam = newArrayThreeCols.col1.concat(
        newArrayThreeCols.col2.concat(newArrayThreeCols.col3)
    );

    return sortParam;
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

    const sortParam = newArrayTwoCols.col1.concat(newArrayTwoCols.col2);

    return sortParam;
};

const rearangeColumns = () => {
    const notesWrapper = document.getElementById("notesWrapper");
    const columnsCalc = Math.floor(notesWrapper.clientWidth / 248);
    // console.log(columnsCalc);

    switch (columnsCalc) {
        case 6:
            console.log("I have 6 columns!");
            break;
        case 5:
            console.log("I have 5 columns!");
            break;
        case 4:
            sortDivs(fourColumnLayout());
            console.log("I have 4 columns!");
            break;
        case 3:
            sortDivs(threeColumnLayout());
            console.log("I have 3 columns!");
            break;
        case 2:
            sortDivs(twoColumnLayout());
            console.log("I have 2 columns!");
            break;
        case 1:
            console.log("I have 1 column!");
            break;
    }
};

window.addEventListener("DOMContentLoaded", () => {
    rearangeColumns();
});
window.addEventListener("resize", () => {
    rearangeColumns();
});
