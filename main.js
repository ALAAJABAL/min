
function startclassification()
{
    navigator.mediaDevices.getUserMedia({audio:true});
    classifier=ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/HSxSAFAwh/model.json',modelready);
}
function modelready()
{
    classifier.classify(gotresults);
    console.log ("Mr:Alaa Abujabal");
}
function gotresults(error,results)
{
    if(error)
    {
        console.log(error);
    }
    else
    {
        console.log(results);
    }
    document.getElementById("result_label").innerHTML="I Can Hear - "+results[0].label;
    document.getElementById("result_confidence").innerHTML="Accuracy - "+(results[0].confidence*100).toFixed(2)+"%";
    img=document.getElementById("ear");
   
   if(results[0].label=="Dog")
    { 
        img.src='dog.png';
    }
    else if(results[0].label=="Cat")
    { 
        img.src='cat.png';
    }
    else if(results[0].label=="Background Noise")
    { 
        img.src='ear.jpg';
       
    }
}