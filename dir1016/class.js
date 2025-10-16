class Scores {

    constructor (name, korean, english, math) {
        this.name = name
        this.korean = korean
        this.math = math
        this.english = english
    }

    average() {
        let avg;
        let count = 0;

        if (this.korean == null && this.math == null && this.english == null) {
             avg = "\'수강내역 없음\'"
             return avg;
        }else if (this.korean == null || this.math == null || this.english == null) {
            if (this.korean == null) count++;
            if (this.math == null) count++;
            if (this.english == null) count++;

            avg = (this.korean + this.math + this.english) / (3-count);
            return avg;
        }else {
            avg = (this.korean + this.math + this.english) / 3;
            return avg;
        }
    }
}

let scores = [
     new Scores('김철수', 70, 80, 90),
     new Scores('박영희', 100, null, 50),
     new Scores('최민수', 50, 65, 70)
    ]

for (let score of scores) {
    console.log(`${score.name}의 평균은 ${score.average()}입니다.`)
}

//김철수의 국어 성적 출력
for (let score of scores) {
    if (score.name == '김철수') {
        console.log(`${score.name}의 국어 점수는 ${score.english}점입니다.`)
    }
}