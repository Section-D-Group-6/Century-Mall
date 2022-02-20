const api_key = "d860f87a6dab36dcaf738b0bb79714e8";
const all = document.querySelector('.all')
const upcoming_url = `https://api.themoviedb.org/3/movie/now_playing?api_key=${api_key}`;

//Poster Generator Function 
const poster_generator = (path, size)=>{
    return `https://image.tmdb.org/t/p/${size}/${path}`
}

//Image Tag Creator Function
const image = (path)=>{
    return `<img src="${path}" alt="">`
}
//Generates url for the trailer of a movie by taking key of embed
const trailerVideoGenerator = (key)=>{
    return `https://www.youtube.com/embed/${key}`
}
const Movie_info_fetcher = async (id)=>{
    return await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${api_key}&language=en-US&append_to_response=images&include_image_language=en,null`)
}
const clicked = ()=> {
    let movie_id = event.target.id;
    console.log(movie_id)
    info(movie_id);
}
const Slide_arr= [];
const Slide_fun = (id)=>{
    const random = Math.floor(Math.random()*7)
    const movInfo = Movie_info_fetcher(id)
    movInfo.then(res=>res.json()).then((data)=>{
        const bg = poster_generator(data.images.backdrops[random].file_path, 'w1280');
        Slide_arr.push(bg)   
    })
}

//Crates SlideShow with Movie picturs
const Silde_Creator = async (bg1, bg2, bg3, bg4)=>{

    const slide = document.createElement('div')
    slide.setAttribute('class', "slideshow")
    const slideTemp = `
    <div class="banner1">
        <img src="${bg1}" alt="" class = "imgg">
        <div class="bla">
            
        </div>  
        <div class="textBox textBox1" >
            <h1>Best Cinema</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi id tenetur, numquam eligendi autem incidunt vero repellendus error dicta aperiam provident suscipit rerum voluptatem? Deserunt placeat cupiditate reprehenderit incidunt, sit optio suscipit aliquid explicabo asperiores ipsam perferendis magni quam distinctio ipsa accusamus accusantium, quia at dicta omnis, nobis quas harum!
            </p>
        </div>
    </div>
    <div class="banner2">
        <img src="${bg2}" alt="" class = "imgg">
        <div class="bla">
            
        </div>
        <div class="textBox textBox2">
            <h1>Best Cinema</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi id tenetur, numquam eligendi autem incidunt vero repellendus error dicta aperiam provident suscipit rerum voluptatem? Deserunt placeat cupiditate reprehenderit incidunt, sit optio suscipit aliquid explicabo asperiores ipsam perferendis magni quam distinctio ipsa accusamus accusantium, quia at dicta omnis, nobis quas harum!
            </p>
        </div>
    </div>
    <div class="banner3">
        <img src="${bg3}" alt="" class = "imgg">
        <div class="bla">
            
        </div>
        <div class="textBox textBox3">
            <h1>Best Cinema</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi id tenetur, numquam eligendi autem incidunt vero repellendus error dicta aperiam provident suscipit rerum voluptatem? Deserunt placeat cupiditate reprehenderit incidunt, sit optio suscipit aliquid explicabo asperiores ipsam perferendis magni quam distinctio ipsa accusamus accusantium, quia at dicta omnis, nobis quas harum!
            </p>
        </div>
    </div>
    <div class="banner4">
        <img src="${bg4}" alt="" class = "imgg">
        <div class="bla">
            
        </div>
        <div class="textBox textBox4">
            <h1>Best Cinema</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi id tenetur, numquam eligendi autem incidunt vero repellendus error dicta aperiam provident suscipit rerum voluptatem? Deserunt placeat cupiditate reprehenderit incidunt, sit optio suscipit aliquid explicabo asperiores ipsam perferendis magni quam distinctio ipsa accusamus accusantium, quia at dicta omnis, nobis quas harum!
            </p>
        </div>
    </div>
    
    `
    slide.innerHTML = slideTemp;
    all.append(slide)
}

const time = (num)=>{
    if(num==0){
        return `<pre>
        Time
            1:00PM 2D C2
            
            3:00PM 3D C1
                   
            6:00PM 3D C1
 
            7:00PM 2D C2
        </pre>`
    }
    if(num==1){
        return `<pre>
        Time

        2:00 PM 2D C3
        </pre>`
    }
    if(num==2){
        return `<pre>
        Time

        4:30 PM 2D C3
        </pre>`
    }
    if(num==3){
        return `<pre>
        Time

        1:00 PM 2D C2 
        
        7:30 PM 2D C3
        </pre>`
    }
}

const divCreator = (Class, img, title, id, num)=>{
    const cont = document.createElement("div");
    cont.setAttribute("class", Class);
    cont.setAttribute("id", id);
    const divTemp = `
    <div class ='sectionPoster'>
    ${image(img)} 
    </div>
    <div class ="description">
    <div class = "title">${title}</div>
    <div class = "time">${time(num)}</div>
    </div>
    <button class = 'btn-see' id = '${id}' onclick = clicked()>see more</button> 
    `
    cont.innerHTML = divTemp
    return cont;
}


const movie = async ()=>{
    all.innerHTML = ' ';
    const Post = document.createElement('div');
    Post.setAttribute('class', 'poster');
    const Cont = document.createElement('div');
    Cont.setAttribute('class', 'contene');
    await fetch(upcoming_url).then(res=>res.json())
    .then((data)=>{
        for(var i=0; i<4; i++){
            let Class
            i%2!=0 ? Class = 'poster-right':Class = 'poster-left'; 
            const id = data.results[i].id
            const poster = poster_generator(data.results[i].poster_path, 'w500');
            const title = data.results[i].original_title
            const Schedule = divCreator(Class, poster, title, id, i)
            Post.innerHTML = '';
            setTimeout(()=>{Post.append(Schedule)}, 2000) ;
            Slide_fun(id)
        }
    })
    Cont.append(Post);
    all.append(Cont);
    
    setTimeout(() => { Silde_Creator(Slide_arr[0],Slide_arr[1], Slide_arr[2], Slide_arr[3]) }, 1000);
    

}

const slideCreator = (Poster, Background, Title, Overview, Genres, ReleaseDate, Rating)=>{
    
    const slideDiv = document.createElement('div')
    slideDiv.setAttribute('class', 'slide');
    const slideTemp = `
<img src = 'https://img.icons8.com/ios-filled/50/000000/left.png' alt='' id ='backicon' onclick=movie()>
    <div class="bg">
        <img src="${Background}" alt="">
        <div class="bla">
        </div>
    </div>
    <div class="postor">
        <img src="${Poster}" alt = "">
    </div>
    <div class="discription">
        <div class="text">
            <div class="titel"><p>${Title}</p></div>
            <div class="overview"><p>${Overview}</p></div>
            <div class="genres"><p>${Genres.map((gener)=>{
                return gener.name; 
            })}</p></div>
        </div>
        <div class="number">
            <div class="date">${ReleaseDate}</div>
            <div class="rating">${Rating}</div>
        </div>
    </div>
    `
    
    slideDiv.innerHTML = slideTemp;
    return slideDiv;
}

const info = (id)=>{
    const movie_info = Movie_info_fetcher(id);
    const cast_url =   `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${api_key}`
    const video_url =   `https://api.themoviedb.org/3/movie/${id}/videos?api_key=${api_key}`

    
    movie_info.then(res=>res.json()).then((data)=>{
        const Poster = poster_generator(data.poster_path, 'w500');
        const Background = poster_generator(data.backdrop_path, 'w1280');
        const Title = data.original_title;
        const Overview = data.overview;
        const Genres = data.genres;
        const ReleaseDate = data.release_date;
        const Rating = data.vote_average;
        const total = slideCreator(Poster, Background, Title, Overview, Genres, ReleaseDate, Rating)
        all.innerHTML ='';
        
        all.appendChild(total);
        console.log(total);
    })
    castfunc(cast_url);
    trailerfunc(video_url);
}
const castdiv = (Photo, Name) =>{
    const cardcast = document.createElement('div')
    cardcast.setAttribute('class', 'castCard')
    const card = `
                <div class="photo">
                    <img src="${Photo}" alt="">
                </div>
                <div class="name">
                    <p>${Name}</p>
                </div>
    `
    cardcast.innerHTML = card;
    return cardcast;
}
const castfunc = async (cast_url)=>{
    const cast = document.createElement('div');
    cast.setAttribute('class', 'cast');
    await fetch(cast_url)
    .then((res)=>res.json())
    .then((data)=>{
        for(var i=0; i<5; i++){
            const Photo = poster_generator(data.cast[i].profile_path, 'w500');
            const Name = data.cast[i].name;
            const cardcast = castdiv (Photo, Name);
            cast.appendChild(cardcast);
        }
    })
    console.log(cast);
    // const castinfo = `<div class="castintro"><p>Cast</p></div>`
    // all.appendChild(castinfo);
    all.appendChild(cast);
}
const iframediv = (url)=>{
    const videoCard = document.createElement('iframe');
    videoCard.setAttribute('class', 'videoCard')
    videoCard.src = url;
    videoCard.width = 1000;
    videoCard.height = 600;
    videoCard.allowFullscreen = true;
    return videoCard;
}

const trailerfunc = async(video_url)=>{
    const video =document.createElement('div');
    video.setAttribute('class', "video")
    await fetch(video_url)
    .then((res)=>res.json())
    .then((data)=>{
        const Video = trailerVideoGenerator(data.results[0].key);
        const iframe = iframediv(Video)
        video.appendChild(iframe);
    })
    console.log(video)
    all.appendChild(video)
}

movie()
