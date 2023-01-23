
    
    // console.log(now.toUTCString());


    let name1=document.getElementById('name');
    let surname1=document.getElementById('surname');
    let country1=document.getElementById('country');
    let score1=document.getElementById('score');

    let count=0;

    function addList(){
        var now = new Date();
        let outputDiv= document.getElementById('outputDiv');
       
        let error =document.getElementById('error');
        if(name1.value =="" || surname1.value =="" || country1.value =="" || score1.value==""){
            error.innerHTML=`
            <h4 class="h1error">All field are required</h4>
            `
           
        }

        else{
            error.innerHTML="";
            outputDiv.innerHTML += `
            <div class="leaderboard">
            <div class="p">
            <p id="namerow">${name1.value} ${surname1.value}<span>${now}</span></p>
            <p id="countryrow">${country1.value}</P>
            <p id="scorerow${count}">${score1.value}</P>
            </div>
            
            <button onclick="delectrow(this)"><img src="de1.png" alt="" width="25px"></button>
            <button onclick="plusfive(${count})">+5</button>
            <button onclick="minusfive(${count})">-5</button>
            
            </div>
            `
            name1.value="";
            surname1.value="";
            country1.value="";
            score1.value="";
            count++;
            //<div class"btn"></div>
        // console.log(count);
        }


    }




    function delectrow(ref){
        ref.parentElement.remove();
    }
    function plusfive(ref){
        // console.log('hello');
        // console.log(ref);
        let score=document.getElementById(`scorerow${ref}`);
        console.log(score);
        score.innerText= +score.innerText+5;
    }
    function minusfive(ref){
        // console.log('hello');
        // console.log(ref);
        let score=document.getElementById(`scorerow${ref}`);
        console.log(score);
        score.innerText= +score.innerText-5;
    }