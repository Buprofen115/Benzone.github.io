document.addEventListener('DOMContentLoaded', initFullpage);
document.addEventListener('scroll', updateHeadLink);
window.addEventListener('beforeunload', forceRefresh);

const svgObject = document.getElementById('arrow-down');
svgObject.addEventListener('load', initSVGInteractions);

function initFullpage() {
    new fullpage('#fullpage', {
        autoScrolling: true,
        scrollHorizontally: true,
    });
}

function initSVGInteractions() {
    const svgDoc = svgObject.contentDocument;
    const path = svgDoc.querySelector('path');

    svgObject.addEventListener('mouseenter', () => {
        path.setAttribute('stroke-width', '3');
    });

    svgObject.addEventListener('mouseleave', () => {
        path.setAttribute('stroke-width', '1');
    });
}

function forceRefresh(event) {
    location.reload(true);
}

function updateHeadLink() {
    const headLink = document.querySelector('.head-link');
    const articleTitle = document.querySelector('.article-title');

    if (window.scrollY > 80) {
        headLink.textContent = articleTitle.textContent;
    } else {
        resetHeadLink(headLink);
    }
}

function resetHeadLink(headLink) {
    headLink.innerHTML = `
        <a href="../index.html">首页</a> /
        <span><a href="./PPT Design.html">作品集</a></span> /
        <span><a href="./PPT Design.html">PPT 设计</a></span>
    `;
}
