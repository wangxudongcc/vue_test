<template>
  <div class="box">
    <figure>
      <img src="../../assets/bangbang.jpg" />
      <figcaption>bangbang</figcaption>
    </figure>
  </div>
</template>
<script></script>
<style>
figure {
  display: inline-grid;
}

figure > img {
  width: 400px;
}

figure > img,
figure > figcaption {
  grid-area: 1/1/2/3;
}

figcaption {
  align-self: end;
  text-align: center;
  background-color: #0009;
  color: aqua;
  line-height: 2;
}

/* figcaption{
        background-color: #0009;
        color: white;
        text-align: center;
        line-height: 2;
       margin-top: -2rem;
        position: relative; 
    } */
</style>
