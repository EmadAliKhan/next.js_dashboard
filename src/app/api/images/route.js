import fs from 'fs';
import path from 'path';

export async function GET() {
  const dir = path.join(process.cwd(), 'public/images/images2');
  const files = fs.readdirSync(dir);
  return new Response(JSON.stringify(files));
}