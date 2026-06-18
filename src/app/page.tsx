import { client } from "@/sanity/lib/client";
import HomeContent from "@/components/HomeContent";

// ISR (Incremental Static Regeneration): 
// This tells Next.js to check Sanity for updates every 60 seconds.
// This is how production sites stay incredibly fast while remaining up-to-date!
export const revalidate = 60;

export default async function Home() {
  // GROQ Query: Fetch the very first document of type 'personalInfo'
  const query = `*[_type == "personalInfo"][0]`;
  
  // Securely fetch data from Sanity CMS
  const personalData = await client.fetch(query);

  // Fallback state if nothing is published yet
  if (!personalData) {
    return (
      <div className="min-h-[50vh] flex items-center justify-center">
        <p className="text-slate-500 font-medium">Loading data from CMS...</p>
      </div>
    );
  }

  // Pass the live data to our animated client component!
  return <HomeContent personal={personalData} />;
}