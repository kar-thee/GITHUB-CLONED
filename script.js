var url = `https://api.github.com/users/`
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

    let name = document.getElementById('name');
    name.innerHTML = res.login
    
    let bio = document.getElementById('bio');
    bio.innerHTML=res.bio
    
    let type = document.getElementById('type')
    type.innerHTML=res.type


    } catch (error) {
        console.log(error)
    }
    

    
    //console.log(userUrl);
    //getUserRepo(userUrl)
}

function getUserRepo(userUrl){
    var repoUrl = userUrl+`/repos`
    console.log(repoUrl)
}

function repoContent(){
    var repoContentUrl = `https://api.github.com/repos/`+userName+`/`+repoName+`/contents`
    console.log(repoContentUrl)
}

// getUserInfo(url)
// repoContent()
