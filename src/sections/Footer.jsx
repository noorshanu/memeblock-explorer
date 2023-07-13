import React from 'react'
import {FaTwitter,FaTelegramPlane,FaInstagram,FaGithub} from 'react-icons/fa'
import {BsArrowUpSquare,BsFillHeartFill} from 'react-icons/bs'

function Footer() {
  return (
    <>
    <footer id="masterFooter" class="bg-[#f8f9fa] mt-auto d-print-none">
<div class=" mx-auto max-w-7xl">
<div class="flex justify-between align-items-baseline py-6">

<div class="flex gap-2">
<a class=" bg-gray-400 text-black flex justify-center items-center rounded-full" style={{width:'2rem',height:'2rem'}} href="https://twitter.com/etherscan" rel="noreferrer" target="_blank" data-bs-toggle="tooltip" data-bs-trigger="hover" data-bs-placement="top" aria-label="Twitter">
<FaTwitter/>
</a>
<a class="bg-gray-400 text-black flex justify-center items-center rounded-full" style={{width:'2rem',height:'2rem'}} href="https://medium.com/etherscan-blog" rel="noreferrer" target="_blank" data-bs-toggle="tooltip" data-bs-trigger="hover" data-bs-placement="top" aria-label="Medium">
<FaTelegramPlane/>
</a>
<a class="bg-gray-400 text-black flex justify-center items-center rounded-full" style={{width:'2rem',height:'2rem'}} href="https://www.facebook.com/etherscan/" rel="noreferrer" target="_blank" data-bs-toggle="tooltip" data-bs-trigger="hover" data-bs-placement="top" aria-label="Facebook">
<FaInstagram/>
</a>
<a class="bg-gray-400 text-black flex justify-center items-center rounded-full" style={{width:'2rem',height:'2rem'}} href="https://www.reddit.com/r/etherscan/" rel="noreferrer" target="_blank" data-bs-toggle="tooltip" data-bs-trigger="hover" data-bs-placement="top" aria-label="Reddit">
<FaGithub/>
</a>
</div>

<a class="text-black font-semibold flex gap-1 items-center" href="#home">
<BsArrowUpSquare/> Back to Top
</a>
</div>
<hr class="my-0"/>

<div class="flex footer-grid justify-between py-8 ">
<div class="col-lg-4 pe-xl-16 mb-4 sm:mb-0">
<div class="flex items-center mb-3">
<img class="me-2 h-[60px]"  data-img-theme="light" src="images/logo.png" alt="Ethereum Logo"/>

</div>
<p class=" text-sm">MEMEBLOCK is a Block Explorer and Analytics Platform<br/> for Ethereum, a decentralized smart contracts platform.</p>
<div class="hidden sm:block -mt-4 -mb-6 ">
<img  width="280"  src="/images/map.png" alt="Background Map"/>

</div>
</div>
<div class="col-6 col-md-4 col-lg mb-10 mb-md-0">
<h4 class="font-[700] text-base mb-3">Company</h4>

<ul class="list-unstyled list-sm-space text-sm text-black mb-0">
<li><a class="text-sm text-black text-black" href="/aboutus">About Us</a></li>
<li><a class="text-sm text-black text-black" href="/brandassets">Brand Assets</a></li>
<li><a class="text-sm text-black text-black" href="/contactus">Contact Us</a></li>
<li>
<a class="text-sm text-black text-black" href="/careers">
<span class="me-1">Careers</span> 
</a>
</li>
<li><a class="text-sm text-black text-black" href="/terms">Terms of Service</a></li>
<li><a class="text-sm text-black text-black" href="/bugbounty">Bug Bounty</a></li>
</ul>

</div>
<div class="col-6 col-md-4 col-lg mb-10 mb-md-0">
<h4 class="font-[700] text-base mb-3">Community</h4>

<ul class="list-unstyled list-sm-space fs-sm mb-0">
<li><a class="text-sm text-black" href="https://docs.etherscan.io/" target="_blank">API Documentation</a></li><a class="text-sm text-black" href="https://docs.etherscan.io/" target="_blank">
</a><li><a class="text-sm text-black" href="https://docs.etherscan.io/" target="_blank"></a><a class="text-sm text-black" href="https://info.etherscan.com/">Knowledge Base</a></li>
<li><a class="text-sm text-black" href="https://etherscan.freshstatus.io/" rel="nofollow noopener" target="_blank">Network Status</a></li>
<li><a class="text-sm text-black" href="https://info.etherscan.com/etherscan-newsletters/">Newsletters</a></li>
<li><a class="text-sm text-black" href="/comments">Disqus Comments</a></li>
</ul>

</div>
<div class="col-6 col-md-4 col-lg">
<h4 class="h6 font-[700] text-base mb-3">Products &amp; Services</h4>

<ul class="list-unstyled list-sm-space fs-sm mb-0">
<li><a class="text-sm text-black" href="/contactusadvertise">Advertise</a></li>
<li><a class="text-sm text-black" href="/eaas">Explorer-as-a-Service (EaaS)</a></li>
<li><a class="text-sm text-black" href="/apis">API Plans</a></li>
<li><a class="text-sm text-black" href="/prioritysupport">Priority Support</a></li>

<li><a class="text-sm text-black" href="https://chat.blockscan.com/start" target="_blank">Blockscan Chat </a></li>
</ul>

</div>
</div>


<div class="border-top py-4">
<div class="flex justify-between items-center fs-sm">
<div class="col-md mb-2 mb-md-0">
<p class="mb-0">Memeblock © 2023 (F1)</p>
</div>
<div class="col-md text-md-end">
<p class="mb-0 flex items-center">
Donations: <a class="me-1" href="/address/0x71c7656ec7ab88b098defb751b7401b5f6d8976f"><span id="spanDonateAddress" runat="server">0x71c765...d8976f</span></a><BsFillHeartFill className='text-[#cc2127]'/>
</p>
</div>
</div>
</div>

</div>
</footer>
    </>
  )
}

export default Footer