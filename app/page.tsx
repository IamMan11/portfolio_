import Image from "next/image";


export default function Home() {
  return (
    <div className="font-sans text-gray-800">
    <header className="bg-gray-400 text-white text-center py-6">
    <Image
        src="/123456.jpg"
        alt="Profile Picture"
        width={50} // กำหนดความกว้าง
        height={50} // กำหนดความสูง
        className="w-20 mx-auto mb-10"
      />
      <h1 className="text-4xl font-bold">Puntakorn Maikampange</h1>
      <br></br>
      <p className="text-lg">Portfolio</p>
    </header>

    <main className="p-6">
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">About me</h2>
        <p>
          Hello, I m a developer with a passion for technology. and web application development to solve problems and create new value.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Educational Record</h2>
        <ul className="list-disc pl-6">
          <li>Bachelor,s Degree: Software Engineering, University of Phayao</li>
          <li>Secondary School: Poolcharoen Witthayakhom School</li>
        </ul>
      </section>

      <section className="mb-8 flex flex-row">
        <h2 className="text-2xl font-semibold mb-4">Experience</h2>
        <Image
        src="/vs.jpg"
        alt="Profile Picture"
        width={50} // กำหนดความกว้าง
        height={50} // กำหนดความสูง
        className="w-20 mx-auto mb-10"
      />
        <Image
        src="/node.png"
        alt="a"
        width={50} // กำหนดความกว้าง
        height={50} // กำหนดความสูง
        className="w-20 mx-auto mb-10"
      />
              <Image
        src="/nextjs.png"
        alt="s"
        width={50} // กำหนดความกว้าง
        height={50} // กำหนดความสูง
        className="w-20 mx-auto mb-10"
      />
        <Image
        src="/tailwind.png"
        alt="d"
        width={50} // กำหนดความกว้าง
        height={50} // กำหนดความสูง
        className="w-20 mx-auto mb-10"
      />
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Contact</h2>
        <p>Email 66022826</p>
        <p>Phone: 0811329758</p>
      </section>
    </main>
  </div>
  );
}

