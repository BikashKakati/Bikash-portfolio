/*-----
const addDegreeBtn = document.querySelector('.form-details .details-box .btn.edu');
const degreeSection = document.querySelector('.form-details .details-box .large-box.edu');

const addCompanyBtn = document.querySelector('.form-details .details-box .btn.company');
const companySection = document.querySelector('.form-details .details-box .large-box.company');

const addProjectBtn = document.querySelector('.form-details .details-box .btn.project');
const projectSection = document.querySelector('.form-details .details-box .large-box.project');



addDegreeBtn.onclick = () => {
    let str = "";
    str += `    <div class="fields">
    <div class="box">
    <label>ending month -year</label>
    <input type="text" placeholder="month year">
    </div>
    <div class="box">
    <label>degree</label>
    <input type="text" placeholder="Ex: BTech in CS">
    </div>
    <div class="box">
    <label>institute</label>
    <input type="text" placeholder="Enter your college name">
    </div>
    <div class="box">
    <label>CGPA</label>
    <input type="text" placeholder="Enter your CGPA">
    </div>
    </div>`;

    degreeSection.insertAdjacentHTML("afterbegin", str);
}

addCompanyBtn.onclick = () => {
    let str = "";
    str += `<div class="fields">
    <div class="box">
    <label>company name</label>
    <input type="text" placeholder="write here">
    </div>
    <div class="box">
    <label>year</label>
    <input type="text" placeholder="from__ to__">
    </div>
    <div class="box">
    <label>post</label>
    <input type="text" placeholder="write here">
    </div>
    </div>
    <div class="fields text-area">
    <label>write about your works</label>
    <textarea name="" cols="30" rows="10" placeholder="30 to 40 words"></textarea>
    </div>`;

    companySection.insertAdjacentHTML("afterbegin", str);
}
addProjectBtn.onclick = () => {
    let str = "";
    str += `                <div class="fields">
    <div class="box">
    <label>project name</label>
    <input type="text" placeholder="write here">
    </div>
    <div class="box">
    <label>date</label>
    <input type="text" placeholder="from__ to__">
    </div>
    <div class="box">
    <label>link</label>
    <input type="text" placeholder="paste here">
    </div>
    </div>
    <div class="fields text-area">
    <label>write about your project</label>
    <textarea name="" cols="30" rows="10" placeholder="30 to 40 words"></textarea>
    </div>`;

    projectSection.insertAdjacentHTML("afterbegin", str);
}--------------*/






// reset form section------->
const resetFormBtn = document.querySelector('#reset-form');

resetFormBtn.onclick = () =>{
   let inputs= document.querySelectorAll('input');
   for(let i = 0; i< inputs.length; i++){
       inputs[i].value = "";
   }
   let textAreas = document.querySelectorAll('textarea');
   for(let i = 0; i< textAreas.length; i++){
       textAreas[i].value = "";
   }
}


//image upload section--------->
let profileChoose = document.querySelector('#profile-F');
let profilePic = document.querySelector('#profile-T');

const loadImage = () => {
    let file = profileChoose.files[0];
    if (!file) return;
    profilePic.src = URL.createObjectURL(file);
}

profileChoose.addEventListener("change", loadImage);




