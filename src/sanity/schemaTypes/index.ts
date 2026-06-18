import { type SchemaTypeDefinition } from 'sanity'
import personalInfo from './facultyProfile' // Import the file you just made

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [personalInfo], // Add it to the array
}