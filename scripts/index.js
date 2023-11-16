// top slider script
let data=[
    {
        img:"https://assets.www.happyfox.com/v2/images/things_fast.svg",
        h5:"“With 95% of the support tickets being responded to within 2 hours. Our customers are impressed!”",
        p:"James Powell \n Director & amp; IT Business Consultant - FatCat IT",
    },
    {
        img:"https://assets.www.happyfox.com/v2/images/keep_everything.svg",
        h5:"“We consider HappyFox a one-stop shop for help desk software to support our global customer network”",
        p:"Martin Hartvigsen \n Director, Global Technical Support at Jabra GN"
    },
    {
        img:"https://assets.www.happyfox.com/v2/images/stay_control.svg",
        h5:"“We LOVE HappyFox. It has changed our work lives. Support requests no longer fall through the cracks and get lost in an email or some random spreadsheet.”",
        p:"Bill Bates \n Director of Technology - Pinewood Private School"
    }
];

let btn1=document.getElementById("btn1");
let btn2=document.getElementById("btn2");
let btn3=document.getElementById("btn3");
let dataImg=document.getElementById("img");
let dataDetails=document.getElementById("details");
let imgName=document.getElementById("imgname");

let imgindex=1;
createImg(imgindex);

function createImg(imgindex){
    dataImg.setAttribute("src",data[imgindex].img);
    dataDetails.innerText=data[imgindex].h5;
    imgName.innerText=data[imgindex].p;
}

btn1.addEventListener("click",function(){
    imgindex=1;
    createImg(imgindex);
});
btn2.addEventListener("click",function(){
    imgindex=2;
    createImg(imgindex);
});
btn3.addEventListener("click",function(){
    imgindex=0;
    createImg(imgindex);
})


// bottom slider script
let sliderData=[
    {
        text:"“With HappyFox, I finally feel that I can trust the data I’m able to export from the system. We implemented the solution for email tracking but are now leveraging it to track incoming invoices aswell. If a business is facing similar problems to ours in terms of tracking incoming emails or a high number of incoming emails from the same customers or suppliers, in my opinion HappyFox really is the best solution to resolve this. With HappyFox, you really are able to track everything that is coming in, and analyze the data in real-time.”",
        name:"Pankaj Kumar",
        role:"Manager, Accounts Payable Whirlpool Global Finance Center",
        logos:"https://assets.www.happyfox.com/v2/logo/whirlpool.svg"
    },
    {
        text:"“With HappyFox we have a specialized partner, whose vast customer portfolio across multiple industries,sees and knows the next “big thing” in customer support, and integrates this into a compact and cost-effective solution, saving considerable effort, time and cost for us. In short, it allows us to focus on happy customers – the rest we leave to HappyFox.”",
        name:"Martin Hartvigsen",
        role:"Director, Global Technical Support",
        logos:"https://assets.www.happyfox.com/v2/logo/jabra.svg"
    },
    {
        text:"“So far we have Facilities and Security using this system. There is nothing I do not use in HappyFox and our team likes the app, the reports, the smart rules, and the tags. We enter tickets and complete them daily and HappyFox has improved our average number of tickets completed per month. My customers (Health Center Staff) have all responded very positively to the change; they love that they can see all the tickets for their site and comment on whether they’re still needed.”",
        name:"Karin Stopforth",
        role:"Facilities Administrator",
        logos:"https://assets.www.happyfox.com/v2/logo/planned-parenthood.png"
    }
];

let rightbtn=document.getElementById("rightbtn");
let leftbtn=document.getElementById("leftbtn");
let clienttext=document.getElementById("text");
let clientname=document.getElementById("name");
let clientrole=document.getElementById("role");
let clientlogo=document.getElementById("logos");


let divindex=0;
creatediv(divindex);

function creatediv(divindex){
    clienttext.innerText=sliderData[divindex].text;
    clientname.innerText=sliderData[divindex].name;
    clientrole.innerText=sliderData[divindex].role;
    clientlogo.setAttribute("src",sliderData[divindex].logos);
}


// side navigation drawer
rightbtn.addEventListener("click",function(){
    divindex++;
    if(divindex===sliderData.length){
        divindex=0;
    }
    creatediv(divindex);
});
leftbtn.addEventListener("click",function(){
    divindex--;
    if(divindex<0){
        divindex=sliderData.length-1;
    }
    creatediv(divindex);
});


function openNav() {
    document.getElementById("navlinks").style.width = "40%";
    document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
}
  /* Set the width of the side navigation to 0 */
function closeNav() {
    document.getElementById("navlinks").style.width = "0";
    document.body.style.backgroundColor = "white";
}


function openNavx() {
    document.getElementById("stickylinks").style.width = "40%";
    document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
}
  /* Set the width of the side navigation to 0 */
function closeNavx() {
    document.getElementById("stickylinks").style.width = "0";
    document.body.style.backgroundColor = "white";
}


