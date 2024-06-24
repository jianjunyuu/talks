import config from '@slidev/client/uno.config.ts'
import { mergeConfigs, presetIcons, presetWebFonts } from 'unocss'

export default mergeConfigs([
  config as any,
  {
    plugins: ['vue-tsc'],
    shortcuts: {
      'text-gradient': 'text-transparent bg-clip-text bg-gradient-to-tl from-green-400 via-teal-400 to-blue-500',
    },
    presets: [
      presetIcons({ /* options */ }),
      presetWebFonts({
        fonts: {
          sans: 'DM Sans',
          strong: 'Rubik Iso',
          fast: 'Ubuntu',
          hand: 'Caveat',
        },
      }),
    ],
  },
])
