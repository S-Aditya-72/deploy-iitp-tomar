import { client } from "@/sanity/lib/client";
import ProfileContent from "@/components/ProfileContent";

export const revalidate = 60; // Check for CMS updates every 60 seconds

export default async function ProfilePage() {
  // Fetch everything we need from the facultyProfile document
  const query = `*[_type == "facultyProfile"][0] {
    name,
    institute,
    department,
    researchInterest,
    education,
    experience,
    teachingBtech,
    teachingMsc,
    teachingMtech,
    teachingPhd
  }`;
  
  const data = await client.fetch(query);

  if (!data) {
    return (
      <div className="min-h-[50vh] flex items-center justify-center">
        <p className="text-slate-500 font-medium">Loading profile from CMS...</p>
      </div>
    );
  }

  return <ProfileContent data={data} />;
}