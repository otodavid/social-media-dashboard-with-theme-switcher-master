const app = () => {
    const toggle = document.getElementById("toggle");

    const darkMode = () => {
        const container = document.querySelector('.container');
        const dashboard = document.querySelector('.dashboard');
        const dashboardHeader = document.querySelector('header h3');
        const scMedia = document.querySelectorAll('.sc-media');
        const username = document.querySelectorAll('.username');
        const MediaText = document.querySelectorAll('.sc-media p:nth-child(3)');
        const overviewHeader = document.querySelector('.overview h3');
        const card = document.querySelectorAll('.card');
        const activity = document.querySelectorAll('.activity');
        const activityNo = document.querySelectorAll('.activity-no');
        const attribution = document.querySelector('.attribution');
        const attributionLink = document.querySelectorAll('.attribution a');

        // convert the nodelists to arrays
        const scMediaArray = [...scMedia];
        const cardArray = [...card];
        const activityArray = [...activity];
        const activityNoArray = [...activityNo];
        const usernameArray = [...username];
        const MediaTextArray = [...MediaText];
        const attributionLinkArray = [...attributionLink];

        // add dark mode class to classes with single element
        if (toggle.checked) {
            container.classList.add('drkmd');
            dashboard.classList.add('drkmd');
            dashboardHeader.classList.add('drkmd');
            overviewHeader.classList.add('drkmd');
            attribution.classList.add('drkmd');
        } else {
            container.classList.remove('drkmd');
            dashboard.classList.remove('drkmd');
            dashboardHeader.classList.remove('drkmd');
            overviewHeader.classList.remove('drkmd');
            attribution.classList.remove('drkmd');
        }

        // add dark mode to classes with multiple classes
        scMediaArray.forEach(element => {
            if (toggle.checked) {
                element.classList.add('drkmd');
            } else {
                element.classList.remove('drkmd');
            }
        });

        cardArray.forEach(element => {
            if (toggle.checked) {
                element.classList.add('drkmd');
            } else {
                element.classList.remove('drkmd');
            }
        });

        activityArray.forEach(element => {
            if (toggle.checked) {
                element.classList.add('drkmd');
            } else {
                element.classList.remove('drkmd');
            }
        });

        activityNoArray.forEach(element => {
            if (toggle.checked) {
                element.classList.add('drkmd');
            } else {
                element.classList.remove('drkmd');
            }
        });

        usernameArray.forEach(element => {
            if (toggle.checked) {
                element.classList.add('drkmd');
            } else {
                element.classList.remove('drkmd');
            }
        });

        MediaTextArray.forEach(element => {
            if (toggle.checked) {
                element.classList.add('drkmd');
            } else {
                element.classList.remove('drkmd');
            }
        });

        attributionLinkArray.forEach(element => {
            if (toggle.checked) {
                element.classList.add('drkmd');
            } else {
                element.classList.remove('drkmd');
            }
        });
    }

    toggle.addEventListener('click', darkMode);
}

app();