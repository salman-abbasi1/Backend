let fetchData = new Promise((resolve, reject)=>{
    let response =  fetch('https://jsonplaceholder.typicode.com/posts')  

    if(response == true){
       let result =  response.json()
        resolve('success', result)
    }else{
         reject('rejected')
    }
  
  
}).then((msg)=>{
    console.log(msg)
})
fetchData.catch((error)=>{
    console.log(error)
})