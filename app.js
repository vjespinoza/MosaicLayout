//Create elements
const divLength = 40;

for (let i = 0; i < divLength; i++) {
    const createDiv = document
        .getElementById("notesWrapper")
        .appendChild(document.createElement("div"));
    createDiv.setAttribute("class", "note");
    createDiv.setAttribute("key", i);
    createDiv.innerHTML = `<span>${i + 1}</span>`;
}
//Create elements - END

const numArray = Array.from(document.querySelectorAll(".note"));
const numArrayKeys = [...numArray.keys()];

const fourColumnLayout = () => {
    let fourColsCounter = -1;
    const fourCols = numArrayKeys.map((num) => {
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

    return newArrayFourCols.col1.concat(
        newArrayFourCols.col2.concat(
            newArrayFourCols.col3.concat(newArrayFourCols.col4)
        )
    );
};

const threeColumnLayout = () => {
    let threeColsCounter = -1;
    const threeCols = numArrayKeys.map((num) => {
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

    return newArrayThreeCols.col1.concat(
        newArrayThreeCols.col2.concat(newArrayThreeCols.col3)
    );
};

const twoColumnLayout = () => {
    let twoColsCounter = -1;
    const twoCols = numArrayKeys.map((num) => {
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

    document.getElementById("notesWrapper").innerHTML = "";

    for (let i = 0; i < divLength; i++) {
        const createDiv = document
            .getElementById("notesWrapper")
            .appendChild(document.createElement("div"));

        createDiv.setAttribute("class", "note");
        createDiv.setAttribute("key", sortParam[i]);
        createDiv.innerHTML = `<span>${sortParam[i] + 1}</span>`;
    }

    console.log(numArrayKeys);
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
            threeColumnLayout();
            console.log("I have 3 columns!");
            break;
        case 2:
            twoColumnLayout();
            console.log("I have 2 columns!");
            break;
        case 1:
            console.log("I have 1 column!");
            break;
    }
});
