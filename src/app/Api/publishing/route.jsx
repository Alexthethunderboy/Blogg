import connect from "@/Utils/mongodb";
import Published from "@/models/Published";
import PublishedBlog from "@/models/PublishedBlog";
import { NextResponse } from "next/server";

export const POST = async (request) => {
  const { title, tag, tagImage, readtime, story } = await request.json();
  await connect();
  try{
  await Published.create({ title, tag, tagImage, readtime, story });
  return new NextResponse({ message: "Your work has been successfully Published" },{ status: 201 });
  }catch(err){
    return new NextResponse({ message: "failed to Publish" },{ status: 500 });
  }

//   await PublishedBlog.create({ title, description });
//   const newPublishedBlog = new PublishedBlog({
//     title,
//     tag,
//     tagImage,
//     readtime,
//     story,
//   });

//   try {
//     await newPublishedBlog.save();
//     return new NextResponse({ message: "Your work has been successfully Published" },{ status: 201 });
//   } catch (err) {
//     return new NextResponse(err, { status: 500 });
//   }
};

// export async function GET() {
//   await connect();
//   const PublishedBlog = await PublishedBlog.find();
//   return NextResponse.json({ PublishedBlog });
// }

// export async function DELETE(request) {
//   const id = request.nextUrl.searchParams.get("id");
//   await connect();
//   await PublishedBlog.findByIdAndDelete(id);
//   return NextResponse.json(
//     { message: "Your work has been successfully deleted" },
//     { status: 200 }
//   );
// }

// {
//     "title":"first title",
//     "tag":"first tag",
//     "tagImage":"tagimage ",
//     "readtime":"time time",
//     "story":"story story",
// }
