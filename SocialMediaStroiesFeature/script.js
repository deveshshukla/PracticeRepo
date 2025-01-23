'use strict'

//Stories details

let arrStroyData = [
    {userDpImg: "./media/randomuser1.jpeg", storyImg: "./media/storie1.jpg", storyDsc: "#MorningVibes #MorningClick"},
    {userDpImg: "./media/randomuser2.jpeg", storyImg: "./media/storie2.jpg", storyDsc: "#CampFire with friends, #Enjoying #Fun"},
    {userDpImg: "./media/randomuser3.jpeg", storyImg: "./media/storie3.jpg", storyDsc: "My morning drink #Capachino"},
    {userDpImg: "./media/randomuser4.jpg", storyImg: "./media/storie4.jpg", storyDsc: "#Nature #Beauty #Greenery"},
    {userDpImg: "./media/randomuser1.jpeg", storyImg: "./media/storie1.jpg", storyDsc: "#MorningVibes #MorningClick"},
    {userDpImg: "./media/randomuser2.jpeg", storyImg: "./media/storie2.jpg", storyDsc: "#CampFire with friends, #Enjoying #Fun"},
    {userDpImg: "./media/randomuser3.jpeg", storyImg: "./media/storie3.jpg", storyDsc: "My morning drink #Capachino"},
    {userDpImg: "./media/randomuser4.jpg", storyImg: "./media/storie4.jpg", storyDsc: "#Nature #Beauty #Greenery"}
]

let storiesSec = document.querySelector('.storiesSec');

function loadStories() {
    let storyCircle = "";

    arrStroyData.forEach((val, index) => {
        storyCircle += `
            <div class="stroy">
                <img id="${index}" src="${val.userDpImg}" alt="User Image">
            </div>`;
    });

    storiesSec.innerHTML = storyCircle;
}

loadStories();

//Stories click event
let fullScrStory = document.querySelector('.fullScrStory');
let grow = 0; //status timeline growth

storiesSec.addEventListener('click', function(clickLocation) {
    if(clickLocation.target.tagName === 'IMG') {
        fullScrStory.style.display = 'flex';
        
        //Add FullScreen image
        fullScrStory.style.backgroundImage = `url(${arrStroyData[clickLocation.target.id].storyImg})`;

        //Add description
        fullScrStory.innerHTML = `<div class="timeLine">
                    <div class="growthLine"></div>
                </div>
                <p style="width: 100%;
            text-align: start;
            font-size: 1rem;
            padding: 1rem;
            background: #00000080;
            color: #fff;" class="storyDsc">${arrStroyData[clickLocation.target.id].storyDsc}</p>`;

            //Hide full screen story after 3sec
            setTimeout(() => {
                fullScrStory.style.display = 'none';
            }, 3000);

            //Status timeline growth
            if(grow < 100) {
                setInterval(() => {
                    document.querySelector('.growthLine').style.width = `${grow}%`;
                    grow++;
                }, 30);
            } else
                grow = 0;
    }
});