//creo array per i membri del team 
const listMembers = [
    {
        name: "Wayne Barnett",
        profession: "Founder & CEO",
        photo: "wayne-barnett-founder-ceo.jpg",
    },

    {
        name: "Angela Caroll",
        profession: "Chief Editor",
        photo: "angela-caroll-chief-editor.jpg",
    },

    {
        name: "Walter Gordon",
        profession: "Office Manager",
        photo: "walter-gordon-office-manager.jpg",
    },

    {
        name: "Angela Lopez",
        profession: "Social Media Manager",
        photo: "angela-lopez-social-media-manager.jpg",
    },

    {
        name: "Scott Estrada",
        profession: "Developer",
        photo: "scott-estrada-developer.jpg"
    },

    {
        name: "Barbara Ramos",
        profession: "Graphic Designer",
        photo: "barbara-ramos-graphic-designer.jpg",
    }
];



//con un ciclor for stampo i le informazioni sui membri del team
const team = document.getElementById("team");
for (let i = 0; i < listMembers.length; i++) {
    //stampo in console
    console.log("------------------");
    console.log(listMembers[i].name);
    console.log(listMembers[i].profession);
    console.log(listMembers[i].photo);
    
//////////////////////////////////////////////////////

    //stampo in pagina il risultato 
    const curListMembers = listMembers[i];
    team.innerHTML += ` 
        <div class="card">
            <h3>${curListMembers.name}</h3>
            <h3>${curListMembers.profession}</h3>
            <img src="${curListMembers.photo}" alt="">
        </div> `
}
