const Profile = () => {
  return <ProfileView />;
};
export default Profile;

export const ProfileView = () => {
  return (
    <div>
      <div className=" p-4 max-w-[1200px] mx-auto ">
        <div className="flex flex-col items-center gap-y-1">
          <label className="block bg-blue-300 rounded-full w-28 h-28 hover:cursor-pointer">
            <input
              type="file"
              accept="image/*"
              className="hidden"
              id="file-upload"
            />
          </label>
          <p className="text-xl font-semibold">김모배</p>
          <p className="text-base font-semibold">20대 남 A조</p>
          <p>testUser1@test.com</p>
        </div>

        <div className="flex flex-col gap-y-4">
          <div className="mt-4 border-red-100">
            <p className="text-lg font-semibold">나의 라켓 리뷰 🏸</p>
            <div className="flex items-center justify-center w-full h-32 border-2 rounded">
              <p className="text-base font-semibold">지원 예정입니다 😥</p>
            </div>
          </div>
          <div className="border-red-100 ">
            <p className="text-lg font-semibold">대회 출전 목록 🏆</p>
            <div className="flex items-center justify-center w-full h-32 border-2 rounded">
              <p className="text-base font-semibold">지원 예정입니다 😥</p>
            </div>
          </div>
          <div className="border-red-100 ">
            <p className="text-lg font-semibold">내 소모임 목록 🏃🏼</p>
            <div className="flex items-center justify-center w-full h-32 border-2 rounded">
              <p className="text-base font-semibold">지원 예정입니다 😥</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
