function injectNavbar() {
    const navbarHTML = `
    <div class="container nav-container">
        <button class="mobile-menu-btn" id="mobileMenuBtn">
            <i class="fas fa-bars"></i>
        </button>
        <ul class="nav-menu" id="navMenu">
            <li><a href="index.html" class="nav-link-home"><i class="fas fa-home"></i> Home</a></li>
            
            <li class="dropdown-parent">
                <a href="javascript:void(0)"><i class="fas fa-info-circle"></i> About <i class="fas fa-chevron-down"></i></a>
                <div class="dropdown">
                    <a href="/engineering/index.php/about-faculty/history">History</a>
                    <a href="/engineering/index.php/about-faculty/strengths">Strengths</a>
                    <a href="/engineering/index.php/about-faculty/infrastructure-labs">Infrastructure & Labs</a>
                    <a href="https://www.dei.ac.in/dei/index.php?option=com_content&view=article&id=171&Itemid=258">Approvals</a>
                </div>
            </li>
            
            <li class="dropdown-parent">
                <a href="javascript:void(0)"><i class="fas fa-graduation-cap"></i> Programmes <i class="fas fa-chevron-down"></i></a>
                <div class="dropdown">
                    <a href="/engineering/index.php/programmes/under-graduate">Under-Graduate</a>
                    <a href="/engineering/index.php/programmes/ug-curriculum">UG Curriculum</a>
                    <a href="/engineering/index.php/programmes/post-graduate">Post Graduate</a>
                    <a href="/engineering/index.php/programmes/doctoral-programme">Doctoral Programme</a>
                    <a href="/engineering/index.php/programmes/panc">Programme and Course Outcomes</a>
                    <a href="/engineering/index.php/programmes/integrated-programme">Integrated Programme</a>
                    <a href="/engineering/index.php/programmes/evaluation-system">Evaluation System</a>
                    <a href="/engineering/index.php/programmes/academic-calendar">Academic Calendar</a>
                </div>
            </li>
            
            <li class="dropdown-parent">
                <a href="javascript:void(0)"><i class="fas fa-building"></i> Departments <i class="fas fa-chevron-down"></i></a>
                <div class="dropdown">
                    <a href="ee.html" class="nav-link-ee">Electrical Engg.</a>
                    <a href="https://footwearengg.dei.ac.in/">Footwear Technology</a>
                    <a href="ag.html">Agricultural Engineering</a>
                    <a href="me.html" class="nav-link-me">Mechanical Engg.</a>
                    <a href="cl.html">Civil Engineering</a>
                </div>
            </li>
            
            <li class="active dropdown-parent">
                <a href="javascript:void(0)"><i class="fas fa-users"></i> Faculty & Staff <i class="fas fa-chevron-down"></i></a>
                <div class="dropdown">
                    <a href="ag.html" class="nav-link-ag-fac">Agricultural Engg. Faculty</a>
                    <a href="ee.html" class="nav-link-ee-fac">Electrical Engg. Faculty</a>
                    <a href="me.html" class="nav-link-me-fac">Mechanical Engg. Faculty</a>
                    <a href="https://footwearengg.dei.ac.in/index.php/faculty-staff">Footwear Technology Faculty</a>
                    <a href="cl.html" class="nav-link-cl-fac">Civil Engg. Faculty</a>
                    <a href="core.html" class="nav-link-core-fac">Core Courses Faculty</a>
                    <a href="/engineering/index.php/2012-12-08-09-23-43/acheivements">Achievements</a>
                </div>
            </li>
            
            <li class="dropdown-parent">
                <a href="javascript:void(0)"><i class="fas fa-briefcase"></i> Placement <i class="fas fa-chevron-down"></i></a>
                <div class="dropdown">
                    <a href="/engineering/index.php/placement/placement-cell">Placement Cell</a>
                    <a href="https://www.dei.ac.in/dei/index.php?option=com_content&view=category&layout=blog&id=50&Itemid=287">Alumni</a>
                </div>
            </li>
            
            <li class="dropdown-parent">
                <a href="javascript:void(0)"><i class="fas fa-user-graduate"></i> Students <i class="fas fa-chevron-down"></i></a>
                <div class="dropdown">
                    <a href="/engineering/index.php/students/incentives-to-students">Incentives to Students</a>
                    <a href="/engineering/index.php/students/students-achievements">Student's Achievements</a>
                    <a href="/engineering/index.php/students/ie-student-s-chapter">IE Student's Chapter</a>
                </div>
            </li>
            
            <li class="dropdown-parent">
                <a href="javascript:void(0)"><i class="fas fa-flask"></i> Research <i class="fas fa-chevron-down"></i></a>
                <div class="dropdown">
                    <a href="/engineering/index.php/2012-12-08-09-34-06/research-areas">Research Areas</a>
                    <a href="/engineering/index.php/2012-12-08-09-34-06/r-d-projects">R & D Projects</a>
                    <a href="/engineering/index.php/2012-12-08-09-34-06/electrical-engg-publication">Electrical Engg. Publication</a>
                    <a href="/engineering/index.php/2012-12-08-09-34-06/mechanical-engg-publications">Mechanical Engg. Publications</a>
                    <a href="/engineering/index.php/2012-12-08-09-34-06/footware-tech-publications-patents">Footwear Tech. Publications</a>
                    <a href="/engineering/index.php/2012-12-08-09-34-06/footwear-tech-patents">Footwear Tech. Patents</a>
                    <a href="/engineering/index.php/2012-12-08-09-34-06/electrical-engg-collaborations">Electrical Engg. Collaborations</a>
                    <a href="/engineering/index.php/2012-12-08-09-34-06/mechanical-engg-collaborations">Mechanical Engg. Collaborations</a>
                </div>
            </li>
            
            <li><a href="/engineering/index.php/contact"><i class="fas fa-address-book"></i> Contact</a></li>
        </ul>
    `;

    const navContainer = document.getElementById('navbar-container');
    if (navContainer) {
        // Create the nav element wrapper
        const nav = document.createElement('nav');
        nav.className = 'main-navigation';
        nav.innerHTML = navbarHTML;

        // Append to container
        navContainer.appendChild(nav);

        // Initialize mobile menu
        initMobileMenu();

        // Highlight active link
        highlightActiveLink();
    }
}

