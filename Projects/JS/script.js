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

// "b5fa98c8ecaf54c7bde003547fb11193";

function searchVideo() {
  // Get the search term from the input field
  const searchTerm = document.getElementById("videoQuery").value;

  // Construct the Vimeo API search URL
  const baseUrl = "https://api.vimeo.com/videos";
  const accessToken = "b5fa98c8ecaf54c7bde003547fb11193";
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

async function fetchData() {
  const response = await fetch('https://dummyjson.com/posts?limit=6');
  const data = await response.json();
  return data;
}

window.onload = async function() {
  try {
    const data = await fetchData();
    const blogPosts = document.getElementById('blog-posts');
    if (data && data.posts) {
      for (let i = 0; i < data.posts.length; i++) {
        const post = data.posts[i];
        const postElement = document.createElement('div');
        // postTitle.innerText = data.posts[i].title;
        // postBody.innerText = data.posts[i].body;
        postElement.classList.add("blogStyle");
        postElement.innerHTML = `
          <h3>${post.title}</h3>
          <p>${post.body}</p>
        `;
        blogPosts.appendChild(postElement);
      }
    } else {
      console.error('Error retrieving blog posts from API');
    }
  } catch (error) {
    console.error('Error fetching data:', error);
  }
}





window.addEventListener("load", getQuote);
btn.addEventListener("click", getQuote);
btnImage.addEventListener("click", getImage);
btnGoogle.addEventListener("click", performSearch);
btnVideo.addEventListener("click", searchVideo);