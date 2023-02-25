let allproduct = [];
async function funOne(){
    await fetch("https://comfortable-slacks-bear.cyclic.app/product/")
    .then((res)=>{return res.json()})
    .then((data)=> {allproduct=data; displayProduct(data); })
    .catch(err => console.log(err));
}

funOne()


function displayProduct(data){
    let container = document.querySelector("#container")
    container.innerHTML="";
    data.forEach((ele)=>{
        let card = document.createElement("div");
        let img = document.createElement("img");
        img.setAttribute("src",ele.imageURL);
        let pricediv = document.createElement("div");
        let newprice = document.createElement("h4")
        let actualprice = document.createElement("h5")
        if(ele.discount === 0){
            newprice.textContent = ""
        }
        else{
            let dprice = +ele.price - (+ele.price * (ele.discount / 100));
            newprice.textContent = "₹ " + Math.floor(dprice);
        }
        actualprice.textContent = "₹ "+ ele.price
        actualprice.style.color = "grey";
        pricediv.append(newprice,actualprice)
        let title = document.createElement("p")
        title.textContent = ele.title;

        card.append(img,pricediv,title);
        container.append(card);
    })
}


