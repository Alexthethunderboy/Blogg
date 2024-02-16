import EditPublishedForm from "../EditPublishedForm";

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
  const { published } = await getBlogById(id);
  const { title, tag, tagImage, Readtime, story } = published;

  return <EditPublishedForm id={id} title={title} tag={tag} tagImage={tagImage} Readtime={Readtime} story={story}  />;
}
