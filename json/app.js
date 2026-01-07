
// async function getdata() {
//     let response= await fetch('data.json')
//     let result= await response.json()
//     console.log(result)
// }
// getdata()
    

    let response= await fetch('product.json')
    let result= await response.json()

    let html=''

    for(let data of result){
        html+= ` <div class="col-12 col-md-6 col-lg-3 d-flex justify-content-center">
        <div class="card" style="width: 18rem;">
  <img src="${data.p_image}" class="card-img-top" alt="...">
    <h5 class="card-title fw-bold">${data.p_name}</h5>
    <p class="card-text fw-italic">${data.p_description}</p>
    <p class="card-text fw-bolder">${data.p_price}</p>

    <a href="#" class="btn btn-primary">Read More</a>
  </div>
  </div>`
    }

    document.getElementById('myrow').innerHTML= html