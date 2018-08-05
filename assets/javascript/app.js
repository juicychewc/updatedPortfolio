//additional projects can be added as objects in this variable
var allProjects = {

    project1: {
        projectUrl:"https://juicychewc.github.io/unit-4-game/",
        projectDescription:"Simple RPG game",
        projectPicture:"assets/images/zergling.png"
    },

    project2: {
        projectUrl:"https://gavbax99.github.io/Project1/",
        projectDescription:"Music App",
        projectPicture:"assets/images/MuseAppCover.jpg"
    },

    project3: {
        projectUrl:"https://juicychewc.github.io/ajax-api/",
        projectDescription:"Gif generator",
        projectPicture:"assets/images/bond.jpg"
    },

    project4: {
        projectUrl:"https://juicychewc.github.io/TriviaGame/",
        projectDescription:"Trivia Game",
        projectPicture:"assets/images/twitchlogo.jpg"
    },
};

var config = {
    apiKey: "AIzaSyCMB_usSbI92Hset-ICSZNpOu_3kVldOtI",
    authDomain: "trainscheduler-e2d1f.firebaseapp.com",
    databaseURL: "https://trainscheduler-e2d1f.firebaseio.com",
    projectId: "trainscheduler-e2d1f",
    storageBucket: "",
    messagingSenderId: "645840782552"
};

firebase.initializeApp(config);
var database = firebase.database();

var firstCard = $("#contentsGoHere");
var spacingBreak = $("<br>");


$(document).ready(function () {

    $("#aboutGenerator").on("click", function () {
        firstCard.empty();
        var firstDiv = $("<div>");
        firstDiv.addClass("myheader");
        firstDiv.text("About Me");
        var cardBodyDiv = $("<article>");
        cardBodyDiv.addClass("clearfix");
        var myImage = $("<img>");
        myImage.attr("id", "myimage")
        myImage.attr("src", "assets/images/me.jpg");
        myImage.attr("alt", "Me");
        var firstDescPara = $("<p>");
        firstDescPara.text("Hello, My name is Collin Chew and I am a full stack developer.  I received my education and training from UC Davis.  I am currently residing in northern California but I love to travel.")
        var secondDescPara = $("<p>");
        secondDescPara.text("I am a very hands on and creative person.  I enjoy working with computers almost as much as I like building them, including a few Intel award winning cases.  My passion for computers has eventually brought me to coding.  I enjoy making new things.  As an eagle scout, I learned the rewarding aspect to making something easier or better for someone that needs it.  In a world where the future is dictated by technology, I feel my ability to code will be of great use.");
        secondDescPara.addClass("cleared");
        var thirdDescPara = $("<p>");
        thirdDescPara.text("I am looking forward to what I can create or help others implement their great ideas.  If you have a need for my skills or aspirations, feel free to contact me.  I look forward to working with new people.");
        thirdDescPara.addClass("cleared");

        firstCard.append(firstDiv).append(cardBodyDiv);
        cardBodyDiv.append(myImage).append(firstDescPara).append(spacingBreak).append(secondDescPara).append(spacingBreak).append(thirdDescPara);
    });

    $("#contactGenerator").on("click", function () {
        firstCard.empty();
        var firstDiv = $("<div>");
        firstDiv.addClass("myheader");
        firstDiv.text("Contact");
        var cardBodyDiv = $("<article>");
        cardBodyDiv.addClass("clearfix");
        var inputForm = $("<form>");
        inputForm.attr("action", "");
        var firstInputDiv = $("<div>");
        firstInputDiv.text("Name");
        var firstInput = $("<input>");
        firstInput.attr("type", "text");
        firstInput.addClass("extend");
        firstInput.attr("id", "nameInput");
        firstInput.attr("required");
        var secondInputDiv = $("<div>");
        secondInputDiv.text("E-mail");
        var secondInput = $("<input>");
        secondInput.attr("type", "text");
        secondInput.addClass("extend");
        secondInput.attr("id", "emailInput");
        secondInput.attr("required");
        var thirdInputDiv = $("<div>");
        thirdInputDiv.text("Message");
        var thirdInput = $("<textarea>");
        thirdInput.addClass("enlarge");
        thirdInput.attr("id", "messageInput");
        thirdInput.attr("required");
        var submitButton = $("<input>");
        submitButton.attr("id", "submitButton");
        submitButton.attr("type", "submit");
        submitButton.attr("value", "Submit");

        firstCard.append(firstDiv).append(cardBodyDiv);
        cardBodyDiv.append(inputForm);
        inputForm.append(firstInputDiv).append(spacingBreak).append(firstInput).append(secondInputDiv).append(spacingBreak).append(secondInput).append(thirdInputDiv).append(spacingBreak).append(thirdInput).append(submitButton);
    });

    $("#portfolioGenerator").on("click", function () {
        firstCard.empty();
        var firstDiv = $("<div>");
        firstDiv.addClass("myheader");
        firstDiv.text("My Portfolio");
        var cardBodyDiv = $("<article>");
        cardBodyDiv.addClass("clearfix");
        firstCard.append(firstDiv).append(cardBodyDiv);
        for (var key in allProjects) {
            var projectDiv = $("<div>");
            projectDiv.addClass("portolinks");
            var projectLink = $("<a>");
            projectLink.attr("href", allProjects[key].projectUrl);
            projectDiv.append(projectLink);
            var projectCover = $("<img>");
            projectCover.attr("src", allProjects[key].projectPicture);
            projectCover.addClass("portfolioLinkImage")
            projectCover.attr("alt", "projectpicture");
            projectLink.append(projectCover);
            var descriptionDiv = $("<div>");
            descriptionDiv.addClass("description");
            projectDiv.append(descriptionDiv);
            descriptionDiv.text(allProjects[key].projectDescription);
            cardBodyDiv.append(projectDiv);
        }
    });

    $("#submitButton").on("click", function() {
        event.preventDefault();
        var contactName = $("#nameInput").val().trim();
        var contactEmail = $("#emailInput").val().trim();
        var contactMessage = $("#messageInput").val().trim();

        var newContact = {
            name: contactName,
            email: contactEmail,
            message: contactMessage
        }

        database.ref().push(newContact);

        $("#nameInput").val("");
        $("#emailInput").val("");
        $("#messageInput").val("");
    })
});

$("#linkedIn").on("click", function() {
    window.location.href = "https://www.linkedin.com/in/collin-chew-07c01c1988/";
});

$("#github").on("click", function() {
    window.location.href = "https://github.com/juicychewc";
});