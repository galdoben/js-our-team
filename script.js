const teamMembers = [
  {
    name: "Marco Bianchi",
    role: "Designer",
    email: "marcobianchi@team.com",
    img: "img/male1.png"
  },
  {
    name: "Laura Rossi",
    role: "Front-end Developer",
    email: "laurarossi@team.com",
    img: "img/female1.png"
  },
  {
    name: "Giorgio Verdi",
    role: "Back-end Developer",
    email: "giorgioverdi@team.com",
    img: "img/male2.png"
  },
  {
    name: "Marta Ipsum",
    role: "SEO Specialist",
    email: "martarossi@team.com",
    img: "img/female2.png"
  },
  {
    name: "Roberto Lorem",
    role: "SEO Specialist",
    email: "robertolorem@team.com",
    img: "img/male3.png"
  },
  {
    name: "Daniela Amet",
    role: "Analyst",
    email: "danielaamet@team.com",
    img: "img/female3.png"
  }
];

const containerCards = document.getElementById('container-cards');





function getCard (member){

  const {name, role, email, img} = member;


return `<div id="container-cards" class="container-cards">
            <div class="team-card d-flex">
                <img src=${img} alt=${name}>
            
                <div class="text">
                    <h3>${name}</h3>
                     <h4>${role}</h4>
                    <span>${email}</span>`;
}                




function membersCards(arrayMembers){
  let cards = "";
for (let member of arrayMembers){
  console.log(member)
  
  cards += getCard(member)

}
containerCards.innerHTML = cards
}

membersCards(teamMembers)