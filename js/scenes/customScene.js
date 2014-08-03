function customSetupScene(director) {
    var customScene = director.createScene().setFillStyle('#fff');
    var numbers = new CAAT.Foundation.SpriteImage().initialize(
        director.getImage('numbers'), 10, 3);

    var MAX_NUMBER_LENGHT = 4;
    var text = '',
        oldText = '',
        low = '',
        high = '';

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
        setText("I'm thinking of a<br>number! Enter low.").
        setLocation(105, 70);

    var lowTextGame = new CAAT.Foundation.UI.Label().
        setStyle("default", {
            fontSize : 20
        }).
        setText("From: " + low).
        setLocation(10, 220);

    var highTextGame = new CAAT.Foundation.UI.Label().
        setStyle("default", {
            fontSize : 20
        }).
        setText("To: " + high).
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
                setLocation(160, 210).
                setText(text);
        }
    ).setLocation(0,280);
    zero.mouseClick = function (e) {director.audioPlay('click')};

    var one = new CAAT.Foundation.Actor().setAsButton(
        numbers.getRef(), 3, 4, 5, 3, function(button) {
            if (text.length == MAX_NUMBER_LENGHT) return;
            text = text + '1';
            smallBubbleTextGame.
                setLocation(160, 210).
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

    var numbersContainer = new CAAT.Foundation.ActorContainer().setLocation(0,0).setSize(320, 480);
    numbersContainer.addChild(zero);
    numbersContainer.addChild(one);
    numbersContainer.addChild(two);
    numbersContainer.addChild(three);
    numbersContainer.addChild(four);
    numbersContainer.addChild(five);
    numbersContainer.addChild(six);
    numbersContainer.addChild(seven);
    numbersContainer.addChild(eit);
    numbersContainer.addChild(nine);

    var clearButton = new CAAT.Foundation.Actor().setAsButton(
        director.buttonsRef, 12, 13, 14, 12, function(button) {
            text = '';
            oldText = '';
            low = '';
            high = '';
            smallBubbleTextGame.
                setLocation(155, 210).
                setText(text);
            bubbleTextGame.
                setLocation(105, 75).
                setText("I'm thinking of a<br>number! Enter low.");
            highTextGame.setText("To: " + high);
            lowTextGame.setText("From:" + low);
        }
    ).setLocation(10, 420);
    clearButton.mouseClick = function (e) {director.audioPlay('click')};

    var selectButton = new CAAT.Foundation.Actor().setAsButton(
        director.buttonsRef, 27, 28, 29, 30, function(button) {
            if ((oldText != '' && text == '') || (oldText == '' && text == '')) {
                return;
            }
            if (low && text <= low ) {
                var message = text + " is lower than " + low + "!<br>Enter a higher one.";
                if (text == low) {
                    message = text + " is equal than " + low + "!<br>Enter a higher one.";
                }
                bubbleTextGame.
                    setLocation(105, 75).
                    setText(message);
                oldText = parseInt(text);
                text = '';
                smallBubbleTextGame.
                    setLocation(155, 210).
                    setText(text);
                return;
            }
            if (!low) {
                low = parseInt(text);
                lowTextGame.setText("From: " + low);
                bubbleTextGame.
                    setLocation(105, 75).
                    setText("I'm thinking of a<br>number! Enter high.");
            } else {
                high = parseInt(text);
                highTextGame.setText("To: " + high);
                bubbleTextGame.
                    setLocation(105, 75).
                    setText("Guess a number<br>from " + low + " to " + high);
                smallBubbleTextGame.
                    setLocation(155, 210).
                    setText('');
                numbersContainer.setVisible(false);
                customScene.removeChild(clearButton);
                customScene.removeChild(selectButton);
                customScene.addChild(buttonStart);
            }

            oldText = parseInt(text);
            text = '';
        }
    ).setLocation(170, 420);
    selectButton.mouseClick = function (e) {director.audioPlay('click')};

    var buttonBackGame = new CAAT.Foundation.Actor().setAsButton(
        director.buttonsRef, 9, 10, 11, 9, function(button) {
            launchMenu(director, customScene);
        }
    ).setLocation(84, 0);
    buttonBackGame.mouseClick = function (e) {director.audioPlay('click')};

    var buttonStart = new CAAT.Foundation.Actor().setAsButton(
        director.buttonsRef, 0, 1, 2, 0, function(button) {
            launchGame(director, customScene, low, high);
        }
    ).setLocation(150, 420);
    buttonStart.mouseClick = function (e) {director.audioPlay('click')};

    var background = new CAAT.Foundation.ActorContainer().setLocation(0,0).setSize(320, 480).setBackgroundImage(director.getImage('bck'), true);

    customScene.addChild(background);
    customScene.addChild(girlGame);
    customScene.addChild(bubbleGame);
    customScene.addChild(bubbleTextGame);
    customScene.addChild(lowTextGame);
    customScene.addChild(highTextGame);
    customScene.addChild(boyGame);
    customScene.addChild(bubbleSmallGame);
    customScene.addChild(smallBubbleTextGame);
    customScene.addChild(numbersContainer);
    customScene.addChild(buttonBackGame);
    customScene.addChild(selectButton);
    customScene.addChild(clearButton);

    return director.getSceneIndex(customScene);
}

function launchCustom(director, scene) {
    director.switchToScene(
        customSetupScene(director),
        2000,
        false,
        true
    )
    if (scene) {
        scene.destroy();
    }
}