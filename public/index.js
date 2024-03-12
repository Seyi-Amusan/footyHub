const newsApiUrl = 'https://newsapi.org/v2/everything?q=football&apiKey=99501be7612b4d8aaef45cac789260cc'

const newsImg = document.querySelector('.news-img')
const newsHeading = document.querySelector('#news-heading')
const newsLink = document.querySelector('#news-link')
const newsText = document.querySelector('#news-text')
const nextNewsBtn = document.querySelector('#next-news')
const prevNewsBtn = document.querySelector('#prev-news')


const quickLinkHeading = document.querySelector('#quick-link-heading')
const quickLinkTexts = Object.values(document.querySelector('#quick-link-text-box').children)
const quickLinkImg = document.querySelector('#quick-link-bg-img')
const prevQuickLinkBtn = document.querySelector('#prev-quick-link')
const nextQuickLinkBtn = document.querySelector('#next-quick-link')


const nav = document.querySelector('#nav')
const navIcon = document.querySelector('#nav-icon')

// async function getNews () {
//     const response = await fetch(newsApiUrl)
//     const news = await response.json()
//     console.log(news.articles);
// }

// getNews()

const quickLinkInfo = [
    {
        'heading': 'Matches',
        'text': ['View Upcoming Fixtures', 'Check Match Results', 'Explore Match Highlights'],
        'src': '../assets/images/ql-img-matches.jpg'
    },

    {
        'heading': 'Leagues',
        'text': ['Discover League Standings', 'Explore Season Overview', 'Learn About Different Leagues'],
        'src': '../assets/images/ql-img-leagues.jpg'
    },

    {
        'heading': 'Players',
        'text': ['Explore Player Profiles', 'Discover Top Performers', 'Learn About Player Statistics'],
        'src': '../assets/images/ql-img-players.jpg'
    },
    {
        'heading': 'Teams',
        'text': ['View Team Rosters', 'Explore Team History', 'Check Team Performance'],
        'src': '../assets/images/ql-img-teams.jpg'
    }
]
const navFunc = () => {
    if (navIcon.src.includes('open')) {
        navIcon.src = './public/assets/icons/icon-close-menu.svg'
    } else{
        navIcon.src = './public/assets/icons/icon-open-menu.svg'
    }
    nav.classList.toggle('hidden')
    nav.classList.toggle('nav')

    return
}


let quickLinkIndex = 0;

const getNextIndex = (currIndex, maxIndex) => {
    if (currIndex == maxIndex - 1) {
        return 0; // Return 0 when resetting the index
    }
    currIndex += 1;
    return currIndex; // Return the updated index
};

const getPrevIndex = (currIndex, maxIndex) => {
    if (currIndex == 0) {
        return maxIndex - 1
    }
    return currIndex -= 1
}

const displayQuickLinkInfo = (quickLinkIndex) => {
    quickLinkHeading.innerText = quickLinkInfo[quickLinkIndex].heading
    for (let i = 0; i < 3; i++) {
        quickLinkTexts[i].innerText = quickLinkInfo[quickLinkIndex].text[i];
    }
    quickLinkImg.src = quickLinkInfo[quickLinkIndex].src
}


nextQuickLinkBtn.addEventListener('click', () => {
    quickLinkIndex = getNextIndex(quickLinkIndex, 4)
    displayQuickLinkInfo(quickLinkIndex)
})
prevQuickLinkBtn.addEventListener('click', () => {
    quickLinkIndex = getPrevIndex(quickLinkIndex, 4)
    displayQuickLinkInfo(quickLinkIndex)
})
navIcon.addEventListener('click', navFunc)



