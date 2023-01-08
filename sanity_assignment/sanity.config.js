import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'

export default defineConfig({
  name: 'default',
  title: 'sanity-assignment',

  projectId: '363h58m7',
  dataset: 'production',
  apiVersion: '2023-06-01',

  plugins: [deskTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
})
