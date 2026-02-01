import React from 'react'
import Image from "next/image";

export default function Token() {
  return (
    <div className='flex flex-col md:grid md:grid-cols-2'>
        <section className='mx-auto'>
            {/* img */}
            <Image 
                src='/HSKN_alien.png'
                alt='HSKN alien token'
                width={1107}
                height={1319}
                className="mb-4 object-fit w-[400] h-[477]"
              />
        </section>
        <section className='px-7 md:px-4 md:pr-24 mx-auto'>
            {/* about */}
            <h2 className='text-yellow-300 font-bold pb-7'>
                $HSKN token resides on the Cardano Blockchain. Pioneering MemePin - blending memes with Decentralized Physical Infrastructure (DePin).
            </h2>
            <div className='text-white'>
                <p className='pb-7'>
                    After Cardano's founder, Charles Hoskinson, went to Space-X, something strange happened! Upon return, a shadow-less doppleganger appeared. The Hoskilien.
                </p>
                <p className='pb-7'>
                    Hoskilien brought with him passive rewards to our community and holders via utilizng DePin streams such as World Mobile Nodes. Through our skill sets and partnerships, we are expanding the Cardano Ecosystem, one Node at a time.
                </p>
                <p className='pb-7'>
                    Real Hardware. Real Rewards. Serious memes!
                </p>
                <p className='pb-7'>
                    This is us.
                </p>
            </div>
        </section>
    </div>
  )
}
