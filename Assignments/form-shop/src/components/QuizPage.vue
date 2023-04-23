<template>
  <div class="content">
    <center>
      <h2>{{ question }}</h2>
      <ul>

        <div v-for="answer in answers" :key="answer">

          <!-- <p :class="{
          'correct': selectedAnswer === correctAnswer,
          'incorrect': selectedAnswer !== correctAnswer && selectedAnswer !== null}" class="options" @click="selectedAnswer = answer, this.submitDisabled = false">{{ answer }}</p> -->

          <!-- <p class="options" @click="selectedAnswer = answer, this.submitDisabled = false">{{ answer }}</p> -->

          <p :class="{
              'correct': selectedAnswer === correctAnswer,
              'incorrect': selectedAnswer !== correctAnswer && selectedAnswer !== null
            }" class="options" @click="checkAnswer(answer, $event)">{{ answer }}</p>


        </div>
        <button class="btn btn-primary" id="submitAnswer" @click="loadQuestion()" :disabled="submitDisabled">Submit
          Answer</button>
      </ul>

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
          console.log(data);
          this.quizData = quizData;
          this.quizID = quizData.id;
          this.question = quizData.question;
          this.answers = quizData.answers;
          this.correctAnswer = quizData.correctAnswer;
          this.submitDisabled = true;
          this.lengthData = data.length;
          if (this.i != data.length - 1) {
            this.i += 1;
          }
          if (this.selectedAnswer == '') {
            document.getElementById('#submitAnswer').disabled;
          }
        })
        .catch((error) => console.error(error));
    },

    // checkAnswer(answer) {
    //   if (answer === this.correctAnswer) {
    //     this.score += 1;
    //   }
    //   this.selectedAnswer = null;
    //   this.loadQuestion();
    // }

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
body {
  background-color: rgb(22, 0, 37);
  color: white;
}

.content {
  max-width: 500px;
  margin: auto;
}

.options {
  background-color: brown;
  padding: 20px;
  color: white;
  cursor: pointer;
  border-radius: 10px;
}

.options:hover {
  background-color: rgb(69, 42, 165);
}

.correct {
  background-color: rgb(0, 162, 19);
}

.incorrect {
  background-color: rgb(255, 0, 0);
}
</style>