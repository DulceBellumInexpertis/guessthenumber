function preSets(director) {
    director.
        addAudio('mm', document.getElementById('music')).
        addAudio('click', document.getElementById('click'));
    director.audioLoop('mm');

    menuSetupScene(director);
}

function menuSetupScene(director) {


    var menuScene = director.createScene().setFillStyle('#fff');
    var buttons = new CAAT.Foundation.SpriteImage().initialize(
        director.getImage('buttons'), 10, 3);

    director.buttonsRef = buttons.getRef();

    var girl = new CAAT.Actor().
        setBackgroundImage(director.getImage('girl'), true).
        setLocation(0, 10);

    var bubble = new CAAT.Actor().
        setBackgroundImage(director.getImage('bubble'), true).
        setLocation(90, 10);

    var bubbleText1 = new CAAT.Foundation.UI.Label().
        setStyle("default", {
            fontSize : 19
        }).
        setText("Guess the number is<br>a fun game for<br>practicing numbers.").
        setLocation(101, 20);

    var buttonStart = new CAAT.Foundation.Actor().setAsButton(
        director.buttonsRef, 0, 1, 2, 0, function(button) {
            launchChallenges(director, menuScene);
        }
    ).setLocation(84, 175);
    buttonStart.mouseClick = function (e) {director.audioPlay('click')};

    var buttonCustomGame = new CAAT.Foundation.Actor().setAsButton(
        director.buttonsRef, 21, 22, 23, 0, function(button) {
            launchCustom(director, menuScene);
        }
    ).setLocation(84, 250);
    buttonCustomGame.mouseClick = function (e) {director.audioPlay('click')};

    var buttonHowToPlay = new CAAT.Foundation.Actor().setAsButton(
        director.buttonsRef, 24, 25, 26, 24, function(button) {
            launchHowTo(director, menuScene);
        }
    ).setLocation(84, 325);
    buttonHowToPlay.mouseClick = function (e) {director.audioPlay('click')};

    var buttonCredits = new CAAT.Foundation.Actor().setAsButton(
        director.buttonsRef, 18, 19, 20, 18, function(button) {
            launchCredits(director, menuScene);
        }
    ).setLocation(84, 400);
    buttonCredits.mouseClick = function (e) {director.audioPlay('click')};

    var background = new CAAT.Foundation.ActorContainer().setLocation(0,0).setSize(320, 480).setBackgroundImage(director.getImage('bck'), true);

    menuScene.addChild(background);
    menuScene.addChild(girl);
    menuScene.addChild(bubble);
    menuScene.addChild(bubbleText1);
    menuScene.addChild(buttonStart);
    menuScene.addChild(buttonCustomGame);
    menuScene.addChild(buttonHowToPlay);
    menuScene.addChild(buttonCredits);

    return director.getSceneIndex(menuScene);
}

function launchMenu(director, scene) {
    director.switchToScene(
        menuSetupScene(director),
        2000,
        false,
        true
    )
    if (scene) {
        scene.destroy();
    }
}