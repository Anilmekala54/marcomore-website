import React from 'react'

function MoreFeaturedWork() {
    const MoreCards = [
        {
            title:"Marcamor",
            dec:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since.",
            link:"#"
        },
                {
            title:"Marcamor",
            dec:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since.",
            link:"#"
        },
                {
            title:"Marcamor",
            dec:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since.",
            link:"#"
        },
                {
            title:"Marcamor",
            dec:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since.",
            link:"#"
        },
                {
            title:"Marcamor",
            dec:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since.",
            link:"#"
        },
                {
            title:"Marcamor",
            dec:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since.",
            link:"#"
        },
                {
            title:"Marcamor",
            dec:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since.",
            link:"#"
        },
                {
            title:"Marcamor",
            dec:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since.",
            link:"#"
        },
    ]
  return (
     <section className="bg-[#fff9f6] py-12 lg:py-20 hidden">
      <div className="max-w-[1440px] mx-auto w-[90%] space-y-10 lg:space-y-20">
        <h1 className='lg:text-[44px] text-[34px] font-semibold'>More Featured Work</h1>
        <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 items-center gap-6'>
        {MoreCards.map((Item,index)=>(
<div className='flex flex-col gap-2'>
    <div className='bg-[#BABABA] w-full h-[272px] lg:h-[312px] rounded-[10px]' key={index}> </div>
    <h2 className='text-[30px] font-semibold'>{Item.title}</h2>
    <p className='text-[#00000080]'>{Item.dec}</p>
     <a
                  href={Item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className=" underline   font-semibold  "
                >
                  Live WebSite
                  
                </a>
</div>

        ))}

        </div>
      </div>
    </section>
  )
}

export default MoreFeaturedWork
