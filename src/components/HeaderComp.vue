<script >
export default {
  name: 'HeaderComp',
  data() {
    return {
      navList: ['landing', 'pages', 'docs']

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
            <a href="#"><img src="../assets/img/logo-dark.png" alt="Landrick logo" width="130"></a>
          </div>
        </div>
        <div class="col-6">
          <!-- menu -->
          <div id="menu" class="d-flex justify-content-center">
            <ul>
              <li><a href="#">Home</a></li>
              <li v-for="item in navList"><a href="#">{{ item }}</a></li>
            </ul>
          </div>
        </div>
        <div class="col-3">
          <!-- icons -->
          <div id="nav-icons my_dropdown-toggle" class="text-end">
            <a href="#" class="square"><font-awesome-icon icon="fa-solid fa-magnifying-glass" /></a>
            <a href="#" class="square bg-color"><font-awesome-icon icon="fa-brands fa-github" /></a>
            <a href="#" class="square bg-color"><font-awesome-icon icon="fa-brands fa-stack-overflow" /></a>
            <a href="#" class="square bg-color"><font-awesome-icon icon="fa-regular fa-user" /></a>
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
  width: 100%;
  height: 50px;
  background-color: $bg-header;
}

.container {
  height: 100%;
}

ul {
  display: flex;
  margin: 0;
  gap: 1rem;

  li {
    text-transform: uppercase;
  }

}

.my_dropdown-toggle::after {
  content: url(../assets/img/chevron-down-solid.svg);
  display: inline-block;
  margin-left: 6px;
  width: 12px;
  vertical-align: sub;
}

.nav-item.dropdown:hover .my_dropdown-toggle::after {
  content: url(../assets/img/chevron-down-solid-hover.svg);
}

.nav-icons li {
  padding: 0 .2rem;

  a>font-awesome-icon {
    color: blanchedalmond !important;
  }
}

.square {
  // border: 1px solid $bg-icons-header;
  padding: 5px 8px 6px;
  margin: 0 3px;
  border-radius: .375rem;

}

.square.bg-color {
  background-color: $bg-icons-soft;
  -webkit-box-shadow: -8px 11px 9px -9px rgba(220, 226, 245, 1);
  -moz-box-shadow: -8px 11px 9px -9px rgba(220, 226, 245, 1);
  box-shadow: -8px 11px 9px -9px rgba(220, 226, 245, 1);
}


a {
  color: black
}
</style>
