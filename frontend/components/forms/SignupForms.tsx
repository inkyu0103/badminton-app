import { useState, Fragment } from "react";
import { Listbox, Transition } from "@headlessui/react";
import { CheckIcon, ChevronUpDownIcon } from "@heroicons/react/20/solid";
import Calendar from "components/forms/Calendar";

const ranks = [
  { id: 1, name: "S조" },
  { id: 2, name: "A조" },
  { id: 3, name: "B조" },
  { id: 4, name: "C조" },
  { id: 5, name: "D조" },
  { id: 6, name: "E조" },
];

const genders = [
  { id: 0, name: "남성" },
  { id: 1, name: "여성" },
];

const SignupForms = () => {
  const [rank, setRank] = useState(ranks[0]);
  const [gender, setGender] = useState(genders[0]);
  const [date, setDate] = useState(new Date());
  return (
    // screen 100vh 수정
    <form className="h-screen flex flex-col gap-y-2 mx-auto w-[328px] justify-center">
      <p className="text-2xl font-semibold text-center">회원가입</p>
      <label className="text-sm">
        이메일
        <input
          value="inkyu0103@gmail.com"
          className="w-full py-2 text-sm rounded-md shadow-md outline-none indent-2 disabled:text-slate-500 disabled:bg-slate-200"
          disabled
        />
      </label>

      <label className="text-sm">
        비밀번호
        <input
          type="password"
          className="w-full py-2 text-sm rounded-md shadow-md cursor-pointer outline outline-1 outline-white hover:outline-blue-200 indent-2"
          placeholder="사용하실 비밀번호를 입력해주세요"
          pattern="/^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,16}$/"
          required
        />
      </label>

      <label className="text-sm">
        비밀번호 확인
        <input
          type="password"
          className="w-full py-2 text-sm rounded-md shadow-md cursor-pointer outline outline-1 outline-white hover:outline-blue-200 indent-2"
          placeholder="비밀번호를 한 번 더 입력해주세요"
          required
        />
      </label>

      <label className="text-sm">
        생년월일
        <Calendar value={date} handleChangeDate={setDate} />
      </label>

      <Listbox value={rank} onChange={setRank}>
        <div className="relative mt-1">
          <Listbox.Label className="text-sm">급수</Listbox.Label>
          <Listbox.Button className="relative w-full py-2 pl-3 pr-10 text-left bg-white rounded-lg shadow-md cursor-default focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-blue-300 sm:text-sm hover:outline hover:outline-1 hover:outline-blue-200">
            <span className="block truncate">{rank.name}</span>
            <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
              <ChevronUpDownIcon
                className="w-5 h-5 text-gray-400"
                aria-hidden="true"
              />
            </span>
          </Listbox.Button>
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Listbox.Options className="absolute z-10 w-full py-1 mt-1 overflow-auto text-base bg-white rounded-md shadow-lg z-1 max-h-60 ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm ">
              {ranks.map((rank, rankIdx) => (
                <Listbox.Option
                  key={rankIdx}
                  className={({ active }) =>
                    `relative cursor-default select-none py-2 pl-10 pr-4 ${
                      active ? "bg-blue-100 text-blue-900" : "text-gray-900"
                    }`
                  }
                  value={rank}
                >
                  {({ selected }) => (
                    <>
                      <span
                        className={`block truncate ${
                          selected ? "font-medium" : "font-normal"
                        }`}
                      >
                        {rank.name}
                      </span>
                      {selected ? (
                        <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-blue-600">
                          <CheckIcon className="w-5 h-5" aria-hidden="true" />
                        </span>
                      ) : null}
                    </>
                  )}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Transition>
        </div>
      </Listbox>

      <Listbox value={gender} onChange={setGender}>
        <div className="relative mt-1">
          <Listbox.Label className="text-sm">성별</Listbox.Label>
          <Listbox.Button className="relative w-full py-2 pl-3 pr-10 text-left bg-white rounded-lg shadow-md cursor-default focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-blue-300 sm:text-sm hover:outline hover:outline-1 hover:outline-blue-200">
            <span className="block truncate">{gender.name}</span>
            <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
              <ChevronUpDownIcon
                className="w-5 h-5 text-gray-400"
                aria-hidden="true"
              />
            </span>
          </Listbox.Button>
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Listbox.Options className="absolute z-10 w-full py-1 mt-1 overflow-auto text-base bg-white rounded-md shadow-lg max-h-60 ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
              {genders.map((gender, genderIdx) => (
                <Listbox.Option
                  key={genderIdx}
                  className={({ active }) =>
                    `relative cursor-default select-none py-2 pl-10 pr-4 ${
                      active ? "bg-blue-100 text-blue-900" : "text-gray-900"
                    }`
                  }
                  value={gender}
                >
                  {({ selected }) => (
                    <>
                      <span
                        className={`block truncate ${
                          selected ? "font-medium" : "font-normal"
                        }`}
                      >
                        {gender.name}
                      </span>
                      {selected ? (
                        <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-blue-600">
                          <CheckIcon className="w-5 h-5" aria-hidden="true" />
                        </span>
                      ) : null}
                    </>
                  )}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Transition>
        </div>
      </Listbox>

      <button className="w-full h-9 bg-blue-300 rounded-md hover:cursor-pointer hover:text-white max-w-[328px] duration-300 ease-out hover:bg-blue-500 font-semibold">
        회원가입
      </button>
    </form>
  );
};
export default SignupForms;
