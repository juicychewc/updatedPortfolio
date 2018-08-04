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

    project5: {
        projectUrl:"https://juicychewc.github.io/psychic-game/",
        projectDescription:"Letter Guess Game",
        projectPicture:"assets/images/mindgames.jpg"
    },

    project6: {
        projectUrl:"https://juicychewc.github.io/trainScheduler/",
        projectDescription:"Train Scheduler",
        projectPicture:"assets/images/thomas.jpg"
    }
};

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
        firstDescPara.text("Lorem ipsum dolor, sit amet consectetur adipisicing elit. Adipisci enim nihil, laborum accusantium eos earum nulla quidem dolores voluptatem! Accusantium delectus nostrum, recusandae asperiores voluptatem tenetur impedit! Enim, voluptatum sapiente.")
        var secondDescPara = $("<p>");
        secondDescPara.text("Lorem ipsum dolor sit, amet consectetur adipisicing elit. Placeat laboriosam molestiae doloribus repellendus dolor illum corporis rerum minus incidunt natus ad mollitia harum iste laborum, dolore velit fugit consequatur fuga?");
        secondDescPara.addClass("cleared");
        var thirdDescPara = $("<p>");
        thirdDescPara.text("Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam reiciendis officiis, nihil architecto ab aliquam labore. Reprehenderit temporibus recusandae repellendus mollitia facere beatae adipisci eaque qui delectus sint! Natus, laborum?");
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
        var secondInputDiv = $("<div>");
        secondInputDiv.text("E-mail");
        var secondInput = $("<input>");
        secondInput.attr("type", "text");
        secondInput.addClass("extend");
        secondInput.attr("id", "emailInput");
        var thirdInputDiv = $("<div>");
        thirdInputDiv.text("Message");
        var thirdInput = $("<textarea>");
        thirdInput.addClass("enlarge");
        thirdInput.attr("id", "messageInput");
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
});