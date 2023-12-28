const url="https://cat-fact.herokuapp.com/facts";
const factpara=document.querySelector("#facts");
const btn=document.querySelector("#factbtn");
// let promise=fetch(url);
// console.log(promise);

// const getfacts=async()=>{
//     console.log("getting data...");
//     let response= await fetch(url);

//     console.log(response);//json format
//     let data= await response.json();
//     // console.log(data[0].text);
//     factpara.innerText=data[2].text;
// }

//  by using promise chaining
function getfacts(){
    fetch(url)
    .then((response)=>{
    return response.json();})
.then((data)=>{
    console.log(data);
    factpara.innerText=data[2].text;
});

}
    btn.addEventListener("click",getfacts);

   
