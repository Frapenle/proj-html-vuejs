<script >
export default {
  name: 'HeaderComp',
  data() {
    return {
      navList: ['home', 'landing', 'pages', 'docs']

    }
  },
}

//import
</script>

<template>
  <header>
    <div class="container">
      <div class="row h-100 d-flex align-items-center">
        <div class="col-3">
          <!-- logo -->
          <div id="logo">
            <img src="../assets/img/logo-dark.png" alt="Landrick logo" width="120">
          </div>
        </div>
        <div class="col-6">
          <!-- menu -->
          <div id="menu" class="d-flex justify-content-center">
            <ul>
              <li v-for="item in navList"><a href="#">{{ item.toUpperCase() }}</a></li>
            </ul>
          </div>
        </div>
        <div class="col-3">
          <!-- icons -->
          <div id="nav-icons" class="text-end">
            <a href="#" class="square"><font-awesome-icon icon="fa-solid fa-magnifying-glass" /></a>
            <a href="#" class="square"><font-awesome-icon icon="fa-brands fa-github" /></a>
            <a href="#" class="square"><font-awesome-icon icon="fa-brands fa-stack-overflow" /></a>
            <a href="#" class="square"><font-awesome-icon icon="fa-regular fa-user" /></a>
          </div>
        </div>

      </div>

    </div>
  </header>

</template>

<style lang="scss" scoped>
@use '../styles/general.scss' as *;
@use '../styles/partials/variables' as *;
@use "bootstrap/scss/bootstrap.scss" as *;

header {
  height: 50px;
  background-color: red;
}

.container {
  height: 100%;
}

ul {
  display: flex;
  margin: 0;
  gap: 1rem;

  .menu li {
    padding: 0 4rem;
  }
}

.nav-icons li {
  padding: 0 .2rem;
}

.square {
  border: 1px solid yellow;
  padding: 4px 7px 5px;
  border-radius: .375rem;
}

a {
  color: black
}
</style>
