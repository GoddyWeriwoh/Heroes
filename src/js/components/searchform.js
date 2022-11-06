Vue.component('search-form', {
    data: () => {
        return {
            searchInput: ""
        }
    },
    template: `
      <form v-on:submit.prevent="search">
      <input type="text"  id="searchBox" placeholder=" search something..." v-model="searchInput">
      <input type="submit" value="search" id="button">
      </form>`,
    methods: {
        search(event) {
            console.log('http://localhost:3000/api/list?search=' + this.searchInput)
    
            fetch('http://localhost:3000/api/list?search=' + this.searchInput)
          .then(response => response.json())
          .then(response => { this.$root.Heroes = response;
            
            });
        
        }
    }
}
)