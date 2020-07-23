<template>
  <Layout>
    <home />
    <services />
    <about />
    <projects />
    <partners />
    <contact />
  </Layout>
</template>

<script>
import About from './../components/landing/About'
import Services from './../components/landing/Services'
import Contact from './../components/landing/Contact'
import Home from './../components/landing/Home'
import Partners from './../components/landing/Partners'
import Projects from './../components/landing/Projects'

export default {
  metaInfo: {
    title: 'Hello, Hack!',
  },
  components: {
    Services,
    About,
    Home,
    Contact,
    Partners,
    Projects,
  },
}
</script>
