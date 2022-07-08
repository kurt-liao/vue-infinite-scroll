import InfiniteScroll from './components/infinite-scroll'
import type { App } from 'vue'
import type { SFCPlugin } from './components/types'

const plugin = InfiniteScroll as SFCPlugin<typeof InfiniteScroll>

plugin.install = (app: App) => {
  app.directive('InfiniteScroll', plugin)
}

export default plugin
