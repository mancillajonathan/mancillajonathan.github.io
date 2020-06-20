const routes = [
    {
        path: '/',
        template: `
        <div class="title-image">
            <div class="title">
                <p class="name">I'm <strong>Jonathan</strong></p>
                <p class="description">A self-taught learner in web development and UI design based in Tijuana, México.</p>
                <button class="hire-me">Hire me!</button>
            </div>
            <div class="image">
                <img class="landing-img" src="src/img/landing-img.svg" alt="">
            </div>
        </div>
        <div class="skills">
            <div class="frontend">
                <h3>Front-end Developer</h3>
                <p>HTML, CSS and JavaScript projects made responsively for mobile.</p>
                <img src="src/img/see-more-btn.svg" alt="more-info-button">
            </div>
            <div class="uidesign">
                <h3>UX/UI Designer</h3>
                <p>Adobe XD for components, layouts and UI design systems.</p>
                <img src="src/img/see-more-btn.svg" alt="more-info-button">
            </div>
            <div class="reactdev">
                <h3>React Developer</h3>
                <p>React.js, the most popular library for front-end projects.</p>
                <img src="src/img/see-more-btn.svg" alt="more-info-button">
            </div>
        </div>
        <p class="credit-legend">Made with ❤️ by <a class="link-github" href="https://github.com/mancillajonathan" target="_blank"><em>@mancillajonathan</em></a></p>
        `
    },
    {
        path: '/aboutme',
        template: '<h1>About me</h1>'
    },
    {
        path: '/resume',
        template: '<h1>Resume</h1>'
    },
];