let data1=[
    {
        a1:"",
        img1:"https://cdn-icons.flaticon.com/png/128/1184/premium/1184787.png?token=exp=1658487374~hmac=6325a8ae2b4fca7d61aadeef1b52ba0d",
        name1:"Help Desk Tour\n\n",
        details1:"Provide Faster and Better Service for your Customer"
    },
    {
        a1:"",
        img1:"https://cdn-icons-png.flaticon.com/128/2329/2329087.png",
        name1:"Get a Demo\n\n",
        details1:"See HappyFox Help Desk in Action"
    }
];
let data2=[
    {
        a2:"",
        img2:"https://cdn-icons-png.flaticon.com/128/8084/8084638.png",
        name2:"Ticketing System\n\n",
        details2:"Deliver exceptional customer service with HappyFox."
    },
    {
        a2:"",
        img2:"https://cdn-icons-png.flaticon.com/128/8085/8085280.png",
        name2:"Knowledge Base\n\n",
        details2:"Promote self-service; build help and FAQ pages."
    },
    {
        a2:"",
        img2:"https://cdn-icons-png.flaticon.com/128/1556/1556324.png",
        name2:"Connected Actions\n\n",
        details2:"Respont faster using temlated response and actions."
    },
    {
        a2:"",
        img2:"https://cdn-icons-png.flaticon.com/128/3079/3079165.png",
        name2:"Automation\n\n",
        details2:"Reduce the time spent on repetitive tasks."
    },
    {
        a2:"",
        img2:"https://cdn-icons-png.flaticon.com/128/4149/4149627.png",
        name2:"Task Management\n\n",
        details2:"Create and manage all the tasks involved in resolving a ticket."
    },
    {
        a2:"",
        img2:"https://cdn-icons-png.flaticon.com/128/4149/4149668.png",
        name2:"satisfaction Survey\n\n",
        details2:"Get feedback and improve Customer Experience."
    },
    {
        a2:"",
        img2:"https://cdn-icons-png.flaticon.com/128/4149/4149688.png",
        name2:"Help Desk Reports\n\n",
        details2:"Monitor,Analyze and improve your Customer Support."
    },
];
let data3=[
    {
        a3:"",
        img3:"https://assets.www.happyfox.com/v2/images/site-nav/hf-int-icon.svg",
        text:"HappyFox Chat"
    },
    {
        a3:"",
        img3:"https://assets.www.happyfox.com/v2/images/site-nav/salesforce-int-icon.svg",
        text:"Salesforce"
    },
    {
        a3:"",
        img3:"https://assets.www.happyfox.com/v2/images/site-nav/aircall-int-icon.svg",
        text:"Aircall"
    },
    {
        a3:"",
        img3:"https://assets.www.happyfox.com/logo/ms-teams-logo.svg",
        text:"Microsoft Teams"
    },
    {
        a3:"",
        img3:"https://assets.www.happyfox.com/v2/images/site-nav/slack-int-icon.svg",
        text:"Slack"
    },
    {
        a3:"",
        img3:"https://assets.www.happyfox.com/v2/images/site-nav/fb-int-icon.svg",
        text:"Facebook"
    },
    {
        a3:"",
        img3:"https://assets.www.happyfox.com/v2/images/site-nav/shopify-int-icon.svg",
        text:"Shopify"
    }
]

let overview=document.getElementById("overview");
let features=document.getElementById("features");
let integrations=document.getElementById("integrations");

data1.forEach(function(ele){
    let oLink1=document.createElement("a");
    oLink1.setAttribute("href",ele.a1);

    let overviewImg=document.createElement("img");
    overviewImg.setAttribute("src",ele.img1);
    let overviewName=document.createElement("span");
    overviewName.innerText=ele.name1;
    let overviewDet=document.createElement("span");
    overviewDet.innerText=ele.details1;

    overviewName.append(overviewDet);
    oLink1.append(overviewImg,overviewName);
    overview.append(oLink1);
});

data2.forEach(function(ele){
    let oLink2=document.createElement("a");
    oLink2.setAttribute("href",ele.a2);
    
    let overviewImg=document.createElement("img");
    overviewImg.setAttribute("src",ele.img2);
    let overviewName=document.createElement("span");
    overviewName.innerText=ele.name2;
    let overviewDet=document.createElement("span");
    overviewDet.innerText=ele.details2;

    overviewName.append(overviewDet);
    oLink2.append(overviewImg,overviewName);
    features.append(oLink2);
});

data3.forEach(function(ele){
    let oLink3=document.createElement("a");
    oLink3.setAttribute("href",ele.a3);
    
    let overviewImg=document.createElement("img");
    overviewImg.setAttribute("src",ele.img3);
    let overviewName=document.createElement("span");
    overviewName.innerText=ele.text;

    oLink3.append(overviewImg,overviewName);
    integrations.append(oLink3);
})


let form=document.getElementById("demoform");
form.addEventListener("submit",createData);


function createData(e){
    e.preventDefault();

    let valObj={
        name:document.getElementById("name").value,
        email:document.getElementById("email").value,
        phone:document.getElementById("phone").value,
        cname:document.getElementById("cname").value,
        csize:document.getElementById("csize").value,
        industry:document.getElementById("industry").value,
        agentCount:document.getElementById("agentcount").value,
        region:document.getElementById("region").value
    }
    let valArr=[];
    valArr.push(valObj);
    localStorage.setItem("registration",JSON.stringify(valArr));
}
