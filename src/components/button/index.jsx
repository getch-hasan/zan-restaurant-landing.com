import Link from "next/link";

export const PrimaryButton = (props) => {
  return (
    <div className="flex ">
      <Link
        href={`${props?.link}`}
        type="submit"
        className="flex items-center rounded-full text-sm bg-primary  px-5 py-2 shadow-xl "
        disabled={props.loading}
      >
        {props.loading ? (
          <svg
            className={`${
              props.loading ? "animate-spin" : ""
            } mr-3 h-5 w-5  text-white`}
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              stroke-width="4"
            ></circle>
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            ></path>
          </svg>
        ) : (
          ""
        )}
        <span className="font-bold  font-openSans"> {props.name} </span>
      </Link>
    </div>
  );
};