function initMobileMenu() {
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const navMenu = document.getElementById('navMenu');

    if (mobileMenuBtn && navMenu) {
        mobileMenuBtn.addEventListener('click', () => {
            navMenu.classList.toggle('active');
            mobileMenuBtn.innerHTML = navMenu.classList.contains('active')
                ? '<i class="fas fa-times"></i>'
                : '<i class="fas fa-bars"></i>';
        });

        // Close mobile menu when clicking outside
        document.addEventListener('click', (event) => {
            if (!navMenu.contains(event.target) && !mobileMenuBtn.contains(event.target)) {
                navMenu.classList.remove('active');
                mobileMenuBtn.innerHTML = '<i class="fas fa-bars"></i>';
            }
        });

        // Dropdown menu enhancement for mobile
        const dropdownParents = document.querySelectorAll('.dropdown-parent');

        dropdownParents.forEach(parent => {
            if (window.innerWidth <= 992) {
                parent.addEventListener('click', (e) => {
                    if (!e.target.classList.contains('dropdown')) {
                        // Only prevent default if clicking the parent link
                        // If there is an href, we might want to let it go if it's the specific link
                        if (e.target.tagName.toLowerCase() === 'a' && e.target.getAttribute('href') !== 'javascript:void(0)') {
                            return;
                        }

                        e.preventDefault();
                        const dropdown = parent.querySelector('.dropdown');
                        // Toggle display
                        if (dropdown.style.display === 'block') {
                            dropdown.style.display = 'none';
                        } else {
                            // Close others
                            document.querySelectorAll('.dropdown').forEach(d => d.style.display = 'none');
                            dropdown.style.display = 'block';
                        }
                    }
                });
            }
        });
    }
}

function highlightActiveLink() {
    const path = window.location.pathname;
    const page = path.split("/").pop();

    let activeClass = '';
    if (page === 'ee.html') activeClass = 'nav-link-ee-fac';
    else if (page === 'me.html') activeClass = 'nav-link-me-fac';
    else if (page === 'ag.html') activeClass = 'nav-link-ag-fac';
    else if (page === 'cl.html') activeClass = 'nav-link-cl-fac';
    else if (page === 'core.html') activeClass = 'nav-link-core-fac';
    else if (page === 'index.html' || page === '') activeClass = 'nav-link-home';

    if (activeClass) {
        const link = document.querySelector(`.${activeClass}`);
        if (link) {
            link.classList.add('active'); // You might need CSS for .active on links if not inherited
            // Also make parent active
            let parent = link.closest('.dropdown-parent');
            if (parent) {
                parent.classList.add('active');

                // Add active class to main parent link
                const parentLink = parent.querySelector('a');
                if (parentLink) parentLink.classList.add('active');
            }
        }
    }
}

document.addEventListener('DOMContentLoaded', injectNavbar);
