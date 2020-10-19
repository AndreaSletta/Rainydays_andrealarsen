function GetThisHidden(){
    $(".dropdownproduct-content").css("opacity", "0").on('transitionend webkitTransitionEnd oTransitionEnd otransitionend', HideTheElementAfterAnimation);
}

function GetThisDisplayed(){
    $(".dropdownproduct-content").css("display", "block").css("opacity", "1").unbind("transitionend webkitTransitionEnd oTransitionEnd otransitionend");
}

function HideTheElementAfterAnimation(){
    $(".dropdownproduct-content").css("display", "none");
}