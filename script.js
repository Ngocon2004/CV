const navbar = document.querySelector(".navbar");
const menuToggle = document.querySelector(".menu-toggle");
const menu = document.querySelector(".menu");
const scrollButton = document.querySelector(".scroll-up-btn");
const profileCard = document.querySelector(".profile-card");
const themeToggle = document.querySelector(".theme-toggle");
const languageToggle = document.querySelector(".language-toggle");
const viewCounter = document.querySelector(".view-counter");
const viewCounterNumber = document.querySelector("[data-view-count]");

const VIEW_COUNT_KEY = "portfolioPageViews";
const VIEW_SESSION_KEY = "portfolioPageViewRegistered";

const translations = {
    vi: {
        pageTitle: "Ha Hải | Full-stack Developer CV",
        metaDescription: "CV online của Ha Hải - Full-stack Developer, Software Engineer Intern với các dự án Next.js, Node.js, Python, OCR và Machine Learning.",
        scrollTopAria: "Lên đầu trang",
        mainNavAria: "Điều hướng chính",
        controlsAria: "Tùy chọn giao diện",
        themeAria: "Đổi giao diện sáng tối",
        languageAria: "Đổi ngôn ngữ",
        viewsAria: "Số lượt xem trang",
        viewsLabel: "lượt xem",
        menuAria: "Mở menu",
        themeToggle: "Tối",
        themeLight: "Sáng",
        themeDark: "Tối",
        languageToggle: "EN",
        navAbout: "Giới thiệu",
        navSkills: "Kỹ năng",
        navProjects: "Dự án",
        navDownload: "Tải CV",
        navContact: "Liên hệ",
        heroEyebrow: "Full-stack Developer / Software Engineer Intern",
        heroText: "Mục tiêu của tôi là trở thành developer chuyên nghiệp, có khả năng xây dựng sản phẩm thực tế, viết mã rõ ràng, làm việc hiệu quả trong nhóm và liên tục học hỏi công nghệ mới.",
        downloadIt: "Tải IT CV",
        downloadReception: "Tải Reception CV",
        emailMe: "Gửi email",
        statsAria: "Thông tin nhanh",
        statUniversityValue: "Đại học Đà Lạt",
        statUniversity: "Trường đại học",
        statMajorValue: "CNTT",
        statMajor: "Ngành học",
        profileAria: "Thẻ hồ sơ 3D",
        profileStatus: "Sinh viên Trường Đại học Đà Lạt",
        aboutEyebrow: "Profile",
        aboutTitle: "Giới thiệu",
        aboutHeading: "Sinh viên Công nghệ thông tin, định hướng full-stack",
        aboutText1: "Tôi là Dơng Gur Ha Hải, đang học ngành Công nghệ thông tin tại Trường Đại học Đà Lạt. Tôi quan tâm đến phát triển web, xây dựng API, cơ sở dữ liệu và ứng dụng AI vào công việc học tập, phát triển phần mềm.",
        aboutText2: "Mục tiêu của tôi là trở thành developer chuyên nghiệp, có tư duy sản phẩm, nền tảng kỹ thuật tốt và khả năng phối hợp hiệu quả trong môi trường làm việc thực tế.",
        personalTitle: "Thông tin cá nhân",
        personalNameLabel: "Họ tên",
        personalBirthLabel: "Năm sinh",
        personalAddressLabel: "Địa chỉ",
        personalAddressValue: "Đức Trọng - Lâm Đồng",
        personalCertificatesLabel: "Chứng chỉ",
        personalCertificatesValue: "Bổ sung sau",
        focusLabel: "Trọng tâm",
        focusValue: "Full-stack Web Development",
        skillsEyebrow: "04 - Kỹ năng",
        skillsTitle: "Công nghệ",
        skillsSubtitle: "Frontend, backend đến AI/ML, phân tích và thiết kế",
        skillFrontend: "Next.js, React, TypeScript, Tailwind CSS, MUI, responsive UI, routing, form validation và content rendering.",
        skillBackendTitle: "Backend & Database",
        skillBackend: "Node.js, Express, FastAPI, REST APIs, JWT, Supabase Auth, PostgreSQL, API documentation và Docker deployment.",
        skillAiTitle: "AI & Data",
        skillAi: "Python, OCR workflow, OpenCV, YOLO, PaddleOCR, VietOCR, Pandas, Jupyter Notebook và ensemble learning models.",
        skillPythonDesc: "Phân tích dữ liệu, tự động hóa",
        skillGitDesc: "Quản lý version, CI/CD",
        skillAiWorkTitle: "Áp dụng AI vào công việc",
        skillAiWorkDesc: "Prompting, tự động hóa, hỗ trợ viết code",
        skillProductivityTitle: "AI Productivity",
        skillProductivityDesc: "Nghiên cứu, viết tài liệu, debug",
        projectsEyebrow: "Selected Work",
        projectsTitle: "Dự án GitHub nổi bật",
        hotelType: "Full-stack production app",
        hotelDesc: "Hệ thống quản lý đặt phòng khách sạn với tìm kiếm phòng, đặt phòng, xác thực, admin dashboard, API docs và production deployment.",
        scannerType: "OCR / AI application",
        scannerDesc: "Ứng dụng trích xuất dữ liệu từ ảnh CCCD Việt Nam, trả về confidence theo từng trường, cho phép chỉnh sửa và xuất Excel.",
        petshopType: "E-commerce API",
        petshopDesc: "RESTful API cho pet shop gồm auth, sản phẩm, danh mục, giỏ hàng, đơn hàng, review, admin features và Swagger docs.",
        housingType: "Machine learning research",
        housingDesc: "Dự báo giá bất động sản từ dữ liệu Việt Nam và Ames Housing Kaggle, có web scraping, feature engineering và ensemble models.",
        blogType: "Content app",
        blogDesc: "Ứng dụng blog dùng Next.js và Supabase, tập trung vào nền tảng content rendering, cấu trúc frontend hiện đại và TypeScript.",
        downloadTitle: "Tải đúng bản CV",
        downloadText: "Chọn bản CV phù hợp với vị trí ứng tuyển. IT CV dành cho vai trò công nghệ thông tin, Reception CV dành cho vị trí Night Shift Reception.",
        contactTitle: "Liên hệ",
        contactHeading: "Sẵn sàng trao đổi về internship, dự án IT và cơ hội phù hợp.",
        contactText: "Email là kênh liên hệ chính. Bạn cũng có thể xem thêm mã nguồn và hoạt động cá nhân qua GitHub, Facebook.",
        footer: "&copy; 2026 Ha Hải. Full-stack Developer CV."
    },
    en: {
        pageTitle: "Ha Hai | Full-stack Developer CV",
        metaDescription: "Online CV for Ha Hai - Full-stack Developer and Software Engineer Intern with Next.js, Node.js, Python, OCR and Machine Learning projects.",
        scrollTopAria: "Back to top",
        mainNavAria: "Main navigation",
        controlsAria: "Display options",
        themeAria: "Toggle light and dark theme",
        languageAria: "Switch language",
        viewsAria: "Page view count",
        viewsLabel: "views",
        menuAria: "Open menu",
        themeToggle: "Dark",
        themeLight: "Light",
        themeDark: "Dark",
        languageToggle: "VI",
        navAbout: "About",
        navSkills: "Skills",
        navProjects: "Projects",
        navDownload: "CV",
        navContact: "Contact",
        heroEyebrow: "Full-stack Developer / Software Engineer Intern",
        heroText: "My goal is to become a professional developer who can build practical products, write clear code, collaborate effectively and keep learning new technologies.",
        downloadIt: "Download IT CV",
        downloadReception: "Download Reception CV",
        emailMe: "Email me",
        statsAria: "Quick facts",
        statUniversityValue: "Dalat University",
        statUniversity: "University",
        statMajorValue: "IT",
        statMajor: "Major",
        profileAria: "3D profile card",
        profileStatus: "Student at Dalat University",
        aboutEyebrow: "Profile",
        aboutTitle: "About",
        aboutHeading: "Information Technology student with a full-stack direction",
        aboutText1: "I am Dơng Gur Ha Hải, an Information Technology student at Dalat University. I am interested in web development, API design, databases and applying AI to study and software development work.",
        aboutText2: "My goal is to become a professional developer with product thinking, a solid technical foundation and the ability to collaborate effectively in real working environments.",
        personalTitle: "Personal Information",
        personalNameLabel: "Full name",
        personalBirthLabel: "Date of birth",
        personalAddressLabel: "Address",
        personalAddressValue: "Duc Trong - Lam Dong",
        personalCertificatesLabel: "Certificates",
        personalCertificatesValue: "To be added later",
        focusLabel: "Main focus",
        focusValue: "Full-stack Web Development",
        skillsEyebrow: "04 - Skills",
        skillsTitle: "Technology",
        skillsSubtitle: "Frontend, backend to AI/ML, analysis and design",
        skillFrontend: "Next.js, React, TypeScript, Tailwind CSS, MUI, responsive UI, routing, form validation and content rendering.",
        skillBackendTitle: "Backend & Database",
        skillBackend: "Node.js, Express, FastAPI, REST APIs, JWT, Supabase Auth, PostgreSQL, API documentation and Docker deployment.",
        skillAiTitle: "AI & Data",
        skillAi: "Python, OCR workflows, OpenCV, YOLO, PaddleOCR, VietOCR, Pandas, Jupyter Notebook and ensemble learning models.",
        skillPythonDesc: "Data analysis, automation",
        skillGitDesc: "Version control, CI/CD",
        skillAiWorkTitle: "Applying AI at Work",
        skillAiWorkDesc: "Prompting, automation, code assistance",
        skillProductivityTitle: "AI Productivity",
        skillProductivityDesc: "Research, documentation, debugging",
        projectsEyebrow: "Selected Work",
        projectsTitle: "Featured GitHub Projects",
        hotelType: "Full-stack production app",
        hotelDesc: "Hotel booking management system with room search, booking flow, authentication, admin dashboard, API docs and production deployment.",
        scannerType: "OCR / AI application",
        scannerDesc: "Application that extracts structured data from Vietnamese CCCD images, returns per-field confidence, supports review/editing and exports Excel files.",
        petshopType: "E-commerce API",
        petshopDesc: "RESTful API for a pet shop with auth, products, categories, cart, orders, reviews, admin features and Swagger documentation.",
        housingType: "Machine learning research",
        housingDesc: "Housing price prediction project using Vietnam real-estate data and the Ames Housing Kaggle dataset, with web scraping, feature engineering and ensemble models.",
        blogType: "Content app",
        blogDesc: "Blog application using Next.js and Supabase, focused on content rendering foundations, modern frontend structure and TypeScript.",
        downloadTitle: "Download the Right CV",
        downloadText: "Choose the CV that matches the role. The IT CV is for technology roles, while the Reception CV is for Night Shift Reception positions.",
        contactTitle: "Contact",
        contactHeading: "Available to discuss internships, IT projects and relevant opportunities.",
        contactText: "Email is the main contact channel. You can also review my source code and personal activity through GitHub and Facebook.",
        footer: "&copy; 2026 Ha Hai. Full-stack Developer CV."
    }
};

