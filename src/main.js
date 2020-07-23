// bootstrap
import BootstrapVue from 'bootstrap-vue'
//global stylesheet
import '~/assets/style/styles.scss'
import DefaultLayout from '~/layouts/Default.vue'

export default function (Vue, { head }) {
  Vue.component('Layout', DefaultLayout)
  Vue.use(BootstrapVue)
  head.link.push({
    rel: 'stylesheet',
    href: encodeURI(
      'https://fonts.googleapis.com/css?family=Muli:400,400i,700|Roboto:700&display=swap',
    ),
  })
  head.link.push({
    rel: 'stylesheet',
    href: encodeURI(
      'https://use.fontawesome.com/releases/v5.6.1/css/all.css',
    ),
    integrity: 'sha384-gfdkjb5BdAXd+lj+gudLWI+BXq4IuLW5IT+brZEZsLFm++aCMlF1V92rMkPaX4PP',
    crossorigin: 'anonymous'
  })
}
