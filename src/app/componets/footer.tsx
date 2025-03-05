
import java from '../../../public/Java-logo.png'
import js from '../../../public/js.png'
import git from '../../../public/Git_icon.svg.png'
import node from '../../../public/node.png'
import post from '../../../public/post.png'
import next from '../../../public/next.png'
import Image from 'next/image'

const brands = [
    { name: "Java", logo: java },
    { name: "js", logo: js },
    { name: "node", logo: node },
    { name: "next", logo: next },
    { name: "git", logo: git },
    { name: "post", logo: post },
]

export function Footer() {
    return (
        <section className="bg-[#ffffff] py-16 text-black">
            <div className='container mx-auto px-4'>

                <div className="border-b border-white/20 pb-8 flex justify-center">
                    <h4 className="text-4xl font-bold mb-8 text-black tracking-wide uppercase px-6 py-3 border-4 border-black rounded-xl shadow-lg transition-all duration-500 hover:bg-black hover:text-white">
                        Skills
                    </h4>

                </div>
                <div className="grid grid-cols-2 lg:grid-cols-6 gap-8">
  {brands.map((item, index) => (
    <div 
      key={index} 
      className="bg-white p-4 rounded-lg flex items-center justify-center border border-black transition-all duration-300 hover:rotate-6 hover:scale-110"
    >
      <Image
        src={item.logo}
        alt={item.name}
        width={40}
        height={20}
        quality={100}
        className="object-contain"
      />
    </div>
  ))}
</div>




            </div>
        </section>
    )
}