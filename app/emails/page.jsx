import prisma from './../(utils)/prisma';
export default async function EmailPage() {
  const data = await prisma.emails.findMany();
  console.log(data);
  return <div>Email Pages</div>;
}
