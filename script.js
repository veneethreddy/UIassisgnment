/*function gd(){
url='https://rickandmortyapi.com/api/character';
fetch(url).then( (response)=>{
  console.log(response);
  if (!response.ok) {
    alert("No weather found.");
    throw new Error("No weather found.");
  }
  return response.json();
}).then((data)=>{
  console.log(data);
for(var i=0;i<20;i++){
x1=data.results[i].name
console.log(x1);
document.getElementById('n1').innerHTML='name: '+x1;
//species

x2=data.results[i].species
console.log(x2);
document.getElementById('species').innerHTML='species: '+x2;
//location
x3=data.results[i].location.name
console.log(x3);
document.getElementById('loc').innerHTML='location: '+x3;
//origin
x4=data.results[i].origin.name
console.log(x4);
document.getElementById('origin').innerHTML='origin: '+x4;
//console.log(x4);
//status
x5=data.results[i].status
document.getElementById('status').innerHTML='status: '+x5;
//console.log(x5);
//episode
/*x3=data.results[0].location.name
console.log(x3);
document.getElementById('loc').innerHTML='location: '+x3;

//gender
x7=data.results[i].gender
console.log(x7);
document.getElementById('gender').innerHTML='gender: '+x7;
//console.log(x6);
//image
x=data.results[i].image
console.log(x);
document.getElementById('img').src=x;
}
})
}
gd();
*/
function gd(){
url='https://rickandmortyapi.com/api/character';
fetch(url).then( (response)=>{
  console.log(response);
  if (!response.ok) {
    alert("No Data found.");
    throw new Error("No Data found.");
  }
  return response.json();
}).then((data)=>{
    console.log(data);
    const d=data.results.map(res=>{
      return`<div class="grid-item">
          <img id='img' src='${res.image}'>
        <div class='innerdiv-d'>
          <p id='n1'>Name:${res.name}</p>
        <p id='gender'>Gender:${res.gender}</p>
        <p id='species'>Species:${res.species}</p>
        <p id='origin'>Origin:${res.origin.name}</p>
        <p id='loc'>Location:${res.location.name}</p>
        <p id='status'>Status:${res.status}</p>
        <p id='epi'>Episode:${res.epis}</p>
      </div>
    </div>
      `
    }).join('')
    document.querySelector('.grid-container').innerHTML=d;
})}
gd();
let character = {
  fetchcharacter: function (gender) {
    fetch(
      "https://rickandmortyapi.com/api/character?gender="
      + gender
    )
      .then((response) => {
        if (!response.ok) {
          alert("no Data found");
          throw new Error("No data found.");
        }
        return response.json();
      })
      .then((data) => this.displaycharacter(data));
  },
  displaycharacter: function(data){
    const { name } = data.name;
  const { gender } = data.gender;
  const { species } = data.species;
  const { origin } = data.origin;
  const { location } = data.location.name;
  const { status } = data.status;
  const { episode} = data.epis;
  const { image } = data.image;
  document.querySelector(".n1").innerText = "Name " + name;
  document.querySelector(".img").src =
    "" + image ;
  document.querySelector(".gender").innerText = "Gender"+ gender;
  document.querySelector(".origin").innerText = "origin"+origin;
  document.querySelector(".species").innerText =
    "Species: " + species ;
  document.querySelector(".loc").innerText =
    "Loc: " + location ;
    document.querySelector(".status").innerText =
      "Status: " + status ;
      document.querySelector(".epi").innerText =
        "Episode: " + episdoe ;
},
search: function () {
  this.fetchcharacter(document.querySelector(".search-bar").value);
},
};

document.querySelector(".search button").addEventListener("click", function () {
character.search();
});
document
.querySelector(".search-bar")
.addEventListener("keyup", function (event) {
  if (event.key == "Enter") {
    character.search();
  }
});
