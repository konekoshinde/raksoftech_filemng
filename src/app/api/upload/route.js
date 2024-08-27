import fs from 'fs';
import path from 'path';
import { NextResponse } from 'next/server';

export const config = {
  api: {
    bodyParser: false,
  },
};

export async function POST(request) {
  const data = await request.formData();
  const file = data.get('file');

  if (!file) {
    return NextResponse.json({ message: 'No file uploaded' }, { status: 400 });
  }

  const buffer = Buffer.from(await file.arrayBuffer());
  const filePath = path.join(process.cwd(), 'public', file.name);

  fs.writeFileSync(filePath, buffer);

  return NextResponse.json({ message: 'File uploaded successfully' });
}
