import "./styles.css";
let array = [2, 4, 6, 9, 10, 20, 26, 30];
let search = 7;
let mid = 0;
let start = 0;
let last = array.length - 1;
do {
  console.log("non trouvé", start, last);
  mid = Math.ceil((start + last) / 2);
  if (array[mid] === search) {
    console.log("indice de", search, mid);
    return;
  } else if (array[mid] < search) {
    start = mid + 1;
  } else {
    last = mid - 1;
  }
} while (start <= last);

document.getElementById("app").innerHTML = `
let array = [2, 4, 6, 9, 10, 20, 26, 30];
<h1>${search} n'est pas là</h1>
`;
