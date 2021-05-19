var url = `https://api.github.com/users/`
// var userName ="" //"kar-thee"
 var repoName = ""  //"fakeData-api-Practice1"

 var searchUser = document.getElementById("searchUser")
 var submitUser = document.getElementById("submitUser")
 submitUser.addEventListener("click", function () {
     userName = searchUser.value;
     //console.log(userName)
     //alert(userName)
     
 })

console.log(userName)










function getUserInfo(url){
    var userUrl = url+userName
    
    console.log(userUrl)
    getUserRepo(userUrl)
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
