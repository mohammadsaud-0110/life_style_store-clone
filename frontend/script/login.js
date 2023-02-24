let lin = document.querySelector("#login");
    let reg = document.querySelector("#register");

    let linbtn = document.querySelector("#loginbtn");
    let regbtn = document.querySelector("#registerbtn");

    reg.style.display = "none";
    regbtn.style.opacity = "50%";

    linbtn.addEventListener("click",()=>{
        reg.style.display = "none";
        lin.style.display = "flex";
        linbtn.style.opacity = "100%";
        regbtn.style.opacity = "50%";
    });

    regbtn.addEventListener("click",()=>{
        lin.style.display = "none";
        reg.style.display = "flex";
        linbtn.style.opacity = "50%";
        regbtn.style.opacity = "100%";
    })
    let loginuser = localStorage.getItem("loggedinuser") || "";

    let allreg = JSON.parse(localStorage.getItem("allregistration")) || [];
    lin.addEventListener("submit",(event)=>{
        event.preventDefault();
        let email = document.querySelector("#lemail").value;
        let password = document.querySelector("#lpass").value;
        let flag = false;
        
        for(let i=0;i<allreg.length;i++){
            if(email==allreg[i].email && password==allreg[i].password){
                flag=true;
                loginuser = allreg[i].name;
                localStorage.setItem("loggedinuser",loginuser);
                break;
            }
        }
        if(flag){
            window.location.href = "./homepage.html"
        }
        else{
            alert("Details Incorrect!");
        }
    })

    reg.addEventListener("submit",(event)=>{
        event.preventDefault();
        let name = document.querySelector("#rname").value;
        let email = document.querySelector("#remail").value;
        let password = document.querySelector("#rpass").value;
        let obj = {
            name,
            email,
            password
        }
        console.log(name,email,password);
        allreg.push(obj);
        localStorage.setItem("allregistration",JSON.stringify(allreg));
        reg.reset();
        alert("Registration Successful, login now");        
    })