// resume generating section---------->
const templateGenrateBtn = document.querySelector('#resume-gnrte');
templateGenrateBtn.onclick = () => {
    document.querySelector('#name-T').innerText = document.querySelector('#name-F').value;

    document.querySelector('#skill-T').innerText = document.querySelector('#skill-F').value;

    document.querySelector('#phone-T').innerText = document.querySelector('#phone-F').value;

    document.querySelector('#address-T').innerText = `${document.querySelector('#city-F').value}, ${document.querySelector('#state-F').value}, ${document.querySelector('#country-F').value}`;


    const degreeOne = document.querySelectorAll('.form-details .details-box .large-box.edu .fields .box .degree-one');
    let degreeTemp = "";
    for (let i = 0; i < 1; i++) {
        degreeTemp += `<li>
        <h5>${degreeOne[i].value} </h5>
        <h4>${degreeOne[i + 1].value}</h4>
        <h6>${degreeOne[i + 2].value}</h6>
        <span>CGPA</span><span>${degreeOne[i + 3].value}</span>
        </li>`

    }
    document.querySelector('#degree-T').innerHTML = degreeTemp;


    const twelveOne = document.querySelectorAll('.form-details .details-box .large-box.edu .fields .box .twelve-one');
    let twelveTemp = "";
    for (let i = 0; i < 1; i++) {
        twelveTemp += `<li>
        <h5>${twelveOne[i].value} </h5>
        <h4>${twelveOne[i + 1].value}</h4>
        <h6>${twelveOne[i + 2].value}</h6>
        <span>CGPA</span><span>${twelveOne[i + 3].value}</span>
        </li>`

    }
    document.querySelector('#degree-T').innerHTML += twelveTemp;


    document.querySelector('#gmail-T').innerText = document.querySelector('#gmail-F').value;
    let portValue = document.querySelector('#portfolio-F').value;
    document.querySelector('#portfolio-T').href = `https://${portValue}`;
    document.querySelector('#linkedin-T').href = document.querySelector('#linkedin-F').value;
    document.querySelector('#github-T').href = document.querySelector('#github-F').value;
    document.querySelector('#hobbies-T').innerText = document.querySelector('#hobbies-F').value;


    document.querySelector('#frontech-T').innerText = document.querySelector('#frontech-F').value;
    document.querySelector('#backtech-T').innerText = document.querySelector('#backtech-F').value;
    document.querySelector('#othertech-T').innerText = document.querySelector('#othertech-F').value;

    document.querySelector('#aboutu-T').innerText = document.querySelector('#aboutu-F').value;

    
    //---company section
    const companyOne = document.querySelectorAll('.form-details .details-box .large-box.company .fields .box .company-one');
    let companyOneTemp = "";
    for (let i = 0; i < 1; i++) {
        companyOneTemp += `<div class="year-company">
        <h5>${companyOne[i].value }</h5>
        <h5 id="company-Tname-one">${companyOne[i+1].value }</h5>
    </div>
    <div class="text">
        <h4>${companyOne[i+2].value }</h4>
        <p id="company-Tone-txt">here</p>
    </div>`;

    }
    document.querySelector('#company-T-one').innerHTML = companyOneTemp;
    let companyName = document.querySelector('#company-Tname-one').innerHTML;
    console.log(companyName);

    if(companyName.trim() == 0){
        document.querySelector('#company-title').innerHTML = "";//if user havenot any work then title is not show
    };
    document.querySelector('#company-Tone-txt').innerText = document.querySelector('#company-one').value;

    


    const companyTwo = document.querySelectorAll('.form-details .details-box .large-box.company .fields .box .company-two');
    let companyTwoTemp = "";
    for (let i = 0; i < 1; i++) {
        companyTwoTemp += `<div class="year-company">
        <h5>${companyTwo[i].value }</h5>
        <h5>${companyTwo[i+1].value }</h5>
    </div>
    <div class="text">
        <h4>${companyTwo[i+2].value }</h4>
        <p id="company-Ttwo-txt">here</p>
    </div>`;

    }
    document.querySelector('#company-T-two').innerHTML = companyTwoTemp;
    document.querySelector('#company-Ttwo-txt').innerText = document.querySelector('#company-two').value;




     //-----project section
    const projectOne = document.querySelectorAll('.form-details .details-box .large-box.project .fields .box .project-one');
    let projectOneTemp = "";
    for (let i = 0; i < 1; i++) {
        projectOneTemp +=
    `<div class="year-company">
        <h5>${projectOne[i].value }</h5>
        <h4 id="project-Tone-Name">${projectOne[i+1].value }</h4>
    </div>
    <div class="text">
        <a href="${projectOne[i+2].value}" id="project-Tone-link">Link</a>
        <p id="project-Tone-txt">here</p>
    </div>`;

    }
    document.querySelector('#project-T-one').innerHTML = projectOneTemp;

    let projectNameOne= document.querySelector('#project-Tone-Name').innerHTML;

    if(projectNameOne.trim() == 0){
        document.querySelector( "#project-Tone-link").innerHTML = "";
    };
    
    document.querySelector('#project-Tone-txt').innerText = document.querySelector('#project-one').value;




    const projectTwo = document.querySelectorAll('.form-details .details-box .large-box.project .fields .box .project-two');
    let projectTwoTemp = "";
    for (let i = 0; i < 1; i++) {
        projectTwoTemp +=
    `<div class="year-company">
        <h5>${projectTwo[i].value }</h5>
        <h4 id="project-Ttwo-Name">${projectTwo[i+1].value }</h4>
    </div>
    <div class="text">
        <a href="${projectTwo[i+2].value}" id="project-Ttwo-link">Link</a>
        <p id="project-Ttwo-txt">here</p>
    </div>`;

    }
    document.querySelector('#project-T-two').innerHTML = projectTwoTemp;

    let projectNameTwo = document.querySelector('#project-Ttwo-Name').innerHTML;

    if(projectNameTwo.trim() == 0){
        document.querySelector("#project-Ttwo-link").innerHTML = "";
    };

    document.querySelector('#project-Ttwo-txt').innerText = document.querySelector('#project-two').value;





    const projectThree = document.querySelectorAll('.form-details .details-box .large-box.project .fields .box .project-three');
    let projectThreeTemp = "";
    for (let i = 0; i < 1; i++) {
        projectThreeTemp +=
    `<div class="year-company">
        <h5>${projectThree[i].value }</h5>
        <h4 id="project-Tthree-name">${projectThree[i+1].value }</h4>
    </div>
    <div class="text">
        <a href="${projectThree[i+2].value }" id="project-Tthree-link">Link</a>
        <p id="project-Tthree-txt">here</p>
    </div>`;

    }
    document.querySelector('#project-T-Three').innerHTML = projectThreeTemp;

    let projectNameThree = document.querySelector('#project-Tthree-name').innerHTML;

    if(projectNameThree.trim() == 0 ){
        document.querySelector( "#project-Tthree-link").innerHTML = "";
    };

    document.querySelector('#project-Tthree-txt').innerText = document.querySelector('#project-three').value;

    

    let wholeForm = document.querySelector('.form-details');
    let wholeTemplate = document.querySelector('.template-container');
    let backArrow = document.querySelector(' .print-resume.back-arrow');
    
    wholeTemplate.classList.add('on');
    wholeForm.classList.add('off');
    
    
}



// printResume------->
let printResume = document.querySelector('.print-resume');
printResume.onclick = () =>{
    printResume.classList.add('off');
    backArrow.classList.add('off');
    window.print();
    printResume.classList.remove('off');
    backArrow.classList.remove('off');
}


// backArrow----------->
let wholeForm = document.querySelector('.form-details');
let wholeTemplate = document.querySelector('.template-container');
let backArrow = document.querySelector('.print-resume.back-arrow');

backArrow.onclick =()=>{
    wholeForm.classList.remove('off');
    wholeTemplate.classList.remove('on');
    
}
