<template>
  <div class="content">
    <center>
      <h2>{{ question }}</h2>
    <ul>

      <div v-for="answer in answers" :key="answer">
        
        <p class="options" @click="selectedAnswer = answer">{{ answer }}</p> 
      
      </div>
      <button @click="checkAnswer(selectedAnswer)">Submit Answer</button>
    </ul>

    {{ score }}
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
      i : 0,
      score: 0,
      selectedAnswer: null
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
          if (this.i != data.length-1) {
            this.i += 1;
          }
        })
        .catch((error) => console.error(error));
    },

    checkAnswer(answer) {

      if (answer === this.correctAnswer) {
          this.score += 1;
      }
      this.selectedAnswer = null;
      this.loadQuestion();
    }
  },
};
</script>

<style>

body{
  background-color: rgb(22, 0, 37);
  color: white;
}

.content {
  max-width: 500px;
  margin-top: 30vh;
  margin-left: 30vw;
  /* margin: auto; */
}

  .options {
    background-color: brown;
    padding: 20px;
    color: white;
  }

</style>