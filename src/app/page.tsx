import { prisma } from '@/lib/prisma';
import { SMTPServer } from '@prisma/client';

export default async function SMTPPage() {
  const servers: SMTPServer[] = await prisma.sMTPServer.findMany();

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-4">SMTP Servers</h1>
      <table className="table-auto border">
        <thead>
          <tr>
            <th className="border p-2">Name</th>
            <th className="border p-2">Host</th>
            <th className="border p-2">Port</th>
            <th className="border p-2">Username</th>
          </tr>
        </thead>
        <tbody>
          {servers.map((server: SMTPServer) => (
            <tr key={server.id}>
              <td className="border p-2">{server.name}</td>
              <td className="border p-2">{server.host}</td>
              <td className="border p-2">{server.port}</td>
              <td className="border p-2">{server.username}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}