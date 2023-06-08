const ProfileSkeleton = () => (
  <div>
    <div className=" p-4 max-w-[1200px] mx-auto ">
      <div className="mx-auto ">
        <div className="flex flex-col items-center animate-pulse gap-y-1">
          <div className="block rounded-full bg-slate-200 w-28 h-28 "></div>
          <div className="w-[60px] h-[20px] rounded bg-slate-200" />
          <div className="w-[74px] h-[20px] rounded bg-slate-200" />
          <div className="w-[150px] h-[20px] rounded bg-slate-200" />
        </div>
      </div>
      <div className="mt-4 ">
        <p className="text-lg font-semibold">나의 라켓 리뷰 🏸</p>
        <div className="w-full h-32 rounded bg-slate-200 animate-pulse " />
      </div>
      <div className="mt-4">
        <p className="text-lg font-semibold">대회 출전 목록 🏆</p>
        <div className="w-full h-32 rounded bg-slate-200 animate-pulse" />
      </div>
      <div className="mt-4">
        <p className="text-lg font-semibold">내 소모임 목록 🏃🏼</p>
        <div className="w-full h-32 rounded bg-slate-200 animate-pulse" />
      </div>
    </div>
  </div>
);
export default ProfileSkeleton;
