//async await ES6
//fetch() .then ES5
const img = document.querySelector('img')
const Random=document.querySelector('#Random')
const olTag=document.querySelector('ol')
const h6Tag=document.querySelector('h6')

// const urlCat = 'https://aws.random.cat/meow'

// async function getCat () {
//     const response = await fetch(urlCat)
//     const data=await response.json()
//     console.log(data);
//     img.src=data.file
// }
// getCat()
//  Random.onclick=()=>{
//     getCat()
//  }


//  const url ='https://6374a3a148dfab73a4e45c4a.mockapi.io/userData' 

//  async function getUrl () {
//     const resp=await fetch(url)
//     const data = await resp.json()
//     console.log(data);
//     renderUrl(data)
//  }
// getUrl()

//  function renderUrl (urls) {
//     for (const url of urls) {
//         olTag.innerHTML+=`
//         <li>${url.name}
//         <img src=${url.avatar}/>
//         </li>`
//     }
//  }

//  const Btn ='https://fakestoreapi.com/products'

//  async function getBtn () {
//     const res=await fetch (Btn)
//     const data= await res.json()
//     console.log(data);
//     renderBtn(data)
//  }
// getBtn()

// function renderBtn (btns) {
//     for (const btn of btns) {
//         olTag.innerHTML+=`
//         <li>${btn.title}
//          <h6>${btn.price}</h6>
//          <h5>${btn.description}</h5>
//          <img style="width:150px" src=${btn.image}
//         </li>`
//     }
// }


// const movies = 'https://api.sampleapis.com/movies/animation'
// const endpoints = {
//     animation:'/animation',
//     classic:'classic',
//     drama:'/drama',
    
// }
// async function getAnimationMovies () {
//     const resp=await fetch(movies)
//     const data = await resp.json()
//     console.log(data);
//     renderMovies(data)
// }
// getAnimationMovies()

//  const classic = 'https://api.sampleapis.com/movies/classic'
// async function getClassicMovies () {
//     const resp=await fetch(classic)
//     const data = await resp.json()
//     console.log(data);
//     renderMovies(data)
// }
// getClassicMovies()

// const horror = 'https://api.sampleapis.com/movies/horror'
// async function getHorrorMovies () {
//     const resp=await fetch(horror)
//     const data = await resp.json()
//     console.log(data);
//     renderMovies(data)
// }
// getHorrorMovies()



// function renderMovies (movies) {
//     olTag.innerHTML+=''
//     for (const movie of movies) {
//         olTag.innerHTML+=`
//         <li>${movie.title}
//         <img src =${movie.posterURL}/>
//         </li>`
//     }
// }

// animation.onclick=()=>{
//     getAnimationMovies()
// }
// classicTag.onclick=()=>{
//     getClassicMovies()
// }
// horrorTag.onclick=()=>{
//     getHorrorMovies()
// }

const wines = document.querySelectorAll('button')

// const url = 'https://api.sampleapis.com/movies'

// btns.forEach(btn=>{
//     btn.onclick=async()=>{
//         const response=await fetch(url+`/${btn.innerText}`)
//         const data =await response.json()
//         console.log(data);
//         renderMovies(data)
//     }
// });
// function renderMovies (movies) {
//         olTag.innerHTML=''
//         for (const movie of movies) {
//             olTag.innerHTML+=`
//             <li>${movie.title}
//             <img src =${movie.posterURL}/>
//             </li>`
//         }
//     }


const winesUrl = 'https://api.sampleapis.com/wines'

 wines.forEach(wine=>{
    wine.onclick=async()=>{
        const response=await fetch(winesUrl+`/${wine.innerText}`)
        const data=await response.json()
        console.log(data);
        renderWines(data)
    }
});
function renderWines (wines){
    olTag.innerHTML=''
    for (const wine of wines) {
        olTag.innerHTML+=`
        <li>${wine.winery}
        <h6>${wine.wine}</h6>
        <img src = ${wine.image}
        </li>`
    }
}