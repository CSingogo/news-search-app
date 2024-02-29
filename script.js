const apiKey = '3800c5fabd4341318cee69d00cf8f4a8';

const blogContainer = document.getElementById('bolg-container');

async function fetchRandomNews(){
    try{
        const apiUrl = `https://newsapi.org/v2/top-headlines?country=us&pageSize=10&apiKey=${apiKey}`
        const response = await fetch(apiUrl)
        const data = await response.json()
        return data.articles;

    } catch(error){
        console.error('Error fetching random news', error)
        return []
    }
}

function displayBlogs(articles){
    
}

(async ()=> {
    try{
       const articles = await fetchRandomNews();
       console.log(articles);
       displayBlogs(articles);
    } catch(error){
        console.error('Error fetching random news', error);
    }
});