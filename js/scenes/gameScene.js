function gameSetupScene(director) {
    var gameScene = director.createScene().setFillStyle('#fff');
    var numbers = new CAAT.Foundation.SpriteImage().initialize(
        director.getImage('numbers'), 10, 3);

    var MAX_NUMBER_LENGHT = 4;
    var text = '',
        oldText = '',
        attempts = 0,
        randomNumber = randomFromInterval(director.low, director.high),
        low = director.low,
        high = director.high,
        challenge = director.challenge;

    if (challenge) {
        var bestScore = localStorage.getItem('bestScore' + high);
        if (!bestScore) {
            bestScore = '-';
            localStorage.setItem('bestScore' + high, bestScore);
        }
    }

    var girlGame = new CAAT.Actor().
        setBackgroundImage(director.getImage('girl'), true).
        setLocation(0, 60);

    var bubbleGame = new CAAT.Actor().
        setBackgroundImage(director.getImage('bubble'), true).
        setLocation(90, 60);

    var bubbleTextGame = new CAAT.Foundation.UI.Label().
        setStyle("default", {
            fontSize : 20
        }).
        setText("Guess a number<br>from " + low + " to " + high).
        setLocation(105, 70);

    if (challenge) {
        var scoreTextGame = new CAAT.Foundation.UI.Label().
            setStyle("default", {
                fontSize : 20
            }).
            setText("Best: " + bestScore).
            setLocation(10, 220);
    }

    var attemptsTextGame = new CAAT.Foundation.UI.Label().
        setStyle("default", {
            fontSize : 20
        }).
        setText("Attempts: " + attempts).
        setLocation(10, 250);

    var boyGame = new CAAT.Actor().
        setBackgroundImage(director.getImage('boy'), true).
        setLocation(235, 125);

    var bubbleSmallGame = new CAAT.Actor().
        setBackgroundImage(director.getImage('bubbleSmall'), true).
        setLocation(150, 65);

    var smallBubbleTextGame = new CAAT.TextActor().
        setFont("40px sans-serif").
        setText(text).
        setTextFillStyle("black").
        setLocation(155, 160).
        setTextBaseline("bottom");


    var zero = new CAAT.Foundation.Actor().setAsButton(
        numbers.getRef(), 0, 1, 2, 0, function(button) {
            if (text.length == 0 || text.length == MAX_NUMBER_LENGHT) return;
            text = text + '0';
            smallBubbleTextGame.
                setLocation(155, 210).
                setText(text);
        }
    ).setLocation(0,280);
    zero.mouseClick = function (e) {director.audioPlay('click')};

    var one = new CAAT.Foundation.Actor().setAsButton(
        numbers.getRef(), 3, 4, 5, 3, function(button) {
            if (text.length == MAX_NUMBER_LENGHT) return;
            text = text + '1';
            smallBubbleTextGame.
                setLocation(155, 210).
                setText(text);
        }
    ).setLocation(64, 280);
    one.mouseClick = function (e) {director.audioPlay('click')};

    var two = new CAAT.Foundation.Actor().setAsButton(
        numbers.getRef(), 6, 7, 8, 6, function(button) {
            if (text.length == MAX_NUMBER_LENGHT) return;
            text = text + '2';
            smallBubbleTextGame.
                setLocation(155, 210).
                setText(text);
        }
    ).setLocation(128, 280);
    two.mouseClick = function (e) {director.audioPlay('click')};

    var three = new CAAT.Foundation.Actor().setAsButton(
        numbers.getRef(), 9, 10, 11, 9, function(button) {
            if (text.length == MAX_NUMBER_LENGHT) return;
            text = text + '3';
            smallBubbleTextGame.
                setLocation(155, 210).
                setText(text);
        }
    ).setLocation(192, 280);
    three.mouseClick = function (e) {director.audioPlay('click')};

    var four = new CAAT.Foundation.Actor().setAsButton(
        numbers.getRef(), 12, 13, 14, 12, function(button) {
            if (text.length == MAX_NUMBER_LENGHT) return;
            text = text + '4';
            smallBubbleTextGame.
                setLocation(155, 210).
                setText(text);
        }
    ).setLocation(256, 280);
    four.mouseClick = function (e) {director.audioPlay('click')};

    var five = new CAAT.Foundation.Actor().setAsButton(
        numbers.getRef(), 15, 16, 17, 15, function(button) {
            if (text.length == MAX_NUMBER_LENGHT) return;
            text = text + '5';
            smallBubbleTextGame.
                setLocation(155, 210).
                setText(text);
        }
    ).setLocation(0, 344);
    five.mouseClick = function (e) {director.audioPlay('click')};

    var six = new CAAT.Foundation.Actor().setAsButton(
        numbers.getRef(), 18, 19, 20, 18, function(button) {
            if (text.length == MAX_NUMBER_LENGHT) return;
            text = text + '6';
            smallBubbleTextGame.
                setLocation(155, 210).
                setText(text);
        }
    ).setLocation(64, 344);
    six.mouseClick = function (e) {director.audioPlay('click')};

    var seven = new CAAT.Foundation.Actor().setAsButton(
        numbers.getRef(), 21, 22, 23, 21, function(button) {
            if (text.length == MAX_NUMBER_LENGHT) return;
            text = text + '7';
            smallBubbleTextGame.
                setLocation(155, 210).
                setText(text);
        }
    ).setLocation(128, 344);
    seven.mouseClick = function (e) {director.audioPlay('click')};

    var eit = new CAAT.Foundation.Actor().setAsButton(
        numbers.getRef(), 24, 25, 26, 24, function(button) {
            if (text.length == MAX_NUMBER_LENGHT) return;
            text = text + '8';
            smallBubbleTextGame.
                setLocation(155, 210).
                setText(text);
        }
    ).setLocation(192, 344);
    eit.mouseClick = function (e) {director.audioPlay('click')};

    var nine = new CAAT.Foundation.Actor().setAsButton(
        numbers.getRef(), 27, 28, 29, 27, function(button) {
            if (text.length == MAX_NUMBER_LENGHT) return;
            text = text + '9';
            smallBubbleTextGame.
                setLocation(155, 210).
                setText(text);
        }
    ).setLocation(256, 344);
    nine.mouseClick = function (e) {director.audioPlay('click')};

    var clearButton = new CAAT.Foundation.Actor().setAsButton(
        director.buttonsRef, 12, 13, 14, 12, function(button) {
            text = '';
            oldText = '';
            smallBubbleTextGame.
                setLocation(155, 210).
                setText(text);
        }
    ).setLocation(10, 420);
    clearButton.mouseClick = function (e) {director.audioPlay('click')};

    var tryButton = new CAAT.Foundation.Actor().setAsButton(
        director.buttonsRef, 15, 16, 17, 16, function(button) {
            if (oldText != '' && text == '') {
                return;
            }
            var newMessage = verifyGuess(text, low, high, randomNumber);
            bubbleTextGame.
                setLocation(105, 75).
                setText(newMessage);

            if (text != '') attempts++;
            attemptsTextGame.setText("Attempts: " + attempts);

            if (text == randomNumber) {
                gameScene.removeChild(clearButton);
                gameScene.removeChild(tryButton);
                gameScene.addChild(buttonPlayAgain);
                if (challenge) {
                    if (bestScore == '-' || bestScore > attempts) {
                        bestScore = parseInt(attempts);
                        localStorage.setItem('bestScore' + high, bestScore);
                        scoreTextGame.setText("Best: " + bestScore);
                    }
                }
            }

            oldText = parseInt(text);
            text = '';
        }
    ).setLocation(170, 420);
    tryButton.mouseClick = function (e) {director.audioPlay('click')};

    var buttonBackGame = new CAAT.Foundation.Actor().setAsButton(
        director.buttonsRef, 3, 4, 5, 3, function(button) {
            if (challenge) {
                launchChallenges(director, gameScene);
            } else {
                launchCustom(director, gameScene);
            }
        }
    ).setLocation(84, 0);
    buttonBackGame.mouseClick = function (e) {director.audioPlay('click')};

    var buttonPlayAgain = new CAAT.Foundation.Actor().setAsButton(
        director.buttonsRef, 6, 7, 8, 6, function(button) {
            bubbleTextGame.
                setLocation(105, 75).
                setText("Guess a number<br>from " + low + " to " + high);
            text = '';
            smallBubbleTextGame.
                setLocation(155, 210).
                setText(text);
            attempts = 0;
            attemptsTextGame.setText("Attempts: " + attempts);
            randomNumber = randomFromInterval(low, high);
            gameScene.removeChild(buttonPlayAgain);
            gameScene.addChild(clearButton);
            gameScene.addChild(tryButton);
        }
    ).setLocation(0, 420);
    buttonPlayAgain.mouseClick = function (e) {director.audioPlay('click')};

    var background = new CAAT.Foundation.ActorContainer().setLocation(0,0).setSize(320, 480).setBackgroundImage(director.getImage('bck'), true);

    gameScene.addChild(background);

    gameScene.addChild(buttonBackGame);
    gameScene.addChild(girlGame);
    gameScene.addChild(bubbleGame);
    gameScene.addChild(bubbleTextGame);
    if (challenge) {
        gameScene.addChild(scoreTextGame);
    }
    gameScene.addChild(attemptsTextGame);
    gameScene.addChild(boyGame);
    gameScene.addChild(bubbleSmallGame);
    gameScene.addChild(smallBubbleTextGame);
    gameScene.addChild(zero);
    gameScene.addChild(one);
    gameScene.addChild(two);
    gameScene.addChild(three);
    gameScene.addChild(four);
    gameScene.addChild(five);
    gameScene.addChild(six);
    gameScene.addChild(seven);
    gameScene.addChild(eit);
    gameScene.addChild(nine);
    gameScene.addChild(tryButton);
    gameScene.addChild(clearButton);

    return director.getSceneIndex(gameScene);
}

