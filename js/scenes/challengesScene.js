function challengesSetupScene(director) {
    var challengesScene = director.createScene().setFillStyle('#fff');
    var buttons1toX = new CAAT.Foundation.SpriteImage().initialize(
        director.getImage('buttons1toX'), 6, 4);

    var buttonBackChallenge = new CAAT.Foundation.Actor().setAsButton(
        director.buttonsRef, 9, 10, 11, 10, function(button) {
            launchMenu(director, challengesScene);
        }
    ).setLocation(84, 0);
    buttonBackChallenge.mouseClick = function (e) {director.audioPlay('click')};

    var girlChallenge = new CAAT.Actor().
        setBackgroundImage(director.getImage('girl'), true)
        .setLocation(0, 60);

    var bubbleChallenge = new CAAT.Actor().
        setBackgroundImage(director.getImage('bubble'), true).
        setPosition(90, 60);

    var bubbleTextGame = new CAAT.Foundation.UI.Label().
        setStyle("default", {
            fontSize : 20
        }).
        setText("Choose a Challenge!").
        setLocation(102, 90);

    var starScores = getStarScore(director, challengesScene);
    var oneto10 = new CAAT.Foundation.Actor().setAsButton(
        buttons1toX.getRef(), 0, 1, 2, 3, function() {
            launchGame(director, challengesScene, 1, 10);
        }
    ).setLocation(5, 240);
    if (oneto10.enabled) oneto10.mouseClick = function (e) {director.audioPlay('click')};

    var oneto50 = new CAAT.Foundation.Actor().setAsButton(
        buttons1toX.getRef(), 4, 5, 6, 7, function() {
            launchGame(director, challengesScene, 1, 50);
        }
    ).setLocation(165, 240).setEnabled(starScores[0] != null);
    if (oneto50.enabled) oneto50.mouseClick = function (e) {director.audioPlay('click')};

    var oneto100 = new CAAT.Foundation.Actor().setAsButton(
        buttons1toX.getRef(), 8, 9, 10, 11, function() {
            launchGame(director, challengesScene, 1, 100);
        }
    ).setLocation(5, 330).setEnabled(starScores[1] != null);
    if (oneto100.enabled) oneto100.mouseClick = function (e) {director.audioPlay('click')};

    var oneto500 = new CAAT.Foundation.Actor().setAsButton(
        buttons1toX.getRef(), 12, 13, 14, 15, function() {
            launchGame(director, challengesScene, 1, 500);
        }
    ).setLocation(165, 330).setEnabled(starScores[2] != null);
    if (oneto500.enabled) oneto500.mouseClick = function (e) {director.audioPlay('click')};

    var oneto1000 = new CAAT.Foundation.Actor().setAsButton(
        buttons1toX.getRef(), 16, 17, 18, 19, function() {
            launchGame(director, challengesScene, 1, 1000);
        }
    ).setLocation(5, 410).setEnabled(starScores[3] != null);
    if (oneto1000.enabled) oneto1000.mouseClick = function (e) {director.audioPlay('click')};

    var oneto5000 = new CAAT.Foundation.Actor().setAsButton(
        buttons1toX.getRef(), 20, 21, 22, 23, function() {
            launchGame(director, challengesScene, 1, 5000);
        }
    ).setLocation(165, 410).setEnabled(starScores[4] != null);
    if (oneto5000.enabled) oneto5000.mouseClick = function (e) {director.audioPlay('click')};

    var background = new CAAT.Foundation.ActorContainer().setLocation(0,0).setSize(320, 480).setBackgroundImage(director.getImage('bck'), true);

    challengesScene.addChild(background);
    challengesScene.addChild(girlChallenge);
    challengesScene.addChild(bubbleChallenge);
    challengesScene.addChild(bubbleTextGame);
    challengesScene.addChild(buttonBackChallenge);
    challengesScene.addChild(oneto10);
    challengesScene.addChild(oneto50);
    challengesScene.addChild(oneto100);
    challengesScene.addChild(oneto500);
    challengesScene.addChild(oneto1000);
    challengesScene.addChild(oneto5000);

    for (var i=0; i<6; i++) {
        if (starScores[i]) {
            challengesScene.addChild(starScores[i]);
        }
    }

    return director.getSceneIndex(challengesScene);
}

