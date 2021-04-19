function displayRadioValue() {
  var ele = document.getElementsByName('output_case');
  var input_text = document.getElementById("input_case").value

    
  for(i = 0; i < ele.length; i++) {
      if(ele[i].checked){
          if(ele[i].value == 'lower')
          document.getElementById("result").innerHTML
              = "Final Lower Case Result: "+ input_text.toLowerCase();

          else if(ele[i].value == 'upper')
          document.getElementById("result").innerHTML
              = "<b>Final Upper Case Result: </b>"+ input_text.toUpperCase();

          else if(ele[i].value == 'pascal'){
              var temporary_text=input_text
          temporary_text = temporary_text.replace(/(\w)(\w*)/g,
              function(g0,g1,g2){ return g1.toUpperCase() + g2.toLowerCase();});
          document.getElementById("result").innerHTML
              = "Final Pascal Case Result: "+ temporary_text.replace(/ +/g, "");
          }
          

          else if(ele[i].value == 'snake'){
              const str = input_text;
              const toSnakeCase = (str = '') => {
                  const strArr = str.split(' ');
                  const snakeArr = strArr.reduce((acc, val) => {
                      return acc.concat(val.toLowerCase());
                  }, []);
                  return snakeArr.join('_');
              };
              var output = toSnakeCase(str);
              document.getElementById("result").innerHTML = "Final Snake Case Result: "+ output;
          }

          else if(ele[i].value == 'upper_snake'){
              const str = input_text;
              const toSnakeCase = (str = '') => {
                  const strArr = str.split(' ');
                  const snakeArr = strArr.reduce((acc, val) => {
                      return acc.concat(val.toUpperCase());
                  }, []);
                  return snakeArr.join('_');
              };
              var output = toSnakeCase(str);
              document.getElementById("result").innerHTML = "Final Upper Snake Case Result: "+ output;
          }

//   function LowerCaseFunction() {
//   var str = document.getElementById("inputString").value;
//        var res = str.toLowerCase();
//      document.getElementById("outputString").innerHTML = res;
  
//   }
// function UpperCaseFunction() {
//   var str = document.getElementById("inputString").value;
//        var res = str.toUpperCase();
//      document.getElementById("outputString").innerHTML = res;
  
//   }

// const toSnakeCase  = str =>
//   str &&
//   str
//      .match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*[A-Z]|[0-9]+/g)
//      .map(x => x.tolowerCase())
//      .join('_');
    
// console.log(toSnakeCase('inputstring'));
// var str = document.getElementById("inputString").value;
// document.getElementById("outputString").innerHTML = res;



// const toKebabCase  = str =>
//   str &&
//   str
//      .match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*[A-Z]|[0-9]+/g)
//      .map(x => x.tolowerCase())
//      .join('_');
    
// console.log(toKebabCase('inputstring'));
// var str = document.getElementById("inputString").value;
// document.getElementById("outputString").innerHTML = res;



// const toCamelCase = str =>
//    str
//       .toLowerCase()
//       .replace(/[a-zA-Z0-9]+(.)/g, (m,ch) => chr.toUpperCase());

// console.log(toCamelCase('inputstring'));
// var str = document.getElementById("inputString").value;
// document.getElementById("outputString").innerHTML = res;


// const toPascalCase = str =>
//    str
      
//     .replace(/\w\S*/g, m => m.charAt(0).toUpperCase() + m.subtr(1).toLowerCase());

// console.log(toPascalCase('inputstring'));
// var str = document.getElementById("inputString").value;
// document.getElementById("outputString").innerHTML = res;