document.addEventListener('DOMContentLoaded', () => {

    let form = document.querySelector('form')

    
    function addUsers(username, url, profileLink) {
        form.addEventListener('submit', (e) => {
        e.preventDefault();
        let searchInput = form.querySelector('#search').value;
        let ul = document.getElementById("user-list");    
        let li = document.createElement('li');
        let img = document.createElement('img');
        let link = document.createElement('a')
        let p = document.createElement('p');
        

            if (username === searchInput) {
            // Add Username
                li.textContent = username;
                ul.appendChild(li)
            // Add Avatar
                img.src = `${url}`
                li.append(img)
            // Link to Profile
                link.textContent = "Profile Link!"
                link.href = `${profileLink}`
                li.append(link)
            } 

        })
    }  

    function searchUsers() {
    fetch('https://api.github.com/search/users?q=octocat')
    .then(res => res.json())
    .then(data=> {
    data.items.forEach(item => {
            addUsers(item.login, item.avatar_url, item.html_url);

        })
        })
    } 
searchUsers()

})



