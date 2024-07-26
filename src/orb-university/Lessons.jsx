import { lessonsData } from "./LessonsData.jsx";

export default function Lessons() {
  return (
    <div>
      <ul className="flex flex-col gap-y-2 pb-2 px-16">
        {lessonsData.map((lesson) => (
          <li className="collapse collapse-plus bg-base-200">
            <input type="checkbox" />
            <div className="collapse-title text-base font-bold">
              {lesson.title}
            </div>
            <div className="collapse-content">
              <div>{lesson.description}</div>
              <div>{lesson.date}</div>
              <div>{lesson.tag}</div>
              <div>{lesson.presented}</div>
              <div>{lesson.files}</div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
