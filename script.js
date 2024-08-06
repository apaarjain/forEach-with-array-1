var list = [{roll:1}, {name:'apaar'}, {age:25}, {adhar:4444}, {gender:'Male'}];
//list naam ke array mein 5 objects hain, har object ki value niklane ke liye hum console mein likh sakte hain
//Object.values(list[0]); ya Object.values(list[1]);...
//isse ek bar mein ek object ki value aa jayegi. par humein paachon ki value ek sath nikalna hai aur unhe table ki row mein dalna hai
// par hum forEach method "list" mein lagakar, object ke andar ki value nahin nikal sakte, usse bas humein 5 object mil sakte hain,


// hum do bar forEach method lagayenge, pehli bar wala forEach humein ek ek object alag karke dega,
//dusri bar wala forEach us ek ek object par lagega.
//dusri bar wala forEach humein har object ki alag alag value dega.
//Object.values wala method hum dusri bar wale forEach ke sath lagayenge.


//td ko create karke banega cell createElement use karke
// tr ko create karke banega row createElement use karke
// #tableBody ko use karke banega tableBody
// cell banega row ka child aur row banegi tableBody ki child.


var row = document.createElement("tr");
var tableBody = document.getElementById("tableBody"); 
tableBody.appendChild(row);

list.forEach(text => {
    //forEach lagane se, upar wala "text" ka matlab har ek "object" jo "list" naam ki array mein tha, 
    //har object ko 'list' mein hai, wo alag alag ek ek bar 'text' ka roop lega
    // aur apna cell banayega, cell matlab naya td element,  
        const cell = document.createElement("td");
//ab hum pehle forEach ke function ke andar hain, jahan ek bar mein ek object se dealing ho rahi hai, 
// yahan "text" matlab ek object, 
        Object.values(text).forEach(val => {
            //is baar forEach laga hai "text" ke upar, matlab ek object par, 
            // yahan "val" ka matlab hai, ek obejct ki value, matlab har object ki independent value.
            // wo value humne cell ke textContent ke barabar kar di, ab har cell ka textContent mein val aayegi.
            cell.textContent = val;
            row.appendChild(cell);  
            
        });
})