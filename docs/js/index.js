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

    // Projects (تحسين الوصولية)
    const projectImages = [
        "img/proj1.webp", "img/proj2.webp", "img/proj3.webp", "img/proj4.webp",
        "img/proj5.webp", "img/proj6.webp", "img/proj7.webp", "img/proj8.webp",
        "img/proj9.webp", "img/proj10.webp", "img/proj11.webp", "img/proj12.webp",
        "img/proj13.webp", "img/proj14.webp", "img/proj15.webp", "img/proj16.webp"
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
        img.alt = `Project image ${index + 1}`;
        img.width = 400;
        img.height = 300;
        img.loading = "lazy";

        card.appendChild(img);

        if (index < 6) projectsList.appendChild(card);
        else extraDiv.appendChild(card);
    });

    projectsSection.querySelector('.btn[data-showmore]').addEventListener('click', function () {
        extraDiv.classList.toggle('d-none');
        this.textContent = extraDiv.classList.contains('d-none') ? 'Show More' : 'Show Less';
    });

    // Social Media Projects (تحسين الوصولية)
    const socialImages = [
        "img/social1.webp", "img/social2.webp", "img/social3.webp", "img/social4.webp",
        "img/social5.webp", "img/social6.webp", "img/social7.webp", "img/social8.webp",
        "img/social9.webp", "img/social10.webp", "img/social11.webp", "img/social12.webp"
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
        img.alt = `Social media project ${index + 1}`;
        img.width = 400;
        img.height = 300;
        img.loading = "lazy";

        card.appendChild(img);

        if (index < 6) socialList.appendChild(card);
        else socialExtra.appendChild(card);
    });

    socialSection.querySelector('.btn[data-showmore]').addEventListener('click', function () {
        socialExtra.classList.toggle('d-none');
        this.textContent = socialExtra.classList.contains('d-none') ? 'Show More' : 'Show Less';
    });
});