function launchGame(director, scene, from, to) {
    director.low = from;
    director.high = to;
    if (isChallenge(from, to)) {
        director.challenge = true;
    } else {
        director.challenge = false;
    }
    director.switchToScene(
        gameSetupScene(director),
        2000,
        false,
        true
    )
    if (scene) {
        scene.destroy();
    }
}

function isChallenge (from, to) {
    if (from == 1) {
        switch (to) {
            case 10:
            case 25:
            case 50:
            case 100:
            case 250:
            case 500:
            case 1000:
            case 5000:
                return true;
            default:
        }
    }

    return false;
}

function verifyGuess(guessing, low, high, number) {
    if (guessing == '') {
        return 'Enter a number';
    } else if (guessing > high) {
        return guessing + " is out of<br>the " + low + " to " + high + " range";
    } else if (guessing < low) {
        return guessing + " is out of<br>the " + low + " to " + high + " range";
    }

    if (number == guessing) {
        return 'Congratulations,<br>you guessed right!';
    } else if (guessing > number) {
        return guessing + ' is too high.<br>Try again...';
    } else if (guessing < number) {
        return guessing + ' is too low.<br>Try again...';
    } else {
        return 'What?';
    }
}

function randomFromInterval(from ,to)
{
    //default values
    from = from || 1;
    to = to || 100;

    return Math.floor(Math.random()*(to-from+1)+from);
}