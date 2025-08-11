import { skills } from "../constants/skills";

export default function Skills() {
  return (
    <div className="flex flex-col items-center justify-center gap-6 px-4 py-4 w-full">
      <div className="flex flex-row w-full">
        <h1 className="flex justify-end text-2xl font-bold">Skills & Tools</h1>
      </div>
      <div className="flex flex-wrap gap-3">
      {skills.map((skill) => {
        const Icon = skill.icon;
        return (
          <div
            key={skill.name}
            className="flex items-center gap-2 border border-gray-200 shadow-sm px-3 py-1 rounded-lg bg-white text-gray-700"
          >
            <Icon className={skill.colorClass} /> {skill.name}
          </div>
        );
      })}
    </div>
    </div>
  );
}
