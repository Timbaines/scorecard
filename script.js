// Basketball Scorecard
//////////////////////////////////////////////////////////////////////////////

// Home Add 1
let homeScoreEl =document.getElementById("home-score")
let homeScore = 0

// HOME POINTS
function increaseHomeScoreByOne(){
    homeScore += 1
    homeScoreEl.textContent = homeScore
}

function increaseHomeScoreByTwo(){
    homeScore += 2
    homeScoreEl.textContent = homeScore
}

function increaseHomeScoreByThree(){
    homeScore += 3
    homeScoreEl.textContent = homeScore
}

// GUEST POINTS
let guestScoreEl =document.getElementById("guest-score")
let guestScore = 0


function increaseGuestScoreByOne(){
    guestScore += 1
    guestScoreEl.textContent = guestScore
}

function increaseGuestScoreByTwo(){
    guestScore += 2
    guestScoreEl.textContent = guestScore
}

function increaseGuestScoreByThree(){
    guestScore += 3
    guestScoreEl.textContent = guestScore
}