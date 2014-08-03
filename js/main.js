/*
 *
 */
function gameInit() {
    CAAT.DEBUG=false;
    CAAT.TOUCH_BEHAVIOR = CAAT.TOUCH_AS_MOUSE;

    CAAT.Module.Initialization.TemplateWithSplash.init(
        /* canvas will be 320x480 pixels */
        320, 480,

        /* and will be added to the end of document. set an id of a canvas or div element */
        'game',

        /* keep splash at least this 5000 milliseconds */
        2000,
        //1,

        /*
         load these images and set them up for non splash scenes.
         image elements must be of the form:
         {id:'<unique string id>',    url:'<url to image>'}

         No images can be set too.
         */
        [
            {id:'girl', url:'img/guess-girl.png'},
            {id:'boy', url:'img/guess-boy.png'},
            {id:'bubble', url:'img/speech-bubble-medium.png'},
            {id:'bubbleSmall', url:'img/speech-bubble-small.png'},
            {id:'1star', url:'img/1star.png'},
            {id:'2star', url:'img/2star.png'},
            {id:'3star', url:'img/3star.png'},
            {id:'bck', url:'img/background.jpg'},
            {id:'bck2', url:'img/background2.jpg'},
            {id:'buttons', url:'img/sprt-buttons.png'},
            {id:'buttons1toX', url:'img/sprt-buttons-1tox.png'},
            {id:'numbers', url:'img/sprt-numbers.png'}
        ],
        /*
         onEndSplash callback function.
         Create your scenes on this method.
         */
        preSets,
        /*
         use this image as splash. It will cover all of director's area. optional.
         */
        "img/splash/back-to-school.png",
        /*
         use this image as rotating spinner. optional.
         */
        "img/splash/spinner100.png"
    );
}

//function gameInitOld(){
//
//    CAAT.DEBUG = true;
//    CAAT.TOUCH_BEHAVIOR = CAAT.TOUCH_AS_MOUSE;
//
//    //var director = new CAAT.Director().initialize(window.innerWidth, window.innerHeight, 'game').setClear(true);
//    var director = new CAAT.Director().initialize(320, 480, 'game').setClear(true);
//
//    director.
////        addAudio('mm', document.getElementById('music')).
//        addAudio('click', document.getElementById('click')).
//        addAudio('rollover', document.getElementById('rollover'));
//
////    director.audioLoop('mm');
//
//    // preload images
//    new CAAT.ImagePreloader().loadImages(
//        [
//            {id:'girl', url:'img/guess-girl.png'},
//            {id:'boy', url:'img/guess-boy.png'},
//            {id:'bubble', url:'img/speech-bubble-medium.png'},
//            {id:'bubbleSmall', url:'img/speech-bubble-small.png'},
//            {id:'buttons', url:'img/sprt-buttons.png'},
//            {id:'buttons1toX', url:'img/sprt-buttons-1tox.png'},
//            {id:'numbers', url:'img/sprt-numbers.png'}
//        ],
//        function(counter, images) {
//            if (counter == images.length) {
//                director.setImagesCache(images);
//                launchMenu(director, false);
//            }
//        }
//    );
//
//    CAAT.loop(60);
//}

window.addEventListener('load', gameInit, false);