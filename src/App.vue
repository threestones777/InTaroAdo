<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <nav class="navbar navbar-expand-sm fixed-top navbar-dark" style="background-color: #6a2c70">
      <div class="container-fluid">
        <a class="navbar-brand" href="/">InTaroAdo</a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarScroll"
          aria-controls="navbarScroll"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarScroll">
          <ul class="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="/">首页</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/Machine">精雕</a>
            </li>
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                机械
              </a>
              <ul class="dropdown-menu" style="background-color: #ff8400">
                <li>
                  <a class="dropdown-item" href="#">SolidWorks</a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </header>
  <div style="margin-top: 66px">
    <RouterView />
  </div>
</template>

<style scoped></style>
