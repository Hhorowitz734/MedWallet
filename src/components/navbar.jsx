function Navbar(){
    return (
        <header class="border-b border-sky-500 py-2">
            <div class = 'flex items-center justify-between max-w-7xl mx-auto'>
                <h3 class="">Lrgo here</h3>
                <nav class="flex items-center w-auto">
                    <ul class="text-base px-5 py-2 font-semibold text-white flex justify-between">
                        <li><a class = "text-white hover:text-sky-500" href = '#'>Home</a></li>
                        <li><a class = "text-white hover:text-sky-500" href = '#'>Our Work</a></li>
                        <li><a class = "text-white hover:text-sky-500" href = '#'>Our Mission</a></li>
                        <li><a class = "text-white hover:text-sky-500" href = '#'>Contact Us</a></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}

export default Navbar;