const array = [32,332,433,4312,45485,566534,56653342,46724564,6780987,654323568];
let largest = array[0];
array.forEach((element) => {
    if (element > largest) {
        largest = element;
    }
});
console.log("Largest element:", largest);   