var url = `https://api.github.com/users/`
var repobaseurl = `https://api.github.com/repos/`
//  var userName =" " //"kar-thee"
 var repoName = ""  //"fakeData-api-Practice1"

 
 var submitUser = document.getElementById("submitUser")
 submitUser.addEventListener("click", function () {
    //  let userName = searchUser;
    //  console.log(userName)
     
    let searchUser = document.getElementById("searchUser").value
    // alert(searchUser);
     getUserInfo(searchUser);
 })


// let searchUser = document.getElementById("searchUser").value

//  getUserInfo(searchUser);





async function getUserInfo(searchUser){
    var userUrl = "https://api.github.com/users/"+searchUser
    try {
        var req = await fetch(userUrl,{
            method : "GET" ,
            headers :{
                "Accept": "application/vnd.github.v3+json"
            }
        })
    var res = await req.json()
    console.log(res)
    let img = document.getElementById('avatar')
    img.src=res.avatar_url;
    
    let profileImg = document.getElementById('profileImg')
    profileImg.href = res.html_url;

    let username = document.getElementById('name');
    username.innerHTML = res.name

    let login = document.getElementById('login');
    login.innerHTML = res.login

    
    let bio = document.getElementById('bio');
    bio.innerHTML=res.bio
    
    let type = document.getElementById('type')
    type.innerHTML=res.type
    
    let location = document.getElementById('location')
    location.innerHTML=res.location

    let blog = document.getElementById('blog')
    let blogA = document.getElementById('blog-a')
    blogA.href=res.blog
    blog.innerHTML=res.blog
    
    let twitter = document.getElementById('twitter')
    let twitterA = document.getElementById('twitter-a')
    twitterA.href=`https://twitter.com/`+res.twitter_username
    twitter.innerHTML=res.twitter_username

    let email = document.getElementById('email')
    email.innerHTML=res.email

    let totalRepos = document.getElementById('total-repos')
    totalRepos.innerHTML=res.public_repos
    
    let repoCount = document.getElementById('repo-count')
    repoCount.innerHTML=`<h6>Public Repos</h6>`+res.public_repos

    let following = document.getElementById('following')
    following.innerHTML = `<h6>Following</h6> `+res.following

    let followers = document.getElementById('followers')
    followers.innerHTML = `<h6>Followers</h6> `+res.followers

    let started = document.getElementById('started')
    let starttime = res.created_at.split('T')
    started.innerHTML = `<h6>Created @</h6> `+starttime[0]


    let lasted = document.getElementById('lasted')
    let endtime = res.updated_at.split('T')
    lasted.innerHTML = `<h6>Last Updated on</h6> `+endtime[0]

    let searchRepo = document.getElementById('searchRepo')
    let repoForm = document.getElementById('repoForm')
    repoForm.addEventListener('click', event => {
        repoValue = searchRepo.value
        let repoCompleteUrl = repobaseurl+searchUser+`/`+repoValue
        console.log(repoCompleteUrl)
    })


    getUserRepo(res.repos_url)


    } catch (error) {
        console.log(error)
    }
    

    
    //console.log(userUrl);
    //getUserRepo(userUrl)
}

async function getUserRepo(repoUrl){
    try {
        var reporeq = await fetch(repoUrl,{
            method : "GET" ,
            headers :{
                "Accept": "application/vnd.github.v3+json"
            }
        })
    var repores = await reporeq.json()
    console.log("this is repo response")
    console.log(repores)

    }
     catch (error) {
        console.log(error)
    }
}

function repoContent(){
    var repoContentUrl = `https://api.github.com/repos/`+userName+`/`+repoName+`/contents`
    console.log(repoContentUrl)
}

// getUserInfo(url)
// repoContent()
