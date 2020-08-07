<template>
  <Layout>
    <b-row class="align-items-start">
      <transition name="fade" appear>
        <b-col tag="main" cols="12" lg="12" class="bg-white p-0 rounded shadow-lg">
          <div class="overflow-hidden p-4 p-sm-5 ">
            <h1 class="text-center text-uppercase h5 font-family-sans-serif mb-5">
              Tag: {{ $page.tag.title }}
            </h1>
            <Post :post="node" v-for="{ node } in $page.tag.belongsTo.edges" :key="node.id" />
            <Pagination :info="$page.tag.belongsTo.pageInfo" />
          </div>
        </b-col>
      </transition>
    </b-row>
    <NewsletterForm />
  </Layout>
</template>

<page-query>
query Tag($path: String, $page: Int) {
  tag: wordPressPostTag(path: $path) {
    title
    belongsTo(page: $page, perPage: 10) @paginate {
      pageInfo {
        totalPages
        currentPage
      }
      edges {
        node {
          ... on WordPressPost {
            date
            id
            title
            path
            content
            excerpt
            categories {
              id
              title
              path
            }
            author {
              name
              path
            }
          }
        }
      }
    }
  }
}
</page-query>

<script>
import Post from '~/components/Post.vue'
import Pagination from '~/components/Pagination.vue'
import NewsletterForm from '~/components/NewsletterForm.vue'

export default {
  components: {
    Post,
    Pagination,
    NewsletterForm
  },
  metaInfo() {
    return {
      title: this.$page.tag.title,
    }
  },
}
</script>
