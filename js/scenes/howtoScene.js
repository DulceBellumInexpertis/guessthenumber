function howToSetupScene(director) {
    var howToScene = director.createScene().setFillStyle('#fff');

    var girlHowTo = new CAAT.Actor().setBackgroundImage(director.getImage('girl'), true);

    var bubbleHowTo = new CAAT.Actor().
        setBackgroundImage(director.getImage('bubble'), true).
        setPosition(90, 0);

    var bubbleTextHowTo = new CAAT.TextActor().
        setFont("30px sans-serif").
        setText("How to play!").
        setTextFillStyle("black").
        setPosition(110, 30).
        setTextBaseline("bottom")

    var instructionsHowTo = new CAAT.Foundation.UI.Label().
        setStyle("default", {
            fontSize : 18
        }).
        setText(
            "First, the girl will choose a secret<br>"
            + "number between given set limits.<br><br>"
            + "Then, the girl asks you for repeated<br>"
            + "guesses until you guess the secret<br>"
            + "number correctly.<br><br>"
            + "If your guess is too high or too low,<br>"
            + "the girl responds with whether the<br>"
            + "guess was higher than or less than<br>"
            + "the secret number.<br><br>"
            + "See how many turns it takes you!"
        ).
        setLocation(10, 150);

    var buttonBackHowTo = new CAAT.Foundation.Actor().setAsButton(
        director.buttonsRef, 9, 10, 11, 9, function(button) {
            launchMenu(director, howToScene);
        }
    ).setLocation(84,420);

    buttonBackHowTo.mouseClick = function (e) {director.audioPlay('click')};

    var background = new CAAT.Foundation.ActorContainer().setLocation(0,0).setSize(320, 480).setBackgroundImage(director.getImage('bck2'), true);

    howToScene.addChild(background);
    howToScene.addChild(girlHowTo);
    howToScene.addChild(bubbleHowTo);
    howToScene.addChild(bubbleTextHowTo);
    howToScene.addChild(instructionsHowTo);
    howToScene.addChild(buttonBackHowTo);

    return director.getSceneIndex(howToScene);
}

function launchHowTo(director, scene) {
    director.switchToScene(
        howToSetupScene(director),
        2000,
        false,
        true
    )
    if (scene) {
        scene.destroy();
    }
}