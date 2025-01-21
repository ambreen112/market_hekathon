import Image from "next/image" 
import Link from "next/link"



 export default function Hero6(){

    return(
        <section className="w-full h-auto mt-10">
  {/* Main Header Section */}
  <div className="w-full flex justify-center">
    <div className="w-[691px] text-center">
      <h2 className="font-Montserrat font-bold text-sm text-blue-600">Practice Advice</h2>
      <h3 className="font-Montserrat font-bold text-[40px]">Featured Post</h3>
      <p className="font-Montserrat font-normal text-sm text-gray-500">
        Problems trying to solve the conflict between the two major realms of classical physics. Newton Mechanics
      </p>
    </div>
  </div>

  {/* Post Section with images and content */}
  <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6 px-4">
    {/* First Post */}
    <div className="w-full bg-white shadow-lg rounded-lg overflow-hidden">
      <Image src="/r1.png" alt="road" width={200} height={200} className="w-full h-[200px] object-cover" />
      <div className="px-6 py-4">
        <div className="flex space-x-4 text-xs text-gray-600">
          <h6 className="text-blue-600">Google</h6>
          <h6>Trending</h6>
          <h6>New</h6>
        </div>
        <h4 className="font-Montserrat font-normal text-[20px] mt-2 text-black">
          Loudest a la Madison #1<br></br> (L&apos;integral)
        </h4>
        <p className="font-Montserrat font-normal text-sm text-gray-600 mt-2">
  We focus on ergonomics and meeting<br/>
  <span>you where you work. It&apos;s only a</span>
  <br />
  keystroke away.
</p>
        <div className="flex justify-between mt-4 text-xs text-gray-500">
          <div className="flex items-center space-x-1">
            <Image src="/clock.png" alt="clock" width={16} height={16} />
            <p>22 April 2021</p>
          </div>
          <div className="flex items-center space-x-1">
            <Image src="/grass.png" alt="comments" width={16} height={16} />
            <p>10 Comments</p>
           </div>
</div>
            <div className="font-Montserrat text-gray-600 font-bold text-sm mt-2 flex gap-4">
              <Link href="#"> Learn More</Link>
              <Image className="flex" src={"/icon1.png"} alt="icon" width={9} height={16}/>
            </div>
          
        
      </div>
    </div>

    {/* Second Post */}
    <div className="w-full bg-white shadow-lg rounded-lg overflow-hidden">
      <Image src="/r2.png" alt="road" width={200} height={200} className="w-full h-[200px] object-cover" />
      <div className="px-6 py-4">
        <div className="flex space-x-4 text-xs text-gray-600">
          <h6 className="text-blue-600">Google</h6>
          <h6>Trending</h6>
          <h6>New</h6>
        </div>
        <h4 className="font-Montserrat font-normal text-[20px] mt-2 text-black">
          Loudest a la Madison #1 <br></br>(L&apos;integral)
        </h4>
        <p className="font-Montserrat font-normal text-sm text-gray-600 mt-2">
  We focus on ergonomics and meeting<br/>
  <span>you where you work. It&apos;s only a</span>
  <br />
  keystroke away.
</p>
        <div className="flex justify-between mt-4 text-xs text-gray-500">
          <div className="flex items-center space-x-1">
            <Image src="/clock.png" alt="clock" width={16} height={16} />
            <p>22 April 2021</p>
          </div>
          <div className="flex items-center space-x-1">
            <Image src="/grass.png" alt="comments" width={16} height={16} />
            <p>10 Comments</p>
          </div>
        </div>
        <div className="font-Montserrat text-gray-600 font-bold text-sm mt-2 flex gap-4">
              <Link href="#"> Learn More</Link>
              <Image className="flex" src={"/icon1.png"} alt="icon" width={9} height={16}/>
            </div>
      </div>
    </div>

    {/* Third Post */}
    <div className="w-full bg-white shadow-lg rounded-md overflow-hidden">
      <Image src="/r3.png" alt="road" width={200} height={200} className="w-full h-[200px] object-cover" />
      <div className="px-6 py-4">
        <div className="flex space-x-4 text-xs text-gray-600">
          <h6 className="text-blue-600">Google</h6>
          <h6>Trending</h6>
          <h6>New</h6>
        </div>
        <h4 className="font-Montserrat font-normal text-[20px] mt-2 text-black">
          Loudest a la Madison #1<br></br> (L&apos;integral)
        </h4>
        <p className="font-Montserrat font-normal text-sm text-gray-600 mt-2">
  We focus on ergonomics and meeting<br/>
  <span>you where you work. It&apos;s only a</span>
  <br />
  keystroke away.
</p>
        
        <div className="flex justify-between mt-4 text-xs text-gray-500">
          <div className="flex items-center space-x-1">
            <Image src="/clock.png" alt="clock" width={16} height={16} />
            <p>22 April 2021</p>
          </div>
          <div className="flex items-center space-x-1">
            <Image src="/grass.png" alt="comments" width={16} height={16} />
            <p>10 Comments</p>
          </div>
        </div>
        <div className="font-Montserrat text-gray-600 font-bold text-sm mt-2 flex gap-4">
              <Link href="#"> Learn More</Link>
              <Image className="flex" src={"/icon1.png"} alt="icon" width={9} height={16}/>
            </div>
      </div>
    </div>
  </div>
</section>

    )
}