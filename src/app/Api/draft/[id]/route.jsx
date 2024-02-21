import connect from "@/Utils/mongodb";
import DraftBlog from "@/models/DraftBlog";
import { NextResponse } from "next/server";

export async function PUT(request, { params }) {
  const { id } = params;
  const { newTitle: title, newTag: tag, newTagImage: tagImage, newReadtime: readtime, newStory: story} = await request.json();
  await connect();
  await DraftBlog.findByIdAndUpdate(id, { title, tag, tagImage, readtime, story });
  return NextResponse.json({ message: "Draft Blog updated" }, { status: 200 });
}

export async function GET(request, { params }) {
  const { id } = params;
  await connect();
  const drafted = await DraftBlog.findOne({ _id: id });
  return NextResponse.json({ drafted }, { status: 200 });
}

