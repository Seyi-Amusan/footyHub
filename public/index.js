const newsApiUrl = 'https://newsapi.org/v2/everything?q=football&apiKey=99501be7612b4d8aaef45cac789260cc'

const newsImg = document.querySelector('.news-img')
const newsHeading = document.querySelector('#news-heading')
const newsLink = document.querySelector('#news-link')
const newsText = document.querySelector('#news-text')
const nextNewsBtn = document.querySelector('#next-news')
const prevNewsBtn = document.querySelector('#prev-news')


const quickLinkHeading = document.querySelector('#quick-link-heading')
const quickLinkTexts = Object.values(document.querySelector('#quick-link-text-box').children)
const prevQuickLinkBtn = document.querySelector('#prev-quick-link')
const nextQuickLinkBtn = document.querySelector('#next-quick-link')

const quickLinkInfo = [
    {
        'heading': 'Matches',
        'text': ['View Upcoming Fixtures', 'Check Match Results', 'Explore Match Highlights']
    },

    {
        'heading': 'Leagues',
        'text': ['Discover League Standings', 'Explore Season Overview', 'Learn About Different Leagues']
    },

    {
        'heading': 'Players',
        'text': ['Explore Player Profiles', 'Discover Top Performers', 'Learn About Player Statistics']
    },
    {
        'heading': 'Teams',
        'text': ['View Team Rosters', 'Explore Team History', 'Check Team Performance']
    }
]



let qlIndex = 0 //quickLinkIndex

const displayQuickLinkInfo = (index) => {
    quickLinkHeading.innerText = quickLinkInfo[index].heading //changes the heading

    let c = 0
    for (const text of quickLinkTexts) {
        text.innerText = quickLinkInfo[index].text[c] //changes the text
        c += 1
    }

}

const nextQlInfo = () => {
    qlIndex += 1 //increments quickLinkIndex
    if (qlIndex > 3) {
        qlIndex = 0; //makes sure quickLInkIndex doesnt exceed 3
    }
    displayQuickLinkInfo(qlIndex)
}




const prevQlInfo = () => {
    if (qlIndex <= 0) {
        qlIndex = 3; //makes sure quickLInkIndex doesnt exceed 3
    }
    qlIndex -= 1
    displayQuickLinkInfo(qlIndex)
}




nextQuickLinkBtn.addEventListener('click', nextQlInfo)
prevQuickLinkBtn.addEventListener('click', prevQlInfo)




// async function getData() {
//     const response = await fetch(newsApiUrl)
//     const data = await response.json()
//     console.log(data.articles[0])
//     displayNews(data.articles)
//     // newsImg.src = data.articles[8].urlToImagedis
// }

// let counter = 0
// function displayNews (news) {
//     nextNewsBtn.addEventListener('click', () => {
//         counter += 1
//         console.log(counter);
//         console.log('btn clicked');
//         newsImg.src = news[counter].urlToImage
//         newsHeading.innerText = news[counter].title
//         newsText.innerText = news[counter].description
//         newsLink.href = news[counter].url
//     })
    // console.log(counter);
    // newsImg.src = news[counter].urlToImage
    // newsHeading.innerText = news[counter].title
// }


// async function getData() {
//     const response = await fetch(newsApiUrl)
//     const data = await response.json()
//     console.log(data.articles[0])
//     console.log(counter);
    
//     // newsImg.src = data.articles[8].urlToImagedis
// }
// getData()