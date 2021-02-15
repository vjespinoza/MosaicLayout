//Create elements
const divLength = 40;
const divArray = [];
const noteContent = {};

for (let i = 0; i < divLength; i++) {
    noteContent.id = i;
    noteContent.text = `#${i + 1}`;

    // divArray.push(noteContent);

    const createDiv = document
        .getElementById("notesWrapper")
        .appendChild(document.createElement("div"));
    createDiv.setAttribute("class", "note");
    createDiv.setAttribute("key", noteContent.id);
    createDiv.innerHTML = `<span>${noteContent.text}</span>`;
    divArray.push(createDiv);
}
// console.log(divArray);
// console.log(noteContent);

//Create elements - END

const numArray = Array.from(divArray);
const numArrayKeys = [...numArray.keys()];
console.log(numArrayKeys);

const fourColumnLayout = () => {
    let fourColsCounter = 0;
    const fourCols = numArrayKeys.map((num) => {
        return (fourColsCounter += 4);
    });
    // console.log(fourCols);

    const newArrayFourCols = [[], [], [], []];
    console.log(newArrayFourCols);

    numArrayKeys.map((num) => {
        if (fourCols.includes(num)) {
            newArrayFourCols[0].push(num);
        } else if (fourCols.includes(num + 1)) {
            newArrayFourCols[1].push(num);
        } else if (fourCols.includes(num + 2)) {
            newArrayFourCols[2].push(num);
        } else if (fourCols.includes(num + 3)) {
            newArrayFourCols[3].push(num);
        }
    });
};

const threeColumnLayout = () => {
    let threeColsCounter = 0;
    const threeCols = numArrayKeys.map((num) => {
        return (threeColsCounter += 3);
    });
    // console.log(threeCols);

    const newArrayThreeCols = { col1: [], col2: [], col3: [] };

    numArrayKeys.map((num) => {
        if (threeCols.includes(num)) {
            newArrayThreeCols.col3.push(num);
        } else if (threeCols.includes(num + 1)) {
            newArrayThreeCols.col2.push(num);
        } else if (threeCols.includes(num + 2)) {
            newArrayThreeCols.col1.push(num);
        }
    });

    console.log(newArrayThreeCols);
};

const twoColumnLayout = () => {
    let twoColsCounter = 0;
    const twoCols = numArrayKeys.map((num) => {
        return (twoColsCounter += 2);
    });
    // console.log(threeCols);

    const newArrayTwoCols = { col1: [], col2: [] };

    numArrayKeys.map((num) => {
        if (twoCols.includes(num)) {
            newArrayTwoCols.col2.push(num);
        } else if (twoCols.includes(num + 1)) {
            newArrayTwoCols.col1.push(num);
        }
    });

    console.log(newArrayTwoCols);
};

fourColumnLayout();
threeColumnLayout();
twoColumnLayout();

window.addEventListener("resize", () => {
    const notesWrapper = document.getElementById("notesWrapper");
    const columnsCalc = Math.floor(notesWrapper.clientWidth / 248);
    console.log(columnsCalc);

    switch (columnsCalc) {
        case 6:
            console.log("I have 6 columns!");
            break;
        case 5:
            console.log("I have 5 columns!");
            break;
        case 4:
            fourColumnLayout();
            console.log("I have 4 columns!");
            break;
        case 3:
            console.log("I have 3 columns!");
            break;
        case 2:
            console.log("I have 2 columns!");
            break;
        case 1:
            console.log("I have 1 column!");
            break;
    }
});
