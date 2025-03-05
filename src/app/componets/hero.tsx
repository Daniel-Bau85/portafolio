import { LinkedinLogo } from '@phosphor-icons/react/dist/ssr'
import { GithubLogo } from '@phosphor-icons/react/dist/ssr'
import danImg from '../../../public/Adobe Express - file (1).png'

import Image from 'next/image'

export function Hero() {
    return (
        <section className="bg-gradient-to-r from-cyan-400 to-blue-900 text-white relative overflow-hidden">

            <div>
                <Image
                    src={danImg}
                    alt='Foto de daniel'
                    fill
                    sizes='100vw'
                    priority
                    className='object-cover opacity-60 lg:hidden'
                />
                <div className='absolute inset-0 bg-black opacity-40 md:hidden'></div>
            </div>

            <div className="container mx-auto pt-16 pb-16 md:pb-0 px-4 relative">
                <article className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <div className="space-y-6">
                        <h1
                            className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight"
                            data-aos="fade-down"
                        >
                            Full-Stack Web Developer
                        </h1>

                        <p className="text-2xl md:text-3xl lg:text-4xl font-semibold" data-aos="fade-right">
                            Ingeniero en software
                        </p>

                        <p className="text-lg md:text-xl lg:text-2xl leading-relaxed" data-aos="fade-right">
                            Hola, soy <span className="font-bold">Daniel Bautista Barrera</span>.<br />
                            Apasionado por el desarrollo Full Stack.<br />
                            Desarrollador de software desde México.
                        </p>
                        <div className="flex items-center gap-4" data-aos="fade-up" data-aos-delay="500">
                            <a
                                target='_blank'
                                href="https://www.linkedin.com/in/daniel-bautista-barrera-a6b773315/"
                                className="bg-blue-500 px-5 py-2 rounded-md font-semibold flex items-center justify-center w-fit gap-2"
                            >
                                <LinkedinLogo className='w-5 h-5' />
                            </a>

                            <a
                                target='_blank'
                                href="https://github.com/Daniel-Bau85"
                                className="bg-gray-800 px-5 py-2 rounded-md font-semibold flex items-center justify-center w-fit gap-2"
                            >
                                <GithubLogo className='w-5 h-5 text-white' />
                            </a>
                        </div>
                        <a>

                        </a>
                    </div>


                    <div className="hidden md:block h-full relative">
                        <Image
                            src={danImg}
                            alt="Foto do dog"
                            className="object-contain hover:scale-110 duration-300"
                            fill
                            sizes="(max-width: 600px) 0vw, 50vw"
                            quality={100}
                            priority
                        />
                    </div>


                </article>

            </div>


        </section>
    )
}