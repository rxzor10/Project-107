classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/5p6eMCs9Y/',modelLoaded);
function startClassification()
{
  navigator.mediaDevices.getUserMedia({audio: true});
  classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/5p6eMCs9Y/', modelReady);
}

function modelReady(){
   classifier.classify(gotResults);
}