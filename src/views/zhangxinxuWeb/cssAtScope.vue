<template>
    <div>
        <nav>
  <ul>
    <li><a href="">链接1</a></li>
    <li><a href="">链接2</a></li>
    <li><a href="">链接3</a></li>
  </ul>
</nav>
<p><a>我呢？</a></p>
    </div>
</template>
<script></script>
<style>
@scope(nav) to (p){
    :scope{
        border:double red;
    }
    ul {
    list-style: none;
    padding: 0;margin: 0;
  }
  li {
    display: inline-block;
  }
  a {
    display: block;
    padding: 6px 12px;
    text-decoration: none;
    background: skyblue;
  }
}
</style>
