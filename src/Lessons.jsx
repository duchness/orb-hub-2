import Profile from "./Profile.jsx";

export default function Lessons() {
  return (
    <div className="flex flex-col gap-y-2 pb-2 px-16">
      <Profile />
      <div className="card card-compact bg-base-100 w-96 shadow-xl">
        <figure>
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/J-op9ibnJEg"
            title="ORB University 20240710 234209 Meeting Recording"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            Shoes!
            <div className="badge badge-secondary">NEW</div>
          </h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <div className="card-actions justify-end">
            <div className="badge badge-outline">Fashion</div>
            <div className="badge badge-outline">Products</div>
          </div>
        </div>
      </div>
      <div className="collapse collapse-plus bg-base-200">
        <input type="checkbox" />
        <div className="collapse-title text-base font-bold">
          Click me to show/hide content
        </div>
        <div className="collapse-content">
          <div>
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/J-op9ibnJEg"
              title="ORB University 20240710 234209 Meeting Recording"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen
            ></iframe>
          </div>
          <p className="text-sm">date</p>
          <p className="text-sm">tag</p>
          <p className="text-sm">presented</p>
          <p className="text-sm">name</p>
          <p className="text-sm">resource files</p>
          <p className="text-sm">link</p>
        </div>
      </div>
    </div>
  );
}
