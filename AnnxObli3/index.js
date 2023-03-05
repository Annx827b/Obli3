Vue.createApp({
    data() {
      return {
        word: null,
        words: [],
        noWords: ""
      }
    },
    methods: {
        showWord(word) {
            if (word) {
                this.words = [word, word.toUpperCase(), word.toLowerCase(), word[0].toUpperCase().concat(word.slice(1)), 
                    word.toLowerCase(0).slice(0, -1).concat(word.slice(-1).toUpperCase()), word.charAt(0), word.split("").reverse().join("")];
                this.noWords= "";
            }
            else {
                this.words = [];
                this.noWords = "Du har ikke tastet noget ord! Prøv igen!"
            }
        }
    }
  }).mount("#app");