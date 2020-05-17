const app = () => {
    // get dark-mode value on page reload from local storage
    let darkMode = localStorage.getItem('dark-mode');

    const darkModeToggle = document.querySelector('#toggle');

    const enableDarkMode = () => {
        // add darkmode class to body
        document.body.classList.add('darkmode');
        localStorage.setItem('dark-mode', 'enabled');
        console.log(darkMode);
    }

    const disableDarkMode = () => {
        // remove darkmode class from body
        document.body.classList.remove('darkmode');
        localStorage.setItem('dark-mode', 'disabled');
        console.log(darkMode);
    }

    // The webpage loads in light mode by default. 
    // check if darkmode is enabled on page reload in local storage (so as display the webpage as darkmode as selected by the user on the last visit to the webpage).
    if (darkMode === 'enabled') {
        enableDarkMode();
    }

    darkModeToggle.addEventListener('click', () => {
        // update variable for local storage
        darkMode = localStorage.getItem('dark-mode');

        if (darkMode !== 'enabled') {
            enableDarkMode();
        } else {
            disableDarkMode();
        }
    })
}

app();