const getStoredTheme = () => localStorage.getItem("theme") || "dark";
const getStoredLanguage = () => localStorage.getItem("language") || "vi";

const getStoredViewCount = () => {
    const count = Number.parseInt(localStorage.getItem(VIEW_COUNT_KEY) || "0", 10);
    return Number.isFinite(count) && count > 0 ? count : 0;
};

const formatViewCount = (count) => {
    const locale = document.documentElement.lang === "en" ? "en-US" : "vi-VN";
    return count.toLocaleString(locale);
};

const updateViewCounter = (count = getStoredViewCount()) => {
    if (!viewCounterNumber) {
        return;
    }

    viewCounterNumber.textContent = formatViewCount(count);
};

const registerPageView = () => {
    if (!viewCounter) {
        return;
    }

    let count = getStoredViewCount();
    if (sessionStorage.getItem(VIEW_SESSION_KEY) !== "true") {
        count += 1;
        localStorage.setItem(VIEW_COUNT_KEY, String(count));
        sessionStorage.setItem(VIEW_SESSION_KEY, "true");
    }

    updateViewCounter(count);
};

const updateThemeToggleLabel = () => {
    const language = getStoredLanguage();
    const dictionary = translations[language] || translations.vi;
    const label = document.body.classList.contains("light-theme") ? dictionary.themeLight : dictionary.themeDark;
    const labelElement = themeToggle?.querySelector("[data-i18n='themeToggle']");
    if (labelElement) {
        labelElement.textContent = label;
    }
};

