window.addEventListener("load", ()=>{
  const api = `https://api.quotable.io/random`;
  fetch(api).then((response)=>{
      return response.json()
  }).then(data=>{
      const name = data;
      const author = data.author;
      const quote = data.content;
      document.getElementById("content").innerHTML = `${quote}`;
      document.getElementById("author").innerHTML = `~${author}`;
  })  
})
function newquote(){
    const api = `https://api.quotable.io/random`;
    fetch(api).then((response)=>{
        return response.json()
    }).then(data=>{
        const name = data;
        const author = data.author;
        const quote = data.content;
        document.getElementById("content").innerHTML = `${quote}`;
        document.getElementById("author").innerHTML = `~${author}`;
    })  
}