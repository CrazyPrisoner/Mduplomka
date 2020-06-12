<template>
  <div class="slider">
    <ul class="slides">
      <li v-for="(img, index) in images" :key = "index">
        <img :src="img.url">
        <div class="caption center-align">
          <h3>{{img.title}}</h3>
          <h5 class="light grey-text text-lighten-3">{{img.subtitle}}</h5>
        </div>
      </li>
    </ul>
  </div>
      
</template>

<script>
document.addEventListener('DOMContentLoaded', function() {
  var options = {
    indicators : true,
    height : 400,
    duration : 500,
    interval : 6000
  }
  var elems = document.querySelectorAll('.slider');
  var instances = M.Slider.init(elems, options);
});
export default {
  data () {
    return {
      images : [
        {
          title : "This is our big Tagline!",
          subtitle : "Here's our small slogan.",
          url : "https://lorempixel.com/580/250/nature/1"
        },
        {
          title : "Left Aligned Caption",
          subtitle : "Here's our small slogan.",
          url : "https://lorempixel.com/580/250/nature/2"
        },
        {
          title : "This is our big Tagline!",
          subtitle : "Here's our small slogan.",
          url : "https://lorempixel.com/580/250/nature/3"
        },
        {
          title : "This is our big Tagline!",
          subtitle : "Here's our small slogan.",
          url : "https://lorempixel.com/580/250/nature/4"
        }
      ]
    }
  }
}

</script>

<style>
  


</style>