const applyTheme = (theme) => {
    const isLight = theme === "light";
    document.body.classList.toggle("light-theme", isLight);
    themeToggle?.querySelector("i")?.classList.toggle("fa-sun", isLight);
    themeToggle?.querySelector("i")?.classList.toggle("fa-moon", !isLight);
    localStorage.setItem("theme", theme);
    updateThemeToggleLabel();
};

const applyLanguage = (language) => {
    const dictionary = translations[language] || translations.vi;
    document.documentElement.lang = language === "en" ? "en" : "vi";
    document.title = dictionary.pageTitle;

    const description = document.querySelector('meta[name="description"]');
    const ogTitle = document.querySelector('meta[property="og:title"]');
    const ogDescription = document.querySelector('meta[property="og:description"]');
    description?.setAttribute("content", dictionary.metaDescription);
    ogTitle?.setAttribute("content", dictionary.pageTitle);
    ogDescription?.setAttribute("content", dictionary.metaDescription);

    document.querySelectorAll("[data-i18n]").forEach((element) => {
        const key = element.dataset.i18n;
        if (key && dictionary[key]) {
            element.innerHTML = dictionary[key];
        }
    });

    document.querySelectorAll("[data-i18n-aria]").forEach((element) => {
        const key = element.dataset.i18nAria;
        if (key && dictionary[key]) {
            element.setAttribute("aria-label", dictionary[key]);
        }
    });

    localStorage.setItem("language", language);
    updateThemeToggleLabel();
    updateViewCounter();
};

