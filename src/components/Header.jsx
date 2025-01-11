import React, { useState, useRef, useEffect } from "react";
import { MdOutlineMenuOpen } from "react-icons/md";
import { Avatar } from "@mui/material";
import Button from "@mui/material/Button";
import ClickAwayListener from "@mui/material/ClickAwayListener";
import Grow from "@mui/material/Grow";
import Paper from "@mui/material/Paper";
import Popper from "@mui/material/Popper";
import MenuItem from "@mui/material/MenuItem";
import MenuList from "@mui/material/MenuList";
import { CiLight } from "react-icons/ci";
import { GrLanguage } from "react-icons/gr";
import { IoCartOutline } from "react-icons/io5";
import { LiaFlagUsaSolid } from "react-icons/lia";
import { GiSouthAfricaFlag } from "react-icons/gi";
import { IoMdMenu } from "react-icons/io";

const Header = ({togglebar,toggle}) => {
  const [open, setOpen] = useState(false);
  const [language, setLanguage] = useState(false);
 
  const anchorRef = useRef(null);
  const anchorLang = useRef(null);

 

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }
    setOpen(false);
  };

  const handleLanguageToggle = () => {
    setLanguage((prev) => !prev);
  };

  const handleLanguageClose = (event) => {
    if (anchorLang.current && anchorLang.current.contains(event.target)) {
      return;
    }
    setLanguage(false);
  };

  const handleListKeyDown = (event) => {
    if (event.key === "Tab" || event.key === "Escape") {
      setOpen(false);
      setLanguage(false);
    }
  };

  const prevOpen = useRef(open);
  const prevLanguage = useRef(language);

  useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current.focus();
    }
    prevOpen.current = open;
  }, [open]);

  useEffect(() => {
    if (prevLanguage.current === true && language === false) {
      anchorLang.current.focus();
    }
    prevLanguage.current = language;
  }, [language]);

  return (
    <header className="bg-zinc-400 fixed top-0 z-50 w-full h-16 flex items-center px-4 lg:px-8">
      {/* Brand */}
      <div className="text-xl lg:text-3xl font-bold text-black">HOTASH</div>

      {/* Search Bar */}
      <div  className={`flex items-center text-black  cursor-pointer bg-sky-300 ml-4 lg:ml-8 rounded-md flex-grow max-w-md`}>
        <div onClick={togglebar} className="p-2 flex items-center justify-center">
         {toggle=== true ? <IoMdMenu  size={24} className="text-gray-700 " />: <MdOutlineMenuOpen size={24} className="text-gray-700 " />}
        </div>
        <input
          type="text"
          placeholder="Quick Finder"
          className="flex-grow px-4 py-2 text-sm lg:text-base rounded-md outline-none"
        />
      </div>

      {/* Right Section */}
      <div className="flex items-center justify-end gap-4 flex-grow">
        <nav className="hidden lg:flex gap-4 text-white text-sm lg:text-base">
          <CiLight size={25} color="black" className="cursor-pointer" />
          <div ref={anchorLang}>
            <GrLanguage
              size={25}
              color="black"
              className="cursor-pointer"
              onClick={handleLanguageToggle}
            />
            <Popper
              open={language}
              anchorEl={anchorLang.current}
              role={undefined}
              color="black"
              placement="bottom-start"
              transition
              disablePortal
            >
              {({ TransitionProps }) => (
                <Grow
                  {...TransitionProps}
                  style={{
                    transformOrigin: "left top",
                  }}
                >
                  <Paper>
                    <ClickAwayListener onClickAway={handleLanguageClose} >
                         
                      <MenuList
                        autoFocusItem={language}
                        id="language-menu"
                        onKeyDown={handleListKeyDown}
                      >
                        <MenuItem onClick={handleLanguageClose}> <LiaFlagUsaSolid color="red" size={15} className="mr-2" /> English</MenuItem>
                        <MenuItem onClick={handleLanguageClose}><GiSouthAfricaFlag  size={15} color="green" className="mr-2" /> French</MenuItem>
                      </MenuList>
                    </ClickAwayListener>
                  </Paper>
                </Grow>
              )}
            </Popper>
          </div>
          <IoCartOutline color="black" size={25} className="cursor-pointer" />
        </nav>

        {/* Profile and Dropdown */}
        <div className="flex items-center gap-4">
          <Button
            ref={anchorRef}
            onClick={handleToggle}
            className="text-white text-sm lg:text-base"
          >
            <Avatar alt="Dishant Sharma" className="text-black" src="/static/images/avatar/1.jpg" />
          </Button>
          <Popper
            open={open}
            anchorEl={anchorRef.current}
            role={undefined}
            placement="bottom-start"
            transition
            disablePortal
          >
            {({ TransitionProps }) => (
              <Grow
                {...TransitionProps}
                style={{
                  transformOrigin: "left top",
                }}
              >
                <Paper>
                  <ClickAwayListener onClickAway={handleClose}>
                    <MenuList
                      autoFocusItem={open}
                      id="profile-menu"
                      onKeyDown={handleListKeyDown}
                    >
                      <MenuItem onClick={handleClose}>Profile</MenuItem>
                      <MenuItem onClick={handleClose}>My Account</MenuItem>
                      <MenuItem onClick={handleClose}>Logout</MenuItem>
                    </MenuList>
                  </ClickAwayListener>
                </Paper>
              </Grow>
            )}
          </Popper>
          <div className="flex flex-col text-black text-xs lg:text-sm">
            <span className="font-semibold text-lg">Dishant Sharma</span>
            <span>@dishant2388</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
