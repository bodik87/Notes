export function BookMenuIcon({ condition }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="4" fill="none">
      <path
        fill="#3B82F6"
        className={`${condition ? "fill-myBlue" : "fill-[#fff]"}`}
        d="M4 2a2 2 0 1 1-4 0 2 2 0 0 1 4 0ZM11 2a2 2 0 1 1-4 0 2 2 0 0 1 4 0ZM18 2a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z"
      />
    </svg>
  );
}

export function BookIcon({ condition }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none">
      <path
        className={`${condition ? "fill-[#2165C3]" : "fill-[#fff]"}`}
        d="M7.25 7A.75.75 0 0 1 8 6.25h8a.75.75 0 0 1 0 1.5H8A.75.75 0 0 1 7.25 7ZM8 9.75a.75.75 0 0 0 0 1.5h5a.75.75 0 0 0 0-1.5H8Z"
      />
      <path
        className={`${condition ? "fill-[#2165C3]" : "fill-[#fff]"}`}
        fillRule="evenodd"
        d="M9.945 1.25c-1.367 0-2.47 0-3.337.117-.9.12-1.658.38-2.26.981-.602.602-.86 1.36-.981 2.26-.117.867-.117 1.97-.117 3.337v8.11c0 1.367 0 2.47.117 3.337.12.9.38 1.658.981 2.26.602.602 1.36.86 2.26.982.867.116 1.97.116 3.337.116h4.11c1.367 0 2.47 0 3.337-.116.9-.122 1.658-.38 2.26-.982.602-.602.86-1.36.982-2.26.116-.867.116-1.97.116-3.337v-8.11c0-1.367 0-2.47-.116-3.337-.122-.9-.38-1.658-.982-2.26-.602-.602-1.36-.86-2.26-.981-.867-.117-1.97-.117-3.337-.117h-4.11ZM5.41 3.409c.277-.277.665-.457 1.4-.556.754-.101 1.756-.103 3.191-.103h4c1.435 0 2.436.002 3.192.103.734.099 1.122.28 1.399.556.277.277.457.665.556 1.4.101.754.103 1.756.103 3.191v7.25H7.782c-.818 0-1.376 0-1.855.128a3.748 3.748 0 0 0-1.177.548V8c0-1.435.002-2.437.103-3.192.099-.734.28-1.122.556-1.399Zm-.632 14.84c.015.354.039.665.076.943.099.734.28 1.122.556 1.399.277.277.665.457 1.4.556.754.101 1.756.103 3.191.103h4c1.435 0 2.436-.002 3.192-.103.734-.099 1.122-.28 1.399-.556.277-.277.457-.665.556-1.4.083-.615.099-1.395.102-2.441H7.898c-.978 0-1.32.006-1.583.077a2.25 2.25 0 0 0-1.538 1.422Z"
        clipRule="evenodd"
      />
    </svg>
  );
}

export function TrashIcon({ condition }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        className={`${condition ? "stroke-[#6196E0]" : "stroke-[#fff]"}`}
        d="m18 6-.8 12.013c-.071 1.052-.106 1.578-.333 1.977a2 2 0 0 1-.866.81c-.413.2-.94.2-1.995.2H9.994c-1.055 0-1.582 0-1.995-.2a2 2 0 0 1-.866-.81c-.227-.399-.262-.925-.332-1.977L6 6M4 6h16m-4 0-.27-.812c-.263-.787-.394-1.18-.637-1.471a2 2 0 0 0-.803-.578C13.938 3 13.524 3 12.694 3h-1.388c-.829 0-1.244 0-1.596.139a2 2 0 0 0-.803.578c-.243.29-.374.684-.636 1.471L8 6m6 4v7m-4-7v7"
      />
    </svg>
  );
}

export function SelectIcon({ condition }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none">
      <path
        className={`${condition ? "fill-[#6196E0]" : "fill-[#fff]"}`}
        fillRule="evenodd"
        d="M2.25 6A.75.75 0 0 1 3 5.25h17a.75.75 0 0 1 0 1.5H3A.75.75 0 0 1 2.25 6Zm18.211 4.409a.75.75 0 0 1 .13 1.052l-3.9 5a.75.75 0 0 1-1.165.021l-2.1-2.5a.75.75 0 1 1 1.148-.964l1.504 1.79 3.33-4.27a.75.75 0 0 1 1.053-.13ZM2.25 11a.75.75 0 0 1 .75-.75h7a.75.75 0 0 1 0 1.5H3a.75.75 0 0 1-.75-.75Zm0 5a.75.75 0 0 1 .75-.75h7a.75.75 0 0 1 0 1.5H3a.75.75 0 0 1-.75-.75Z"
        clipRule="evenodd"
      />
    </svg>
  );
}
