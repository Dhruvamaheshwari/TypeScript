//  Q1: Write a function calculateArea that takes the length and
//     width parameters of type number and returns their product. Infer
//     the return type of the function using type inference.

const calculateArea = (length:number , width:number) : number => {
    return length * width;
}

console.log(calculateArea(2,4))
