function footer() {
    return `<footer class="bg-black text-white text-sm py-2 px-2 mt-4">
        <!-- upper div -->

        <div class="grid md:flex flex-row-reverse justify-between  p-6">
            <!-- language -->
            <div class="w-44  mb-4 ml-4">

                <div class="flex items-center border border-white w-36 h-10 cursor-pointe">

                    <img src="https://cdn3.iconfinder.com/data/icons/web-ui-3/128/Globe-2-512.png" alt="" class="ml-2 h-8">
                    <a href="#" class="mx-1.5 ">English</a>

                </div>


            </div>


            <!-- others -->



            <div class="grid md:flex md:w-2/3" style="column-gap: 15%;">

                <!-- 1st div -->

                <div class=" ml-4">
                    <a href="#" class="block my-2 hover:underline">Udemy Business</a>
                    <a href="#" class="block my-2 hover:underline">Teach on Udemy</a>
                    <a href="#" class="block my-2 hover:underline">Get the app</a>
                    <a href="#" class="block my-2 hover:underline">About us</a>
                    <a href="#" class="block my-2 hover:underline">Contact us</a>
                </div>

                <!-- 2nd div -->

                <div class=" ml-4">
                    <a href="#" class="block my-2 hover:underline">Careers</a>
                    <a href="#" class="block my-2 hover:underline">Blog</a>
                    <a href="#" class="block my-2 hover:underline">Help and Support</a>
                    <a href="#" class="block my-2 hover:underline">Affiliate</a>
                    <a href="#" class="block my-2 hover:underline">Investors</a>
                </div>

                <!-- 3nd div -->
                
                <div class=" ml-4">
                    <a href="#" class="block my-2 hover:underline">Terms</a>
                    <a href="#" class="block my-2 hover:underline">Privecy Policy</a>
                    <a href="#" class="block my-2 hover:underline">Sitemap</a>
                    <a href="#" class="block my-2 hover:underline">Accessibility statement</a>
                </div>
            </div>
        </div>
        <!-- lower div -->
        <div class="grid md:flex justify-between items-center text-sm mx-10 py-12">
            <div class="cursor-pointer">
                <img src="https://community.udemy.com/t5/image/serverpage/image-id/5267i07ADA4BE049629C1?v=v2" alt="" width="91" height="34">
            </div>
            <div class="mr-2 my-4">
                <h1>@ 2021 Udemy, Inc.</h1>
            </div>
        </div>
    </footer>`
}

export default footer;