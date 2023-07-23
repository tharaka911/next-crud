// import Link from "next/link";
// import RemoveBtn from "./RemoveBtn";
// import { HiPencilAlt } from "react-icons/hi";

// export default async function TopicsList() {
//   const { topics } = await getTopics();

//   return (
//     <>
//       {topics?.map((t) => (
//         <div className="p-4 border border-slate-300 my-3 flex justify-between gap-5" key={t._id} >
//           <div>
//             <h2 className="font-bold text-2xl">{t.title}</h2>
//             <div>{t.description}</div>
//           </div>

//           <div className="flex gap-2 items-start">
//             <RemoveBtn />
//             <Link href={`/editTopic/${t._id}`}>
//               <HiPencilAlt size={24} />
//             </Link>
//           </div>
//         </div>
//       ))}
//     </>
//   );
// }

// const getTopics = async () => {
//   const res = await fetch("http://localhost:3000/api/topics", {
//     caches: "no-store",
//   });

//   if (!res.ok) {
//     throw new Error("Failed to fetch topics");
//   }

//   const topics = await res.json();

//   return topics;
// };


import Link from "next/link";
import RemoveBtn from "./RemoveBtn";
import { HiPencilAlt } from "react-icons/hi";

const getTopics = async () => {
  const res = await fetch("http://localhost:3000/api/topics", {
    caches: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch topics");
  }

  const topics = await res.json();

  return topics;
};

export default async function TopicsList() {
  try {
    const { topics } = await getTopics();

    return (
      <>
        {topics.map((t) => (
          <div className="p-4 border border-slate-300 my-3 flex justify-between gap-5" key={t._id}>
            <div>
              <h2 className="font-bold text-2xl">{t.title}</h2>
              <div>{t.description}</div>
            </div>

            <div className="flex gap-2 items-start">
              <RemoveBtn />
              <Link href={`/editTopic/${t._id}`}>
                <HiPencilAlt size={24} />
              </Link>
            </div>
          </div>
        ))}
      </>
    );
  } catch (error) {
    return <div>Error: {error.message}</div>;
  }
}

