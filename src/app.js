class Blog {
  // Progression 1: Add 2 methods - addTitle(), and addDescription()
  constructor(title, detail) {
    this.title = title;
    this.detail = detail;
  }
  addTitle() {
    let h1tag = document.createElement('h1');
    h1tag.setAttribute('id', 'blog-title');
    h1tag.innerHTML += this.title;
    document.getElementById('card-text').appendChild(h1tag);
  }
  addDescription() {
    let ptag = document.createElement('p');
    ptag.setAttribute('id', 'blog-description');
    ptag.innerHTML += this.detail;
    document.getElementById('card-text').appendChild(ptag);
  }
}

// Progression 2: Setup an event listner - add two functions
// 1. `helperAddPost()`
// 2. `helperPost()`

let toggleOpenClose = 'open';
function helperAddPost() {
  if (toggleOpenClose == 'open') {
    document.getElementById('popupContact').style.display = 'inline';
    toggleOpenClose = 'close';
  } else {
    document.getElementById('popupContact').style.display = 'none';
    toggleOpenClose = 'open';
  }
}

function helperPost() {
  let title = document.getElementById('title').value;
  let description = document.getElementById('detail').value;
  // console.log(title,description)

  let convertClassToObj = new Blog(title, description);
  convertClassToObj.addTitle();
  convertClassToObj.addDescription();
}
