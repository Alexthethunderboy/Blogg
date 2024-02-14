import Image from 'next/image'
import image from "@/assets/Frame 13.png";
import { IoMdEye } from "react-icons/io";

// import eye from "@/assets/Vector (1).png";
import Recommended from '@/components/Recommended/Recommended'


export default async function Blog() {
  return (
    <div className='xl:m-[5rem] px-[1rem] xl:w- m-auto'>
      <div>
        <h1 className='text-[48px]'>The importance of self defense: In teenagers</h1>

        <div className='flex xl:gap-[3rem] gap-2 xl:pb-[4rem] pb-[2rem] pt-[2rem]'>

          <div>
            <button className='border bg-[#26BDD2] text-white xl:px-[2rem] py-[.2rem] px-[.04rem] xl:p-1  rounded-md'>Self defense</button>
          </div>

          <div className='xl:flex flex gap-1 xl:gap-2 pt-1'>
            <div className='pt-1'>
              <IoMdEye/>
            </div>
              <p className=''>views</p>
          </div>


          <div className='flex gap-2 relative pt-1'>
            <div className='absolute xl:left-[-.8rem] left-[-.4rem] top-[-.2rem]'>
              <button className='rounded border border-[#26BDD2] px-[2px] py-0.5 bg-[#26BDD2]'></button>
            </div>
            <p className=''>4 mins read</p>
          </div>
          <h1 className='pt-1'>9/09/2023</h1>

        </div>
      <div>
        <div className='xl:flex gap-10'>
            <Image src={image} alt="" className='basis-1/2'/>
            <p className=' basis-1/2'>
              Lorem ipsum dolor sit amet consectetur. Enim justo rhoncus vulputate enim amet. Egestas fermentum pulvinar interdum pharetra facilisis tincidunt ultricies. A tincidunt laoreet imperdiet ac fermentum. Volutpat eget dictum nunc sit vestibulum pretium in. Integer facilisis tortor diam vulputate et pretium luctus. In tortor consequat metus ultricies quis. Molestie mi elit nunc tincidunt at facilisi. Nibh leo lobortis sit quisque cras metus sed ipsum laoreet. Sagittis enim aliquet rhoncus vel sed et suspendisse elementum. Neque accumsan eleifend id nibh turpis pellentesque quisque natoque. Tortor enim non suspendisse lectus scelerisque orci arcu massa. Pretium sit tincidunt vitae massa tristique. Aliquam nunc auctor nulla duis at facilisis. Pharetra et lorem enim dignissim.
              Consectetur diam sed aliquam duis tortor ipsum. Tempor ultrices viverra auctor aliquam placerat sit. Nunc amet dui in nibh. Diam leo duis feugiat ullamcorper. Lorem quam dictum nisi tincidunt. Platea a pellentesque platea fames bibendum eget ac quis. Volutpat a nunc sed elementum sed lacus. At est senectus lectus semper viverra. Pulvinar pellentesque amet urna rhoncus eget. Nec scelerisque imperdiet at orci. Et etiam erat a quis gravida vestibulum blandit. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusantium nihil ad alias corrupti, id quos amet delectus molestiae natus harum sunt deleniti voluptatibus doloremque! Blanditiis accusamus odit voluptate qui laboriosam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis incidunt repellendus molestiae? Ratione adipisci dolor cum repellat magnam illo dolore ex eius atque, accusantium provident nesciunt dicta a iste quisquam? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure, quasi? Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro aliquam neque voluptatum facere id quis autem voluptatibus aspernatur fugit. Illum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem delectus quos corrupti sapiente? Illum quis harum voluptatem veritatis provident. Eum voluptas dignissimos voluptate molestiae assumenda sequi nobis officia laudantium quibusdam a neque, porro recusandae magni nemo ipsum dolor corrupti similique tempora. Accusantium saepe itaque iste amet labore asperiores, officia cupiditate! Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, dolores.
            </p>
        </div>
      </div>
        <p className='pt-4 xl:w-[px]'>
          Lorem ipsum dolor sit amet consectetur. Mi adipiscing facilisis elementum amet. Suspendisse sit quis morbi justo maecenas tellus. Auctor risus orci proin tincidunt duis lacus. Senectus vitae in mauris phasellus at quam. Orci massa elit in elit. Consequat commodo sed blandit lorem dapibus.
          Id arcu commodo non facilisis leo blandit. Aliquet nibh sed semper gravida posuere viverra potenti. Quam a sit hendrerit et donec diam nulla nunc metus. Quis neque quam risus tincidunt. Volutpat venenatis blandit tortor aliquam enim mauris facilisi massa. Mauris elit placerat consequat posuere convallis. Leo eu egestas non egestas facilisis. Dui curabitur massa sed enim a purus laoreet sed at. Porta magna egestas magna malesuada ultrices. Arcu ornare volutpat morbi ut. Iaculis sagittis eget consequat turpis tellus tellus dolor morbi facilisis. Pulvinar quam mollis viverra dis magna purus.
          Morbi quisque metus eget iaculis eu placerat. Consectetur tristique in viverra velit malesuada nunc neque elementum. Commodo semper enim volutpat lorem habitasse libero. Pellentesque quam mi sodales dolor et at est. Ultrices imperdiet non lorem lorem consectetur imperdiet volutpat netus sem. Sit arcu tempus leo non elit elit purus. Enim aliquet vel semper vulputate nunc dui sapien lectus.
        </p>
      </div>
      <Recommended/>
    </div>
  )
}