let a=document.getElementById("form");
let list=document.querySelector(".list");
let arr=[];
if(arr.length==0){
    list.style.color="grey";
}else{
    list.style.color="white";
}
a.addEventListener("submit",function(e){
    e.preventDefault();
   
    let na=document.getElementById("name").value;
    let pr=document.getElementById("prof").value;
    let ag=document.getElementById("age").value;
    if(na=="" || pr==""||ag==""){
        let err=document.querySelector(".err");
        err.innerText="Error: Please Make sure All th fields are filled before adding in an employee!";
        err.style.color="red";
        return;
    }
    let obj={
        name:na,
        profession:pr,
        age:ag,
    }
    arr.push(obj);
    //console.log(arr);
    a.reset();
    display(arr);
});
function display(arr){
    let err=document.querySelector(".err");
    if(arr.length==0){
        list.innerHTML="You have 0 Employees";
        list.style.color="grey"
        err.innerHTML=null;
        return;
    }else{
        list.style.color="white";
    }
    list.innerHTML=null;
    err.innerText="Success : Employee Added!";
    err.style.color="green";
    arr.forEach((el,index)=>{
        console.log(el);
        let div1=document.createElement("div");
        let d1=document.createElement("div");
        let d2=document.createElement("div");
        let d3=document.createElement("div");
        let d4=document.createElement("div");
        let p1=document.createElement("p");
        p1.innerText=index+1+".";
        d1.append(p1);
        let p2=document.createElement("p");
        p2.innerText="Name : "+el.name;
        d2.append(p2);
        let p3=document.createElement("p");
        p3.innerText="Profession : "+el.profession;
        d3.append(p3);
        let p4=document.createElement("p");
        p4.innerText="Age : " +el.age;
        d4.append(p4);
        let div2=document.createElement("div");
        let del=document.createElement("p");
        del.innerText="Delete User";
        del.addEventListener("click",function(){
            console.log("del")
            arr.splice(index,1);
            display(arr);
        });
        div1.append(d1,d2,d3,d4);
        div2.append(del);
        let div3=document.createElement("div");
        div3.append(div1,div2);
        list.append(div3);
    })
}
