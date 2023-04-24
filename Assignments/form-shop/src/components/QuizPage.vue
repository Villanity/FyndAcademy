<template>
  <div class="content">
    <center>
      <h2 class="question">{{ question }}</h2>
    </center>
      
      <ul>


        <div v-for="answer in answers" :key="answer">

              <p  :class="{
              'correct': selectedAnswer === correctAnswer,
              'incorrect': selectedAnswer !== correctAnswer && selectedAnswer !== null
            }" class="options" @click.once="checkAnswer(answer, $event)" :disabled="selectedAnswer === answer">{{ answer }}</p>

        </div>
        <button class="submitAnswer mt-2" id="submitAnswer" @click="loadQuestion()" :disabled="submitDisabled">Submit
          Answer</button>
      </ul>
      <center>
        You Scored {{ score }} / {{ lengthData }} with {{ wrongScore }} wrong answers. 

      </center>


  </div>
</template>

<script>
export default {
  data() {
    return {
      question: "",
      answers: [],
      correctAnswer: "",
      quizData: null,
      i: 0,
      lengthData: 0,
      score: 0,
      wrongScore : 0,
      selectedAnswer: null,
      submitDisabled: true,
    };
  },
  mounted() {
    this.loadQuestion();
  },
  methods: {
    loadQuestion() {
      fetch("https://api.npoint.io/42fd33fb769deaa7fdc0")
        .then((response) => response.json())
        .then((data) => {
          data = data.quizData;
          var quizData = data[this.i];
          // console.log(data);
          this.quizData = quizData;
          this.quizID = quizData.id;
          this.question = quizData.question;
          this.answers = quizData.answers;
          this.correctAnswer = quizData.correctAnswer;
          this.submitDisabled = true;
          this.lengthData = data.length;
          this.clickCounter = 0;
          if (this.i != data.length - 1) {
            this.i += 1;
          }
          if (this.selectedAnswer == '') {
            document.getElementById('#submitAnswer').disabled;
          }
        })
        .catch((error) => console.error(error));
    },

    checkAnswer(answer, event) {
        const answerElement = event.target;

      if (answer === this.correctAnswer) {
        answerElement.classList.add('correct');
        this.score += 1;
      } else {
        answerElement.classList.add('incorrect');
        this.wrongScore += 1;
      }
    
      this.selectedAnswer = null;
      this.submitDisabled = false;
      
    },

  },
};
</script>

<style>

@import url('https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&display=swap');

* {
    font-family: 'Lato', sans-serif;
}

body {
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-size: 300% 300%;
  background-image: linear-gradient(-45deg, yellow 0%, yellow 25%, yellow 51%, #ff357f 100%);
  -webkit-animation: AnimateBG 20s ease infinite;
          animation: AnimateBG 20s ease infinite;
}

@-webkit-keyframes AnimateBG {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}

@keyframes AnimateBG {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}

.question {
  padding: 40px;
  font-weight: 700;
}

.content {
  margin: auto;
}

.options {
  max-width: 600px;
  background: radial-gradient(circle, rgba(63,185,251,1) 0%, rgba(70,90,252,1) 100%);
  padding: 20px;
  color: white;
  cursor: pointer;
  border-radius: 5px;
}
.options:hover {
  background-color: rgb(69, 42, 165);
  background: linear-gradient(90deg, rgba(131,58,180,1) 0%, rgba(253,29,29,1) 50%, rgba(252,176,69,1) 100%);
}

.correct {
  /* background-color: rgb(0, 162, 19); */
  background: linear-gradient(90deg, rgba(58,180,137,1) 0%, rgba(29,253,87,1) 50%, rgba(105,252,69,1) 100%);
}

.incorrect {
  /* background-color: rgb(255, 0, 0); */
  background: linear-gradient(90deg, rgba(180,58,58,1) 0%, rgba(253,29,29,1) 50%, rgba(252,69,69,1) 100%);
}

.submitAnswer:disabled {
  /* background-color: #ff357f; */
  background: linear-gradient(90deg, rgb(113, 113, 113) 0%, rgb(107, 107, 107) 50%, rgb(94, 94, 94) 100%);
  padding: 15px;
  border-radius: 5px;
  color: rgb(255, 255, 255);
  border: none;
  cursor:crosshair;
}

.submitAnswer:enabled {
  /* background-color: #4935ff; */
  background: linear-gradient(90deg, rgba(58,180,137,1) 0%, rgba(29,253,87,1) 50%, rgba(105,252,69,1) 100%);
  padding: 15px;
  border-radius: 5px;
  color: rgb(0, 0, 0);
  border: none;
  cursor: pointer;
}
</style>