let quote = document.getElementById("quote");
let author = document.getElementById("author");
let btn = document.getElementById("btn");
let input = document.getElementById("image-query");
let btnImage = document.getElementById("btnImage");
let imageDiv = document.getElementById("imageDiv");
let googleQuery = document.getElementById("googleQuery");
let btnGoogle = document.getElementById("btnGoogle");
let postTitle = document.getElementById("postTitle");
let postBody = document.getElementById("postBody");
let btnLess = document.getElementById("btnLess");
let btnMore = document.getElementById("btnMore");
let counter = document.getElementById("counter");
// let videoPlayer = document.getElementById("videoPlayer");

const url = "https://api.quotable.io/random";

let getQuote = () => {
  fetch(url)
    .then((data) => data.json())
    .then((item) => {
      quote.innerText = item.content;
      author.innerText = item.author;
    });
};

const API_KEY = "VdDXdXco-wYMjbKb3jfQ4KpDhh-kM2228_jkh-YKuy4";
// This key has been generated using a burner account and might have been disabled by the time you see it. 

let getImage = async () => {
  const query = document.getElementById("image-query").value;
  const width = 300;
  const height = 400;
  const response = await fetch(`https://api.unsplash.com/search/photos?query=${query}&per_page=1&orientation=landscape&client_id=${API_KEY}`);
  const data = await response.json();
  const imageUrl = data.results[0].urls.regular;
  imageDiv.setAttribute("src", imageUrl);
  imageDiv.setAttribute("width", width);
//   imageDiv.setAttribute("height", height);
}

function performSearch(e) {
  e.preventDefault(); 
  var a = document.getElementById('googleQuery').value;
  var b = 'http://google.com/search?q=' + a;
  window.location.href = b;
  document.getElementById('googleQuery').value = ""; 
};

function searchVideo() {
  // Get the search term from the input field
  const searchTerm = document.getElementById("videoQuery").value;

  // Construct the Vimeo API search URL
  const baseUrl = "https://api.vimeo.com/videos";
  const accessToken = "b5fa98c8ecaf54c7bde003547fb11193"; 
  // This key has been generated using a burner account and might have been disabled by the time you see it. 
  const url = `${baseUrl}?query=${searchTerm}&access_token=${accessToken}`;

  // Send an AJAX request to the API
  const xhr = new XMLHttpRequest();
  xhr.open("GET", url);
  xhr.setRequestHeader("Accept", "application/vnd.vimeo.*+json;version=3.4");
  xhr.onload = function () {
    if (xhr.status === 200) {
      // Parse the JSON response
      const response = JSON.parse(xhr.responseText);

      if (response.data && response.data.length > 0) {
        // Extract the video information from the response
        const video = response.data[0];
        const videoInfo = {
          id: video.uri.split("/").pop(),
          title: video.name,
          thumbnail: video.pictures && video.pictures.sizes[2].link || null
        };

        // Display the video information in the results div
        const resultsDiv = document.getElementById("video");
        resultsDiv.innerHTML = "";

        const videoDiv = document.createElement("div");
        videoDiv.innerHTML = `
          <h2>${videoInfo.title}</h2>
          <a href="https://vimeo.com/${videoInfo.id}">
            ${videoInfo.thumbnail ? `<img src="${videoInfo.thumbnail}" alt="${videoInfo.title}">` : ""}
          </a>
        `;

        resultsDiv.appendChild(videoDiv);
        

      } else {
        // No videos found
        const resultsDiv = document.getElementById("video");
        resultsDiv.innerHTML = "No videos found.";
      }
    } else {
      // Error fetching data
      const resultsDiv = document.getElementById("video");
      resultsDiv.innerHTML = "Error fetching data.";
    }
    // const videoURL = `"https://vimeo.com/${videoInfo.id}"`;
    //     console.log(videoURL);
    //     videoPlayer.setAttribute("src", videoURL);
  };
  xhr.send();
}

let count = 3;

async function fetchData(count) {
  const postURL = 'https://dummyjson.com/posts?limit=' + count;
  const response = await fetch(postURL);
  const data = await response.json();
  return data;
}

if (btnLess) {

btnLess.addEventListener("click", async function(e) {
  if (count > 1) {
    count = count - 1;
    const data = await fetchData(count);
    updatePosts(data);
  }
  if (count < 2) {
    btnLess.disabled = true;
  }
});

}

if (btnMore) {
  btnMore.addEventListener("click", async function(e) {
    btnLess.disabled = false;
    count = count + 1;
    const data = await fetchData(count);
    updatePosts(data);
  });
}

function updatePosts(data) {
  const blogPosts = document.getElementById('blog-posts');
  blogPosts.innerHTML = '';
  if (data && data.posts) {
    for (let i = 0; i < data.posts.length; i++) {
      const post = data.posts[i];
      const postElement = document.createElement('div');
      postElement.classList.add("blogStyle");
      postElement.innerHTML = `
        <h3>${post.title}</h3>
        <p>${post.body}</p>
        <button type="submit" class="btn btn-primary m-2">Read More</button>
      `;
      if (count == 1) {
        counter.innerHTML = `<h6>${count} Post Loaded...</h6>`;
      }
      else {
        counter.innerHTML = `<h6>${count} Posts Loaded...</h6>`;
      }
      blogPosts.appendChild(postElement);
    }
  } else {
    console.error('Error retrieving blog posts from API');
  }
}

window.onload = async function() {
  const data = await fetchData(count);
  updatePosts(data);
};


window.addEventListener("load", getQuote);
btn.addEventListener("click", getQuote);
btnImage.addEventListener("click", getImage);
btnGoogle.addEventListener("click", performSearch);
btnVideo.addEventListener("click", searchVideo);