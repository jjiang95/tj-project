documnent.addEventListener("DOMContentLoaded", () => {
    const form1 = document.querySelector("#by-name");
    form1 = addEventListener("submit", (e) => {
        e.preventDefault();
        let searchText = e.target.character[0].value;
        fetch(`https://api.igdb.com/v4/characters`),{ 
            method: 'POST',
            headers: {'Accept': 'application/json','Client-ID': 'Client ID','Authorization': 'Bearer access_token',
    }},      
            data; "fields akas,checksum,country_name,created_at,description,games,gender,mug_shot,name,slug,species,updated_at,url;"
})
    .then(response => {
      console.log(response.json());
  })
     .catch(err => {
      console.error(err);
    form1.reset();
  })});