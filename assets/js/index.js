
/* Object declaration */

class Theme {
    constructor(background, sub_title, nav_bar, presentation) {
        this.background = background;
        this.nav_bar = nav_bar;
        this.presentation = presentation;
        this.sub_title = sub_title
    }
}


/* GLOBAL variables */

var default_theme_color = new Theme(
    "rgb(39, 48, 67)",
    "rgb(175, 227, 192)",
    "#171C27",
    "rgb(145, 151, 174)"
)

var rainbow_theme_color = new Theme(
    "#E0D0C1",
    "#00A676",
    "#BB9877",
    "#8B80F9"
)

var DEFAULT_THEME = 0
var RAINBOW_THEME = 1

/* Wrapper to handler the changing theme button */

function changeThemeColor(current_theme) {
    if (current_theme == DEFAULT_THEME) {
        setRainbowTheme()
    } else if (current_theme == RAINBOW_THEME){
        setDefaultTheme()
    }
    return
};

/* Turn the theme of the site to the rainbow theme */

function setRainbowTheme() {
    document.getElementById("header").style["backgroundColor"] = rainbow_theme_color.nav_bar
    document.getElementsByTagName("body")[0].style["backgroundColor"]  = rainbow_theme_color.background


    try {
        para_list = document.getElementsByClassName("text")
        for (el of para_list)
        {
            el.style.color = rainbow_theme_color.presentation
        }
        document.getElementById("subtitle-text").style["color"] = rainbow_theme_color.sub_title
    } catch (e) {
        console.log(e)
    }

	var button = document.getElementsByClassName("nav-button")[0]
    button.setAttribute("onclick",`changeThemeColor(${RAINBOW_THEME})`)
    return    
}   


/* Turn the theme of the site to the default theme */

function setDefaultTheme()
{   
    document.getElementById("header").style["backgroundColor"] = default_theme_color.nav_bar
    document.getElementsByTagName("body")[0].style["backgroundColor"] = default_theme_color.background

    try { 
        para_list = document.getElementsByClassName("text")
        for (el of para_list)
        {
            el.style.color = default_theme_color.presentation
        }
        document.getElementById("subtitle-text").style["color"] = default_theme_color.sub_title;
    } catch(e) {
        console.log(e)
    }

	var button = document.getElementsByClassName("nav-button")[0]
    button.setAttribute("onclick",`changeThemeColor(${DEFAULT_THEME})`)
    return
}