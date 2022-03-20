const projectDataWebsite = [
     {
        id: 2,
        name: "Kujang Plant Service",
        category: "Landing Page",
        categoryData: 1,
        techUse: "Teknologi : HTML, CSS, Javascript, Bootstrap",
        img: "./img/project/website/project1.png",
        status: "On Process",
        url: "https://kpscweb.000webhostapp.com/",
    },
    {
        id: 1,
        name: "PT Pilar Sinergi Perkasa",
        category: "Landing Page",
        categoryData: 1,
        techUse: "Teknologi : HTML, CSS, JAVASCRIPT, Bootstrap",
        img: "./img/project/website/project2.png",
        status: "",
        url: "https://pspweb.netlify.app/"
    },
   
    {
        id: 3,
        name: "Kerungu Website",
        category: "Landing Page",
        categoryData: 1,
        techUse: "Teknologi : HTML, CSS, Javascript",
        img: "./img/project/website/project4.png",
        status: "On Process",
        url: "https://kerunguweb.netlify.app/"
    },
    {
        id: 4,
        name: "Fashion Ecommerce",
        category: "Ecommerce",
        categoryData: 1,
        techUse: "Teknologi : HTML, CSS, Javascript, Node JS, Express JS, Mysql",
        img: "./img/project/website/project3.png",
        status: "On Process",
        url: "",
    }
]

const projectDataUiuX = [
     {
        id: 2,
        name: "UI ",
        category: "UI Freelance App",
        categoryData: 2,
        techUse: "Tools: Figma",
        img: "./img/Project/uiux/project1.png",
        status: "On Process",
        url: "",
    },
    {
        id: 2,
        name: "UI Movie App",
        category: "UI App",
        categoryData: 2,
        techUse: "Tools: Figma",
        img: "./img/Project/uiux/project2.png",
        status: "",
        url: "",

    },
]

const projectContainer = document.querySelector(".project");
const buttonWebsite = document.getElementById("website");
const buttonUiUX = document.getElementById("uiux");


// Item Render

const item = (project) => {
     let projectCart = `
                          <div class="card">
                            <div class="card-img card-img${project.id}">
                                <img src="${project.img}" alt="${project.name}">
                            </div>
                            <div class="card-body">    
                                <div>
                                    <h4 class="card-title top2 ">${project.name}</h4>
                                    <p class="card-deks">${project.techUse}</p>
                                <div>
                                <div class="project-detail">
                                    <p class="tooltip">${project.category}</p>
                                    <a href="${project.url}" class="btn-lihat">Lihat</a>  
                                </div>    
                                
                            </div>
                        </div>
                    `;

    return projectCart;

}


// Loop Data Project 

projectDataWebsite.forEach((project) => {
    projectContainer.innerHTML += item(project);
})


buttonWebsite.addEventListener("click", () => {
    buttonUiUX.classList.remove("active");
    buttonWebsite.classList.add("active");
    projectContainer.innerHTML = ""
    projectDataWebsite.forEach((project) => {
        if (project.categoryData == 1) {
           return projectContainer.innerHTML += item(project); 
        }
    });
}); 

buttonUiUX.addEventListener("click", () => {
    buttonWebsite.classList.remove("active");
    buttonUiUX.classList.add("active");
    projectContainer.innerHTML = "";
    projectDataUiuX.forEach((project) => {
        if (project.categoryData == 2) {
           return projectContainer.innerHTML += item(project); 
        }
    });
}); 




