import Head from "next/head";
import { FileInput, Label } from 'flowbite-react';

// import { api } from "~/utils/api";

export default function Application() {
  // const hello = api.post.hello.useQuery({ text: "from tRPC" });

  return (
    <>
      <Head>
        <title>Application Page</title>
      </Head>
      <main className="flex min-h-screen flex-col items-center justify-center">
        <div className="container flex flex-col gap-12 px-4 py-16 ">
          <p>First Name: <input type="text"/> </p>
          <p>Middle Name: <input type="text"/> </p>
          <p>Last Name: <input type="text"/> </p>
          <div>
            <p>Upload Resume</p>
            <div>
              <FileInput id="file-upload-helper-text" helperText="PNG DOCX or DOC " />
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