function getStarScore(director, challengesScene) {
    var scoresData = [
        localStorage.getItem('bestScore10'),
        localStorage.getItem('bestScore50'),
        localStorage.getItem('bestScore100'),
        localStorage.getItem('bestScore500'),
        localStorage.getItem('bestScore1000'),
        localStorage.getItem('bestScore5000')
    ];

    ////////////// 1to10 ///////////////////////
    var nameImage = '';
     if (scoresData[0] == 1) {
        nameImage = '3star';
    } else if (scoresData[0] == 2) {
        nameImage = '2star';
    } else if (scoresData[0] == 3) {
        nameImage = '1star';
    }

    if (nameImage) {
        scoresData[0] = new CAAT.Foundation.Actor().setAsButton(
            director.getImage(nameImage), 0, 0, 0, 0, function() {
                launchGame(director, challengesScene, 1, 10);
            }
        ).setLocation(5, 210);
        nameImage = '';
    } else {
        scoresData[0] = null;
    }

    ////////////// 1to50 ///////////////////////
    if (scoresData[1] >= 1 && scoresData[1] <= 3) {
        nameImage = '3star';
    } else if (scoresData[1] == 4) {
        nameImage = '2star';
    } else if (scoresData[1] == 5) {
        nameImage = '1star';
    }

    if (nameImage) {
        scoresData[1] = new CAAT.Foundation.Actor().setAsButton(
            director.getImage(nameImage), 0, 0, 0, 0, function() {
                launchGame(director, challengesScene, 1, 50);
            }
        ).setLocation(165, 210);
        nameImage = '';
    } else {
        scoresData[1] = null;
    }

    ////////////// 1to100 ///////////////////////
    if (scoresData[2] >= 1 && scoresData[2] <= 4) {
        nameImage = '3star';
    } else if (scoresData[2] == 5) {
        nameImage = '2star';
    } else if (scoresData[2] > 5 && scoresData[2] <= 7) {
        nameImage = '1star';
    }

    if (nameImage) {
        scoresData[2] = new CAAT.Foundation.Actor().setAsButton(
            director.getImage(nameImage), 0, 0, 0, 0, function() {
                launchGame(director, challengesScene, 1, 100);
            }
        ).setLocation(5, 300);
        nameImage = '';
    } else {
        scoresData[2] = null;
    }


    ////////////// 1to500 ///////////////////////
    if (scoresData[3] >= 1 && scoresData[3] <= 5) {
        nameImage = '3star';
    } else if (scoresData[3] == 6) {
        nameImage = '2star';
    } else if (scoresData[3] > 6 && scoresData[3] <= 8) {
        nameImage = '1star';
    }

    if (nameImage) {
        scoresData[3] = new CAAT.Foundation.Actor().setAsButton(
            director.getImage(nameImage), 0, 0, 0, 0, function() {
                launchGame(director, challengesScene, 1, 500);
            }
        ).setLocation(165, 300);
        nameImage = '';
    } else {
        scoresData[3] = null;
    }

    ////////////// 1to1000 ///////////////////////
    if (scoresData[4] >= 1 && scoresData[4] <= 6) {
        nameImage = '3star';
    } else if (scoresData[4] == 7) {
        nameImage = '2star';
    } else if (scoresData[4] > 7 && scoresData[4] <= 9) {
        nameImage = '1star';
    }

    if (nameImage) {
        scoresData[4] = new CAAT.Foundation.Actor().setAsButton(
            director.getImage(nameImage), 0, 0, 0, 0, function() {
                launchGame(director, challengesScene, 1, 1000);
            }
        ).setLocation(5, 380);
        nameImage = '';
    } else {
        scoresData[4] = null;
    }


    ////////////// 1to5000 ///////////////////////
    if (scoresData[5] >= 1 && scoresData[5] <= 9) {
        nameImage = '3star';
    } else if (scoresData[5] == 10) {
        nameImage = '2star';
    } else if (scoresData[5] > 10 && scoresData[5] <= 12) {
        nameImage = '1star';
    }

    if (nameImage) {
        scoresData[5] = new CAAT.Foundation.Actor().setAsButton(
            director.getImage(nameImage), 0, 0, 0, 0, function() {
                launchGame(director, challengesScene, 1, 5000);
            }
        ).setLocation(165, 380);
    } else {
        scoresData[5] = null;
    }

    return scoresData;
}

function launchChallenges(director, scene) {
    director.switchToScene(
        challengesSetupScene(director),
        2000,
        false,
        true
    )
    if (scene) {
        scene.destroy();
    }
}