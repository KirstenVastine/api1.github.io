// const baseURL = 'https://picsum.photos/200/200'

// Below is code for SpaceX.
// const baseURL = 'https://api.spacexdata.com/v4/launches/latest'
// const baseURL = 'https://api.spacexdata.com/v3/capsules'

//query selector for button
// document.addEventListener("click", button)
const button = document.querySelector("button");
button.addEventListener('click', getPics);
let container = document.getElementById('pics')
    function getPics(){
        fetch('https://api.spacexdata.com/v3/rockets')
        // fetch('https://picsum.photos/v2/list?page=2&limit=20')
        .then(response => response.json())
        .then(myJson => displayPics(myJson))
    };

        // console.log(myJson)
        // displayPiks(myJson);
        

//     getPiks();
// // Below is superfluous fetch code.
//     function fetchPicsum () {
//         fetch(baseURL)
//         .then(result => result.json())
//         .then(jsonified => displayPicsum(jsonified));
// // Not sure if I need prevent default below.
//     function fetchResults(e) {
//         e.preventDefault(); //1
//         url = baseURL 
//         + '?api-key=' + key + '&page=' + pageNumber + '&q=' + searchTerm.value;

    //     function fetchResults(data) {
    //         console.log("DisplayResults", data);
    //     }
    
    // Click event goes above the 
    // button.addEventListener('click', getPiks);
    // To do: Make a for loop to randomize the data.
    // const photoShop = document.getElementById('photoContainer');
    // const photo = document.getElementById('random-image');
    // if(photo) {
    //     photoShop.removeChild(photo);
    // }
    

    

    const section = document.querySelector('section');
    // Above is to access the data.
    // Below is to display the data.
function displayPics(json) {
    console.log(json);
    json.forEach (x => {
        let img = document.createElement('img')
        img.src = x.flickr_images[1];
        img.style.borderStyle = 'solid';
        container.appendChild(img)
    })
        
}

    // let photos = displayPics.url;
    // const section = document.querySelector('section');
    // section.appendChild(photos);
    // if(photos === 0) {
    //     console.log('No Results');
    // } else {
    //     for (let i = 0; i < photos; i++){
    //          console.log(i);
    //          let pics = document.getElementById('pics')
    //     }     
    // }




    // function displayCharacter(json) {
    //     const randomImageContainer = document.getElementById('random-image');
    //     // const imgTwoContainer = document.getElementById('imageTwo');
        
    //     randomImageContainer.src = json.response.url;
    //     // imgTwoContainer.src = people.results[1].image
    // }




    // const reel = pic;
    // Need an if conditional here. Use .math.random()


// }

// const btn = document.getElementById('btn');

// function fetchPic() {
//     fetch(baseURL)
//     .then(response => response.json())
//     .then(data => console.log(data))
//     .finally(() => {console.log("fetch")})
// };
// button.addEventListener('click', getPics());




// function getPics(){  
//     fetch('https://api.spacexdata.com/v3/capsules')  
// .then(response => response.json())  
// .then(res => console.table(res));
// };
// getPics()


// let rockets = {}
// async function getPics(){
//   await fetch('https://api.spacexdata.com/v3/capsules')
//   .then(response => response.json())
//   .then(res => rockets = [...res])
//   .finally(() => {console.log("Rockets ", rockets)})
//   
// };

// const btn = document.getElementById('btn').addEventListener('click', getPics);
// const lists = document.getElementById('ships').innerHTML = Object.values(rockets);