import { lessonsData } from "./LessonsData.jsx";

export default function LessonsExample() {
  return (
    <div>
      <ul
        role="list"
        className="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2"
      >
        {lessonsData.map((lesson) => (
          <li key={lesson.title}>
            <div className="flex items-center gap-x-6">
              <div>
                <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900">
                  {lesson.title}
                </h3>
                <p className="text-sm font-semibold leading-6 text-indigo-600">
                  {lesson.description}
                </p>
                <p className="text-sm font-semibold leading-6 text-indigo-600">
                  {lesson.date}
                </p>
                <p className="text-sm font-semibold leading-6 text-indigo-600">
                  {lesson.tag}
                </p>
                <p className="text-sm font-semibold leading-6 text-indigo-600">
                  {lesson.presented}
                </p>
                <p className="text-sm font-semibold leading-6 text-indigo-600">
                  {lesson.files}
                </p>
                <p className="text-sm font-semibold leading-6 text-indigo-600">
                  {lesson.video}
                </p>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
