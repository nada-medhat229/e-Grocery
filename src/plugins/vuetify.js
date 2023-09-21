// Styles
import '@mdi/font/css/materialdesignicons.css'
import '@fortawesome/fontawesome-free/css/all.css'
import { aliases,fa } from 'vuetify/iconsets/fa'
import 'vuetify/styles'

// Vuetify
import { createVuetify } from 'vuetify'

export default createVuetify(
{
  icons:{
    iconfont:'md'||'fa'||'md',
    aliases,
    sets:{
      fa,
    }
  }
})
