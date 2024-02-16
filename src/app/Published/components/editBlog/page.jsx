import EditTopicForm from "@/components/EditTopicForm";

const getBlogById = async (id) => {
  try {
    const res = await fetch(`/api/published/${id}`, {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("Failed to fetch Published");
    }

    return res.json();
  } catch (error) {
    console.log(error);
  }
};

export default async function EditBlog({ params }) {
  const { id } = params;
  const { topic } = await getBlogById(id);
  const { title, description } = topic;

  return <EditTopicForm id={id} title={title} description={description} />;
}
