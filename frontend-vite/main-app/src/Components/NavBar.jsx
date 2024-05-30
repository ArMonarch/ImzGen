function NavBar(){
    return(
    <>
        <div className="flex flex-row sticky top-0 justify-between items-center px-3 py-1  bg-[#16161e]/70 backdrop-blur-sm">        
            <div className="absolute text-4xl left-1/2 -translate-x-1/2">ImzGen</div>
        
            <div className="">Side-Bar</div>
            
            <div className="text-5xl rounded-full px-2 bg-[#414868]">P</div>
      </div>
    </>);
}

export default NavBar;