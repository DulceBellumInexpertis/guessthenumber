function creditsSetupScene(director) {
    var creditsScene = director.createScene().setFillStyle('#fff');

    var girlCredits = new CAAT.Actor().setBackgroundImage(director.getImage('girl'), true);

    var bubbleCredits = new CAAT.Actor().
        setBackgroundImage(director.getImage('bubble'), true).
        setPosition(90, 0);

    var bubbleTextCredits = new CAAT.TextActor().
        setFont("40px sans-serif").
        setText("Thanks to ...").
        setTextFillStyle("black").
        setPosition(110, 10).
        setTextBaseline("bottom");

    var textCredits = new CAAT.Foundation.UI.Label().
        setStyle("default", {
            fontSize : 18
        }).
        setText(
            "Splash image by ~blue-ink, Devianart.<br><br>"
                + "Girl, Boy, Stars & speech buble by<br>"
                + "Lost Garden.<br><br>"
                + "Buttons by GameArtForge,<br>OpenGameArt.com<br><br>"
                + "Music and sound: Batle for Wesnoth."
        ).
        setLocation(10, 170);

    var buttonBackCredits = new CAAT.Foundation.Actor().setAsButton(
        director.buttonsRef, 9, 10,11, 12, function() {
            launchMenu(director, creditsScene);
        }
    ).setLocation(84,420);

    var background = new CAAT.Foundation.ActorContainer().setLocation(0,0).setSize(320, 480).setBackgroundImage(director.getImage('bck2'), true);

    creditsScene.addChild(background);
    creditsScene.addChild(girlCredits);
    creditsScene.addChild(bubbleCredits);
    creditsScene.addChild(bubbleTextCredits);
    creditsScene.addChild(textCredits);
    creditsScene.addChild(buttonBackCredits);

    return director.getSceneIndex(creditsScene);
}

function launchCredits(director, scene) {
    director.switchToScene(
        creditsSetupScene(director),
        2000,
        false,
        true
    )
    if (scene) {
        scene.destroy();
    }
}