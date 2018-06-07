// Write your JavaScript code here!
var planets = [
    ['Pluto', 0.06],
    ['Neptune', 1.148],
    ['Uranus', 0.917],
    ['Saturn', 1.139],
    ['Jupiter', 2.640],
    ['Mars', 0.3895],
    ['Moon', 0.1655],
    ['Earth', 1],
    ['Venus', 0.9032],
    ['Mercury', 0.377],
    ['Sun', 27.9]
  ];
  
  // We're going to solve this by breaking the problem into three parts.
  // Programmers like automating things, we'll populate the HTML drop down options using code,
  // instead of having to type out all the values.
  // Create a function that does the some math and gives us the new weight.
  // Then create a function that responds when the user clicks on the button.
  
  // 1. Populate the dropdown element with the data found in the planets array.
  // The value of each option should be the planet's name.
  // Use the following built-in methods:
  // `.forEach` `document.createElement` `document.getElementById` `.appendChild`
  
  var test = "test";

  console.log(test.slice(0, 1));
console.log(test.slice(1, 2));
console.log(test.slice(2));
var testy = ["H", "i" , "B", "y"];
testy.push("e")
testy.concat()
testy.toString();
console.log(testy.(""))

    var select = document.getElementById('planets');

    planets.forEach(function(planet){
        var opt = planet[0];
        var el = document.createElement("option");
        el.textContent = opt;
        el.value = opt;
        select.appendChild(el);
      })

  function calculateWeight(weight, planetName) {
    // 2. Write the code to return the correct weight
    var planetSelected;

    for(var i = 0; i < planets.length; i++){
        let tempPlanet = planets[i][0];
        if(tempPlanet.localeCompare(planetName) == 0){
            planetSelected = planets[i];
            break;
        }
    }
    
    let result = document.getElementById("output")
    result.textContent = "If you were on "+ planetName + ", you would weigh " + weight * planetSelected[1] + "lbs!";
    return weight * planetSelected[1];
  }

  var userWeight =  document.getElementById('user-weight');
  var calcButton =  document.getElementById('calculate-button');
  var planetName = document.getElementById('planets');
  calcButton.addEventListener("click", function(){
    calculateWeight(userWeight.value, planetName.value);
  })

  
  // Bonus Challenges
  // 8. Reverse the drop down order so that the sun is first.
  // 9. Make it look nice using bootstrap (http://getbootstrap.com/getting-started/)