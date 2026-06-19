import { client } from "@/sanity/lib/client";
import ProjectsContent from "@/components/ProjectsContent";

export const revalidate = 60;

export default async function ProjectsPage() {
  const query = `*[_type == "facultyProfile"][0] { projects }`;
  const data = await client.fetch(query);

  if (!data) return <div className="min-h-[50vh] flex items-center justify-center">Loading...</div>;

  return <ProjectsContent data={data} />;
}