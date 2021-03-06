let aww = "https://www.reddit.com/r/aww/.json";
let funny = "https://www.reddit.com/r/funny/.json";
let memes = "https://www.reddit.com/r/memes/.json";
const button = document.getElementById("go");
const makeElement = (apiURL) => {
    fetch(apiURL)
    .then(response => response.json())
    .then(json => {

        const getPost = json.data.children;
        const getPost10 = getPost.slice(0, 10);
        const container = document.getElementById("blogPost");
        container.innerHTML = "";
        
            for (let child of getPost10) {
                
                const title = child.data.title;
                const thumbnail = child.data.thumbnail;
                const url = child.data.url_overridden_by_dest;

                const pageTitleEl = document.createElement("h2")
                pageTitleEl.classList.add("title");
                pageTitleEl.innerText = title;
                container.appendChild(pageTitleEl);

                const thumbnailEl = document.createElement("img");
                thumbnailEl.classList.add("img");
                thumbnailEl.src = thumbnail;
                container.appendChild(thumbnailEl);

                const urlEl = document.createElement("a");
                urlEl.classList.add("url");
                urlEl.href = url;
                urlEl.innerText = url;
                container.appendChild(urlEl); 
            
            }

        });
}

button.addEventListener("click", event => {
    event.preventDefault();
    let inputValue = document.getElementById("inputNewSubreddit").value;
  
    if (inputValue === "aww") {
        makeElement(aww);
        const h2 = document.getElementById("h2");
        h2.innerText="Aww Subreddit"
        h2.classList.add("header2");
    } else if (inputValue === "funny") {
        makeElement(funny);
        const h2 = document.getElementById("h2");
        h2.innerText="Funny Subreddit"
        h2.classList.add("header2");
    } else if (inputValue === "memes") {
        makeElement(memes);
        const h2 = document.getElementById("h2");
        h2.innerText="Memes Subreddit"
        h2.classList.add("header2");
    }

});

