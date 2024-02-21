import EditDraftedForm from "../EditDraftedForm";

const getBlogById = async (id) => {
  const res = await fetch(`http://localhost:3000/api/draft/${id}`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch Published");
  }

  return res.json();
};

export default async function EditBlog({ params }) {
  const { id } = params;
  const { drafted } = await getBlogById(id);
  const { title, tag, tagImage, readtime, story } = drafted;

  return <EditDraftedForm id={id} title={title} tag={tag} tagImage={tagImage} readtime={readtime} story={story} />;
}
