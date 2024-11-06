import Image from 'next/image';

export default function Team() {
  return (
    <section className="w-full py-12 md:py-12 lg:py-24">
      <div className="container mx-auto px-4 md:px-6">
      <div className="flex items-center justify-center mb-12">
          <div className="border-t border-gray-300 flex-grow mx-4"></div>
          <h2 className="text-3xl font-bold tracking-tight sm:text-5xl text-center text-gray-800 shadow-md 
            px-6 py-2 bg-gradient-to-r from-gray-100 to-gray-50 rounded-lg">
            Meet Our Team
          </h2>
          <div className="border-t border-gray-300 flex-grow mx-4"></div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
          {[
            { name: "Tariq Shah", role: "CEO", src: "/team/member1.jpeg" },
            { name: "Talha", role: "CEO", src: "/team/member2.jpeg" },
          ].map((member) => (
            <div
              key={member.name}
              className="rounded-lg shadow-lg overflow-hidden transition-transform 
              hover:scale-105 transform"
            >
              {/* Team Member Image */}
              <div className="relative h-60 overflow-hidden">
                <img
                  alt={`${member.name}'s profile picture`}
                  className="object-cover w-full h-full"
                  src={member.src}
                />
              </div>

              {/* Team Member Info */}
              <div className="p-6 text-center">
                <h3 className="text-xl font-semibold text-gray-800">{member.name}</h3>
                {/* <p className="text-sm text-gray-500 mt-1">{member.role}</p>
                <p className="text-gray-600 mb-4 text-sm">
                  Dedicated leader with extensive experience in the industry, focused on
                   delivering quality and driving innovation.
                </p> */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
