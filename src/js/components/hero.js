Vue.component('hero', {
    data: () =>{
        return {
            show: false,
            moreInfoButton: "https://cdn2.iconfinder.com/data/icons/interface-part-2/32/plus-1024.png",
            isPlus:true
        }
    },
    props: ['key', 'name', 'role', 'portrait', 'message'],
    template: `
    <div class ="content">
        <img :src= "portrait" id="super1"/>
        <div class = "content1">
            <h1 class="hanzo">{{ name }}</h1>
            <div class ="occupa">
                <h2 class="occupancy">OCCUPANCY:</h2>
                <p class="textOccupancy">{{ role }}</p>
            </div>
            <button v-on:click="loadHeroInfo" class="crossB" ><img :src="moreInfoButton" class = "cross"/></button>
            <p v-show="show" >{{ message }}</p>
        </div>
    </div>
    `,
    methods: {
        loadHeroInfo(){
            if(this.isPlus){
                this.show = true;
                this.moreInfoButton = "https://img.favpng.com/12/7/14/symbol-plus-and-minus-signs-meno-png-favpng-yNuBrE3kHhxYn5tsff7PqhMrg.jpg";
                this.isPlus = false;
            }
            else{
                this.show = false;
                this.moreInfoButton = "https://cdn2.iconfinder.com/data/icons/interface-part-2/32/plus-1024.png";
                this.isPlus = true;
            }
        }
    },
    computed: {
        
    }
}
)