applyTheme(getStoredTheme());
applyLanguage(getStoredLanguage());
registerPageView();

const setScrolledState = () => {
    const isScrolled = window.scrollY > 24;
    navbar?.classList.toggle("scrolled", isScrolled);
    scrollButton?.classList.toggle("show", window.scrollY > 520);
};

window.addEventListener("scroll", setScrolledState, { passive: true });
setScrolledState();

menuToggle?.addEventListener("click", () => {
    const isOpen = menu?.classList.toggle("active") ?? false;
    document.body.classList.toggle("menu-open", isOpen);
    menuToggle.setAttribute("aria-expanded", String(isOpen));
});

themeToggle?.addEventListener("click", () => {
    const nextTheme = document.body.classList.contains("light-theme") ? "dark" : "light";
    applyTheme(nextTheme);
});

languageToggle?.addEventListener("click", () => {
    const nextLanguage = (localStorage.getItem("language") || "vi") === "vi" ? "en" : "vi";
    applyLanguage(nextLanguage);
});

menu?.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
        menu.classList.remove("active");
        document.body.classList.remove("menu-open");
        menuToggle?.setAttribute("aria-expanded", "false");
    });
});

scrollButton?.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
});

if (profileCard) {
    profileCard.addEventListener("pointermove", (event) => {
        const rect = profileCard.getBoundingClientRect();
        const x = (event.clientX - rect.left) / rect.width - 0.5;
        const y = (event.clientY - rect.top) / rect.height - 0.5;
        profileCard.style.transform = `rotateY(${x * 16}deg) rotateX(${-y * 16}deg) translateZ(8px)`;
    });

    profileCard.addEventListener("pointerleave", () => {
        profileCard.style.transform = "rotateY(0deg) rotateX(0deg) translateZ(0)";
    });
}

