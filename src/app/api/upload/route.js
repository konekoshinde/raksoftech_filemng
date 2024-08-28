import fs from 'fs';
import path from 'path';
import { NextResponse } from 'next/server';
import { put } from '@vercel/blob';


export async function POST(request) {
  
  //console.log(request.formData());
  const data = await request.formData();
  const file = data.get('file');

  if (!file) {
    return NextResponse.json({ message: 'No file uploaded' }, { status: 400 });
  }
  const upload = await put(file.name,file,{
    access:"public"

  })

  // const buffer = Buffer.from(await file.arrayBuffer());
  // const filePath = path.join(process.cwd(),'src', file.name);

  // fs.writeFileSync(filePath, buffer);

  return NextResponse.json(upload);
}
