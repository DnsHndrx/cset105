function Average(){
    var exams= ['e1','e2','e3'];
    var sumgrad= 0;
    for(var i in exams){
        sumgrad+=exams[i]
    }
    var examCnt=exams.length
    var mean= sumgrad/examCnt
    console.log(mean);
}