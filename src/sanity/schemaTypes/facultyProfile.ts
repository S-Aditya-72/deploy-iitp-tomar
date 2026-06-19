import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'facultyProfile',
  title: 'Faculty Profile',
  type: 'document',
  // Grouping everything into clean tabs for the Professor
  groups: [
    { name: 'personal', title: 'Personal Info' },
    { name: 'academics', title: 'Education & Teaching' },
    { name: 'research', title: 'Research & Projects' },
    { name: 'thesis', title: 'Theses Supervised' },
    { name: 'achievements', title: 'Honours & Memberships' },
  ],
  fields: [
    // --- 1. PERSONAL INFO ---
    defineField({ name: 'name', title: 'Full Name', type: 'string', group: 'personal' }),
    defineField({ name: 'designation', title: 'Designation', type: 'string', group: 'personal' }),
    defineField({ name: 'department', title: 'Department', type: 'string', group: 'personal' }),
    defineField({ name: 'institute', title: 'Institute', type: 'string', group: 'personal' }),
    defineField({ name: 'researchInterest', title: 'Research Interest', type: 'string', group: 'personal' }),
    defineField({ name: 'emails', title: 'Email Addresses', type: 'array', of: [{ type: 'string' }], group: 'personal' }),
    defineField({ name: 'phones', title: 'Phone Numbers', type: 'array', of: [{ type: 'string' }], group: 'personal' }),

    // --- 2. ACADEMICS (Education, Positions, Teaching) ---
    defineField({
      name: 'education', title: 'Education History', type: 'array', group: 'academics',
      of: [{
        type: 'object', fields: [
          { name: 'degree', title: 'Degree', type: 'string' },
          { name: 'institution', title: 'Institution', type: 'string' },
          { name: 'year', title: 'Year', type: 'string' },
        ]
      }]
    }),
    defineField({
      name: 'experience', title: 'Academic Positions', type: 'array', group: 'academics',
      of: [{
        type: 'object', fields: [
          { name: 'role', title: 'Role/Title', type: 'string' },
          { name: 'institution', title: 'Institution', type: 'string' },
          { name: 'duration', title: 'Duration', type: 'string' },
        ]
      }]
    }),
    // Teaching Responsibilities
    defineField({ name: 'teachingBtech', title: 'Teaching: UG (B.Tech)', type: 'array', of: [{ type: 'string' }], group: 'academics' }),
    defineField({ name: 'teachingMsc', title: 'Teaching: UG (M.Sc)', type: 'array', of: [{ type: 'string' }], group: 'academics' }),
    defineField({ name: 'teachingMtech', title: 'Teaching: PG (M.Tech)', type: 'array', of: [{ type: 'string' }], group: 'academics' }),
    defineField({ name: 'teachingPhd', title: 'Teaching: PG (PhD)', type: 'array', of: [{ type: 'string' }], group: 'academics' }),

    // --- 3. RESEARCH & PROJECTS ---
    defineField({ name: 'publications', title: 'Journal Publications', type: 'array', of: [{ type: 'text' }], group: 'research' }),
    defineField({ name: 'conferences', title: 'Conference Proceedings', type: 'array', of: [{ type: 'text' }], group: 'research' }),
    defineField({ name: 'workshopsOrganised', title: 'Workshops Organised', type: 'array', of: [{ type: 'text' }], group: 'research' }),
    defineField({
      name: 'projects', title: 'Sponsored Research Projects', type: 'array', group: 'research',
      of: [{
        type: 'object', fields: [
          { name: 'title', title: 'Project Title', type: 'string' },
          { name: 'agency', title: 'Funding Agency', type: 'string' },
          { name: 'duration', title: 'Duration', type: 'string' },
          { name: 'role', title: 'Role (e.g. PI / Co-PI)', type: 'string' },
        ]
      }]
    }),

    // --- 4. THESES SUPERVISED ---
    defineField({
      name: 'phdStudents', title: 'Ph.D. Students', type: 'array', group: 'thesis',
      of: [{
        type: 'object', fields: [
          { name: 'name', title: 'Student Name', type: 'string' },
          { name: 'title', title: 'Thesis Title', type: 'text' },
          { name: 'year', title: 'Year / Status', type: 'string' },
        ]
      }]
    }),
    defineField({
      name: 'mtechStudents', title: 'M.Tech Students', type: 'array', group: 'thesis',
      of: [{
        type: 'object', fields: [
          { name: 'name', title: 'Student Name', type: 'string' },
          { name: 'title', title: 'Thesis Title', type: 'text' },
          { name: 'year', title: 'Year / Status', type: 'string' },
        ]
      }]
    }),
    defineField({
      name: 'mscStudents', title: 'M.Sc Students', type: 'array', group: 'thesis',
      of: [{
        type: 'object', fields: [
          { name: 'name', title: 'Student Name(s)', type: 'string' },
          { name: 'year', title: 'Year', type: 'string' },
        ]
      }]
    }),
    
    // --- 5. ACHIEVEMENTS ---
    defineField({ name: 'honors', title: 'Honours & Awards', type: 'array', of: [{ type: 'text' }], group: 'achievements' }),
    defineField({ name: 'memberships', title: 'Professional Memberships', type: 'array', of: [{ type: 'string' }], group: 'achievements' }),
  ],
})