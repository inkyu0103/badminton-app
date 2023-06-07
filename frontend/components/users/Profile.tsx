const Profile = () => {
  return <ProfileView />;
};
export default Profile;

export const ProfileView = () => {
  return (
    <div className="h-full min-w-mb max-w-[1200px] mx-auto">
      <div className="flex flex-col items-center border-2 gap-y-1">
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

      <div className="border-2 border-red-100 ">
        <p className="text-xl font-semibold">나의 라켓 리뷰</p>
      </div>
      <div className="border-2 border-red-100 ">
        <p className="text-xl font-semibold">대회 출전 목록</p>
      </div>
      <div className="border-2 border-red-100 ">
        <p className="text-xl font-semibold">내 소모임 목록</p>
      </div>
    </div>
  );
};
