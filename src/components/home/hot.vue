<template>
    <div class="row course-cards">
    <div v-for="(card_bj, index) in cards" :key="index" class="col s12 m3">
      <div class="card">
        <div class="card-image">
          <img :src="card_bj.image">
          <span class="card-title">{{card_bj.title}}</span>
        </div>
        <div class="card-content">
          <p>{{card_bj.description}}</p>
        </div>
        <div class="card-action">
          <router-link tag="button" class="btn waves-effect waves-light" type="button" name="action" :to="'/course?id=' + index">More</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
 export default {

    data:() => ({
      cards: [
        {
          title: "Listening",
          description : "Learn english language with listening",
          image : "https://digitalpianoexpert.org/wp-content/uploads/2018/11/actor-adult-back-view-374832.jpg"
        },
        {
          title: "Reading",
          description : "Learn english language with reading",
          image : "https://www.fluentu.com/blog/english/wp-content/uploads/sites/4/2015/07/how-to-improve-english-reading-skills.jpg"
        },
        {
          title: "Writing",
          description : "Learn english language with writing",
          image : "https://st2.depositphotos.com/8956756/11886/i/950/depositphotos_118866746-stock-photo-young-teacher-writing-english-grammar.jpg"
        },
        {
          title: "Speaking",
          description : "Learn english language with speaking",
          image : "https://miro.medium.com/max/1400/1*2cLJVbjnO4VgdAgETlTEOQ.png"
        },
      ]
    })
    
 }
 
0
</script>

<style lang="scss" scoped>
.course-cards{
  display: flex;
  margin: 0 0 3rem;
}
.card{
  display: flex;
  justify-content: space-between;
  flex-flow: column;
  height: 100%;
}
 .card-content{
   p{
     font-size: 1rem;
   }
 }
 .card-image{
   height: 220px;
   img{
    height: 100%;
    object-fit: cover;
   }
   span{
     z-index: 1;
     text-align: center;
     &::before{
       content: '';
       position: absolute;
       background-color: rgba(0, 0, 0, 0.476);
       width: 100%;
       height: 38px;
       left: 0px;
       z-index: -1;
     }
   }
 }
 .card-action{
   a {
     font-size: 1rem;
   }
 }
 .course-cards {
  margin-top: 2rem; 
 }

</style>