const initScene = () => {
    const canvas = document.getElementById("space-scene");

    if (!canvas || typeof THREE === "undefined") {
        return;
    }

    const scene = new THREE.Scene();
    const renderer = new THREE.WebGLRenderer({
        canvas,
        antialias: true,
        alpha: true
    });

    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(window.innerWidth, window.innerHeight);

    const camera = new THREE.PerspectiveCamera(48, window.innerWidth / window.innerHeight, 0.1, 100);
    camera.position.set(0, 0, 9);

    const group = new THREE.Group();
    scene.add(group);

    const geometry = new THREE.IcosahedronGeometry(2.4, 1);
    const material = new THREE.MeshStandardMaterial({
        color: 0x38d5ff,
        metalness: 0.38,
        roughness: 0.42,
        transparent: true,
        opacity: 0.78,
        wireframe: true
    });
    const core = new THREE.Mesh(geometry, material);
    group.add(core);

    const innerGeometry = new THREE.TorusKnotGeometry(0.9, 0.18, 130, 14);
    const innerMaterial = new THREE.MeshStandardMaterial({
        color: 0x6ee7b7,
        metalness: 0.6,
        roughness: 0.28
    });
    const knot = new THREE.Mesh(innerGeometry, innerMaterial);
    group.add(knot);

    const ringMaterial = new THREE.MeshBasicMaterial({
        color: 0xfb7185,
        transparent: true,
        opacity: 0.54
    });

    [0, 1, 2].forEach((index) => {
        const ring = new THREE.Mesh(new THREE.TorusGeometry(3.15 + index * 0.36, 0.012, 8, 160), ringMaterial);
        ring.rotation.x = 1.15 + index * 0.36;
        ring.rotation.y = 0.35 + index * 0.44;
        group.add(ring);
    });

    const particlesGeometry = new THREE.BufferGeometry();
    const positions = [];
    for (let index = 0; index < 650; index += 1) {
        positions.push(
            (Math.random() - 0.5) * 28,
            (Math.random() - 0.5) * 18,
            (Math.random() - 0.5) * 18
        );
    }
    particlesGeometry.setAttribute("position", new THREE.Float32BufferAttribute(positions, 3));
    const particles = new THREE.Points(
        particlesGeometry,
        new THREE.PointsMaterial({
            color: 0xffffff,
            size: 0.026,
            transparent: true,
            opacity: 0.62
        })
    );
    scene.add(particles);

    scene.add(new THREE.AmbientLight(0xffffff, 0.62));

    const cyanLight = new THREE.PointLight(0x38d5ff, 1.45, 18);
    cyanLight.position.set(-4, 3, 6);
    scene.add(cyanLight);

    const roseLight = new THREE.PointLight(0xfb7185, 0.9, 18);
    roseLight.position.set(5, -3, 5);
    scene.add(roseLight);

    let pointerX = 0;
    let pointerY = 0;
    let animationFrame = 0;
    let isAnimating = false;

    window.addEventListener("pointermove", (event) => {
        pointerX = (event.clientX / window.innerWidth - 0.5) * 0.7;
        pointerY = (event.clientY / window.innerHeight - 0.5) * 0.7;
    }, { passive: true });

    const resize = () => {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener("resize", resize);

    const animate = () => {
        isAnimating = true;
        animationFrame = requestAnimationFrame(animate);

        const time = performance.now() * 0.001;
        group.position.x = 3.2 + pointerX;
        group.position.y = -0.35 - pointerY;
        group.rotation.x = time * 0.18 + pointerY * 0.4;
        group.rotation.y = time * 0.24 + pointerX * 0.6;
        knot.rotation.x = -time * 0.46;
        knot.rotation.y = time * 0.38;
        particles.rotation.y = time * 0.025;

        renderer.render(scene, camera);
    };

    document.addEventListener("visibilitychange", () => {
        if (document.hidden) {
            cancelAnimationFrame(animationFrame);
            isAnimating = false;
            return;
        }

        if (!isAnimating) {
            animate();
        }
    });

    animate();
};

initScene();
