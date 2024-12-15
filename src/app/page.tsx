import { ArrowRight, Check, Star, StarIcon } from "lucide-react";
import Image from "next/image";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import Skittle from "@/components/Skittle";
import { Icons } from "@/components/Icons";
import { Reviews } from '@/components/Reviews'
import { Stardos_Stencil } from "next/font/google";
import Link from "next/link";
import { buttonVariants } from '@/components/ui/button'
export default function Home() {
  return (
    <div className="bg-white-50">
      <section>
        <MaxWidthWrapper className="pb-24 pt-10 lg:grid lg:grid-cols-3 sm:pb-32 lg:gap-x-0 xl:gap-x-8 lg:pt-24 xl:pt-32 lg:pb-52">
          <div className='col-span-2 px-6 lg:px-0 lg:pt-4'>

            <div className='relative mx-auto text-center lg:text-left
        flex  flex-col items-center lg:items-start'>

              <div className='absolute w-28 left-0 -top-20 hidden lg:block'>
                <img
                  src="Screenshot_2024-05-31_at_5.44.12_PM-removebg-preview-2.png"
                  className='w-full' />

              </div>
              <h1 className='relative w-fit tracking-tight text-balance mt-16
          font-bold !leading-tight text-gray-900 text-5xl
         md:text-6xl lg:text-7xl'>
                Get Your
                <span className='bg-red-600 px-2 text-white'>
                  Freeze-Dried Bliss
                </span>
              </h1>
              <p className='mt-8 text-lg lg:pr-10 max-w-prose text-center
  lg:text-left text-balance md:text-wrap'>
                Pick out your very own freeze-dried candy with SubZero Sweets.
                We're not just preserving flavors; we're
                <span className='font-semibold'>
                  cherishing
                </span>
                your memories,
                one sweet bite at a time.
              </p>

              <ul className='mt-8 space-y-2 text-left font-medium flex flex-col items-center sm:items-start'>
                <div className='space-y-2'>
                  <li className='flex gap-1.5 items-center text-left'>
                    <Check className='h-5 w-5 shrink-0 text-green-600' />
                    Nutrititous, Preserves-Taste
                  </li>
                  <li className='flex gap-1.5 items-center text-left'>
                    <Check className='h-5 w-5 shrink-0 text-green-600' />
                    Long-Lasting, High-Quality
                  </li>
                  <li className='flex gap-1.5 items-center text-left'>
                    <Check className='h-5 w-5 shrink-0 text-green-600' />
                    Versatile and Hydrating
                  </li>
                </div>
              </ul>

              <div className='mt-12 flex flex-col sm:flex-row 
 items-center sm:items-start gap-5'>
                <div className='flex -space-x-4'>

                  <img
                    className='inline-block h-10 w-10 rounded-full
  ring-2 ring-slate-100' src='/users/user-1.png'
                    alt='user image'
                  />
                  <img
                    className='inline-block h-10 w-10 rounded-full
  ring-2 ring-slate-100' src='/users/user-2.png'
                    alt='user image'
                  />
                  <img
                    className='inline-block h-10 w-10 rounded-full
  ring-2 ring-slate-100' src='/users/user-3.png'
                    alt='user image'
                  />
                  <img
                    className='inline-block h-10 w-10 rounded-full
  ring-2 ring-slate-100' src='/users/user-4.jpg'
                    alt='user image'
                  />
                  <img
                    className='inline-block object-cover h-10 w-10 rounded-full
  ring-2 ring-slate-100' src='/users/user-5.jpg'
                    alt='user image'
                  />

                </div>

                <div className='flex flex-col justify-between items-center
 sm:items-start'>

                  <div className='flex gap-0.5'>
                    <StarIcon className='h-4 w-4 text-red-600 fill-red-600' />
                    <StarIcon className='h-4 w-4 text-red-600 fill-red-600' />
                    <StarIcon className='h-4 w-4 text-red-600 fill-red-600' />
                    <StarIcon className='h-4 w-4 text-red-600 fill-red-600' />
                    <StarIcon className='h-4 w-4 text-red-600 fill-red-600' />
                  </div>

                  <p>
                    <span
                      className='font-semibold'>
                      1,250{' '}
                    </span>
                    happy customers
                  </p>
                </div>
              </div>
            </div>
          </div>


          <div className='col-span-full lg:col-span-1 w-full 
flex justify-center px-8 sm:px-16 md:px-0 mt-32 
lg:mx-0 lg:mt-20 h-fit'>
            <div className='relative md:mac-w-xl'>
              <img
                className='absolute w-40 
       lg:w-52 left-56 -top-20 select-none hidden sm:block
       lg:hidden xl:block' src="/phone-thingy-design/whatyb.png" />

              <img
                src="/phone-thingy-design/line.png" className='absolute w-20 -left-6
       -bottom-6 select-none'/>

              <Skittle className='w-64' imgSrc='/phone-thingy-design/fd-candy.png' />
            </div>
          </div>
        </MaxWidthWrapper >
      </section >

      {/* value proposition section */}
      <section className='bg-slate-100 py-24'>
        <MaxWidthWrapper className='flex flex-col items-center gap-16
  sm:gap-32'>
          <div className='flex flex-col lg:flex-row items-center 
gap-4 sm:gap-6'>
            <h2 className='order-1 mt-2 tracking-tight text-center
            text-balance!leading-tight font-bold text-5x1 md:text-6x1
            text-gray-900'>What our<span className='relative px-2'>customers <Icons.underline className='hidden sm:block 
            pointer-events-none
             absolute inset-x-0 -bottom-6 text-red-500'/>
              </span>{' '}
              say
            </h2>
            <img
              src='/reviews/ReviewSkittle.png' className='w-49 order-0 lg:order-2' />
          </div>

          <div className='mx-auto grid max-w-2x1 grid-cols-1 px-4 lg/;mx-0
          lg:max-w-none lg:grid-cols-2 gap-y-16'>
            <div className='flex flex-auto flex-col gap-4 lg:pr-8 xl:pr-20'>
              <div className='flex gap-0.5 mb-2'>
                <StarIcon className='h-5 w-5 text-red-600 fill-red-600' />
                <StarIcon className='h-5 w-5 text-red-600 fill-red-600' />
                <StarIcon className='h-5 w-5 text-red-600 fill-red-600' />
                <StarIcon className='h-5 w-5 text-red-600 fill-red-600' />
                <StarIcon className='h-5 w-5 text-red-600 fill-red-600' />
              </div>
              <div className='text-lg leading-8'>
                <p>
                  "SubZero Sweetz is a delight!
                  I ordered a variety pack and
                  <span className='p-0.5 bg-slate-800 text-white'>
                    was blown away by the delicious flavors and perfect
                    crunch of their freeze- ed candies.{' '}
                  </span>
                  The packaging was secure, and delivery was quick.
                  If you're craving a unique treat that delivers on flavor and quality, SubZero Sweetz is the way to go!"
                </p>
              </div>
              <div className='flex gap-4 mt-2'>
                <img
                  className='rounded-full h-12 w-12 object-cover'
                  src='/users/user-1.png'
                  alt='user'
                />
                <div className='flex flex-col'>
                  <p className='font-semibold'> Jonathan</p>
                  <div className='flex gap-1.5 items-center 
              text-zinc-600'>
                    <Check className='h-4 w04 stroke-[3px]
              text-green-600' />
                    <p className='text-sm'>Verified Purchase</p>
                  </div>
                </div>
              </div>
            </div>
            {/*second user review */}
            <div className='flex flex-auto flex-col gap-4 lg:pr-8
            xl:pr-20'><div className='flex gap-0.5 mb-2'>
                <StarIcon className='h-5 w-5 text-red-600 fill-red-600' />
                <StarIcon className='h-5 w-5 text-red-600 fill-red-600' />
                <StarIcon className='h-5 w-5 text-red-600 fill-red-600' />
                <StarIcon className='h-5 w-5 text-red-600 fill-red-600' />
                <StarIcon className='h-5 w-5 text-red-600 fill-red-600' />
              </div>
              <div className='text-lg leading-8'>
                <p>
                  "SubZero Sweetz offers addictive freeze-dried candies with bursting flavors and a satisfying crunch.
                  Their diverse variety caters to both traditional and adventurous tastes.{' '}
                  <span className='p-0.5 bg-slate-800 text-white'>
                    Ordering online was seamless, and my candies arrived promptly and beautifully packaged.
                  </span>
                  Whether treating yourself or surprising someone special, SubZero Sweetz delivers an impressive experience."
                </p>
              </div>
              <div className='flex gap-4 mt-2'>
                <img
                  className='rounded-full h-12 w-12 object-cover'
                  src='/users/user-4.jpg'
                  alt='user'
                />
                <div className='flex flex-col'>
                  <p className='font-semibold'> Zach</p>
                  <div className='flex gap-1.5 items-center 
              text-zinc-600'>
                    <Check className='h-4 w04 stroke-[3px]
              text-green-600' />
                    <p className='text-sm'>Verified Purchase</p>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </MaxWidthWrapper>

        <div className='pt-16'>
          <Reviews />
        </div>
      </section>

      <section>
        <MaxWidthWrapper className='py-24'>
          <div className='mb-12 px-6 lg:px-8'>
            <div className='mx-auto max-w-2x1 sm:text-center'>
              <h2 className='order-1 mt-2 tracking-tight text-center
            text-balance!leading-tight font-bold text-5x1 md:text-6x1
            text-gray-900'>
                Order your candy now and get{' '}
                <span className='relative px-2 bg-red-600 text-white'>your own freeze-dried treats

                </span>{' '}

              </h2>
            </div>
          </div>

          <div className='mx-auto max-w-6x1 px-6 lg:px-8'>
            <div className='relative flex flex-col items-center md:grid
            grid-cols-2 gap-40'>
              <img
                src='/arrow/arrow.png' className='absolute top-[25rem] md:top-1/2
              -translate-y-1/2 z-10 left-1/2 -translate-x-1/2 rotate-90 md:rotate-0'
              />
              <div className='relative h-80 md:h-full w-full md:justify-self-end
              max-w-sm rounded-xl bg-gray-900/5 
              ring-inset ring-gray-900/10 lg:rounded-2x1 flex gap-40'>
                <img
                  src='/yummy/yum1.jpg' className='rounded-md object-cover bg-white
                shadow-2xl ring-1 ring-gray-900/10 h-full w-full'/>

                <img
                  src='/yummy/yum2.jpg' className='rounded-md object-cover bg-white
                shadow-2xl ring-1 ring-gray-900/10 w-60'/>
              </div>
            </div>
          </div>

          <ul className='mx-auto mt-12 max-w-prose sm:text-lg
          space-y-2 w-fit'>
            <li className='w-fit'>
              <Check className='h-5 w-5 text-green-600 inline mr-1.5' />
              No additives
            </li>

            <li className='w-fit'>
              <Check className='h-5 w-5 text-green-600 inline mr-1.5' />
              Lightweight, Portable
            </li>

            <li className='w-fit'>
              <Check className='h-5 w-5 text-green-600 inline mr-1.5' />
              Great gift option
            </li>

            <li className='w-fit'>
              <Check className='h-5 w-5 text-green-600 inline mr-1.5' />
              Allergy friendly options
            </li>
            <div className='flex justify-center'>
              <Link className={buttonVariants({
                size: 'lg',
                className: "mx-auto mt-8"
              })} href='/configure/upload'>
              Buy Now<ArrowRight className='h-4 w-4 ml-1.5'/>
              </Link>
            </div>
          </ul>
        </MaxWidthWrapper>
      </section>
    </div>

  )
}
