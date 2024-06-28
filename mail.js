document.getElementById('cvForm').addEventListener('submit', function(event) {
    event.preventDefault();
    generateCV();
});

function addSkill() {
    const skill = document.getElementById('skillsField').value;
    const percent = document.querySelector('.skillPercent').value;
    if (skill && percent) {
        const skillsList = document.getElementById('skillsList');
        const skillsListRight = document.getElementById('skillsListRight');
        
        const li = document.createElement('li');
        li.textContent = `${skill} - ${percent}%`;
        skillsList.appendChild(li);
        
        const liRight = document.createElement('li');
        liRight.textContent = `${skill} - ${percent}%`;
        skillsListRight.appendChild(liRight);
    }
}

function addSoftSkill() {
    const softSkill = document.getElementById('softskillsField').value;
    const percent = document.querySelector('.softskillPercent').value;
    if (softSkill && percent) {
        const softskillsList = document.getElementById('softskillsList');
        const softskillsListRight = document.getElementById('softskillsListRight');
        
        const li = document.createElement('li');
        li.textContent = `${softSkill} - ${percent}%`;
        softskillsList.appendChild(li);
        
        const liRight = document.createElement('li');
        liRight.textContent = `${softSkill} - ${percent}%`;
        softskillsListRight.appendChild(liRight);
    }
}

function addEducation() {
    const educationDetail = document.querySelector('.educationField').value;
    const startDate = document.querySelector('.educationStartDateField').value;
    const endDate = document.querySelector('.educationEndDateField').value;
    if (educationDetail && startDate && endDate) {
        const educationList = document.getElementById('educationList');
        const educationListRight = document.getElementById('educationListRight');
        
        const li = document.createElement('li');
        li.textContent = `${educationDetail} (${startDate} - ${endDate})`;
        educationList.appendChild(li);
        
        const liRight = document.createElement('li');
        liRight.textContent = `${educationDetail} (${startDate} - ${endDate})`;
        educationListRight.appendChild(liRight);
    }
}

function addProject() {
    const projectDetail = document.querySelector('.projectsField').value;
    if (projectDetail) {
        const projectsList = document.getElementById('projectsList');
        const projectsListRight = document.getElementById('projectsListRight');
        
        const li = document.createElement('li');
        li.textContent = projectDetail;
        projectsList.appendChild(li);
        
        const liRight = document.createElement('li');
        liRight.textContent = projectDetail;
        projectsListRight.appendChild(liRight);
    }
}

function addCertification() {
    const certificationDetail = document.querySelector('.certificationsField').value;
    if (certificationDetail) {
        const certificationsList = document.getElementById('certificationsList');
        const certificationsListRight = document.getElementById('certificationsListRight');
        
        const li = document.createElement('li');
        li.textContent = certificationDetail;
        certificationsList.appendChild(li);
        
        const liRight = document.createElement('li');
        liRight.textContent = certificationDetail;
        certificationsListRight.appendChild(liRight);
    }
}

function addAchievement() {
    const achievementDetail = document.querySelector('.achievementsField').value;
    if (achievementDetail) {
        const achievementsList = document.getElementById('achievementsList');
        const achievementsListRight = document.getElementById('achievementsListRight');
        
        const li = document.createElement('li');
        li.textContent = achievementDetail;
        achievementsList.appendChild(li);
        
        const liRight = document.createElement('li');
        liRight.textContent = achievementDetail;
        achievementsListRight.appendChild(liRight);
    }
}

function addHobby() {
    const hobbyDetail = document.querySelector('.hobbiesField').value;
    const hobbyIcon = document.querySelector('.hobbiesIcon').value;
    if (hobbyDetail && hobbyIcon) {
        const hobbiesList = document.getElementById('hobbiesList');
        const hobbiesListRight = document.getElementById('hobbiesListRight');
        
        const li = document.createElement('li');
        li.innerHTML = `<i class="material-icons">${hobbyIcon}</i> ${hobbyDetail}`;
        hobbiesList.appendChild(li);
        
        const liRight = document.createElement('li');
        liRight.innerHTML = `<i class="material-icons">${hobbyIcon}</i> ${hobbyDetail}`;
        hobbiesListRight.appendChild(liRight);
    }
}

function generateCV() {
    // Update personal details
    document.getElementById('fullName').textContent = document.getElementById('nameField').value;
    document.getElementById('contactNumber').textContent = document.getElementById('contactField').value;
    document.getElementById('contactEmail').textContent = document.getElementById('emailField').value;
    document.getElementById('githubProfile').textContent = document.getElementById('githubField').value;
    document.getElementById('linkedinProfile').textContent = document.getElementById('linkedinField').value;
    
    // Update profile image
    const profileImage = document.getElementById('imgField').files[0];
    if (profileImage) {
        const reader = new FileReader();
        reader.onload = function(e) {
            document.getElementById('profileImage').src = e.target.result;
        }
        reader.readAsDataURL(profileImage);
    }

    // Update about me section
    document.getElementById('aboutMeText').textContent = document.getElementById('objectiveField').value;

    // Show the CV preview
    document.querySelector('.main').style.display = 'block';
}

function printCV() {
    window.print();
}
