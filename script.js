
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
