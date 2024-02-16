// import EditTopicForm from "@/components/EditTopicForm";
import PublishedList from "../publishedLists/PublishedList";

const getTopicById = async (id) => {
  try {
    const res = await fetch(`http://localhost:3001/api/topics/${id}`, {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("Failed to fetch topic");
    }

    return res.json();
  } catch (error) {
    console.log(error);
  }
};
// title, tag, tagImage, readtime, story

export default async function EditPublished({ params }) {
  const { id } = params;
  const { topic } = await getTopicById(id);
  const { title, description } = topic;

  return <PublishedList id={id} title={title} description={description} />;
}
