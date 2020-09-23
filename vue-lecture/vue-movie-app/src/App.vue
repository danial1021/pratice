<template>
  <v-app>
    <v-container class="pt-10">
      <search-bar />
      <!-- 검색바 -->
      <movie-list />
      <!-- 영화 목록 -->
    </v-container>
  </v-app>
</template>

<script>
import SearchBar from '@/components/SearchBar'
import MovieList from '@/components/MovieList'

export default {
  name: 'App',
  components: {
    SearchBar,
    MovieList
  }
};
</script>
