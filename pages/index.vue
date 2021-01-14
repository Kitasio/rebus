<template>
  <div class="h-screen flex items-center justify-center">
    <div class="sm:w-1/2 bg-gray-200 flex flex-col rounded-lg shadow-lg">
      <div class="flex m-5 justify-between">
        <input v-model="firstWord" type="text">
        <p>'?' is a red gemstone (misspelled with 'i')</p>
      </div>
      <div class="self-center">+</div>
      <div class="flex m-5 justify-between">
        <input v-model="secondWord" type="text">
        <p>'?' is one of the names you can't name files in windows system</p>
      </div>
      <div class="self-center">=</div>
      <div class="flex m-5 justify-between">
        <input v-model="answer" type="text">
        <p>'?' crossed the <span id="answer" :class="{'text-green-500': rightGuess}">{{ firstWord }}{{ secondWord }}</span></p>
      </div>
      <button @click="check">Submit!</button>
      <div v-if="rightGuess" class="text-center">
        <nuxt-link to="/caesar">Мои поздравления, нажимай на меня</nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      firstWord: '',
      secondWord: '',
      rightGuess: false,
      rightAnswer: 'caesar',
      answer: ''
    }
  },
  methods: {
    handleSubmit: function(context) {

    },
    check: function() {
      let userText = document.getElementById("answer").innerText
      console.log(this.answer)
      if(this.answer === this.rightAnswer) {
        this.rightGuess = true
      }
    }
  }
}
</script>

<style>
/* Sample `apply` at-rules with Tailwind CSS
.container {
@apply min-h-screen flex justify-center items-center text-center mx-auto;
}
*/
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family:
    'Quicksand',
    'Source Sans Pro',
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    'Helvetica Neue',
    Arial,
    sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
