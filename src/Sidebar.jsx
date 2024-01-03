import React from "react";
import {
  BsGrid1X2Fill,
  BsFillArchiveFill,
  BsFillGrid3X3GapFill,
  BsPeopleFill,
  BsListCheck,
  BsMenuButtonWideFill,
  BsFillGearFill,
} from "react-icons/bs";

function Sidebar({ openSidebarToggle, OpenSidebar }) {
  return (
    <aside
      id="sidebar"
      className={openSidebarToggle ? "sidebar-responsive" : ""}
    >
      <div className="sidebar-title">
        <div className="sidebar-brand">Haberler</div>
        <span className="icon close_icon" onClick={OpenSidebar}>
          X
        </span>
      </div>

      <ul className="sidebar-list">
        <li className="sidebar-list-item">
          <a href="">
            <BsGrid1X2Fill className="icon" /> Panel
          </a>
        </li>
        <li className="sidebar-list-item">
          <a href="">
            <BsFillArchiveFill className="icon" /> Haberler
          </a>
        </li>
        <li className="sidebar-list-item">
          <a href="">
            <BsFillGrid3X3GapFill className="icon" /> Kategoriler
          </a>
        </li>
        <li className="sidebar-list-item">
          <a href="">
            <BsPeopleFill className="icon" /> Kullanıcılar
          </a>
        </li>
        <li className="sidebar-list-item">
          <a href="">
            <BsListCheck className="icon" /> Arşiv
          </a>
        </li>
        <li className="sidebar-list-item">
          <a href="">
            <BsMenuButtonWideFill className="icon" /> Şikayetler
          </a>
        </li>
        <li className="sidebar-list-item">
          <a href="">
            <BsFillGearFill className="icon" /> Ayarlar
          </a>
        </li>
      </ul>
    </aside>
  );
}

export default Sidebar;
