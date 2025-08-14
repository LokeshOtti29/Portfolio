import React from "react";

interface ExperienceItem {
  company: string;
  role: string;
  duration: string;
  description: string[];
}

const Experience: React.FC = () => {
  const experiences: ExperienceItem[] = [
    {
      company: "Sankey Solutions",
      role: "Software Developer Intern",
      duration: "Mar 2025 - Jun 2025",
      description: [
        "Contributed to the development of the company’s HR management system aimed at streamlining internal processes and enhancing operational efficiency.",
        "Worked extensively on the frontend, focusing on resource management and parts of project management, including designing and implementing corresponding schemas using TypeScript, Next.js, and Tailwind CSS for a scalable and modern UI/UX.",
        "On the backend, developed complete modules for asset management and IT support, including schema design, API development, and integration using Strapi.",
      ],
    },
  ];

  return (
    <section id="experience" className="py-12 bg-gray-50">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-10">Experience</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-lg p-6 hover:shadow-lg transition-shadow duration-300"
            >
              <h5 className="text-xl font-semibold">{exp.role}</h5>
              <h6 className="text-indigo-600">{exp.company}</h6>
              <p className="text-gray-500 text-sm mb-4">{exp.duration}</p>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                {exp.description.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
