import { Fragment } from "react";
import { Listbox, Transition } from "@headlessui/react";
import { CheckIcon, ChevronUpDownIcon } from "@heroicons/react/20/solid";
import Calendar from "components/forms/Calendar";
import { useVerifyTokenQuery } from "query/auth/verifyEmailToken";
import { useForm } from "react-hook-form";
import useSignupMutation from "query/auth/signup";
import { CreateUser } from "interface/User.interface";
import ranks from "constants/ranks";
import genders from "constants/genders";

const SignupForms = () => {
  const { data } = useVerifyTokenQuery();
  const { mutate: signupUser } = useSignupMutation();
  const handleSignup = (user: CreateUser) => signupUser(user);

  return <SignupFormsView email={data?.email} handleSignup={handleSignup} />;
};
export default SignupForms;

export const SignupFormsView = ({ email, handleSignup }) => {
  const {
    register,
    watch,
    formState: { errors },
    handleSubmit,
    setValue,
    getValues,
  } = useForm<CreateUser>({
    defaultValues: {
      email,
      password: "",
      passwordConfirm: "",
      birthday: new Date(),
      rank: "S",
      gender: "남성",
    },
  });

  return (
    <form
      className="h-screen flex flex-col gap-y-2 mx-auto w-[328px] justify-center"
      onSubmit={handleSubmit((user) => handleSignup(user))}
    >
      <p className="text-2xl font-semibold text-center">회원가입</p>
      <label className="text-sm">
        이메일
        <input
          className="w-full py-2 text-sm rounded-md shadow-md outline-none indent-2 disabled:text-slate-500 disabled:bg-slate-200"
          disabled
          {...register("email")}
        />
      </label>

      <label className="text-sm">
        비밀번호
        <input
          type="password"
          className="w-full py-2 text-sm rounded-md shadow-md cursor-pointer outline outline-1 outline-white hover:outline-blue-200 indent-2"
          placeholder="사용하실 비밀번호를 입력해주세요"
          {...register("password", {
            required: {
              value: true,
              message: "비밀번호를 입력해주세요",
            },
            pattern: {
              value: /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,16}$/,
              message: "8자 이상의 숫자, 글자, 특수문자가 필요합니다. ",
            },
          })}
        />
        <p className="mt-1 text-red-600">
          {errors["password"]?.message?.toString()}
        </p>
      </label>

      <label className="text-sm">
        비밀번호 확인
        <input
          type="password"
          className="w-full py-2 text-sm rounded-md shadow-md cursor-pointer outline outline-1 outline-white hover:outline-blue-200 indent-2"
          placeholder="비밀번호를 한 번 더 입력해주세요"
          {...register("passwordConfirm", {
            required: {
              value: true,
              message: "비밀번호를 한 번 더 입력해주세요",
            },
            validate: (value) =>
              value === watch("password") || "비밀번호와 일치하지 않습니다.",
          })}
        />
        <p className="mt-1 text-red-600">
          {errors["passwordConfirm"]?.message?.toString()}
        </p>
      </label>

      <label className="text-sm">
        생년월일
        <Calendar
          value={watch("birthday")}
          handleChangeDate={(birthday) => {
            setValue("birthday", birthday);
          }}
        />
      </label>

      <Listbox
        value={getValues("rank")}
        onChange={(rank) => {
          setValue("rank", rank);
        }}
      >
        <div className="relative mt-1 ">
          <Listbox.Label className="text-sm">급수</Listbox.Label>
          <Listbox.Button className="relative w-full py-2 pl-3 pr-10 text-left bg-white rounded-lg shadow-md cursor-default focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-blue-300 sm:text-sm hover:outline hover:outline-1 hover:outline-blue-200 hover:cursor-pointer">
            <span className="block truncate">{`${watch("rank")}조`}</span>
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
                  value={rank.value}
                >
                  {({ selected }) => (
                    <>
                      <span
                        className={`block truncate ${
                          selected ? "font-medium" : "font-normal"
                        }`}
                      >
                        {`${rank.value}조`}
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

      <Listbox
        value={getValues("gender")}
        onChange={(gender) => {
          setValue("gender", gender);
        }}
      >
        <div className="relative mt-1">
          <Listbox.Label className="text-sm">성별</Listbox.Label>
          <Listbox.Button className="relative w-full py-2 pl-3 pr-10 text-left bg-white rounded-lg shadow-md cursor-default focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-blue-300 sm:text-sm hover:outline hover:outline-1 hover:outline-blue-200 hover:cursor-pointer">
            <span className="block truncate">{watch("gender")}</span>
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
              {genders.map((gender) => (
                <Listbox.Option
                  key={gender.id}
                  className={({ active }) =>
                    `relative cursor-default select-none py-2 pl-10 pr-4 ${
                      active ? "bg-blue-100 text-blue-900" : "text-gray-900"
                    }`
                  }
                  value={gender.value}
                >
                  {({ selected }) => (
                    <>
                      <span
                        className={`block truncate ${
                          selected ? "font-medium" : "font-normal"
                        }`}
                      >
                        {gender.value}
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
