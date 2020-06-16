<template>
  <div id="app"
       class="flexbox">
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div> -->
    <div class="content">
      <router-view />
    </div>
  </div>
</template>

<style lang="less">
body,
html,
#app {
  padding: 0;
  margin: 0;
  height: 100%;
  flex-direction: column;
  justify-content: start;
}
.flexbox {
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.flexbox.between {
  justify-content: space-between;
}
.flexbox.a-start {
  align-items: flex-start;
}
.flexbox.j-end {
  justify-content: flex-end;
}
.flexbox.j-start {
  justify-content: flex-start;
}
.flexbox.j-center {
  justify-content: center;
}
.flexbox.a-start {
  align-items: start;
}
a {
  text-decoration: none;
}
p,
h1,
h2,
h3 {
  margin: 0;
  padding: 0;
}
input {
  border: none;
  outline: none;
}
li {
  margin-bottom: 0;
  list-style: none;
}
ul {
  padding: 0;
  margin: 0;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
  width: 100%;
  height: 100px;
  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
.content {
  width: 100%;
  flex: 1;
}
</style>
