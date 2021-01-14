<template>
  <div class="h-screen flex items-center justify-center bg-pink-600">
      <form @submit.prevent="handleSubmit">
          <div class="text-white text-5xl">Го на дейт?</div>
          <div class="flex flex-col">
            <label class="text-white" for="message">Оставить коментарий</label>
            <textarea v-model="message" name="message" id="" cols="30" rows="4"></textarea>
          </div>
          <button type="submit" class="text-white text-2xl m-5 bg-pink-800 p-5 rounded-md">Да!</button>
          <button type="submit" class="text-white text-2xl m-5 bg-pink-800 p-5 rounded-md">Ну го</button>
          <button disabled class="text-white text-xs m-5 bg-pink-800 p-3 rounded-md">нет, отстань</button>
      </form>
  </div>
</template>

<script>
export default {
    data() {
        return {
            message: ''
        }
    },
    methods: {
        handleSubmit: function() {
            let data = {message: this.message}

            fetch('/.netlify/functions/tgMessage/tgMessage.js', {
                headers: {
                    "content-type": "application/json"
                    },
                method: "POST",
                body: JSON.stringify(data)
            }).then(() => {
                console.log('fetch then')
            }).catch(() => {
                console.log('fetch error')
            })
        }
    }

}
</script>

<style>

</style>