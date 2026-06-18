import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'facultyProfile',
  title: 'Faculty Profile',
  type: 'document',
  // This groups the dashboard into clean tabs for him!
  groups: [
    { name: 'personal', title: 'Personal Info' },
    { name: 'academics', title: 'Education & Positions' },
    { name: 'research', title: 'Research & Publications' },
    { name: 'achievements', title: 'Honours & Memberships' },
  ],
  fields: [
    // --- PERSONAL INFO ---
    defineField({ name: 'name', title: 'Full Name', type: 'string', group: 'personal' }),
    defineField({ name: 'designation', title: 'Designation', type: 'string', group: 'personal' }),
    defineField({ name: 'department', title: 'Department', type: 'string', group: 'personal' }),
    defineField({ name: 'institute', title: 'Institute', type: 'string', group: 'personal' }),
    defineField({ name: 'researchInterest', title: 'Research Interest', type: 'string', group: 'personal' }),
    defineField({ name: 'emails', title: 'Email Addresses', type: 'array', of: [{ type: 'string' }], group: 'personal' }),
    defineField({ name: 'phones', title: 'Phone Numbers', type: 'array', of: [{ type: 'string' }], group: 'personal' }),

    // --- ACADEMICS ---
    defineField({
      name: 'education', title: 'Education History', type: 'array', group: 'academics',
      of: [{
        type: 'object',
        fields: [
          { name: 'degree', title: 'Degree', type: 'string' },
          { name: 'institution', title: 'Institution', type: 'string' },
          { name: 'year', title: 'Year', type: 'string' },
        ]
      }]
    }),
    defineField({
      name: 'experience', title: 'Academic Positions', type: 'array', group: 'academics',
      of: [{
        type: 'object',
        fields: [
          { name: 'role', title: 'Role/Title', type: 'string' },
          { name: 'institution', title: 'Institution', type: 'string' },
          { name: 'duration', title: 'Duration (e.g., 2017-Present)', type: 'string' },
        ]
      }]
    }),

    // --- RESEARCH ---
    defineField({ name: 'publications', title: 'Journal Publications', type: 'array', of: [{ type: 'text' }], group: 'research' }),
    defineField({ name: 'conferences', title: 'Conference Proceedings', type: 'array', of: [{ type: 'text' }], group: 'research' }),
    
    // --- ACHIEVEMENTS ---
    defineField({ name: 'honors', title: 'Honours & Awards', type: 'array', of: [{ type: 'text' }], group: 'achievements' }),
    defineField({ name: 'memberships', title: 'Professional Memberships', type: 'array', of: [{ type: 'string' }], group: 'achievements' }),
  ],
})