window.addEventListener("DOMContentLoaded", () => {
    // Welcome screen
    const welcome = document.getElementById("welcomeScreen");
    const text = document.getElementById("welcomeText");
    const sub = document.getElementById("welcomeSub");

    text.classList.add("show");
    sub.classList.add("show");

    welcome.addEventListener("click", hideWelcome);
    setTimeout(hideWelcome, 3000);
    function hideWelcome() {
        welcome.style.opacity = 0;
        welcome.style.pointerEvents = "none";
        setTimeout(() => { welcome.style.display = "none"; }, 500);
    }

    // Services
    const services = [
        { title: "Building Identities and Brands", modal: "serviceModal1" },
        { title: "Designing Social Media Ads", modal: "serviceModal2" },
        { title: "Designing Print Materials and Packaging", modal: "serviceModal3" },
        { title: "Creating Marketing Campaigns", modal: "serviceModal4" },
        { title: "Creative Content Creation", modal: "serviceModal5" },
        { title: "Motion Graphics and Editing Design", modal: "serviceModal6" },
        { title: "Audio and Visual Production", modal: "serviceModal7" },
        { title: "Website Design and Programming", modal: "serviceModal8" },
        { title: "Mobile Applications Design and Programming", modal: "serviceModal9" },
    ];

    const servicesList = document.getElementById("servicesList");
    services.forEach(service => {
        const col = document.createElement("div");
        col.className = "col-12 col-sm-6 col-md-4 col-lg-4 text-center";

        const card = document.createElement("div");
        card.className = "card h-100 text-center p-3 bg-pink text-white shadow-sm service-card";

        const title = document.createElement("h5");
        title.className = "fw-bold service-title";
        title.textContent = service.title;

        const btn = document.createElement("button");
        btn.type = "button";
        btn.className = "btn btn-light mt-2 btn-modal";
        btn.setAttribute("data-bs-toggle", "modal");
        btn.setAttribute("data-bs-target", `#${service.modal}`);
        btn.textContent = "Registration form";

        card.appendChild(title);
        card.appendChild(btn);
        col.appendChild(card);
        servicesList.appendChild(col);
    });

    // Projects
    const projectImages = [
        "img/proj1.png", "img/proj2.png", "img/proj3.png", "img/proj4.png",
        "img/proj5.png", "img/proj6.png", "img/proj7.png", "img/proj8.png",
        "img/proj9.png", "img/proj10.png", "img/proj11.png", "img/proj12.png",
        "img/proj13.png", "img/proj14.png", "img/proj15.png", "img/proj16.png"
    ];

    const projectsSection = document.getElementById("projects");
    const projectsList = projectsSection.querySelector("#projectsList");
    const extraDiv = projectsSection.querySelector(".extra-projects");

    projectImages.forEach((src, index) => {
        const card = document.createElement("div");
        card.className = "project-card mb-4 position-relative";
        const img = document.createElement("img");
        img.src = src;
        img.className = "w-100 d-block";
        card.appendChild(img);

        if (index < 6) projectsList.appendChild(card);
        else extraDiv.appendChild(card);
    });

    projectsSection.querySelector('.btn[data-showmore]').addEventListener('click', function () {
        extraDiv.classList.toggle('d-none');
        this.textContent = extraDiv.classList.contains('d-none') ? 'Show More' : 'Show Less';
    });

    // Social Media Projects
    const socialImages = [
        "img/social1.png", "img/social2.png", "img/social3.png", "img/social4.png",
        "img/social5.png", "img/social6.png", "img/social7.png", "img/social8.png",
        "img/social9.png", "img/social10.png", "img/social11.png", "img/social12.png"
    ];

    const socialSection = document.getElementById("social-media-projects");
    const socialList = socialSection.querySelector("#socialProjectsList");
    const socialExtra = socialSection.querySelector(".extra-projects");

    socialImages.forEach((src, index) => {
        const card = document.createElement("div");
        card.className = "project-card mb-4 position-relative";
        const img = document.createElement("img");
        img.src = src;
        img.className = "w-100 d-block";
        card.appendChild(img);

        if (index < 6) socialList.appendChild(card);
        else socialExtra.appendChild(card);
    });

    socialSection.querySelector('.btn[data-showmore]').addEventListener('click', function () {
        socialExtra.classList.toggle('d-none');
        this.textContent = socialExtra.classList.contains('d-none') ? 'Show More' : 'Show Less';
    });
});
