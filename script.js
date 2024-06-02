let container = document.querySelector("#spreadsheet-conatiner");

// 26 row and 20 columns


for(let row = 1; row<=26; row++){

    let rowDiv = document.createElement("div");
    // rowDiv.style.border = "1px solid red";
    // rowDiv.style.backgroundColor = "lightblue";
    // rowDiv.style.padding = "5px";
    // rowDiv.innerText = "H";
    rowDiv.style.display = "contents"


    for(let col=1; col<=20; col++){
        let colDiv = document.createElement("div");
        colDiv.innerText = row+","+col;
        colDiv.className = "cell";
        rowDiv.append(colDiv);
    }
    container.append(rowDiv);
}


{/* <div>
      d1 
      d2 
      d3 
      d4
</div> */}